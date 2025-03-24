// useAltitude.jsx - open-elevation.com
import { useState } from "react";

export const useAltitude = () => {
  const [loadingAltitude, setLoadingAltitude] = useState(false);
  const [altitudeError, setAltitudeError] = useState("");

  const fetchAltitude = async (latitude, longitude) => {
    try {
      setLoadingAltitude(true);
      setAltitudeError("");
      // Introduce an artificial delay to check loading state
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await fetch(
        `https://api.open-elevation.com/api/v1/lookup?locations=${latitude},${longitude}`
      );
      setLoadingAltitude(false);
      if (!response.ok) {
        throw new Error(`status ${response.status}`);
      }
      const data = await response.json();
      return data.results[0].elevation;
    } catch (error) {
      console.error("Error fetching altitude:", error.message);
      setAltitudeError("Error fetching altitude: " + error.message);
      setLoadingAltitude(false);
    }
  };

  return { fetchAltitude, loadingAltitude, altitudeError };
};
