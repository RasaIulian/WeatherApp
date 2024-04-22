import React, { useState, useEffect } from "react";
import { getWeatherData } from "../components/getWeatherData/getWeatherData";
import { AnimatedIcon, Button, Map, Square } from "./Homepage.style";

export function Homepage() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  const getLocation = () => {
    const elementsToHide = document.getElementsByClassName("toHide");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
      for (let i = 0; i < elementsToHide.length; i++) {
        elementsToHide[i].style.display = "none";
      }
    } else {
      document.getElementById("demo").innerHTML =
        "Geolocation is not supported by this browser.";
    }
  };

  const showPosition = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);

    let latlon = position.coords.latitude + "," + position.coords.longitude;
    let img_url =
      "https://maps.googleapis.com/maps/api/staticmap?center=" +
      latlon +
      "&zoom=13&size=350x200&sensor=false&key=AIzaSyDOkBlOAJdoASnvwDn38G0mU9TJo5dcjXI";
    document.getElementById("demo").innerHTML =
      "Latitude: " +
      position.coords.latitude.toFixed(2) +
      "°" +
      "<br>Longitude: " +
      position.coords.longitude.toFixed(2) +
      "°";
    document.getElementById("mapholder").src = img_url;
  };

  const showError = (error) => {
    switch (error.code) {
      default:
        document.getElementById("demo").innerHTML = "Unknown error";
        break;
      case error.PERMISSION_DENIED:
        document.getElementById("demo").innerHTML =
          "You denied the request for GeoLocation.";
        break;
      case error.POSITION_UNAVAILABLE:
        document.getElementById("demo").innerHTML =
          "Location information is unavailable.";
        break;
      case error.TIMEOUT:
        document.getElementById("demo").innerHTML =
          "The request to get user location timed out.";
        break;
      case error.UNKNOWN_ERROR:
        document.getElementById("demo").innerHTML =
          "An unknown error occurred.";
        break;
    }
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await getWeatherData(latitude, longitude);
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    if (latitude && longitude) {
      fetchWeatherData();
    }
  }, [latitude, longitude]);
  //   console.log(weatherData);

  // UV-Index categorize
  function getUVIndexCategory(uvIndex) {
    if (uvIndex >= 1 && uvIndex <= 2) {
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
      <p id="demo"></p>
      <Map id="mapholder"></Map>
      <div>
        {weatherData && weatherData.current && (
          <div>
            <h3>Current Weather conditions:</h3>
            <p>Temperature: {weatherData.current.temp}°C</p>
            <p>Feels Like: {weatherData.current.feels_like}°C</p>
            <p>
              UV index: {weatherData.current.uvi} -
              <Square
                style={{
                  backgroundColor:
                    getUVIndexCategory(weatherData.current.uvi) === "Low"
                      ? "#2ecc71" // green
                      : getUVIndexCategory(weatherData.current.uvi) ===
                        "Moderate"
                      ? "#f1c40f" // yellow
                      : getUVIndexCategory(weatherData.current.uvi) === "High"
                      ? "#e67e22" // orange
                      : getUVIndexCategory(weatherData.current.uvi) ===
                        "Very High"
                      ? "#e74c3c" // red
                      : "#8e44ad", // purple for Extreme or Unknown
                }}
              ></Square>
              <span> {getUVIndexCategory(weatherData.current.uvi)}</span>
            </p>

            <p>Wind Speed: {weatherData.current.wind_speed} km/h</p>
            <p>Humidity: {weatherData.current.humidity}%</p>
            <p>
              Atm. Pressure: {weatherData.current.pressure} mbar -{" "}
              <span>{getPressureCategory(weatherData.current.pressure)}</span>
            </p>
            <p>
              Sunrise:{" "}
              {new Date(
                weatherData.current.sunrise * 1000
              ).toLocaleTimeString()}
            </p>
            <p>
              Sunset:{" "}
              {new Date(weatherData.current.sunset * 1000).toLocaleTimeString()}
            </p>
            <p>Description: {weatherData.current.weather[0].description}</p>

            <AnimatedIcon
              src={`https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}
              alt="Weather Icon"
            />
            <h3>Hourly Forecast</h3>
            <ul>
              {weatherData.hourly.slice(0, 10).map((hour, index) => (
                <li key={index}>
                  {new Date(hour.dt * 1000).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                  : {hour.temp}°C
                </li>
              ))}
            </ul>
            <br />
            <h3>Daily Forecast</h3>
            <ul>
              {weatherData.daily.slice(0, 5).map((day, index) => (
                <li key={index}>
                  {new Date(day.dt * 1000).toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}
                  :<br /> Min: {day.temp.min}°C - Max: {day.temp.max}°C <br />
                  {day.summary}
                  <br />
                  <AnimatedIcon
                    src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                    alt="Weather Icon"
                  ></AnimatedIcon>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
