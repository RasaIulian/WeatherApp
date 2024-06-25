// useAltitude.js
import { useState, useEffect } from "react";

export const useAltitude = () => {
  const [loadingAltitude, setLoadingAltitude] = useState(false);
  const [altitudeError, setAltitudeError] = useState("");
  const [googleMapsLoaded, setGoogleMapsLoaded] = useState(false);

  useEffect(() => {
    if (window.google && window.google.maps) {
      setGoogleMapsLoaded(true);
      return;
    }

    const loadGoogleMapsAPI = () => {
      if (
        !document.querySelector(
          'script[src^="https://maps.googleapis.com/maps/api/js"]'
        )
      ) {
        const script = document.createElement("script");
        const api_Key = process.env.REACT_APP_Altitude_API_KEY;
        script.src = `https://maps.googleapis.com/maps/api/js?key=${api_Key}&libraries=geometry&callback=initMap&loading=async`;
        script.async = true;
        document.head.appendChild(script);
      }
    };

    window.initMap = () => {
      setGoogleMapsLoaded(true);
    };

    loadGoogleMapsAPI();

    return () => {
      delete window.initMap;
    };
  }, []);

  const fetchAltitude = async (latitude, longitude) => {
    if (!googleMapsLoaded) {
      setAltitudeError("Google Maps Altitude API not loaded yet");
      return;
    }

    setLoadingAltitude(true);
    setAltitudeError("");

    const elevator = new window.google.maps.ElevationService();
    const location = { lat: parseFloat(latitude), lng: parseFloat(longitude) };

    try {
      const result = await new Promise((resolve, reject) => {
        elevator.getElevationForLocations(
          { locations: [location] },
          (results, status) => {
            if (status === "OK" && results && results.length > 0) {
              resolve(parseInt(results[0].elevation));
              setAltitudeError("");
            } else {
              reject(new Error(`Elevation service error: ${status}`));
            }
          }
        );
      });

      setLoadingAltitude(false);
      return result;
    } catch (error) {
      console.error("Error fetching altitude data:", error.message);
      setAltitudeError("Error fetching altitude data: " + error.message);
    }

    setLoadingAltitude(false);
  };

  return { fetchAltitude, loadingAltitude, altitudeError };
};
