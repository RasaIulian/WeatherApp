import React, { useState, useEffect } from "react";
import { getWeatherData } from "../hooks/getWeatherData/getWeatherData";
import { useAltitude } from "../hooks/getAltitude/getAltitude";
import { useAirQuality } from "../hooks/getAirQuality/getAirQuality";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  AnimatedIcon,
  Button,
  Map,
  Square,
  Select,
  Alert,
  ErrorMessage,
  WindArrow,
} from "./Homepage.style";

export function Homepage() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectVisible, setSelectVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loadingWeather, setLoadingWeather] = useState(false);
  const [loadingLocation, setLoadingLocation] = useState(false);

  const { fetchAltitude, loadingAltitude, altitudeError } = useAltitude(); // Destructure the custom hook
  const {
    aqi,
    components,
    loadingAQI,
    errorAQI,
    getAQICategory,
    getAQIColor,
    categorizeComponent,
  } = useAirQuality(latitude, longitude);
  const [showComponents, setShowComponents] = useState(false);

  const toggleShowComponents = () => {
    setShowComponents(!showComponents);
  };

  // useEffect(() => {
  //   console.log(`Loading weather data: ${loadingWeather}`);
  // }, [loadingWeather]);

  // useEffect(() => {
  //   console.log(`Loading location data: ${loadingLocation}`);
  // }, [loadingLocation]);

  const getLocation = () => {
    setLoadingLocation(true);
    const elementsToHide = document.getElementsByClassName("toHide");

    if (navigator.geolocation) {
      // setTimeout(() => {
      navigator.geolocation.getCurrentPosition(
        (position) =>
          showPosition(position.coords.latitude, position.coords.longitude),
        showError
      );
      for (let i = 0; i < elementsToHide.length; i++) {
        elementsToHide[i].style.display = "none";
      }
      setSelectVisible(true);
      setLoadingLocation(false);
      // }, 5000);
    } else {
      setErrorMessage("Geolocation is not supported by this browser.");
      setLoadingLocation(false);
    }
  };

  const showPosition = async (latitude, longitude) => {
    setLatitude(latitude);
    setLongitude(longitude);

    try {
      const altitudeValue = await fetchAltitude(latitude, longitude);

      let latlon = latitude + "," + longitude;
      let img_url =
        "https://maps.googleapis.com/maps/api/staticmap?center=" +
        latlon +
        "&zoom=15&size=470x250&sensor=false&key=AIzaSyDOkBlOAJdoASnvwDn38G0mU9TJo5dcjXI";

      const locationElement = document.getElementById("location");
      const mapElement = document.getElementById("mapholder");

      if (locationElement && mapElement) {
        locationElement.innerHTML =
          "Latitude: " +
          latitude.toFixed(1) +
          "°" +
          "<br>Longitude: " +
          longitude.toFixed(1) +
          "°" +
          "<br>Altitude: " +
          altitudeValue +
          "m";

        mapElement.src = img_url;
      }
    } catch (error) {
      console.error("Error fetching altitude data:", error);
    }
  };

  const showError = (error) => {
    switch (error.code) {
      default:
        setErrorMessage("Unknown error");
        break;
      case error.PERMISSION_DENIED:
        setErrorMessage("You denied the request for GeoLocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        setErrorMessage("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        setErrorMessage("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        setErrorMessage("An unknown error occurred.");
        break;
    }
    setLoadingLocation(false);
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoadingWeather(true); // Start loading
      try {
        // Introduce an artificial delay to check loading state
        // await new Promise((resolve) => setTimeout(resolve, 5000));

        const data = await getWeatherData(latitude, longitude);
        setWeatherData(data);
        setErrorMessage(""); // Clear the error message on successful fetch
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setErrorMessage(`Error fetching weather data: ${error.message}`); // Set the error message
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

  return (
    <div>
      <h2>Geolocation Weather App</h2>
      <p className="toHide">
        Click the button to get your coordinates and weather.
      </p>
      <p className="toHide">Location permission must be accepted.</p>
      <Button onClick={getLocation} className="toHide">
        Try It
      </Button>
      {altitudeError && <ErrorMessage>{altitudeError}</ErrorMessage>}
      {loadingAltitude && !altitudeError && <p>Loading altitude data...</p>}
      {loadingLocation && !loadingAltitude && !altitudeError && (
        <p>Loading location data...</p>
      )}
      {loadingAQI && <p>Loading air quality...</p>}
      {!loadingLocation && !loadingAltitude && selectVisible && (
        <Select
          value={selectedLocation}
          onChange={(e) => {
            const selectedIndex = e.target.selectedIndex;
            const selectedOption = e.target.options[selectedIndex];
            const selectedLatitude = selectedOption.getAttribute("latitude");
            const selectedLongitude = selectedOption.getAttribute("longitude");
            setSelectedLocation(selectedOption.text);
            if (
              selectedLatitude === "current" &&
              selectedLongitude === "current"
            ) {
              // Get current location using getLocation function
              getLocation();
            } else {
              showPosition(
                parseFloat(selectedLatitude),
                parseFloat(selectedLongitude)
              );
            }
          }}
        >
          {selectedLocation === "" && (
            <option value="">Select favorite location</option>
          )}
          <option latitude="current" longitude="current">
            Current Location
          </option>
          <option latitude="45.768739" longitude="23.641838">
            Dobra, RO
          </option>
          <option latitude="45.806776" longitude="24.146329">
            Sibiu, RO
          </option>
          <option latitude="44.4268" longitude="26.1025">
            Bucharest, RO
          </option>

          <option latitude="48.8566" longitude="2.3522">
            Paris, FR
          </option>

          <option latitude="52.5200" longitude="13.4050">
            Berlin, DE
          </option>
          <option latitude="42.836948" longitude="-84.605148">
            Dewitt, USA
          </option>
        </Select>
      )}

      <div>
        <p id="location"></p>
        <Map id="mapholder"></Map>
      </div>

      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <div>
        {loadingWeather && <p>Loading weather data...</p>}
        {!loadingWeather &&
          !loadingLocation &&
          !loadingAltitude &&
          !loadingAQI &&
          weatherData && (
            <div>
              <br />
              {aqi !== null && !loadingAQI && !errorAQI && (
                <Container>
                  <h3>Air Quality:</h3>
                  <p>
                    AQI: {aqi} - {getAQICategory(aqi)}
                  </p>

                  <br />
                  <Button onClick={toggleShowComponents}>
                    <FontAwesomeIcon
                      icon={faWind}
                      style={{ color: getAQIColor(aqi) }}
                    />
                  </Button>
                  {!showComponents && (
                    <div>
                      <p>
                        * Click icon for air components concentration details
                      </p>
                    </div>
                  )}
                  {showComponents && (
                    <div>
                      <p>
                        SO₂ - Sulphur dioxide: {components.so2} μg/m3 (
                        {categorizeComponent("so2", components.so2)})
                      </p>
                      <br />
                      <p>
                        NO₂ - Nitrogen dioxide: {components.no2} μg/m3 (
                        {categorizeComponent("no2", components.no2)})
                      </p>
                      <br />
                      <p>
                        PM10 - Coarse particulate matter: {components.pm10}{" "}
                        μg/m3 ({categorizeComponent("pm10", components.pm10)})
                      </p>
                      <br />
                      <p>
                        PM2.5 - Fine particles matter: {components.pm2_5} μg/m3
                        ({categorizeComponent("pm2_5", components.pm2_5)})
                      </p>
                      <br />
                      <p>
                        O₃ - Ozone: {components.o3} μg/m3 (
                        {categorizeComponent("o3", components.o3)})
                      </p>
                      <br />
                      <p>
                        CO - Carbon monoxide: {components.co} μg/m3 (
                        {categorizeComponent("co", components.co)})
                      </p>
                      <br />
                      <p>
                        NO - Nitrogen monoxide: {components.no} μg/m3 (
                        {categorizeComponent("no", components.no)})
                      </p>
                      <br />
                      <p>
                        NH3 - Ammonia: {components.nh3} μg/m3 (
                        {categorizeComponent("nh3", components.nh3)})
                      </p>
                    </div>
                  )}
                </Container>
              )}
              <br />
              {errorAQI && <ErrorMessage>{errorAQI}</ErrorMessage>}

              {weatherData.current && (
                <Container>
                  <h3>Current Weather conditions:</h3>
                  <p>Temperature: {weatherData.current.temp}°C</p> <br />
                  <p>Feels Like: {weatherData.current.feels_like}°C</p>
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
                  <p>Wind Speed: {weatherData.current.wind_speed} m/s</p>
                  <br />
                  <p>
                    Wind Direction:{" "}
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
                      weatherData.current.sunrise * 1000
                    ).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                  <br />
                  <p>
                    Sunset:{" "}
                    {new Date(
                      weatherData.current.sunset * 1000
                    ).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                  <br />
                  <p>
                    Description: {weatherData.current.weather[0].description}
                  </p>
                  <br />
                  <AnimatedIcon
                    src={`https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}
                    alt="Weather Icon"
                  />
                  {weatherData.alerts && weatherData.alerts.length > 0 && (
                    <div>
                      {weatherData.alerts.map((alert, index) => (
                        <Alert key={index}>
                          <h3>Weather Alert:</h3>
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
                            {new Date(alert.end * 1000).toLocaleString(
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
                            <strong>Event:&nbsp;</strong> {alert.event}
                          </p>
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
                  <h3>Hourly Forecast:</h3>
                  <p>*pop = probability of precipitation</p>
                  <ul>
                    {weatherData.hourly.slice(0, 10).map((hour, index) => (
                      <li key={index}>
                        <b>
                          {new Date(hour.dt * 1000).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                          :{" "}
                        </b>
                        {hour.temp}°C, pop: {Math.round(hour.pop * 100)}
                        %, {hour.weather[0].description}
                        <AnimatedIcon
                          src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
                          alt="Hourly Weather Icon"
                        />
                      </li>
                    ))}
                  </ul>
                </Container>
              )}
              <br />
              {weatherData.daily && (
                <Container>
                  <h3>Daily Forecast:</h3>
                  <ul>
                    {weatherData.daily.slice(0, 5).map((day, index) => {
                      const date = new Date(day.dt * 1000);
                      const dateString = date.toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      });

                      let displayDate;
                      if (index === 0) {
                        displayDate = "Today - " + dateString;
                      } else if (index === 1) {
                        displayDate = "Tomorrow - " + dateString;
                      } else {
                        displayDate = dateString;
                      }
                      return (
                        <li key={index}>
                          <b>{displayDate}:</b>
                          <br /> Min: {day.temp.min}°C - Max: {day.temp.max}°C
                          <br />
                          Probability of precipitation:{" "}
                          {parseInt(day.pop * 100)}%
                          <br />
                          {day.summary}
                          <br />
                          <AnimatedIcon
                            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                            alt="Weather Icon"
                          ></AnimatedIcon>
                        </li>
                      );
                    })}
                  </ul>
                </Container>
              )}
              <br />
            </div>
          )}
      </div>
    </div>
  );
}
