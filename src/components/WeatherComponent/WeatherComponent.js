// WeatherComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';
import './WeatherComponent.css';

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
      <h2>Weather World</h2>
      <SearchBar
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
        onSearch={handleSearch}
      />
      {weatherData ? (
        <div>
          {/* Display weather data */}
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
