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
  OpacityInput,
  OpacityValue,
  Label,
} from "./Map.style"; // Import the styled components
mapboxgl.accessToken = process.env.REACT_APP_Map_API_KEY;

export const WeatherMap = ({ latitude, longitude }) => {
  // ... (rest of your code is the same)
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [layerOpacity, setLayerOpacity] = useState(0.9);
  const [selectedMapType, setSelectedMapType] = useState("none"); // Default to "none"
  const [mapStyle, setMapStyle] = useState(
    "mapbox://styles/mapbox/satellite-streets-v12"
  );
  const [mapZoom, setMapZoom] = useState(10);

  // Use the custom hook
  const { forecastTimes, currentStep } = useFetchMapData(
    latitude,
    longitude,
    mapRef,
    mapLoaded,
    layerOpacity,
    selectedMapType
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

    // Return cleanup function
    return cleanUp;
  }, [latitude, longitude, mapStyle]);

  const formatForecastTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = {
      day: "2-digit",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
    };
    return date.toLocaleString("en-GB", options).replace(",", "");
  };

  const handleOpacityChange = (e) => {
    const opacity = parseFloat(e.target.value);
    setLayerOpacity(opacity);

    if (mapRef.current && mapRef.current.getLayer("weather-layer")) {
      mapRef.current.setPaintProperty(
        "weather-layer",
        "raster-opacity",
        opacity
      );
    }
  };

  const handleMapTypeChange = (e) => {
    const newSelectedMapType = e.target.value;
    setSelectedMapType(newSelectedMapType);

    // Change map style only if "None" not selected
    if (newSelectedMapType === "none") {
      setMapStyle("mapbox://styles/mapbox/satellite-streets-v12"); // Revert to default style
    } else {
      setMapStyle("mapbox://styles/mapbox/dark-v11");
      setMapZoom(6);

      //    Map style   Options:
      // mapbox://styles/mapbox/streets-v12: A standard street map style.
      // mapbox://styles/mapbox/light-v11: A light-colored map style.
      // mapbox://styles/mapbox/dark-v11: A dark-colored map style.
      // mapbox://styles/mapbox/outdoors-v12: A map style designed for outdoor activities.
      // mapbox://styles/mapbox/satellite-streets-v12: A map style designed for satellite imagery with streets.
    }
  };

  return (
    <div>
      <MapContainer ref={mapContainerRef} />
      {mapLoaded && (
        <>
          <MapControlsContainer>
            <ControlRow
              style={{
                marginBottom: selectedMapType === "none" ? "1.1rem" : "",
              }}
            >
              <Label htmlFor="mapType">Radar Type:</Label>
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
                <option value="pressure">Pressure</option>
              </Select>
            </ControlRow>
            <ControlRow
              style={{ display: selectedMapType === "none" ? "none" : "flex" }}
            >
              <Label htmlFor="opacity">Radar Opacity:</Label>
              <OpacityInput
                type="range"
                id="opacity"
                min="0.5"
                max="1"
                step="0.1"
                value={layerOpacity}
                onChange={handleOpacityChange}
              />
              <OpacityValue>{layerOpacity.toFixed(1)}</OpacityValue>
            </ControlRow>
            <ForecastTime
              style={{ display: selectedMapType === "none" ? "none" : "block" }}
            >
              Forecast Time:{" "}
              {forecastTimes.length > 0 && currentStep < forecastTimes.length
                ? formatForecastTime(forecastTimes[currentStep])
                : "Loading..."}
            </ForecastTime>
          </MapControlsContainer>
        </>
      )}
    </div>
  );
};
