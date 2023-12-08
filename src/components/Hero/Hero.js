// hero.js
import React from 'react';
import './Hero.css'; // Import your CSS for styling

// hero.js
const Hero = () => {
    return (
      <div className="hero-container">
        <div className="hero-image" style={{ backgroundImage: 'url(../assets/ice.jpeg)' }}>
          <h1>Your Hero Title</h1>
          <p>Your hero description goes here.</p>
        </div>
      </div>
    );
  };
  
  export default Hero;
  