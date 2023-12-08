// hero.js
import React from 'react';
import './Hero.css'; // Import your CSS for styling
import SearchBar from '../SearchBar/SearchBar';

// hero.js
const Hero = () => {
    return (
      <div className="hero-container">
        <div className="hero-image" style={{ backgroundImage: 'url(../assets/ice.jpeg)' }}>
          <h1>Weather Tracker</h1>
          <p>Your hero description goes here.</p>
          <SearchBar/>
        </div>
      </div>
    );
  };
  
  export default Hero;
  