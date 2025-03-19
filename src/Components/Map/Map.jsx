import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { FullscreenControl } from "mapbox-gl";
import useFetchMapData from "../../hooks/getMapData/useFetchMapData";

mapboxgl.accessToken = process.env.REACT_APP_Map_API_KEY;

export const WeatherMap = ({ latitude, longitude }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [cloudsOpacity, setCloudsOpacity] = useState(0.8);

  // Use the custom hook
  const { forecastTimes, currentStep } = useFetchMapData(
    latitude,
    longitude,
    mapRef,
    mapLoaded,
    cloudsOpacity
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
      style: "mapbox://styles/mapbox/satellite-streets-v12",
      center: [longitude, latitude],
      zoom: 10,
      minZoom: 2,
      maxZoom: 14,
    });
    // Add fullscreen control
    mapRef.current.addControl(new FullscreenControl());

    mapRef.current.on("load", () => {
      setMapLoaded(true);
      // Add the location marker
      new mapboxgl.Marker({ color: "#FF0000" })
        .setLngLat([longitude, latitude])
        .addTo(mapRef.current);
    });

    // Return cleanup function
    return cleanUp;
  }, [latitude, longitude]);

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
    setCloudsOpacity(opacity);

    if (mapRef.current && mapRef.current.getLayer("clouds-layer")) {
      mapRef.current.setPaintProperty(
        "clouds-layer",
        "raster-opacity",
        opacity
      );
    }
  };

  return (
    <div>
      <div
        ref={mapContainerRef}
        style={{ width: "100%", height: "330px", borderRadius: "5px" }}
      />
      {mapLoaded && (
        <div style={{ marginTop: "10px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <label htmlFor="opacity">Clouds Opacity:</label>
            <input
              type="range"
              id="opacity"
              min="0"
              max="1"
              step="0.1"
              value={cloudsOpacity}
              onChange={handleOpacityChange}
            />
            <span>{cloudsOpacity.toFixed(1)}</span>
          </div>
          <p>
            Forecast Time:{" "}
            {forecastTimes.length > 0 && currentStep < forecastTimes.length
              ? formatForecastTime(forecastTimes[currentStep])
              : "Loading..."}
          </p>
        </div>
      )}
    </div>
  );
};
