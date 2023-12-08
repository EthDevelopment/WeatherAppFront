// App.js

import React from 'react';
import WeatherComponent from './components/WeatherComponent/WeatherComponent';
import './App.css';
import Hero from './components/Hero/Hero';

const App = () => {
  return (
    <div className="app-container">
            <Hero />
<WeatherComponent />
    </div>
  );
};

export default App;
