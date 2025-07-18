import { useState, useEffect } from "react";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favoriteLocations");
    if (savedFavorites) {
      try {
        return JSON.parse(savedFavorites);
      } catch (error) {
        console.error("Failed to parse favorites from localStorage:", error);
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("favoriteLocations", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (locationData) => {
    if (!locationData) return;
    // Prevent duplicates
    const isAlreadyInFavorites = favorites.some(
      (fav) => fav.lat === locationData.lat && fav.lon === locationData.lon
    );
    if (!isAlreadyInFavorites) {
      setFavorites((prevFavorites) => [...prevFavorites, locationData]);
    }
  };

  const removeFavorite = (locationData) => {
    if (!locationData) return;
    setFavorites((prevFavorites) =>
      prevFavorites.filter(
        (fav) => fav.lat !== locationData.lat || fav.lon !== locationData.lon
      )
    );
  };

  return { favorites, addFavorite, removeFavorite };
};

