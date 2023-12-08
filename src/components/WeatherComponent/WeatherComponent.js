import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const apiUrl = 'http://localhost:5251/WeatherForecast';

    axios.get(apiUrl)
      .then(response => {
        setWeatherData(response.data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }, []); 
  return (
    <div>
      <h2>Weather Information</h2>
      {weatherData ? (
        <div>
          {weatherData.map((data, index) => (
            <div key={index}>
              <p>Date: {data.formattedDate}</p>
              <p>Temperature (C): {data.temperatureC}</p>
              <p>Temperature (F): {data.temperatureF}</p>
              <p>Summary: {data.summary}</p>
              <p>Analog Clock Time: {data.analogClockTime}</p>
              <p>City Name: {data.cityName}</p>
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <p>Empty</p>
      )}
    </div>
  );
};

export default WeatherComponent;
