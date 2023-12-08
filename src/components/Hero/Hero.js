// hero.js
import React from 'react';
import './Hero.css'; // Import your CSS for styling
import SearchBar from '../SearchBar/SearchBar';

// hero.js
const Hero = () => {
    return (
      <div className="hero-container">
        <div className="hero-image">
          <h1>Weather Tracker</h1>
          <p>Search your city below</p>
          <SearchBar/>
        </div>
      </div>
    );
  };
  
  export default Hero;
  