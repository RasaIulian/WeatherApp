import { useState, useEffect, useRef } from "react";

const useFetchMapData = (
  latitude,
  longitude,
  mapRef,
  mapLoaded,
  cloudsOpacity
) => {
  const [forecastTimes, setForecastTimes] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const intervalRef = useRef(null);
  const weatherApiKey = process.env.REACT_APP_Weather_API_KEY;

  const interpolateHourlyData = (data) => {
    const hourlyData = [];

    for (let i = 0; i < data.length - 1; i++) {
      const current = data[i];
      const next = data[i + 1];

      for (let h = 0; h < 3; h++) {
        const interpolatedTimestamp = current.dt + h * 3600;
        const weight = h / 3;

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

        const now = Math.floor(Date.now() / 1000);
        const hoursToShow = now + 8 * 3600;

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

        if (!mapRef.current) return;

        if (mapRef.current.getSource("clouds-layer")) {
          mapRef.current.removeLayer("clouds-layer");
          mapRef.current.removeSource("clouds-layer");
        }

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
            "raster-opacity-transition": { duration: 1500 },
          },
        });

        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }

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

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [latitude, longitude, mapLoaded, mapRef, cloudsOpacity]);

  return { forecastTimes, currentStep };
};

export default useFetchMapData;
