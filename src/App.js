// App.js
// IMPORTS
import React, { useState } from 'react';
// Page Overlays
import DayNightToggle from './components/DayNight/DayNightToggle'; // Import the DayNightToggle component
// Components/pages
import Hero from './components/Hero/Hero';
import WeatherComponent from './components/WeatherComponent/WeatherComponent';
// CSS
import './App.css';

// Function to toggle the theme (defined at the top level of the module)
export const toggleTheme = (theme, setTheme) => {
  // Toggle between 'light' and 'dark' themes
  setTheme(theme === 'light' ? 'dark' : 'light');
};

function App() {
  // State to manage the theme ('light' or 'dark')
  const [theme, setTheme] = useState('dark');

  return (
    
    <div className={`App ${theme}`}>
      {/* Your other content */}
        <WeatherComponent/>
    </div>
  );
}

export default App;
export { DayNightToggle };