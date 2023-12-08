// WeatherComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get('http://localhost:5251/WeatherForecast');
        const firstData = response.data[0]; // Extract only the first item
        setWeatherData(firstData);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div>
      <h2>Weather World</h2>
      {weatherData ? (
        <div>
          <div>
            <p>Date: {weatherData.formattedDate}</p>
            <p>Temperature (C): {weatherData.temperatureC}</p>
            <p>Temperature (F): {weatherData.temperatureF}</p>
            <p>Summary: {weatherData.summary}</p>
            <p>Analog Clock Time: {weatherData.analogClockTime}</p>
            <p>City Name: {weatherData.cityName}</p>
            <hr />
          </div>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherComponent;
