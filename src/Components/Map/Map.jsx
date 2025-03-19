import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { FullscreenControl } from "mapbox-gl";

mapboxgl.accessToken = process.env.REACT_APP_Map_API_KEY;

export const WeatherMap = ({ latitude, longitude }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [cloudsOpacity, setCloudsOpacity] = useState(0.8);
  const [forecastTimes, setForecastTimes] = useState([]); // Store available forecast times
  const [currentStep, setCurrentStep] = useState(0);
  const intervalRef = useRef(null); // Ref to store interval ID
  const weatherApiKey = process.env.REACT_APP_Weather_API_KEY;

  const interpolateHourlyData = (data) => {
    const hourlyData = [];

    for (let i = 0; i < data.length - 1; i++) {
      const current = data[i];
      const next = data[i + 1];

      for (let h = 0; h < 3; h++) {
        const interpolatedTimestamp = current.dt + h * 3600; // Add 1-hour steps
        const weight = h / 3; // Weighting factor (0, 1/3, 2/3)

        // Simple linear interpolation (adjust based on available fields)
        const interpolatedClouds =
          current.clouds.all * (1 - weight) + next.clouds.all * weight;

        hourlyData.push({
          dt: interpolatedTimestamp,
          clouds: { all: interpolatedClouds },
        });
      }
    }

    return hourlyData;
  };

  // Clean up function to handle map and interval cleanup
  const cleanUp = () => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Remove map if it exists
    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
      setMapLoaded(false);
    }
  };

  useEffect(() => {
    // Clean up previous map and interval if coordinates chang
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

  // Separate useEffect for data fetching that depends on mapLoaded state
  useEffect(() => {
    if (!mapLoaded || !latitude || !longitude || !mapRef.current) return;

    const fetchMapData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${weatherApiKey}`
        );
        const data = await response.json();

        if (!data.list || data.list.length < 2) {
          console.error("Insufficient data points for interpolation");
          return;
        }

        const interpolatedData = interpolateHourlyData(data.list);

        // Get the current time
        const now = Math.floor(Date.now() / 1000); // Current time in seconds
        const hoursToShow = now + 8 * 3600; // 8 hours

        // Filter data to only include the next 8 hours
        const filteredData = interpolatedData.filter(
          (item) => item.dt <= hoursToShow
        );

        if (filteredData.length === 0) {
          console.error(
            "No forecast data available for the selected timeframe"
          );
          return;
        }

        setForecastTimes(filteredData.map((item) => item.dt));

        // Make sure the map is still valid before proceeding
        if (!mapRef.current) return;

        // Remove existing source and layer if they exist
        if (mapRef.current.getSource("clouds-layer")) {
          mapRef.current.removeLayer("clouds-layer");
          mapRef.current.removeSource("clouds-layer");
        }

        // Add new source and layer
        mapRef.current.addSource("clouds-layer", {
          type: "raster",
          tiles: [
            `https://tile.openweathermap.org/map/clouds/{z}/{x}/{y}.png?appid=${weatherApiKey}&date=${filteredData[0].dt}`,
          ],
          tileSize: 256,
        });

        mapRef.current.addLayer({
          id: "clouds-layer",
          type: "raster",
          source: "clouds-layer",
          paint: {
            "raster-opacity": cloudsOpacity,
            "raster-opacity-transition": { duration: 1500 }, // transition duration
          },
        });

        // Clear any existing interval
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }

        // Set up new interval for animation
        let step = 0;
        intervalRef.current = setInterval(() => {
          if (!mapRef.current || !mapRef.current.getSource("clouds-layer")) {
            clearInterval(intervalRef.current);
            return;
          }

          step = (step + 1) % filteredData.length;
          setCurrentStep(step);

          mapRef.current
            .getSource("clouds-layer")
            .setTiles([
              `https://tile.openweathermap.org/map/clouds/{z}/{x}/{y}.png?appid=${weatherApiKey}&date=${filteredData[step].dt}`,
            ]);
        }, 2000);
      } catch (error) {
        console.error("Error fetching map data:", error);
      }
    };

    fetchMapData();

    // Return cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [latitude, longitude, mapLoaded, cloudsOpacity]);

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
