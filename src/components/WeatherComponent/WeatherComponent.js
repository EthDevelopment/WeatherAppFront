import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherComponent.css';

const WeatherComponent = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  const fetchWeatherData = async (city) => {
    try {
      const response = await axios.get(`http://localhost:5251/WeatherForecast?city=${city}`);
      const firstData = response.data[0];
      setWeatherData(firstData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="weather-container">
      {weatherData ? (
        <div className="weather-data">
          <p className="city-info">City Name: {weatherData.cityName}</p>
          <p className="time">Time: {weatherData.analogClockTime}</p>
          <p className="weather-condition">Condition: {weatherData.summary}</p>
          <p className="weather-c">Temperature (C): {weatherData.temperatureC}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherComponent;
