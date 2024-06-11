import React, { useState, useEffect } from "react";
import { getWeatherData } from "../components/getWeatherData/getWeatherData";
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
  const [selectVisible, setSelectVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loadingWeather, setLoadingWeater] = useState(false);
  const [loadingLocation, setLoadingLocation] = useState(false);

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
      // }, 5000);
    } else {
      setErrorMessage("Geolocation is not supported by this browser.");
      setLoadingLocation(false);
    }
  };

  const showPosition = (latitude, longitude) => {
    setLatitude(latitude);
    setLongitude(longitude);

    let latlon = latitude + "," + longitude;
    let img_url =
      "https://maps.googleapis.com/maps/api/staticmap?center=" +
      latlon +
      "&zoom=13&size=350x200&sensor=false&key=AIzaSyDOkBlOAJdoASnvwDn38G0mU9TJo5dcjXI";
    document.getElementById("location").innerHTML =
      "Latitude: " +
      latitude.toFixed(2) +
      "°" +
      "<br>Longitude: " +
      longitude.toFixed(2) +
      "°";
    document.getElementById("mapholder").src = img_url;
    setLoadingLocation(false);
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
      setLoadingWeater(true); // Start loading
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
        setLoadingWeater(false); // Stop loading
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
    <>
      <h2>Geolocation Weather App</h2>
      <p className="toHide">
        Click the button to get your coordinates and weather.
      </p>
      <p className="toHide">Location permission must be accepted.</p>
      <Button onClick={getLocation} className="toHide">
        Try It
      </Button>
      {loadingLocation && <p>Loading location data...</p>}
      {!loadingLocation && selectVisible && (
        <Select
          onChange={(e) => {
            const selectedIndex = e.target.selectedIndex;
            const selectedOption = e.target.options[selectedIndex];
            const selectedLatitude = selectedOption.getAttribute("latitude");
            const selectedLongitude = selectedOption.getAttribute("longitude");
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
          <option latitude={latitude} longitude={longitude}>
            Select favorite location
          </option>
          <option latitude="current" longitude="current">
            Current Location
          </option>
          <option latitude="45.768739" longitude="23.641838">
            Dobra
          </option>
          <option latitude="45.806776" longitude="24.146329">
            Sibiu
          </option>
          <option latitude="42.83695" longitude="-84.60515">
            Dewitt, USA
          </option>
        </Select>
      )}

      <p id="location"></p>
      <Map id="mapholder"></Map>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <div>
        {loadingWeather && <p>Loading weather data...</p>}
        {!loadingWeather &&
          !loadingLocation &&
          weatherData &&
          weatherData.current && (
            <div>
              <br />
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
                <p>Wind Speed: {weatherData.current.wind_speed} km/h</p>
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
                  <span>
                    {getPressureCategory(weatherData.current.pressure)}
                  </span>
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
                <p>Description: {weatherData.current.weather[0].description}</p>
                <br />
                <AnimatedIcon
                  src={`https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}
                  alt="Weather Icon"
                />
                {weatherData &&
                  weatherData.alerts &&
                  weatherData.alerts.length > 0 && (
                    <div>
                      {weatherData.alerts.map((alert, index) => (
                        <Alert key={index}>
                          <h3>Weather Alert:</h3>
                          <p>
                            <strong>Sender:</strong> {alert.sender_name}
                          </p>

                          <p>
                            <strong>Start:</strong>{" "}
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
                          <p>
                            <strong>End:</strong>{" "}
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
                          <p>
                            <strong>Event:</strong> {alert.event}
                          </p>
                          <p>
                            <strong>Description:</strong> {alert.description}
                          </p>
                        </Alert>
                      ))}
                    </div>
                  )}
              </Container>
              <br />
              <Container>
                <h3>Hourly Forecast:</h3>
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
                      {hour.temp}°C, {hour.weather[0].description}{" "}
                      <AnimatedIcon
                        src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
                        alt="Hourly Weather Icon"
                      />
                    </li>
                  ))}
                </ul>
              </Container>
              <br />
              <Container>
                <h3>Daily Forecast:</h3>
                <ul>
                  {weatherData.daily.slice(0, 5).map((day, index) => (
                    <li key={index}>
                      <b>
                        {new Date(day.dt * 1000).toLocaleDateString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                        })}
                      </b>
                      :<br /> Min: {day.temp.min}°C - Max: {day.temp.max}°C{" "}
                      <br />
                      Probability of precipitation: {parseInt(day.pop * 100)}%
                      <br />
                      {day.summary}
                      <br />
                      <AnimatedIcon
                        src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                        alt="Weather Icon"
                      ></AnimatedIcon>
                    </li>
                  ))}
                </ul>
              </Container>
              <br />
            </div>
          )}
      </div>
    </>
  );
}
