// src/hooks/useAirQuality.js
import { useState, useEffect } from "react";

export const useAirQuality = (latitude, longitude) => {
  const [aqi, setAqi] = useState(null);
  const [components, setComponents] = useState({});
  const [loadingAQI, setLoadingAQI] = useState(false);
  const [errorAQI, setErrorAQI] = useState("");

  const getAQICategory = (aqi) => {
    if (aqi === 1) return "Good";
    if (aqi === 2) return "Fair";
    if (aqi === 3) return "Moderate";
    if (aqi === 4) return "Poor";
    if (aqi === 5) return "Very Poor";
    return "Unknown";
  };

  const getAQIColor = (aqi) => {
    if (aqi === 1) return "#00cc66"; // Good - Lighter Green
    if (aqi === 2) return "#ffcc00"; // Fair - Gold
    if (aqi === 3) return "#ff6600"; // Moderate - Dark Orange
    if (aqi === 4) return "#cc0000"; // Poor - Dark Red
    if (aqi === 5) return "#9900cc"; // Very Poor - Dark Purple
    return "#333333"; // Unknown - Dark Grey
  };

  const pollutantRanges = {
    no2: [0, 40, 70, 150, 200, Infinity], // Very Low, Low, Medium, High, Very High
    pm10: [0, 20, 50, 100, 200, Infinity], // Very Low, Low, Medium, High, Very High
    o3: [0, 60, 100, 140, 180, Infinity], // Very Low, Low, Medium, High, Very High
    pm2_5: [0, 10, 25, 50, 75, Infinity], // Very Low, Low, Medium, High, Very High
    so2: [0, 20, 80, 250, 350, Infinity],
    co: [0, 4400, 9400, 12400, 15400, Infinity],
    nh3: [0.1, 40, 80, 120, 200], // Custom range for NH3
    no: [0.1, 20, 40, 60, 100], // Custom range for NO
  };

  const categorizeComponent = (component, value) => {
    const ranges = pollutantRanges[component];
    if (!ranges) return "Unknown";
    if (value <= ranges[0]) return "Very Low";
    if (value <= ranges[1]) return "Low";
    if (value <= ranges[2]) return "Medium";
    if (value <= ranges[3]) return "High";
    return "Very High";
  };

  useEffect(() => {
    const fetchAirQuality = async () => {
      if (!latitude || !longitude) return;

      setLoadingAQI(true);
      setErrorAQI("");
      const apiKey = process.env.REACT_APP_AirQuality_API_KEY;

      const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

      try {
        // Introduce an artificial delay to check loading state
        // await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Server responded with status: ${response.status}`);
        }

        const data = await response.json();
        if (data.list && data.list.length > 0) {
          setAqi(data.list[0].main.aqi);
          setComponents(data.list[0].components);
        } else {
          throw new Error("Air quality data is not available.");
        }
      } catch (error) {
        console.error("Error fetching air quality data:", error);
        setErrorAQI("Error fetching air quality data: " + error.message);
      } finally {
        setLoadingAQI(false);
      }
    };

    fetchAirQuality();
  }, [latitude, longitude]);

  return {
    aqi,
    components,
    loadingAQI,
    errorAQI,
    getAQICategory,
    getAQIColor,
    categorizeComponent,
  };
};
