import { useState } from "react";

export const useAltitude = () => {
  const [loadingAltitude, setLoadingAltitude] = useState(false);
  const [altitudeError, setAltitudeError] = useState("");

  const fetchAltitude = async (latitude, longitude) => {
    setLoadingAltitude(true);
    setAltitudeError("");

    try {
      const response = await fetch(
        `${process.env.REACT_APP_RAINVIEWER_PROXY}/v1/srtm90m?locations=${latitude},${longitude}`,
        // api.opentopodata.org - see .env file
        // srtm = Shuttle Radar Topography Mission
        // 90m = resolution is about 90 meters per grid cell (good default choice)
        // this is a global elevation dataset
      );

      if (!response.ok) {
        throw new Error(`status ${response.status}`);
      }

      const data = await response.json();

      if (data.status !== "OK") {
        throw new Error(data.error || "unknown error");
      }

      return data.results[0].elevation;
    } catch (error) {
      console.error("Error fetching altitude:", error.message);
      setAltitudeError("Error fetching altitude: " + error.message);
      return undefined;
    } finally {
      setLoadingAltitude(false);
    }
  };

  return { fetchAltitude, loadingAltitude, altitudeError };
};
