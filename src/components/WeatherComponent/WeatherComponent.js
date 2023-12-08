// WeatherComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';
import './WeatherComponent.css';
import Hero from '../Hero/Hero';

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [searchCity, setSearchCity] = useState('');

  useEffect(() => {
    // Fetch weather data when the component mounts
    fetchWeatherData('Chicago'); // Default city
  }, []);

  const fetchWeatherData = async (city) => {
    try {
      const response = await axios.get(`http://localhost:5251/WeatherForecast?city=${city}`);
      const firstData = response.data[0];
      setWeatherData(firstData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleSearch = () => {
    // Trigger a new search when the user clicks the search button
    fetchWeatherData(searchCity);
  };

  return (
    <div className="weather-container">
      {weatherData ? (
        <div>
          {/* Display weather data */}
          <div className="weather-data">
            {/* <p>Date: {weatherData.date}</p> */}
            <p className="city-info" >City Name: {weatherData.cityName}</p>
            <p className="weather-c" >Temperature (C): {weatherData.temperatureC}</p>
            <p className="weather-f" >Temperature (F): {weatherData.temperatureF}</p>
            <p className="weather-condition" >Weather condition: {weatherData.summary}</p>
            <p className="time">Time: {weatherData.analogClockTime}</p>
          </div>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherComponent;
