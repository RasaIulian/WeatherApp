import React, { useState, useEffect } from "react";
import { getWeatherData } from "../hooks/getWeatherData/getWeatherData";
import { useAltitude } from "../hooks/getAltitude/getAltitude";
import { useAirQuality } from "../hooks/getAirQuality/getAirQuality";
import LocationSearchInput from "../Components/LocationSearchInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThermometerHalf } from "@fortawesome/free-solid-svg-icons";
import { ScrollDots } from "../Components/ScrollDots/ScrollDots";
import {
  faWind,
  faChevronDown,
  faChevronUp,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import {
  Container,
  SearchContainer,
  AnimatedIcon,
  Button,
  ArrowsContainer,
  ListWithArrowsWrapper,
  Map,
  Square,
  Select,
  Alert,
  ErrorMessage,
  LoadingMessage,
  Header,
  WindArrow,
  ContainerWrapper,
} from "../Pages/Homepage.style";

export function Homepage() {
  const locationElement = document.getElementById("location");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectVisible, setSelectVisible] = useState(false);
  const [geoLocationError, setGeoLocationError] = useState("");
  const [loadingWeather, setLoadingWeather] = useState(false);
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [showComponents, setShowComponents] = useState(false);
  const { fetchAltitude, loadingAltitude, altitudeError } = useAltitude(); // Destructure the custom hook
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favoriteLocations");
    if (savedFavorites) {
      try {
        return JSON.parse(savedFavorites);
      } catch (error) {
        console.error("Failed to parse favorites from localStorage:", error);
        return []; // Fallback to empty array if parsing fails
      }
    }
    return []; // Default to empty array if no data is found
  });
  const [currentLocationData, setCurrentLocationData] = useState(null); // Track current location data

  // Determine if current location is already in favorites
  const isAlreadyInFavorites = currentLocationData
    ? favorites.some(
        (fav) =>
          fav.lat === currentLocationData.lat &&
          fav.lon === currentLocationData.lon
      )
    : false;

  // Function to add current location to favorites
  const addToFavorites = () => {
    if (currentLocationData && !isAlreadyInFavorites) {
      const newFavorites = [...favorites, currentLocationData];
      console.log("Adding to favorites:", newFavorites);
      setFavorites(newFavorites);
    }
  };

  // Function to remove current location from favorites
  const removeFromFavorites = () => {
    if (currentLocationData) {
      const newFavorites = favorites.filter(
        (fav) =>
          fav.lat !== currentLocationData.lat &&
          fav.lon !== currentLocationData.lon
      );
      console.log("Removing from favorites:", newFavorites);
      setFavorites(newFavorites);
    }
  };

  // Save favorites to localStorage whenever the `favorites` state changes
  useEffect(() => {
    console.log("Saving favorites to localStorage:", favorites);
    localStorage.setItem("favoriteLocations", JSON.stringify(favorites));
  }, [favorites]);

  // Retrieve favorites from localStorage on component mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favoriteLocations");
    console.log("Retrieved favorites from localStorage:", savedFavorites);
    if (savedFavorites) {
      try {
        const parsedFavorites = JSON.parse(savedFavorites);
        console.log("Parsed favorites:", parsedFavorites);
        setFavorites(parsedFavorites);
      } catch (error) {
        console.error("Failed to parse favorites from localStorage:", error);
      }
    }
  }, []);

  // Update Select's onChange handler to clear current location data
  const handleSelectChange = (e) => {
    const selectedIndex = e.target.selectedIndex;
    const selectedOption = e.target.options[selectedIndex];
    const selectedLatitude = selectedOption.getAttribute("latitude");
    const selectedLongitude = selectedOption.getAttribute("longitude");
    const selectedName = selectedOption.text.split(",")[0]; // Extract location name
    const selectedCountry = selectedOption.text.split(",")[2]?.trim(); // Extract country
    const selectedState = selectedOption.text.split(",")[1]?.trim(); // Extract state (if available)
    setSelectedLocation(selectedOption.text);
    setHourIndex(0);
    setDayIndex(0);

    if (selectedLatitude === "current" && selectedLongitude === "current") {
      // Get current location using getLocation function
      locationElement.innerHTML = "";

      getLocation();
      setCurrentLocationData(null);
      setShowComponents(false);
    } else {
      locationElement.innerHTML = "";
      showPosition(parseFloat(selectedLatitude), parseFloat(selectedLongitude));
      setShowComponents(false);

      // Set currentLocationData for the selected favorite location
      setCurrentLocationData({
        lat: parseFloat(selectedLatitude),
        lon: parseFloat(selectedLongitude),
        name: selectedName,
        country: selectedCountry,
        state: selectedState,
      });
    }
  };

  const {
    aqi,
    components,
    loadingAQI,
    errorAQI,
    getAQICategory,
    getAQIColor,
    categorizeComponent,
    getComponentColor,
  } = useAirQuality(latitude, longitude);

  const toggleShowComponents = () => {
    setShowComponents(!showComponents);
  };

  const [hourIndex, setHourIndex] = useState(0); // For hourly forecast
  const [dayIndex, setDayIndex] = useState(0); // For daily forecast

  const hoursToShow = 4; // Number of hours to display at a time
  const daysToShow = 3; // Number of days to display at a time

  const scrollHours = (direction) => {
    setHourIndex((prevIndex) => {
      const newIndex = prevIndex + direction * hoursToShow;
      return Math.max(0, Math.min(newIndex, 20 - hoursToShow));
    });
  };

  const scrollDays = (direction) => {
    setDayIndex((prevIndex) => {
      const newIndex = prevIndex + direction * daysToShow;
      return Math.max(
        0,
        Math.min(newIndex, weatherData.daily.length - daysToShow)
      );
    });
  };

  const selectFoundLocation = (location) => {
    const { lat, lon, name, country, state } = location;
    setLatitude(lat);
    setLongitude(lon);
    setSelectedLocation(`${name}, ${state || ""} ${country}`);
    if (locationElement && name && country) {
      locationElement.innerHTML = `Location: ${name}, ${
        state || ""
      } ${country}<br>`;
    }

    showPosition(lat, lon);
    setShowComponents(false);
    // Reset the hourIndex and dayIndex when a new location is selected
    setHourIndex(0);
    setDayIndex(0);
    setCurrentLocationData(location); // Store location data when selected via search
  };

  // useEffect(() => {
  //   console.log(`Loading weather data: ${loadingWeather}`);
  // }, [loadingWeather]);

  // useEffect(() => {
  //   console.log(`Loading location data: ${loadingLocation}`);
  // }, [loadingLocation]);

  const getLocation = async () => {
    setLoadingLocation(true);
    // Introduce an artificial delay to check loading state
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    const elementsToHide = document.getElementsByClassName("toHide");

    if (navigator.geolocation) {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };

      navigator.geolocation.getCurrentPosition(
        (position) => {
          showPosition(position.coords.latitude, position.coords.longitude);
          setLoadingLocation(false);
        },
        (error) => {
          showError(error);
          setLoadingLocation(false);
        },
        options
      );

      for (let i = 0; i < elementsToHide.length; i++) {
        elementsToHide[i].style.display = "none";
      }
      setSelectVisible(true);
    } else {
      setGeoLocationError("Geolocation is not supported by this browser.");
      setLoadingLocation(false);
    }
  };

  const showError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        setGeoLocationError(
          "User denied the request for Geolocation. Please enable location access in your browser settings."
        );
        break;
      case error.POSITION_UNAVAILABLE:
        setGeoLocationError("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        setGeoLocationError("The request to get user location timed out.");
        break;
      default:
        setGeoLocationError("An unknown error occurred.");
        break;
    }
  };

  const showPosition = async (latitude, longitude) => {
    setLatitude(latitude);
    setLongitude(longitude);
    const mapApiToken = process.env.REACT_APP_Map_API_KEY; // Mapbox API token

    let longlat = `${longitude},${latitude}`;
    let geojson = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [longitude, latitude],
          },
          properties: {
            "marker-color": "#FF0000", // Change this to your desired color
          },
        },
      ],
    };
    let encodedGeojson = encodeURIComponent(JSON.stringify(geojson));
    let img_url = `https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v12/static/geojson(${encodedGeojson})/${longlat},13,0,45/460x250@2x?access_token=${mapApiToken}&logo=false`;

    const mapElement = document.getElementById("mapholder");
    const locationElement = document.getElementById("location");

    if (locationElement && mapElement && !loadingLocation) {
      locationElement.innerHTML += `Latitude: ${latitude.toFixed(1)}°<br>
      Longitude: ${longitude.toFixed(1)}°<br>`;
      mapElement.src = img_url;
    }

    try {
      const altitudeValue = await fetchAltitude(latitude, longitude);
      if (locationElement && !loadingAltitude) {
        locationElement.innerHTML += `Altitude: ${
          altitudeValue !== undefined ? altitudeValue + "m" : "N/A"
        }`;
      }
    } catch (error) {
      console.error("Error fetching altitude or setting map image:", error); // Log the error for debugging
    }
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoadingWeather(true); // Start loading
      try {
        // Introduce an artificial delay to check loading state
        // await new Promise((resolve) => setTimeout(resolve, 1000));

        const data = await getWeatherData(latitude, longitude);
        setWeatherData(data);
        setGeoLocationError(""); // Clear the error message on successful fetch
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setGeoLocationError(`Error fetching weather data: ${error.message}`); // Set the error message
      } finally {
        setLoadingWeather(false); // Stop loading
      }
    };

    if (latitude && longitude) {
      fetchWeatherData();
    }
  }, [latitude, longitude]);
  //   console.log(weatherData);

  // UV-Index categorize
  function getUVIndexCategory(uvIndex) {
    if (uvIndex >= 0 && uvIndex <= 2) {
      return "Low";
    } else if (uvIndex > 2 && uvIndex <= 5) {
      return "Moderate";
    } else if (uvIndex > 5 && uvIndex <= 7) {
      return "High";
    } else if (uvIndex > 7 && uvIndex <= 10) {
      return "Very High";
    } else if (uvIndex > 10) {
      return "Extreme";
    } else {
      return "Unknown"; // Handle unexpected values
    }
  }

  // Atm Pressure categorize
  function getPressureCategory(pressure) {
    if (pressure < 1013.2) {
      return "Low";
    } else if (pressure >= 1013.2) {
      return "High";
    } else {
      return "Unknown"; // Handle unexpected values
    }
  }

  function degreesToDirection(degrees) {
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const index = Math.round(degrees / 45) % 8;
    return directions[index];
  }

  // calculations for the scroll dots
  const totalHourPages = Math.ceil(20 / hoursToShow);
  const totalDayPages = Math.ceil(weatherData?.daily?.length / daysToShow);
  const currentHourPage = Math.floor(hourIndex / hoursToShow);
  const currentDayPage = Math.floor((dayIndex + 1) / daysToShow);

  return (
    <div>
      <Header className="toHide">Welcome to the Geolocation Weather App</Header>
      <p className="toHide">
        Please click the button to get your coordinates, weather and more...
      </p>
      <p className="toHide">Location permission must be granted at request.</p>
      <Button onClick={getLocation} className="toHide">
        Try It
      </Button>

      {(loadingAltitude || loadingLocation || loadingAQI || loadingWeather) && (
        <LoadingMessage>
          Loading
          {loadingLocation && <span> location data...</span>}
          {loadingAltitude && !altitudeError && <span> altitude data...</span>}
          {loadingAQI && <span> air quality data...</span>}
          {loadingWeather && <span> weather data...</span>}
        </LoadingMessage>
      )}
      {!loadingAQI && !loadingLocation && selectVisible && (
        <SearchContainer>
          <LocationSearchInput onSelectLocation={selectFoundLocation} />
          <Select
            id="select"
            value={selectedLocation}
            onChange={handleSelectChange}
          >
            <option hidden value="">
              Select favorite location
            </option>
            <option latitude="current" longitude="current">
              Current Location
            </option>
            {/* Dynamically generate options from favorites */}
            {favorites.map((fav, index) => (
              <option key={index} latitude={fav.lat} longitude={fav.lon}>
                {`${fav.name}, ${fav.state || ""} ${fav.country}`}
              </option>
            ))}
          </Select>
        </SearchContainer>
      )}

      <p id="location"></p>

      {/* Toggle between Add and Remove button */}
      {currentLocationData && (
        <Button
          onClick={isAlreadyInFavorites ? removeFromFavorites : addToFavorites}
        >
          {isAlreadyInFavorites ? "Remove from Favorites" : "Add to Favorites"}
        </Button>
      )}

      {geoLocationError && <ErrorMessage>{geoLocationError}</ErrorMessage>}
      {errorAQI && <ErrorMessage>{errorAQI}</ErrorMessage>}
      {altitudeError && <ErrorMessage>{altitudeError}</ErrorMessage>}
      <ContainerWrapper>
        <div>
          <Map id="mapholder"></Map>
        </div>
        <br />
        {!errorAQI && !loadingAQI && aqi && (
          <Container>
            <h3>Air Quality: </h3>
            <p>{getAQICategory(aqi)}</p>
            <FontAwesomeIcon
              icon={faWind}
              style={{ color: getAQIColor(aqi), marginLeft: "5px" }}
            />

            <br />
            {showComponents && (
              <div>
                <p>Air quality index: {aqi} (1-5)</p>
                <br />
                <p>
                  PM2.5 - Fine particles matter: {components.pm2_5} μg/m3
                  -&nbsp;
                  <span
                    style={{
                      color: getComponentColor("pm2_5", components.pm2_5),
                    }}
                  >
                    ({categorizeComponent("pm2_5", components.pm2_5)})
                  </span>{" "}
                </p>
                <br />
                <p>
                  PM10 - Coarse particulate matter: {components.pm10} μg/m3
                  -&nbsp;
                  <span
                    style={{
                      color: getComponentColor("pm10", components.pm10),
                    }}
                  >
                    ({categorizeComponent("pm10", components.pm10)})
                  </span>{" "}
                </p>
                <br />

                <p>
                  O₃ - Ozone: {components.o3} μg/m3 -&nbsp;
                  <span
                    style={{
                      color: getComponentColor("o3", components.o3),
                    }}
                  >
                    ({categorizeComponent("o3", components.o3)})
                  </span>{" "}
                </p>
                <br />
                <p>
                  SO₂ - Sulphur dioxide: {components.so2} μg/m3 -&nbsp;
                  <span
                    style={{
                      color: getComponentColor("so2", components.so2),
                    }}
                  >
                    ({categorizeComponent("so2", components.so2)})
                  </span>{" "}
                </p>
                <br />
                <p>
                  NO₂ - Nitrogen dioxide: {components.no2} μg/m3 -&nbsp;
                  <span
                    style={{
                      color: getComponentColor("no2", components.no2),
                    }}
                  >
                    ({categorizeComponent("no2", components.no2)})
                  </span>{" "}
                </p>
                <br />

                <p>
                  CO - Carbon monoxide: {components.co} μg/m3 -&nbsp;
                  <span
                    style={{
                      color: getComponentColor("co", components.co),
                    }}
                  >
                    ({categorizeComponent("co", components.co)})
                  </span>{" "}
                </p>
                <br />
                <p>
                  NO - Nitrogen monoxide: {components.no} μg/m3 -&nbsp;
                  <span
                    style={{
                      color: getComponentColor("no", components.no),
                    }}
                  >
                    ({categorizeComponent("no", components.no)})
                  </span>{" "}
                </p>
                <br />
                <p>
                  NH3 - Ammonia: {components.nh3} μg/m3 -&nbsp;
                  <span
                    style={{
                      color: getComponentColor("nh3", components.nh3),
                    }}
                  >
                    ({categorizeComponent("nh3", components.nh3)})
                  </span>{" "}
                </p>
              </div>
            )}
            <Button onClick={toggleShowComponents}>
              {!showComponents ? (
                <>
                  show details <FontAwesomeIcon icon={faChevronDown} />
                </>
              ) : (
                <>
                  hide details <FontAwesomeIcon icon={faChevronUp} />
                </>
              )}
            </Button>
          </Container>
        )}

        {!loadingWeather && !loadingLocation && !loadingAQI && weatherData && (
          <>
            <br />
            {weatherData.current && (
              <Container>
                <h3>Current Weather:</h3>
                <p>
                  {" "}
                  <span role="img" aria-label="temperature">
                    <FontAwesomeIcon icon={faThermometerHalf} />
                    &nbsp;
                  </span>
                  {Math.round(weatherData.current.temp)}°C
                </p>{" "}
                <br />
                <p>
                  Feels Like: {Math.round(weatherData.current.feels_like)}°C
                </p>
                <br />
                <p>
                  UV index: {weatherData.current.uvi} -
                  <Square
                    style={{
                      backgroundColor:
                        getUVIndexCategory(weatherData.current.uvi) === "Low"
                          ? "#4eb400" // green
                          : getUVIndexCategory(weatherData.current.uvi) ===
                            "Moderate"
                          ? "#f7e400" // yellow
                          : getUVIndexCategory(weatherData.current.uvi) ===
                            "High"
                          ? "#f88700" // orange
                          : getUVIndexCategory(weatherData.current.uvi) ===
                            "Very High"
                          ? "#d8001d" // red
                          : getUVIndexCategory(weatherData.current.uvi) ===
                            "Extreme"
                          ? "#b54cff" // purple
                          : "#f0f0f0", // unknown
                    }}
                  ></Square>
                  <span> {getUVIndexCategory(weatherData.current.uvi)}</span>
                </p>
                <br />
                <p>
                  Wind: {Math.round(weatherData.current.wind_speed * 3.6)} Km/h{" "}
                  {"- "}
                  {degreesToDirection(weatherData.current.wind_deg)}{" "}
                  <WindArrow $deg={weatherData.current.wind_deg} />
                </p>
                <br />
                <p>Humidity: {weatherData.current.humidity}%</p>
                <br />
                <p>
                  Atm. Pressure: {weatherData.current.pressure} mbar -{" "}
                  {getPressureCategory(weatherData.current.pressure)}
                </p>
                <br />
                <p>
                  Sunrise:{" "}
                  {new Date(
                    (weatherData.current.sunrise +
                      weatherData.timezone_offset) *
                      1000
                  )
                    .toISOString()
                    .substring(11, 16)}
                </p>
                <br />
                <p>
                  Sunset:{" "}
                  {new Date(
                    (weatherData.current.sunset + weatherData.timezone_offset) *
                      1000
                  )
                    .toISOString()
                    .substring(11, 16)}
                </p>
                <br />
                <AnimatedIcon
                  src={`https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}
                  alt="Weather Icon"
                />
                <br />
                <p>{weatherData.current.weather[0].description}</p>
                {weatherData.alerts && weatherData.alerts.length > 0 && (
                  <div>
                    {weatherData.alerts.map((alert, index) => (
                      <Alert key={index}>
                        <h3>
                          Weather Alert
                          {weatherData.alerts.length >= 2 && " "}
                          {weatherData.alerts.length >= 2 && index + 1}:
                        </h3>
                        <p>
                          <strong>Sender:&nbsp;</strong> {alert.sender_name}
                        </p>
                        <br />
                        <p>
                          <strong>Start:&nbsp;</strong>
                          {new Date(alert.start * 1000).toLocaleString(
                            "en-US",
                            {
                              weekday: "long",
                              month: "long",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            }
                          )}
                        </p>
                        <br />
                        <p>
                          <strong>End:&nbsp;</strong>
                          {new Date(alert.end * 1000).toLocaleString("en-US", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                        <br />
                        <p>
                          <strong>Event:&nbsp;</strong> {alert.event}
                        </p>
                        <br />
                        <p>
                          <strong>Description:&nbsp;</strong>
                          {alert.description}
                        </p>
                      </Alert>
                    ))}
                  </div>
                )}
              </Container>
            )}
            <br />

            {weatherData.hourly && (
              <Container>
                <h3>Hourly Weather:</h3>
                <p>*pop = probability of precipitation</p>
                <br />
                <p>
                  Timezone {weatherData.timezone}: GMT
                  {weatherData.timezone_offset > 0 && "+"}
                  {weatherData.timezone_offset / 3600}
                </p>
                <ListWithArrowsWrapper>
                  <ul>
                    {weatherData.hourly
                      .slice(hourIndex, hourIndex + hoursToShow) // Display based on hourIndex
                      .map((hour, index) => (
                        <li key={index}>
                          <b>
                            {new Date(
                              (hour.dt + weatherData.timezone_offset) * 1000
                            )
                              .toISOString()
                              .substring(11, 16)}
                          </b>
                          <br />
                          <FontAwesomeIcon icon={faThermometerHalf} />{" "}
                          {Math.round(hour.temp)}°C <br />
                          Feels like: {Math.round(hour.feels_like)}°C <br />
                          pop: {Math.round(hour.pop * 100)}% <br />
                          Humidity: {hour.humidity}%<br />
                          Wind: {Math.round(hour.wind_speed * 3.6)} Km/h
                          <br />
                          <AnimatedIcon
                            src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
                            alt="Hourly Weather Icon"
                          />
                          <br />
                          {hour.weather[0].description}
                        </li>
                      ))}
                  </ul>
                  <ArrowsContainer>
                    <Button
                      onClick={() => scrollHours(-1)}
                      disabled={hourIndex === 0}
                      className={hourIndex === 0 ? "disabled" : ""}
                    >
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </Button>
                    <Button
                      onClick={() => scrollHours(1)}
                      disabled={hourIndex + hoursToShow >= 20}
                      className={
                        hourIndex + hoursToShow >= 20 ? "disabled" : ""
                      }
                    >
                      <FontAwesomeIcon icon={faChevronRight} />
                    </Button>
                  </ArrowsContainer>
                </ListWithArrowsWrapper>
                <ScrollDots
                  totalPages={totalHourPages}
                  currentPage={currentHourPage}
                />
              </Container>
            )}

            <br />
            {weatherData.daily && (
              <Container>
                <h3>Daily Weather:</h3>
                <ListWithArrowsWrapper>
                  <ul>
                    {weatherData.daily
                      .slice(dayIndex, dayIndex + daysToShow) // Display based on dayIndex
                      .map((day, index) => {
                        const date = new Date(day.dt * 1000).toLocaleDateString(
                          "en-US",
                          {
                            weekday: "short",
                            month: "short",
                            day: "numeric",
                          }
                        );

                        return (
                          <li key={index}>
                            <b>
                              {index === 0 && dayIndex === 0 ? "Today" : date}
                            </b>
                            <br /> {Math.round(day.temp.min)}{" "}
                            <FontAwesomeIcon icon={faThermometerHalf} />{" "}
                            {Math.round(day.temp.max)}°C
                            <br />
                            Precipitation: {parseInt(day.pop * 100)}%
                            <br />
                            <AnimatedIcon
                              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                              alt="Weather Icon"
                            />
                            <br />
                            {day.summary}
                          </li>
                        );
                      })}
                  </ul>
                  <ArrowsContainer>
                    <Button
                      onClick={() => scrollDays(-1)}
                      disabled={dayIndex === 0}
                    >
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </Button>{" "}
                    <Button
                      onClick={() => scrollDays(1)}
                      disabled={
                        dayIndex + daysToShow >= weatherData.daily.length
                      }
                    >
                      <FontAwesomeIcon icon={faChevronRight} />
                    </Button>
                  </ArrowsContainer>
                </ListWithArrowsWrapper>

                <ScrollDots
                  totalPages={totalDayPages}
                  currentPage={currentDayPage}
                />
              </Container>
            )}

            <br />
          </>
        )}
      </ContainerWrapper>
    </div>
  );
}
