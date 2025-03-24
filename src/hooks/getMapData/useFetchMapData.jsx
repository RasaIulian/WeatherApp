import { useState, useEffect, useRef } from "react";

const useFetchMapData = (
  latitude,
  longitude,
  mapRef,
  mapLoaded,
  layerOpacity,
  selectedMapType
) => {
  const [forecastTimes, setForecastTimes] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const intervalRef = useRef(null);
  const weatherApiKey = process.env.REACT_APP_Weather_API_KEY;

  // Map layer options
  const mapLayerOptions = {
    none: null, //  no layer
    clouds: "clouds_new",
    precipitation: "precipitation_new",
    temperature: "temp_new",
    wind: "wind_new",
    pressure: "pressure_new",
  };

  useEffect(() => {
    if (!mapLoaded || !latitude || !longitude || !mapRef.current) return;

    const fetchMapData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${weatherApiKey}`
        );
        const data = await response.json();

        if (!data.list || data.list.length === 0) {
          console.error("No forecast data available");
          return;
        }

        // Filter forecast data for the next 24 hours
        const filteredData = data.list.filter(
          (item) => item.dt <= Math.floor(Date.now() / 1000) + 24 * 3600
        );

        if (filteredData.length === 0) {
          console.error(
            "No forecast data available for the selected timeframe"
          );
          return;
        }

        setForecastTimes(filteredData.map((item) => item.dt));

        if (!mapRef.current) return;

        const layerId = "weather-layer";
        const sourceId = "weather-source";

        if (mapRef.current.getSource(sourceId)) {
          mapRef.current.removeLayer(layerId);
          mapRef.current.removeSource(sourceId);
        }

        // Get the correct layer name from the options
        const layerName = mapLayerOptions[selectedMapType];

        if (layerName) {
          // Only add the layer if a valid layerName is selected
          mapRef.current.addSource(sourceId, {
            type: "raster",
            tiles: [
              `https://tile.openweathermap.org/map/${layerName}/{z}/{x}/{y}.png?appid=${weatherApiKey}&date=${filteredData[0].dt}`,
            ],
            tileSize: 256,
          });

          mapRef.current.addLayer({
            id: layerId,
            type: "raster",
            source: sourceId,
            paint: {
              "raster-opacity": layerOpacity,
              "raster-opacity-transition": { duration: 1500 },
            },
          });

          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }

          let step = 0;
          intervalRef.current = setInterval(() => {
            if (!mapRef.current || !mapRef.current.getSource(sourceId)) {
              clearInterval(intervalRef.current);
              return;
            }

            step = (step + 1) % filteredData.length;
            setCurrentStep(step);

            mapRef.current
              .getSource(sourceId)
              .setTiles([
                `https://tile.openweathermap.org/map/${layerName}/{z}/{x}/{y}.png?appid=${weatherApiKey}&date=${filteredData[step].dt}`,
              ]);
          }, 2000);
        }
      } catch (error) {
        console.error("Error fetching map data:", error);
      }
    };

    fetchMapData();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [latitude, longitude, mapLoaded, mapRef, layerOpacity, selectedMapType]);

  return { forecastTimes, currentStep };
};

export default useFetchMapData;
