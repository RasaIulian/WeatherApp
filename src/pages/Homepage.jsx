import React, { useState, useEffect } from "react";
import { getWeatherData } from "../components/getWeatherData/getWeatherData";
import { AnimatedIcon, Button, Map, Square, Select } from "./Homepage.style";

export function Homepage() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [selectVisible, setSelectVisible] = useState(false);

  const getLocation = () => {
    const elementsToHide = document.getElementsByClassName("toHide");

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) =>
          showPosition(position.coords.latitude, position.coords.longitude),
        showError
      );
      for (let i = 0; i < elementsToHide.length; i++) {
        elementsToHide[i].style.display = "none";
      }
      setSelectVisible(true);
    } else {
      document.getElementById("demo").innerHTML =
        "Geolocation is not supported by this browser.";
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
    document.getElementById("demo").innerHTML =
      "Latitude: " +
      latitude.toFixed(2) +
      "°" +
      "<br>Longitude: " +
      longitude.toFixed(2) +
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
      {selectVisible && (
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
            Select from Favorites
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
      <p id="demo"></p>
      <Map id="mapholder"></Map>
      <div>
        {weatherData && weatherData.current && (
          <div>
            <br />
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
                        ? "#4eb400" // green
                        : getUVIndexCategory(weatherData.current.uvi) ===
                          "Moderate"
                        ? "#f7e400" // yellow
                        : getUVIndexCategory(weatherData.current.uvi) === "High"
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
                {new Date(
                  weatherData.current.sunset * 1000
                ).toLocaleTimeString()}
              </p>
              <p>Description: {weatherData.current.weather[0].description}</p>

              <AnimatedIcon
                src={`https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}
                alt="Weather Icon"
              />
            </div>
            <br />
            <div>
              <h3>Hourly Forecast:</h3>
              <ul>
                {weatherData.hourly.slice(0, 10).map((hour, index) => (
                  <li key={index}>
                    <b>
                      {new Date(hour.dt * 1000).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </b>
                    : {hour.temp}°C, {hour.weather[0].description}{" "}
                    <AnimatedIcon
                      src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
                      alt="Hourly Weather Icon"
                    />
                  </li>
                ))}
              </ul>
            </div>
            <br />
            <div>
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
          </div>
        )}
      </div>
    </>
  );
}
