import React, { useState } from 'react';
import Hero from './components/Hero/Hero';
import WeatherComponent from './components/WeatherComponent/WeatherComponent';

const App = () => {
  const [city, setCity] = useState('Chicago');

  const handleSearch = (searchTerm) => {
    setCity(searchTerm);
  };

  return (
    <div>
      <Hero onSearch={handleSearch} />
      <WeatherComponent city={city} />
    </div>
  );
};

export default App;
