// useAltitude.js
import { useState } from "react";

export const useAltitude = () => {
  const [loadingAltitude, setLoadingAltitude] = useState(false);
  const [altitudeError, setAltitudeError] = useState("");

  const fetchAltitude = async (latitude, longitude) => {
    setLoadingAltitude(true);
    setAltitudeError(""); // Clear previous errors
    const url = `https://api.open-elevation.com/api/v1/lookup?locations=${latitude},${longitude}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const data = await response.json();
      if (data.results && data.results.length > 0) {
        const altitudeValue = data.results[0].elevation;
        setAltitudeError(""); // Clear the error message on successful fetch
        return altitudeValue;
      } else {
        throw new Error("Altitude data is not available.");
      }
    } catch (error) {
      console.error("Error fetching altitude data:", error.message);
      setAltitudeError("Error fetching altitude data: " + error.message);
    } finally {
      setLoadingAltitude(false);
    }
  };

  return { fetchAltitude, loadingAltitude, altitudeError };
};
