import React, { useState } from 'react';
import './Hero.css';
import SearchBar from '../SearchBar/SearchBar';

const Hero = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="hero-container">
      <div className="hero-image">
        <h1>Weather Tracker</h1>
        <p>Search your city below</p>
        <SearchBar
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onSearch={handleSearch}
        />
      </div>
    </div>
  );
};

export default Hero;
