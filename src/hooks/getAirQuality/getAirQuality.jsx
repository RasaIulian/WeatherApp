// src/hooks/useAirQuality.js
import { useState, useEffect } from "react";

export const useAirQuality = (latitude, longitude) => {
  const [aqi, setAqi] = useState(null);
  const [components, setComponents] = useState({});
  const [loadingAQI, setLoadingAQI] = useState(false);
  const [errorAQI, setErrorAQI] = useState("");

  useEffect(() => {
    const fetchAirQuality = async () => {
      if (!latitude || !longitude) return;

      setLoadingAQI(true);
      setErrorAQI("");

      const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=4cbdbc7df66de5de3bc03227c33e61be`;

      try {
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

  return { aqi, components, loadingAQI, errorAQI };
};
