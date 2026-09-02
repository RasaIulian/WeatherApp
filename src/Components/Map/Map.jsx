import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { FullscreenControl } from "mapbox-gl";
import useFetchMapData from "../../hooks/getMapData/useFetchMapData";
import { Select } from "../../Pages/Homepage.style";
import {
  MapContainer,
  MapControlsContainer,
  ControlRow,
  ForecastTime,
  PlaybackControls,
  PlayButton,
  SpeedContainer,
  SpeedInput,
  SpeedLabel,
} from "./Map.style";
mapboxgl.accessToken = process.env.REACT_APP_Map_API_KEY;

export const WeatherMap = ({ latitude, longitude }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const userManualZoomRef = useRef(false); // Track manual zoom
  const [mapLoaded, setMapLoaded] = useState(false);
  const [layerOpacity, setLayerOpacity] = useState(1);
  const [selectedMapType, setSelectedMapType] = useState("precipitation"); // Default
  const [mapStyle, setMapStyle] = useState(
    "mapbox://styles/mapbox/satellite-streets-v12",
    //su Options:
    // mapbox://styles/mapbox/streets-v12: A standard street map style.
    // mapbox://styles/mapbox/light-v11: A light-colored map style.
    // mapbox://styles/mapbox/dark-v11: A dark-colored map style.
    // mapbox://styles/mapbox/outdoors-v12: A map style designed for outdoor activities.
    // mapbox://styles/mapbox/satellite-streets-v12: A map style designed for satellite imagery with streets.
  );
  const [mapZoom, setMapZoom] = useState(5);
  const [animationPlaying, setAnimationPlaying] = useState(true);

  const [animationSpeed, setAnimationSpeed] = useState(1);

  // Precipitation animates with real RainViewer frames. Clouds/temperature/
  // wind/pressure animate cosmetically (see useFetchMapData.js header comment
  // for why — OWM's free tile endpoint doesn't support real timestamped
  // frames). Both cases populate forecastTimes, so the timeline + playback
  // UI shows for any selected layer type except "none".
  const isAnimatedLayer = selectedMapType !== "none";

  // Use the custom hook
  const { forecastTimes, currentStep } = useFetchMapData(
    latitude,
    longitude,
    mapRef,
    mapLoaded,
    layerOpacity,
    selectedMapType,
    animationPlaying,
    animationSpeed,
  );

  // Clean up function to handle map and interval cleanup
  const cleanUp = () => {
    // Remove map if it exists
    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
      setMapLoaded(false);
    }
  };

  useEffect(() => {
    // Clean up previous map and interval if coordinates change
    cleanUp();

    if (!latitude || !longitude || !mapContainerRef.current) return;

    // Initialize Mapbox
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: mapStyle, // Use the mapStyle state variable
      center: [longitude, latitude],
      zoom: mapZoom,
      minZoom: 1,
      maxZoom: 20,
    });
    // Add fullscreen control
    mapRef.current.addControl(new FullscreenControl());

    mapRef.current.on("load", () => {
      setMapLoaded(true);
      //  location marker
      new mapboxgl.Marker({ color: "#FF0000" })
        .setLngLat([longitude, latitude])
        .addTo(mapRef.current);
    });

    // Track manual zoom changes
    mapRef.current.on("zoom", () => {
      userManualZoomRef.current = true;
    });

    // Return cleanup function
    return cleanUp;
  }, [latitude, longitude, mapStyle]);

  const formatForecastTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    };
    return date.toLocaleString("en-GB", options).replace(",", "");
  };

  const handleMapTypeChange = (e) => {
    const selectedType = e.target.value;
    setSelectedMapType(selectedType);

    // Reset the manual zoom flag for the next radar selection
    userManualZoomRef.current = false;
  };

  const handlePlayPauseClick = () => {
    setAnimationPlaying(!animationPlaying);
  };

  const handleSpeedChange = (e) => {
    const speed = parseFloat(e.target.value);
    setAnimationSpeed(speed);
  };

  return (
    <div>
      <MapContainer ref={mapContainerRef} />
      {mapLoaded && (
        <>
          <MapControlsContainer>
            {isAnimatedLayer && (
              <ForecastTime $isVisible>
                {forecastTimes.length > 0 && currentStep < forecastTimes.length
                  ? formatForecastTime(forecastTimes[currentStep])
                  : "Loading..."}
              </ForecastTime>
            )}
            {isAnimatedLayer && (
              <PlaybackControls>
                <PlayButton onClick={handlePlayPauseClick}>
                  {animationPlaying ? "⏸" : "▶"}
                </PlayButton>
                <SpeedContainer>
                  <SpeedLabel>Speed:</SpeedLabel>
                  <SpeedInput
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.25"
                    value={animationSpeed}
                    onChange={handleSpeedChange}
                  />
                  <SpeedLabel>{animationSpeed.toFixed(2)}x</SpeedLabel>
                </SpeedContainer>
              </PlaybackControls>
            )}

            <ControlRow
              style={{
                marginBottom: selectedMapType === "none" ? "1.1rem" : "",
              }}
            >
              <Select
                id="mapType"
                value={selectedMapType}
                onChange={handleMapTypeChange}
              >
                <option value="none">None</option>
                <option value="clouds">Clouds</option>
                <option value="precipitation">Precipitation</option>
                <option value="temperature">Temperature</option>
                <option value="wind">Wind</option>
                <option value="pressure">Atm. Pressure</option>
              </Select>
            </ControlRow>
            {selectedMapType === "precipitation" && (
              <small>
                Precipitation data by{" "}
                <a
                  href="https://www.rainviewer.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  RainViewer
                </a>
              </small>
            )}
          </MapControlsContainer>
        </>
      )}
    </div>
  );
};
