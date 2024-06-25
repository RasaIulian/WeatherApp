// getWeatherData.jsx
// export const getWeatherData = () => {
export const getWeatherData = async (lat, lon) => {
  const api_Key = process.env.REACT_APP_Weather_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${api_Key}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`${data.cod}: ${data.message}`);
    }

    //   LOCAL data for TESTS
    //   const data = {
    //     "lat": 46.0653,
    //     "lon": 23.5917,
    //     "timezone": "Europe/Bucharest",
    //     "timezone_offset": 10800,
    //     "current": {
    //         "dt": 1715250990,
    //         "sunrise": 1715223633,
    //         "sunset": 1715276616,
    //         "temp": 14.45,
    //         "feels_like": 14.35,
    //         "pressure": 1020,
    //         "humidity": 92,
    //         "dew_point": 13.17,
    //         "uvi": 0.48,
    //         "clouds": 100,
    //         "visibility": 10000,
    //         "wind_speed": 3.61,
    //         "wind_deg": 44,
    //         "wind_gust": 4.75,
    //         "weather": [
    //             {
    //                 "id": 804,
    //                 "main": "Clouds",
    //                 "description": "overcast clouds",
    //                 "icon": "04d"
    //             }
    //         ]
    //     },
    //     "hourly": [
    //         {
    //             "dt": 1715248800,
    //             "temp": 14.14,
    //             "feels_like": 14.01,
    //             "pressure": 1020,
    //             "humidity": 92,
    //             "dew_point": 12.86,
    //             "uvi": 0.55,
    //             "clouds": 100,
    //             "visibility": 10000,
    //             "wind_speed": 3.19,
    //             "wind_deg": 39,
    //             "wind_gust": 4.33,
    //             "weather": [
    //                 {
    //                     "id": 500,
    //                     "main": "Rain",
    //                     "description": "light rain",
    //                     "icon": "10d"
    //                 }
    //             ],
    //             "pop": 1,
    //             "rain": {
    //                 "1h": 0.17
    //             }
    //         },
    //         {
    //             "dt": 1715252400,
    //             "temp": 14.45,
    //             "feels_like": 14.35,
    //             "pressure": 1020,
    //             "humidity": 92,
    //             "dew_point": 13.17,
    //             "uvi": 0.48,
    //             "clouds": 100,
    //             "visibility": 10000,
    //             "wind_speed": 3.61,
    //             "wind_deg": 44,
    //             "wind_gust": 4.75,
    //             "weather": [
    //                 {
    //                     "id": 804,
    //                     "main": "Clouds",
    //                     "description": "overcast clouds",
    //                     "icon": "04d"
    //                 }
    //             ],
    //             "pop": 0.8
    //         },
    //         {
    //             "dt": 1715256000,
    //             "temp": 14.04,
    //             "feels_like": 13.88,
    //             "pressure": 1020,
    //             "humidity": 91,
    //             "dew_point": 12.59,
    //             "uvi": 0.34,
    //             "clouds": 100,
    //             "visibility": 10000,
    //             "wind_speed": 4.51,
    //             "wind_deg": 50,
    //             "wind_gust": 5.47,
    //             "weather": [
    //                 {
    //                     "id": 804,
    //                     "main": "Clouds",
    //                     "description": "overcast clouds",
    //                     "icon": "04d"
    //                 }
    //             ],
    //             "pop": 0.8
    //         },
    //         {
    //             "dt": 1715259600,
    //             "temp": 13.29,
    //             "feels_like": 13.05,
    //             "pressure": 1020,
    //             "humidity": 91,
    //             "dew_point": 11.85,
    //             "uvi": 0.2,
    //             "clouds": 100,
    //             "visibility": 10000,
    //             "wind_speed": 4.43,
    //             "wind_deg": 47,
    //             "wind_gust": 6.09,
    //             "weather": [
    //                 {
    //                     "id": 804,
    //                     "main": "Clouds",
    //                     "description": "overcast clouds",
    //                     "icon": "04d"
    //                 }
    //             ],
    //             "pop": 0.34
    //         },
    //         {
    //             "dt": 1715263200,
    //             "temp": 12.56,
    //             "feels_like": 12.27,
    //             "pressure": 1021,
    //             "humidity": 92,
    //             "dew_point": 11.3,
    //             "uvi": 0.15,
    //             "clouds": 100,
    //             "visibility": 10000,
    //             "wind_speed": 3.7,
    //             "wind_deg": 43,
    //             "wind_gust": 6.3,
    //             "weather": [
    //                 {
    //                     "id": 500,
    //                     "main": "Rain",
    //                     "description": "light rain",
    //                     "icon": "10d"
    //                 }
    //             ],
    //             "pop": 0.57,
    //             "rain": {
    //                 "1h": 0.29
    //             }
    //         },
    //         {
    //             "dt": 1715266800,
    //             "temp": 11.79,
    //             "feels_like": 11.45,
    //             "pressure": 1021,
    //             "humidity": 93,
    //             "dew_point": 10.7,
    //             "uvi": 0.1,
    //             "clouds": 100,
    //             "visibility": 10000,
    //             "wind_speed": 3.83,
    //             "wind_deg": 55,
    //             "wind_gust": 7.61,
    //             "weather": [
    //                 {
    //                     "id": 500,
    //                     "main": "Rain",
    //                     "description": "light rain",
    //                     "icon": "10d"
    //                 }
    //             ],
    //             "pop": 0.79,
    //             "rain": {
    //                 "1h": 0.42
    //             }
    //         },
    //         {
    //             "dt": 1715270400,
    //             "temp": 11,
    //             "feels_like": 10.58,
    //             "pressure": 1021,
    //             "humidity": 93,
    //             "dew_point": 9.45,
    //             "uvi": 0.08,
    //             "clouds": 100,
    //             "visibility": 10000,
    //             "wind_speed": 3.96,
    //             "wind_deg": 68,
    //             "wind_gust": 7.31,
    //             "weather": [
    //                 {
    //                     "id": 500,
    //                     "main": "Rain",
    //                     "description": "light rain",
    //                     "icon": "10d"
    //                 }
    //             ],
    //             "pop": 0.99,
    //             "rain": {
    //                 "1h": 0.26
    //             }
    //         },
    //         {
    //             "dt": 1715274000,
    //             "temp": 10.43,
    //             "feels_like": 9.96,
    //             "pressure": 1021,
    //             "humidity": 93,
    //             "dew_point": 8.98,
    //             "uvi": 0.04,
    //             "clouds": 100,
    //             "visibility": 10000,
    //             "wind_speed": 4.06,
    //             "wind_deg": 66,
    //             "wind_gust": 7.25,
    //             "weather": [
    //                 {
    //                     "id": 500,
    //                     "main": "Rain",
    //                     "description": "light rain",
    //                     "icon": "10d"
    //                 }
    //             ],
    //             "pop": 1,
    //             "rain": {
    //                 "1h": 0.29
    //             }
    //         },
    //         {
    //             "dt": 1715277600,
    //             "temp": 9.96,
    //             "feels_like": 8.35,
    //             "pressure": 1022,
    //             "humidity": 93,
    //             "dew_point": 8.46,
    //             "uvi": 0,
    //             "clouds": 100,
    //             "visibility": 10000,
    //             "wind_speed": 3.2,
    //             "wind_deg": 49,
    //             "wind_gust": 6,
    //             "weather": [
    //                 {
    //                     "id": 500,
    //                     "main": "Rain",
    //                     "description": "light rain",
    //                     "icon": "10n"
    //                 }
    //             ],
    //             "pop": 1,
    //             "rain": {
    //                 "1h": 0.18
    //             }
    //         },
    //         {
    //             "dt": 1715281200,
    //             "temp": 9.95,
    //             "feels_like": 8.72,
    //             "pressure": 1023,
    //             "humidity": 90,
    //             "dew_point": 8.14,
    //             "uvi": 0,
    //             "clouds": 100,
    //             "visibility": 10000,
    //             "wind_speed": 2.57,
    //             "wind_deg": 33,
    //             "wind_gust": 4.67,
    //             "weather": [
    //                 {
    //                     "id": 804,
    //                     "main": "Clouds",
    //                     "description": "overcast clouds",
    //                     "icon": "04n"
    //                 }
    //             ],
    //             "pop": 0.04
    //         },
    //         {
    //             "dt": 1715284800,
    //             "temp": 10.04,
    //             "feels_like": 9.42,
    //             "pressure": 1023,
    //             "humidity": 89,
    //             "dew_point": 7.92,
    //             "uvi": 0,
    //             "clouds": 100,
    //             "visibility": 10000,
    //             "wind_speed": 2.47,
    //             "wind_deg": 32,
    //             "wind_gust": 4.71,
    //             "weather": [
    //                 {
    //                     "id": 804,
    //                     "main": "Clouds",
    //                     "description": "overcast clouds",
    //                     "icon": "04n"
    //                 }
    //             ],
    //             "pop": 0.01
    //         },
    //         {
    //             "dt": 1715288400,
    //             "temp": 9.93,
    //             "feels_like": 9.01,
    //             "pressure": 1023,
    //             "humidity": 88,
    //             "dew_point": 7.71,
    //             "uvi": 0,
    //             "clouds": 99,
    //             "visibility": 10000,
    //             "wind_speed": 2.13,
    //             "wind_deg": 32,
    //             "wind_gust": 4.2,
    //             "weather": [
    //                 {
    //                     "id": 804,
    //                     "main": "Clouds",
    //                     "description": "overcast clouds",
    //                     "icon": "04n"
    //                 }
    //             ],
    //             "pop": 0
    //         },
    //         {
    //             "dt": 1715292000,
    //             "temp": 9.92,
    //             "feels_like": 9.21,
    //             "pressure": 1023,
    //             "humidity": 88,
    //             "dew_point": 7.73,
    //             "uvi": 0,
    //             "clouds": 99,
    //             "visibility": 10000,
    //             "wind_speed": 1.87,
    //             "wind_deg": 31,
    //             "wind_gust": 3.56,
    //             "weather": [
    //                 {
    //                     "id": 804,
    //                     "main": "Clouds",
    //                     "description": "overcast clouds",
    //                     "icon": "04n"
    //                 }
    //             ],
    //             "pop": 0
    //         },
    //         {
    //             "dt": 1715295600,
    //             "temp": 9.95,
    //             "feels_like": 9.36,
    //             "pressure": 1023,
    //             "humidity": 88,
    //             "dew_point": 7.69,
    //             "uvi": 0,
    //             "clouds": 100,
    //             "visibility": 10000,
    //             "wind_speed": 1.74,
    //             "wind_deg": 31,
    //             "wind_gust": 3.32,
    //             "weather": [
    //                 {
    //                     "id": 804,
    //                     "main": "Clouds",
    //                     "description": "overcast clouds",
    //                     "icon": "04n"
    //                 }
    //             ],
    //             "pop": 0
    //         },
    //         {
    //             "dt": 1715299200,
    //             "temp": 9.88,
    //             "feels_like": 9.34,
    //             "pressure": 1023,
    //             "humidity": 88,
    //             "dew_point": 7.6,
    //             "uvi": 0,
    //             "clouds": 99,
    //             "visibility": 10000,
    //             "wind_speed": 1.67,
    //             "wind_deg": 38,
    //             "wind_gust": 3.25,
    //             "weather": [
    //                 {
    //                     "id": 804,
    //                     "main": "Clouds",
    //                     "description": "overcast clouds",
    //                     "icon": "04n"
    //                 }
    //             ],
    //             "pop": 0
    //         },
    //         {
    //             "dt": 1715302800,
    //             "temp": 9.84,
    //             "feels_like": 9.37,
    //             "pressure": 1023,
    //             "humidity": 88,
    //             "dew_point": 7.56,
    //             "uvi": 0,
    //             "clouds": 99,
    //             "visibility": 10000,
    //             "wind_speed": 1.59,
    //             "wind_deg": 41,
    //             "wind_gust": 3.02,
    //             "weather": [
    //                 {
    //                     "id": 804,
    //                     "main": "Clouds",
    //                     "description": "overcast clouds",
    //                     "icon": "04n"
    //                 }
    //             ],
    //             "pop": 0
    //         },
    //         {
    //             "dt": 1715306400,
    //             "temp": 9.75,
    //             "feels_like": 9.27,
    //             "pressure": 1022,
    //             "humidity": 89,
    //             "dew_point": 7.53,
    //             "uvi": 0,
    //             "clouds": 99,
    //             "visibility": 10000,
    //             "wind_speed": 1.59,
    //             "wind_deg": 38,
    //             "wind_gust": 2.82,
    //             "weather": [
    //                 {
    //                     "id": 804,
    //                     "main": "Clouds",
    //                     "description": "overcast clouds",
    //                     "icon": "04n"
    //                 }
    //             ],
    //             "pop": 0
    //         },
    //         {
    //             "dt": 1715310000,
    //             "temp": 9.7,
    //             "feels_like": 9.23,
    //             "pressure": 1022,
    //             "humidity": 89,
    //             "dew_point": 7.57,
    //             "uvi": 0,
    //             "clouds": 99,
    //             "visibility": 10000,
    //             "wind_speed": 1.57,
    //             "wind_deg": 39,
    //             "wind_gust": 2.54,
    //             "weather": [
    //                 {
    //                     "id": 804,
    //                     "main": "Clouds",
    //                     "description": "overcast clouds",
    //                     "icon": "04d"
    //                 }
    //             ],
    //             "pop": 0
    //         },
    //         {
    //             "dt": 1715313600,
    //             "temp": 9.99,
    //             "feels_like": 9.66,
    //             "pressure": 1023,
    //             "humidity": 89,
    //             "dew_point": 7.77,
    //             "uvi": 0.06,
    //             "clouds": 99,
    //             "visibility": 10000,
    //             "wind_speed": 1.48,
    //             "wind_deg": 45,
    //             "wind_gust": 2.72,
    //             "weather": [
    //                 {
    //                     "id": 804,
    //                     "main": "Clouds",
    //                     "description": "overcast clouds",
    //                     "icon": "04d"
    //                 }
    //             ],
    //             "pop": 0
    //         },
    //         {
    //             "dt": 1715317200,
    //             "temp": 10.4,
    //             "feels_like": 9.77,
    //             "pressure": 1023,
    //             "humidity": 87,
    //             "dew_point": 8.01,
    //             "uvi": 0.19,
    //             "clouds": 99,
    //             "visibility": 10000,
    //             "wind_speed": 1.35,
    //             "wind_deg": 59,
    //             "wind_gust": 3.09,
    //             "weather": [
    //                 {
    //                     "id": 804,
    //                     "main": "Clouds",
    //                     "description": "overcast clouds",
    //                     "icon": "04d"
    //                 }
    //             ],
    //             "pop": 0
    //         },
    //         {
    //             "dt": 1715320800,
    //             "temp": 11,
    //             "feels_like": 10.35,
    //             "pressure": 1023,
    //             "humidity": 84,
    //             "dew_point": 8,
    //             "uvi": 0.73,
    //             "clouds": 99,
    //             "visibility": 10000,
    //             "wind_speed": 1.76,
    //             "wind_deg": 58,
    //             "wind_gust": 2.93,
    //             "weather": [
    //                 {
    //                     "id": 804,
    //                     "main": "Clouds",
    //                     "description": "overcast clouds",
    //                     "icon": "04d"
    //                 }
    //             ],
    //             "pop": 0
    //         },
    //         {
    //             "dt": 1715324400,
    //             "temp": 12.26,
    //             "feels_like": 11.63,
    //             "pressure": 1023,
    //             "humidity": 80,
    //             "dew_point": 8.46,
    //             "uvi": 1.21,
    //             "clouds": 95,
    //             "visibility": 10000,
    //             "wind_speed": 2.36,
    //             "wind_deg": 58,
    //             "wind_gust": 2.45,
    //             "weather": [
    //                 {
    //                     "id": 804,
    //                     "main": "Clouds",
    //                     "description": "overcast clouds",
    //                     "icon": "04d"
    //                 }
    //             ],
    //             "pop": 0
    //         },
    //         {
    //             "dt": 1715328000,
    //             "temp": 13.22,
    //             "feels_like": 12.56,
    //             "pressure": 1023,
    //             "humidity": 75,
    //             "dew_point": 8.55,
    //             "uvi": 2.33,
    //             "clouds": 98,
    //             "visibility": 10000,
    //             "wind_speed": 2.32,
    //             "wind_deg": 69,
    //             "wind_gust": 2.18,
    //             "weather": [
    //                 {
    //                     "id": 804,
    //                     "main": "Clouds",
    //                     "description": "overcast clouds",
    //                     "icon": "04d"
    //                 }
    //             ],
    //             "pop": 0
    //         },
    //         {
    //             "dt": 1715331600,
    //             "temp": 14.62,
    //             "feels_like": 13.91,
    //             "pressure": 1022,
    //             "humidity": 68,
    //             "dew_point": 8.52,
    //             "uvi": 4.18,
    //             "clouds": 97,
    //             "visibility": 10000,
    //             "wind_speed": 2.01,
    //             "wind_deg": 81,
    //             "wind_gust": 1.79,
    //             "weather": [
    //                 {
    //                     "id": 804,
    //                     "main": "Clouds",
    //                     "description": "overcast clouds",
    //                     "icon": "04d"
    //                 }
    //             ],
    //             "pop": 0
    //         },
    //         {
    //             "dt": 1715335200,
    //             "temp": 16.81,
    //             "feels_like": 16.14,
    //             "pressure": 1022,
    //             "humidity": 61,
    //             "dew_point": 9.07,
    //             "uvi": 4.95,
    //             "clouds": 89,
    //             "visibility": 10000,
    //             "wind_speed": 1.11,
    //             "wind_deg": 105,
    //             "wind_gust": 0.84,
    //             "weather": [
    //                 {
    //                     "id": 804,
    //                     "main": "Clouds",
    //                     "description": "overcast clouds",
    //                     "icon": "04d"
    //                 }
    //             ],
    //             "pop": 0
    //         },
    //         {
    //             "dt": 1715338800,
    //             "temp": 18.02,
    //             "feels_like": 17.39,
    //             "pressure": 1021,
    //             "humidity": 58,
    //             "dew_point": 9.48,
    //             "uvi": 4.56,
    //             "clouds": 84,
    //             "visibility": 10000,
    //             "wind_speed": 0.68,
    //             "wind_deg": 151,
    //             "wind_gust": 0.57,
    //             "weather": [
    //                 {
    //                     "id": 803,
    //                     "main": "Clouds",
    //                     "description": "broken clouds",
    //                     "icon": "04d"
    //                 }
    //             ],
    //             "pop": 0
    //         },
    //         {
    //             "dt": 1715342400,
    //             "temp": 18.74,
    //             "feels_like": 18.13,
    //             "pressure": 1021,
    //             "humidity": 56,
    //             "dew_point": 9.45,
    //             "uvi": 3.58,
    //             "clouds": 77,
    //             "visibility": 10000,
    //             "wind_speed": 0.78,
    //             "wind_deg": 149,
    //             "wind_gust": 0.74,
    //             "weather": [
    //                 {
    //                     "id": 803,
    //                     "main": "Clouds",
    //                     "description": "broken clouds",
    //                     "icon": "04d"
    //                 }
    //             ],
    //             "pop": 0
    //         },
    //         {
    //             "dt": 1715346000,
    //             "temp": 18.93,
    //             "feels_like": 18.29,
    //             "pressure": 1020,
    //             "humidity": 54,
    //             "dew_point": 9.15,
    //             "uvi": 2.74,
    //             "clouds": 19,
    //             "visibility": 10000,
    //             "wind_speed": 1.2,
    //             "wind_deg": 140,
    //             "wind_gust": 0.98,
    //             "weather": [
    //                 {
    //                     "id": 801,
    //                     "main": "Clouds",
    //                     "description": "few clouds",
    //                     "icon": "02d"
    //                 }
    //             ],
    //             "pop": 0.63
    //         },
    //         {
    //             "dt": 1715349600,
    //             "temp": 18.72,
    //             "feels_like": 18.03,
    //             "pressure": 1019,
    //             "humidity": 53,
    //             "dew_point": 8.79,
    //             "uvi": 1.63,
    //             "clouds": 16,
    //             "visibility": 10000,
    //             "wind_speed": 1.53,
    //             "wind_deg": 138,
    //             "wind_gust": 1.35,
    //             "weather": [
    //                 {
    //                     "id": 801,
    //                     "main": "Clouds",
    //                     "description": "few clouds",
    //                     "icon": "02d"
    //                 }
    //             ],
    //             "pop": 0.62
    //         },
    //         {
    //             "dt": 1715353200,
    //             "temp": 18.55,
    //             "feels_like": 17.87,
    //             "pressure": 1019,
    //             "humidity": 54,
    //             "dew_point": 8.84,
    //             "uvi": 0.84,
    //             "clouds": 12,
    //             "visibility": 10000,
    //             "wind_speed": 1.32,
    //             "wind_deg": 146,
    //             "wind_gust": 1.49,
    //             "weather": [
    //                 {
    //                     "id": 801,
    //                     "main": "Clouds",
    //                     "description": "few clouds",
    //                     "icon": "02d"
    //                 }
    //             ],
    //             "pop": 0.54
    //         },
    //         {
    //             "dt": 1715356800,
    //             "temp": 18.3,
    //             "feels_like": 17.73,
    //             "pressure": 1018,
    //             "humidity": 59,
    //             "dew_point": 9.73,
    //             "uvi": 0.4,
    //             "clouds": 11,
    //             "visibility": 10000,
    //             "wind_speed": 0.8,
    //             "wind_deg": 158,
    //             "wind_gust": 1.23,
    //             "weather": [
    //                 {
    //                     "id": 801,
    //                     "main": "Clouds",
    //                     "description": "few clouds",
    //                     "icon": "02d"
    //                 }
    //             ],
    //             "pop": 0.43
    //         },
    //         {
    //             "dt": 1715360400,
    //             "temp": 15.9,
    //             "feels_like": 15.27,
    //             "pressure": 1019,
    //             "humidity": 66,
    //             "dew_point": 9.34,
    //             "uvi": 0.12,
    //             "clouds": 12,
    //             "visibility": 10000,
    //             "wind_speed": 0.43,
    //             "wind_deg": 252,
    //             "wind_gust": 0.53,
    //             "weather": [
    //                 {
    //                     "id": 801,
    //                     "main": "Clouds",
    //                     "description": "few clouds",
    //                     "icon": "02d"
    //                 }
    //             ],
    //             "pop": 0.4
    //         },
    //         {
    //             "dt": 1715364000,
    //             "temp": 13.21,
    //             "feels_like": 12.52,
    //             "pressure": 1019,
    //             "humidity": 74,
    //             "dew_point": 8.24,
    //             "uvi": 0,
    //             "clouds": 14,
    //             "visibility": 10000,
    //             "wind_speed": 0.95,
    //             "wind_deg": 293,
    //             "wind_gust": 0.86,
    //             "weather": [
    //                 {
    //                     "id": 500,
    //                     "main": "Rain",
    //                     "description": "light rain",
    //                     "icon": "10n"
    //                 }
    //             ],
    //             "pop": 0.4,
    //             "rain": {
    //                 "1h": 0.1
    //             }
    //         },
    //         {
    //             "dt": 1715367600,
    //             "temp": 12.77,
    //             "feels_like": 12.09,
    //             "pressure": 1020,
    //             "humidity": 76,
    //             "dew_point": 8.28,
    //             "uvi": 0,
    //             "clouds": 51,
    //             "visibility": 10000,
    //             "wind_speed": 1.23,
    //             "wind_deg": 276,
    //             "wind_gust": 1.21,
    //             "weather": [
    //                 {
    //                     "id": 803,
    //                     "main": "Clouds",
    //                     "description": "broken clouds",
    //                     "icon": "04n"
    //                 }
    //             ],
    //             "pop": 0
    //         },
    //         {
    //             "dt": 1715371200,
    //             "temp": 11.52,
    //             "feels_like": 10.84,
    //             "pressure": 1020,
    //             "humidity": 81,
    //             "dew_point": 8.03,
    //             "uvi": 0,
    //             "clouds": 47,
    //             "visibility": 10000,
    //             "wind_speed": 1.27,
    //             "wind_deg": 256,
    //             "wind_gust": 1.39,
    //             "weather": [
    //                 {
    //                     "id": 802,
    //                     "main": "Clouds",
    //                     "description": "scattered clouds",
    //                     "icon": "03n"
    //                 }
    //             ],
    //             "pop": 0
    //         },
    //         {
    //             "dt": 1715374800,
    //             "temp": 10.53,
    //             "feels_like": 9.86,
    //             "pressure": 1020,
    //             "humidity": 85,
    //             "dew_point": 7.68,
    //             "uvi": 0,
    //             "clouds": 36,
    //             "visibility": 10000,
    //             "wind_speed": 1.3,
    //             "wind_deg": 255,
    //             "wind_gust": 1.36,
    //             "weather": [
    //                 {
    //                     "id": 802,
    //                     "main": "Clouds",
    //                     "description": "scattered clouds",
    //                     "icon": "03n"
    //                 }
    //             ],
    //             "pop": 0
    //         },
    //         {
    //             "dt": 1715378400,
    //             "temp": 9.92,
    //             "feels_like": 9.63,
    //             "pressure": 1020,
    //             "humidity": 87,
    //             "dew_point": 7.48,
    //             "uvi": 0,
    //             "clouds": 32,
    //             "visibility": 10000,
    //             "wind_speed": 1.43,
    //             "wind_deg": 260,
    //             "wind_gust": 1.41,
    //             "weather": [
    //                 {
    //                     "id": 802,
    //                     "main": "Clouds",
    //                     "description": "scattered clouds",
    //                     "icon": "03n"
    //                 }
    //             ],
    //             "pop": 0
    //         },
    //         {
    //             "dt": 1715382000,
    //             "temp": 9.52,
    //             "feels_like": 9.1,
    //             "pressure": 1020,
    //             "humidity": 88,
    //             "dew_point": 7.18,
    //             "uvi": 0,
    //             "clouds": 29,
    //             "visibility": 10000,
    //             "wind_speed": 1.5,
    //             "wind_deg": 267,
    //             "wind_gust": 1.46,
    //             "weather": [
    //                 {
    //                     "id": 802,
    //                     "main": "Clouds",
    //                     "description": "scattered clouds",
    //                     "icon": "03n"
    //                 }
    //             ],
    //             "pop": 0
    //         },
    //         {
    //             "dt": 1715385600,
    //             "temp": 9.17,
    //             "feels_like": 8.79,
    //             "pressure": 1021,
    //             "humidity": 88,
    //             "dew_point": 6.85,
    //             "uvi": 0,
    //             "clouds": 27,
    //             "visibility": 10000,
    //             "wind_speed": 1.42,
    //             "wind_deg": 263,
    //             "wind_gust": 1.41,
    //             "weather": [
    //                 {
    //                     "id": 802,
    //                     "main": "Clouds",
    //                     "description": "scattered clouds",
    //                     "icon": "03n"
    //                 }
    //             ],
    //             "pop": 0
    //         },
    //         {
    //             "dt": 1715389200,
    //             "temp": 8.75,
    //             "feels_like": 8.75,
    //             "pressure": 1021,
    //             "humidity": 88,
    //             "dew_point": 6.5,
    //             "uvi": 0,
    //             "clouds": 17,
    //             "visibility": 10000,
    //             "wind_speed": 1.31,
    //             "wind_deg": 266,
    //             "wind_gust": 1.24,
    //             "weather": [
    //                 {
    //                     "id": 801,
    //                     "main": "Clouds",
    //                     "description": "few clouds",
    //                     "icon": "02n"
    //                 }
    //             ],
    //             "pop": 0
    //         },
    //         {
    //             "dt": 1715392800,
    //             "temp": 8.82,
    //             "feels_like": 8.82,
    //             "pressure": 1020,
    //             "humidity": 89,
    //             "dew_point": 6.57,
    //             "uvi": 0,
    //             "clouds": 24,
    //             "visibility": 10000,
    //             "wind_speed": 1.13,
    //             "wind_deg": 267,
    //             "wind_gust": 1.15,
    //             "weather": [
    //                 {
    //                     "id": 801,
    //                     "main": "Clouds",
    //                     "description": "few clouds",
    //                     "icon": "02n"
    //                 }
    //             ],
    //             "pop": 0.14
    //         },
    //         {
    //             "dt": 1715396400,
    //             "temp": 8.61,
    //             "feels_like": 8.61,
    //             "pressure": 1020,
    //             "humidity": 87,
    //             "dew_point": 6.21,
    //             "uvi": 0,
    //             "clouds": 34,
    //             "visibility": 10000,
    //             "wind_speed": 1.14,
    //             "wind_deg": 273,
    //             "wind_gust": 1.03,
    //             "weather": [
    //                 {
    //                     "id": 802,
    //                     "main": "Clouds",
    //                     "description": "scattered clouds",
    //                     "icon": "03d"
    //                 }
    //             ],
    //             "pop": 0
    //         },
    //         {
    //             "dt": 1715400000,
    //             "temp": 9.39,
    //             "feels_like": 9.39,
    //             "pressure": 1021,
    //             "humidity": 87,
    //             "dew_point": 6.86,
    //             "uvi": 0.19,
    //             "clouds": 28,
    //             "visibility": 10000,
    //             "wind_speed": 1.11,
    //             "wind_deg": 267,
    //             "wind_gust": 1.03,
    //             "weather": [
    //                 {
    //                     "id": 802,
    //                     "main": "Clouds",
    //                     "description": "scattered clouds",
    //                     "icon": "03d"
    //                 }
    //             ],
    //             "pop": 0
    //         },
    //         {
    //             "dt": 1715403600,
    //             "temp": 11.51,
    //             "feels_like": 10.81,
    //             "pressure": 1021,
    //             "humidity": 80,
    //             "dew_point": 7.76,
    //             "uvi": 0.65,
    //             "clouds": 23,
    //             "visibility": 10000,
    //             "wind_speed": 0.98,
    //             "wind_deg": 272,
    //             "wind_gust": 1.16,
    //             "weather": [
    //                 {
    //                     "id": 801,
    //                     "main": "Clouds",
    //                     "description": "few clouds",
    //                     "icon": "02d"
    //                 }
    //             ],
    //             "pop": 0
    //         },
    //         {
    //             "dt": 1715407200,
    //             "temp": 13.53,
    //             "feels_like": 12.9,
    //             "pressure": 1020,
    //             "humidity": 75,
    //             "dew_point": 8.78,
    //             "uvi": 1.55,
    //             "clouds": 20,
    //             "visibility": 10000,
    //             "wind_speed": 0.21,
    //             "wind_deg": 227,
    //             "wind_gust": 0.47,
    //             "weather": [
    //                 {
    //                     "id": 801,
    //                     "main": "Clouds",
    //                     "description": "few clouds",
    //                     "icon": "02d"
    //                 }
    //             ],
    //             "pop": 0
    //         },
    //         {
    //             "dt": 1715410800,
    //             "temp": 15.47,
    //             "feels_like": 14.9,
    //             "pressure": 1020,
    //             "humidity": 70,
    //             "dew_point": 9.66,
    //             "uvi": 2.79,
    //             "clouds": 28,
    //             "visibility": 10000,
    //             "wind_speed": 1.04,
    //             "wind_deg": 130,
    //             "wind_gust": 0.26,
    //             "weather": [
    //                 {
    //                     "id": 802,
    //                     "main": "Clouds",
    //                     "description": "scattered clouds",
    //                     "icon": "03d"
    //                 }
    //             ],
    //             "pop": 0.13
    //         },
    //         {
    //             "dt": 1715414400,
    //             "temp": 17.33,
    //             "feels_like": 16.79,
    //             "pressure": 1020,
    //             "humidity": 64,
    //             "dew_point": 9.95,
    //             "uvi": 4.29,
    //             "clouds": 27,
    //             "visibility": 10000,
    //             "wind_speed": 1.19,
    //             "wind_deg": 85,
    //             "wind_gust": 1.1,
    //             "weather": [
    //                 {
    //                     "id": 802,
    //                     "main": "Clouds",
    //                     "description": "scattered clouds",
    //                     "icon": "03d"
    //                 }
    //             ],
    //             "pop": 0.15
    //         },
    //         {
    //             "dt": 1715418000,
    //             "temp": 18.48,
    //             "feels_like": 17.9,
    //             "pressure": 1019,
    //             "humidity": 58,
    //             "dew_point": 9.8,
    //             "uvi": 5.29,
    //             "clouds": 26,
    //             "visibility": 10000,
    //             "wind_speed": 1.39,
    //             "wind_deg": 75,
    //             "wind_gust": 1.29,
    //             "weather": [
    //                 {
    //                     "id": 500,
    //                     "main": "Rain",
    //                     "description": "light rain",
    //                     "icon": "10d"
    //                 }
    //             ],
    //             "pop": 0.59,
    //             "rain": {
    //                 "1h": 0.25
    //             }
    //         }
    //     ],
    //     "daily": [
    //         {
    //             "dt": 1715248800,
    //             "sunrise": 1715223633,
    //             "sunset": 1715276616,
    //             "moonrise": 1715224920,
    //             "moonset": 1715284620,
    //             "moon_phase": 0.05,
    //             "summary": "Expect a day of partly cloudy with rain",
    //             "temp": {
    //                 "day": 14.14,
    //                 "min": 9.95,
    //                 "max": 14.45,
    //                 "night": 10.04,
    //                 "eve": 11,
    //                 "morn": 12.07
    //             },
    //             "feels_like": {
    //                 "day": 14.01,
    //                 "night": 9.42,
    //                 "eve": 10.58,
    //                 "morn": 11.81
    //             },
    //             "pressure": 1020,
    //             "humidity": 92,
    //             "dew_point": 12.86,
    //             "wind_speed": 4.51,
    //             "wind_deg": 50,
    //             "wind_gust": 7.61,
    //             "weather": [
    //                 {
    //                     "id": 500,
    //                     "main": "Rain",
    //                     "description": "light rain",
    //                     "icon": "10d"
    //                 }
    //             ],
    //             "clouds": 100,
    //             "pop": 1,
    //             "rain": 4.43,
    //             "uvi": 0.92
    //         },
    //         {
    //             "dt": 1715335200,
    //             "sunrise": 1715309955,
    //             "sunset": 1715363092,
    //             "moonrise": 1715313840,
    //             "moonset": 0,
    //             "moon_phase": 0.08,
    //             "summary": "Expect a day of partly cloudy with rain",
    //             "temp": {
    //                 "day": 16.81,
    //                 "min": 9.7,
    //                 "max": 18.93,
    //                 "night": 11.52,
    //                 "eve": 18.3,
    //                 "morn": 9.99
    //             },
    //             "feels_like": {
    //                 "day": 16.14,
    //                 "night": 10.84,
    //                 "eve": 17.73,
    //                 "morn": 9.66
    //             },
    //             "pressure": 1022,
    //             "humidity": 61,
    //             "dew_point": 9.07,
    //             "wind_speed": 2.36,
    //             "wind_deg": 58,
    //             "wind_gust": 4.2,
    //             "weather": [
    //                 {
    //                     "id": 500,
    //                     "main": "Rain",
    //                     "description": "light rain",
    //                     "icon": "10d"
    //                 }
    //             ],
    //             "clouds": 89,
    //             "pop": 0.63,
    //             "rain": 0.1,
    //             "uvi": 4.95
    //         },
    //         {
    //             "dt": 1715421600,
    //             "sunrise": 1715396278,
    //             "sunset": 1715449568,
    //             "moonrise": 1715403360,
    //             "moonset": 1715375280,
    //             "moon_phase": 0.12,
    //             "summary": "Expect a day of partly cloudy with rain",
    //             "temp": {
    //                 "day": 19.19,
    //                 "min": 8.61,
    //                 "max": 20.54,
    //                 "night": 13.56,
    //                 "eve": 16.22,
    //                 "morn": 9.39
    //             },
    //             "feels_like": {
    //                 "day": 18.55,
    //                 "night": 12.83,
    //                 "eve": 15.67,
    //                 "morn": 9.39
    //             },
    //             "pressure": 1019,
    //             "humidity": 53,
    //             "dew_point": 9.13,
    //             "wind_speed": 3.69,
    //             "wind_deg": 1,
    //             "wind_gust": 4.03,
    //             "weather": [
    //                 {
    //                     "id": 500,
    //                     "main": "Rain",
    //                     "description": "light rain",
    //                     "icon": "10d"
    //                 }
    //             ],
    //             "clouds": 25,
    //             "pop": 0.59,
    //             "rain": 0.35,
    //             "uvi": 6.27
    //         },
    //         {
    //             "dt": 1715508000,
    //             "sunrise": 1715482602,
    //             "sunset": 1715536042,
    //             "moonrise": 1715493540,
    //             "moonset": 1715465160,
    //             "moon_phase": 0.15,
    //             "summary": "The day will start with partly cloudy through the late morning hours, transitioning to rain",
    //             "temp": {
    //                 "day": 18.89,
    //                 "min": 11.76,
    //                 "max": 19.4,
    //                 "night": 12.79,
    //                 "eve": 16.67,
    //                 "morn": 12.08
    //             },
    //             "feels_like": {
    //                 "day": 18.38,
    //                 "night": 12.47,
    //                 "eve": 16.32,
    //                 "morn": 11.54
    //             },
    //             "pressure": 1017,
    //             "humidity": 59,
    //             "dew_point": 10.52,
    //             "wind_speed": 3.21,
    //             "wind_deg": 53,
    //             "wind_gust": 4.18,
    //             "weather": [
    //                 {
    //                     "id": 500,
    //                     "main": "Rain",
    //                     "description": "light rain",
    //                     "icon": "10d"
    //                 }
    //             ],
    //             "clouds": 100,
    //             "pop": 1,
    //             "rain": 5.58,
    //             "uvi": 5.33
    //         },
    //         {
    //             "dt": 1715594400,
    //             "sunrise": 1715568929,
    //             "sunset": 1715622517,
    //             "moonrise": 1715584020,
    //             "moonset": 1715554260,
    //             "moon_phase": 0.18,
    //             "summary": "Expect a day of partly cloudy with rain",
    //             "temp": {
    //                 "day": 16.05,
    //                 "min": 10.26,
    //                 "max": 20.45,
    //                 "night": 15.3,
    //                 "eve": 19.64,
    //                 "morn": 10.26
    //             },
    //             "feels_like": {
    //                 "day": 15.59,
    //                 "night": 14.77,
    //                 "eve": 19.04,
    //                 "morn": 9.74
    //             },
    //             "pressure": 1018,
    //             "humidity": 72,
    //             "dew_point": 10.61,
    //             "wind_speed": 2.31,
    //             "wind_deg": 25,
    //             "wind_gust": 1.98,
    //             "weather": [
    //                 {
    //                     "id": 500,
    //                     "main": "Rain",
    //                     "description": "light rain",
    //                     "icon": "10d"
    //                 }
    //             ],
    //             "clouds": 77,
    //             "pop": 0.98,
    //             "rain": 1.44,
    //             "uvi": 5.47
    //         },
    //         {
    //             "dt": 1715680800,
    //             "sunrise": 1715655257,
    //             "sunset": 1715708990,
    //             "moonrise": 1715674680,
    //             "moonset": 1715642580,
    //             "moon_phase": 0.22,
    //             "summary": "Expect a day of partly cloudy with rain",
    //             "temp": {
    //                 "day": 19.69,
    //                 "min": 9.21,
    //                 "max": 21.87,
    //                 "night": 16.42,
    //                 "eve": 20.72,
    //                 "morn": 9.21
    //             },
    //             "feels_like": {
    //                 "day": 19.26,
    //                 "night": 15.97,
    //                 "eve": 20.36,
    //                 "morn": 8.65
    //             },
    //             "pressure": 1014,
    //             "humidity": 59,
    //             "dew_point": 11.06,
    //             "wind_speed": 2.47,
    //             "wind_deg": 261,
    //             "wind_gust": 2.11,
    //             "weather": [
    //                 {
    //                     "id": 500,
    //                     "main": "Rain",
    //                     "description": "light rain",
    //                     "icon": "10d"
    //                 }
    //             ],
    //             "clouds": 9,
    //             "pop": 0.75,
    //             "rain": 0.96,
    //             "uvi": 6
    //         },
    //         {
    //             "dt": 1715767200,
    //             "sunrise": 1715741586,
    //             "sunset": 1715795463,
    //             "moonrise": 1715765220,
    //             "moonset": 1715730480,
    //             "moon_phase": 0.25,
    //             "summary": "Expect a day of partly cloudy with rain",
    //             "temp": {
    //                 "day": 20.56,
    //                 "min": 10.15,
    //                 "max": 23.26,
    //                 "night": 17.87,
    //                 "eve": 23.26,
    //                 "morn": 10.15
    //             },
    //             "feels_like": {
    //                 "day": 20.19,
    //                 "night": 17.59,
    //                 "eve": 22.97,
    //                 "morn": 9.47
    //             },
    //             "pressure": 1014,
    //             "humidity": 58,
    //             "dew_point": 11.69,
    //             "wind_speed": 2.31,
    //             "wind_deg": 219,
    //             "wind_gust": 3.45,
    //             "weather": [
    //                 {
    //                     "id": 500,
    //                     "main": "Rain",
    //                     "description": "light rain",
    //                     "icon": "10d"
    //                 }
    //             ],
    //             "clouds": 48,
    //             "pop": 0.21,
    //             "rain": 0.18,
    //             "uvi": 6
    //         },
    //         {
    //             "dt": 1715853600,
    //             "sunrise": 1715827918,
    //             "sunset": 1715881935,
    //             "moonrise": 1715855640,
    //             "moonset": 1715818080,
    //             "moon_phase": 0.28,
    //             "summary": "You can expect rain in the morning, with partly cloudy in the afternoon",
    //             "temp": {
    //                 "day": 21.15,
    //                 "min": 13.3,
    //                 "max": 22.99,
    //                 "night": 18.26,
    //                 "eve": 21.35,
    //                 "morn": 13.3
    //             },
    //             "feels_like": {
    //                 "day": 21.17,
    //                 "night": 18.36,
    //                 "eve": 21.53,
    //                 "morn": 13.09
    //             },
    //             "pressure": 1014,
    //             "humidity": 71,
    //             "dew_point": 15.3,
    //             "wind_speed": 2.14,
    //             "wind_deg": 81,
    //             "wind_gust": 3.91,
    //             "weather": [
    //                 {
    //                     "id": 500,
    //                     "main": "Rain",
    //                     "description": "light rain",
    //                     "icon": "10d"
    //                 }
    //             ],
    //             "clouds": 65,
    //             "pop": 1,
    //             "rain": 5.79,
    //             "uvi": 6
    //         }
    //     ],
    //     "alerts": [
    //         {
    //             "sender_name": "Administrația Națională de Meteorologie",
    //             "event": "awareness_type=3, awareness_level=2",
    //             "start": 1715245200,
    //             "end": 1715284800,
    //             "description": "Locally thunderstorms.",
    //             "tags": [
    //                 "Other dangers"
    //             ]
    //         },
    //         {
    //             "sender_name": "Administrația Națională de Meteorologie",
    //             "event": "awareness_type=10, awareness_level=2",
    //             "start": 1715245200,
    //             "end": 1715284800,
    //             "description": "Water amounts will reach 20...25 mm and sparsely will exceed 40 mm.",
    //             "tags": [
    //                 "Other dangers"
    //             ]
    //         }
    //     ]
    // }

    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
