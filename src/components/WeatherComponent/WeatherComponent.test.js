// WeatherComponent.test.js
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import WeatherComponent from './WeatherComponent';

// Mock Axios module to simulate API responses
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: mockWeatherData })),
}));

// Mock weather data for testing
const mockWeatherData = [
  {
    cityName: 'Chicago',
  },
];

describe('WeatherComponent', () => {
  it('fetches and displays the city name', async () => {
    render(<WeatherComponent />);

    // Wait for API call to resolve and update the component
    await waitFor(() => expect(screen.getByText('Weather World')).toBeInTheDocument());

    // Check if the city name is displayed after API call
    expect(screen.getByText('City Name: Chicago')).toBeInTheDocument();
  });
});
