import { useState, useEffect, useRef } from "react";
import { getWeatherData } from "../hooks/getWeatherData/getWeatherData";
import { useAltitude } from "../hooks/getAltitude/getAltitude";
import { useAirQuality } from "../hooks/getAirQuality/getAirQuality";
import { useFavorites } from "../hooks/useFavorites/useFavorites";
import LocationSearchInput from "../Components/LocationSearch/LocationSearchInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThermometerHalf } from "@fortawesome/free-solid-svg-icons";
import { ScrollDots } from "../Components/ScrollDots/ScrollDots";
import { useTouchScroll } from "../hooks/touchScroll/touchScroll";
import { WeatherMap } from "../Components/Map/Map";
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
  Square,
  Select,
  Alert,
  ErrorMessage,
  LoadingMessage,
  Header,
  WindArrow,
  ContainerWrapper,
  Emoji,
  EmojiContainer,
  EmojiWrapper,
} from "../Pages/Homepage.style";
import { SunMoonTimes } from "../Components/SunMoonTimes/SunMoonTimes";

// Define the emojis and their order
const emojis = [
  "🌐",
  "☀️",
  "😎",
  "☁️",
  "💦",
  "🌍",
  "🌞",
  "⛈️",
  "🌤️",
  "🌡️",
  "📌",
  "🌧️",
  "❄️",
  "🍃",
  "☔",
];

export function Homepage() {
  const locationElement = document.getElementById("location");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [locationInfo, setLocationInfo] = useState({
    latitude: null,
    longitude: null,
    altitude: null,
  });
  const [weatherData, setWeatherData] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectVisible, setSelectVisible] = useState(false);
  const [geoLocationError, setGeoLocationError] = useState("");
  const [loadingWeather, setLoadingWeather] = useState(false);
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [showComponents, setShowComponents] = useState(false);
  const { fetchAltitude, loadingAltitude, altitudeError } = useAltitude(); // Destructure the custom hook

  // State to track the indices of the currently displayed emojis
  const [emojiIndices, setEmojiIndices] = useState([0, 1, 2]);
  // Track which position (0, 1, or 2) is currently changing
  const [changingPosition, setChangingPosition] = useState(0);
  const emojiRefs = useRef([null, null, null]);
  // Add touch scroll functionality
  const hourlyScrollRef = useTouchScroll(
    () => scrollHours(1), // Swipe left = next items
    () => scrollHours(-1), // Swipe right = previous items
    75 // Threshold in pixels (adjust as needed)
  );

  const dailyScrollRef = useTouchScroll(
    () => scrollDays(1), // Swipe left = next items
    () => scrollDays(-1), // Swipe right = previous items
    75 // Threshold in pixels
  );

  useEffect(() => {
    const changeInterval = setInterval(() => {
      // First determine which position to change
      const positionToChange = (changingPosition + 1) % 3;

      // Set the changing position first
      setChangingPosition(positionToChange);

      // Then immediately update the emoji at that position
      setEmojiIndices((prevIndices) => {
        const newIndices = [...prevIndices];
        const currentIndex = prevIndices[positionToChange];

        // Find a new emoji that isn't currently displayed
        let nextIndex = (currentIndex + 3) % emojis.length;
        while (prevIndices.includes(nextIndex)) {
          nextIndex = (nextIndex + 1) % emojis.length;
        }

        // Update the emoji at the changing position
        newIndices[positionToChange] = nextIndex;
        return newIndices;
      });
    }, 1500); // Change every 1.5 seconds

    return () => clearInterval(changeInterval);
  }, [changingPosition]);

  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const [currentLocationData, setCurrentLocationData] = useState(null); // Track current location data

  // New state for emoji animation
  const [displayedEmojis, setDisplayedEmojis] = useState([]);

  // Determine if current location is already in favorites
  const isAlreadyInFavorites = currentLocationData
    ? favorites.some(
        (fav) =>
          fav.lat === currentLocationData.lat &&
          fav.lon === currentLocationData.lon
      )
    : false;

  const [isUsingCurrentLocation, setIsUsingCurrentLocation] = useState(true);

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
      // Check if we're already showing current location
      if (isUsingCurrentLocation) return; // Already showing current location
      // Only fetch current location if we're not already showing it
      setIsUsingCurrentLocation(true);
      getLocation();
      setCurrentLocationData(null);
      setShowComponents(false);
    } else {
      // Only update if coordinates changed
      setIsUsingCurrentLocation(false);

      showPosition(parseFloat(selectedLatitude), parseFloat(selectedLongitude));
      setShowComponents(false);

      // Set currentLocationData for the selected favorite locationac
      const locationData = {
        lat: parseFloat(selectedLatitude),
        lon: parseFloat(selectedLongitude),
        name: selectedName,
        country: selectedCountry,
        state: selectedState,
      };
      setCurrentLocationData(locationData);

      // Fetch and display altitude
      fetchAltitude(locationData.lat, locationData.lon).then(
        (altitudeValue) => {
          const altitudeString =
            altitudeValue !== undefined ? `${altitudeValue}m` : "N/A";
          if (locationElement) {
            locationElement.innerHTML = `
                Latitude: ${locationData.lat.toFixed(1)}°<br>
                Longitude: ${locationData.lon.toFixed(1)}°<br>
                Altitude: ${altitudeString}`;
          }
        }
      );
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

  const hoursToShow = 3; // Number of hours to display at a time
  const daysToShow = 3; // Number of days to display at a time
  const hourlyDataLength = 12;
  const dailyDataLength = weatherData?.daily?.length || 0;

  const scrollHours = (direction) => {
    setHourIndex((prevIndex) => {
      const newIndex = prevIndex + direction * hoursToShow;
      // Calculate the maximum valid starting index
      const maxIndex =
        hourlyDataLength > 0 ? Math.max(0, hourlyDataLength - hoursToShow) : 0;
      // Clamp the new index between 0 and the maxIndex
      return Math.max(0, Math.min(newIndex, maxIndex));
    });
  };

  const scrollDays = (direction) => {
    setDayIndex((prevIndex) => {
      const newIndex = prevIndex + direction * daysToShow;
      const maxIndex = dailyDataLength > 0 ? dailyDataLength - hoursToShow : 0;
      return Math.max(0, Math.min(newIndex, maxIndex));
    });
  };

  const selectFoundLocation = async (location) => {
    const { lat, lon, name, country, state } = location;
    setLatitude(lat);
    setLongitude(lon);
    setSelectedLocation(`${name}, ${state || ""} ${country}`);

    // Fetch the altitude first to ensure the display is updated immediately.
    const altitudeValue = await fetchAltitude(lat, lon);
    const altitudeString =
      altitudeValue !== undefined ? `${altitudeValue}m` : "N/A";

    if (locationElement && name && country) {
      locationElement.innerHTML = `Location: ${name}, ${
        state || ""
      } ${country}<br>
      Latitude: ${lat.toFixed(1)}°<br>
      Longitude: ${lon.toFixed(1)}°<br>
      Altitude: ${altitudeString}`;
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

  const getLocationByIp = async () => {
    setGeoLocationError(""); // Clear previous errors
    try {
      // Using a free IP geolocation API as a fallback
      const response = await fetch("https://ipapi.co/json/");
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      const data = await response.json();
      if (data.error) {
        throw new Error(data.reason);
      }

      const { latitude, longitude, city, region, country_name } = data;
      showPosition(latitude, longitude);

      // Also update the location name if possible
      const locationName = `${city}, ${region} ${country_name}`;
      setSelectedLocation(locationName);
      setCurrentLocationData({
        lat: latitude,
        lon: longitude,
        name: city,
        state: region,
        country: country_name,
      });
    } catch (error) {
      setGeoLocationError(
        `Could not get location via IP. Please search for a location manually. Error: ${error.message}`
      );
    } finally {
      setLoadingLocation(false);
    }
  };

  const getLocation = async () => {
    setLoadingLocation(true);
    // Introduce an artificial delay to test the loading state
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    const elementsToHide = document.getElementsByClassName("toHide");

    if (navigator.geolocation) {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        // timeout: 1, // Temporarily set to 1ms to force a timeout for testing
        maximumAge: 0,
      };

      navigator.geolocation.getCurrentPosition(
        (position) => {
          showPosition(position.coords.latitude, position.coords.longitude);
          setLoadingLocation(false);
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            showError(error);
            setLoadingLocation(false);
          } else {
            console.warn(
              `Geolocation API failed: ${error.message}. Falling back to IP-based location.`
            );
            getLocationByIp();
          }
        },
        options
      );

      for (let i = 0; i < elementsToHide.length; i++) {
        elementsToHide[i].style.display = "none";
      }
      setSelectVisible(true);
    } else {
      setGeoLocationError(
        "Sorry, geolocation is not supported by this browser. Falling back to IP-based location."
      );
      // Fallback if geolocation API is not supported at all
      getLocationByIp();
    }
  };

  const showError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        setGeoLocationError(
          "You denied the request for Geolocation. Please enable location access in your browser settings."
        );
        break;
      case error.POSITION_UNAVAILABLE:
        setGeoLocationError(
          "Sorry, your location information is unavailable. Please try again."
        );
        break;
      case error.TIMEOUT:
        setGeoLocationError(
          "Sorry, the request to get your location timed out. Please try again."
        );
        break;
      default:
        setGeoLocationError("Sorry, an unknown error occurred.");
        break;
    }
  };

  const showPosition = async (latitude, longitude) => {
    setLatitude(latitude);
    setLongitude(longitude);

    setLocationInfo((prev) => ({
      ...prev,
      latitude: latitude.toFixed(1),
      longitude: longitude.toFixed(1),
    }));

    try {
      const altitudeValue = await fetchAltitude(latitude, longitude);
      if (!loadingAltitude) {
        setLocationInfo((prev) => ({
          ...prev,
          altitude: altitudeValue !== undefined ? altitudeValue + "m" : "N/A",
        }));
      }
    } catch (error) {
      console.error("Error fetching altitude:", error);
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
  const totalHourPages =
    hourlyDataLength > 0 ? Math.ceil(hourlyDataLength / hoursToShow) : 0;
  const totalDayPages = Math.ceil(weatherData?.daily?.length / daysToShow);
  const currentHourPage = Math.floor(hourIndex / hoursToShow);
  const currentDayPage = Math.floor((dayIndex + 1) / daysToShow);

  // Emoji animation effect
  useEffect(() => {
    let timeout;
    if (displayedEmojis.length < emojis.length) {
      timeout = setTimeout(() => {
        setDisplayedEmojis([
          ...displayedEmojis,
          emojis[displayedEmojis.length],
        ]);
      }, 300); // Adjust the delay (in milliseconds) between each emoji
    }
    return () => clearTimeout(timeout);
  }, [displayedEmojis]);

  return (
    <div>
      <Container className="toHide">
        <Header>Welcome to the Geolocation Weather App</Header>
        <EmojiContainer>
          {emojiIndices.map((emojiIndex, index) => (
            <EmojiWrapper key={index}>
              <Emoji
                ref={(el) => (emojiRefs.current[index] = el)}
                className={changingPosition === index ? "changing" : ""}
              >
                {emojis[emojiIndex]}
              </Emoji>
            </EmojiWrapper>
          ))}
        </EmojiContainer>
        <p>
          Please click the button to get your coordinates, weather and more...
        </p>
        <br />
        <p>Location permission must be granted at request.</p>
        <br />
        <Button onClick={getLocation}>Try It</Button>
      </Container>
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
      {!loadingLocation && selectVisible && !geoLocationError && (
        <ContainerWrapper></ContainerWrapper>
      )}
      {geoLocationError && <ErrorMessage>{geoLocationError}</ErrorMessage>}
      {errorAQI && <ErrorMessage>{errorAQI}</ErrorMessage>}
      {altitudeError && <ErrorMessage>{altitudeError}</ErrorMessage>}
      {!geoLocationError && (
        <ContainerWrapper>
          {!loadingLocation && selectVisible && !geoLocationError && (
            <Container>
              <p id="location">
                Latitude: {locationInfo.latitude}°<br />
                Longitude: {locationInfo.longitude}°<br />
                {locationInfo.altitude && `Altitude: ${locationInfo.altitude}`}
              </p>
              <br />
              {/* Toggle between Add and Remove button */}
              {currentLocationData && (
                <Button
                  onClick={
                    isAlreadyInFavorites
                      ? () => removeFavorite(currentLocationData)
                      : () => addFavorite(currentLocationData)
                  }
                >
                  {isAlreadyInFavorites
                    ? "Remove from Favorites"
                    : "Add to Favorites"}
                </Button>
              )}

              <WeatherMap latitude={latitude} longitude={longitude} />
            </Container>
          )}
          {!loadingLocation && !errorAQI && !loadingAQI && aqi && (
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
                    more <FontAwesomeIcon icon={faChevronDown} />
                  </>
                ) : (
                  <>
                    less <FontAwesomeIcon icon={faChevronUp} />
                  </>
                )}
              </Button>
            </Container>
          )}

          {!loadingWeather &&
            !loadingLocation &&
            !loadingAQI &&
            weatherData && (
              <>
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
                            getUVIndexCategory(weatherData.current.uvi) ===
                            "Low"
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
                      <span>
                        {" "}
                        {getUVIndexCategory(weatherData.current.uvi)}
                      </span>
                    </p>
                    <br />
                    <p>
                      Wind: {Math.round(weatherData.current.wind_speed * 3.6)}{" "}
                      Km/h from{" "}
                      {degreesToDirection(weatherData.current.wind_deg)}{" "}
                      <WindArrow
                        $deg={weatherData.current.wind_deg}
                        $windspeed={weatherData.current.wind_speed * 3.6}
                      />
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
                      {" "}
                      Sunset:{" "}
                      {new Date(
                        (weatherData.current.sunset +
                          weatherData.timezone_offset) *
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
                  </Container>
                )}
                {weatherData.alerts && weatherData.alerts.length > 0 && (
                  <Container>
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
                  </Container>
                )}

                {weatherData.hourly && (
                  <Container>
                    <h3>Hourly:</h3>
                    <p>
                      Timezone {weatherData.timezone}: GMT
                      {weatherData.timezone_offset > 0 && "+"}
                      {weatherData.timezone_offset / 3600}
                    </p>
                    <ListWithArrowsWrapper
                      ref={hourlyScrollRef}
                      $index={hourIndex}
                      $itemsToShow={hoursToShow}
                    >
                      <ul>
                        {weatherData.hourly.map((hour, index) => (
                          <li key={index}>
                            <b>
                              {new Date(
                                (hour.dt + weatherData.timezone_offset) * 1000
                              )
                                .toISOString()
                                .substring(11, 16)}
                            </b>
                            <br />
                            <br />
                            <div>
                              <FontAwesomeIcon icon={faThermometerHalf} />{" "}
                              {Math.round(hour.temp)}°C{" "}
                            </div>
                            <br />
                            Feels like:
                            <div>{Math.round(hour.feels_like)}°C</div> <br />
                            Precipitation:{" "}
                            <div>{Math.round(hour.pop * 100)}%</div> <br />
                            Humidity: <div>{hour.humidity}%</div>
                            <br />
                            Wind:{" "}
                            <div>{Math.round(hour.wind_speed * 3.6)} Km/h</div>
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
                        {/* Left Arrow Button */}
                        <Button
                          onClick={() => scrollHours(-1)}
                          disabled={hourIndex === 0}
                          className={hourIndex === 0 ? "disabled" : ""}
                        >
                          <FontAwesomeIcon icon={faChevronLeft} />
                        </Button>

                        {/* Right Arrow Button */}
                        <Button
                          onClick={() => scrollHours(1)}
                          disabled={hourIndex + hoursToShow >= hourlyDataLength}
                          className={
                            hourIndex + hoursToShow >= hourlyDataLength
                              ? "disabled"
                              : ""
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

                {weatherData.daily && (
                  <Container>
                    <h3>Daily:</h3>
                    <ListWithArrowsWrapper
                      $index={dayIndex}
                      ref={dailyScrollRef}
                      $itemsToShow={daysToShow}
                    >
                      <ul>
                        {weatherData.daily.map((day, index) => {
                          const date = new Date(
                            day.dt * 1000
                          ).toLocaleDateString("en-US", {
                            weekday: "short",
                            month: "short",
                            day: "numeric",
                          });

                          return (
                            <li key={index}>
                              <b>
                                {index === 0 && dayIndex === 0 ? "Today" : date}
                              </b>
                              <br /> <br />
                              {Math.round(day.temp.min)}{" "}
                              <FontAwesomeIcon icon={faThermometerHalf} />{" "}
                              {Math.round(day.temp.max)}°C
                              <br /> <br />
                              Precipitation:{" "}
                              <div>{parseInt(day.pop * 100)}%</div>
                              <br />
                              <SunMoonTimes
                                sunrise={day.sunrise}
                                sunset={day.sunset}
                                moonrise={day.moonrise}
                                moonset={day.moonset}
                                timezoneOffset={weatherData.timezone_offset}
                              />
                              <br />
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
              </>
            )}
        </ContainerWrapper>
      )}
    </div>
  );
}
