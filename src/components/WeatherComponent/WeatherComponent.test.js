// WeatherComponent.test.js
import { render, screen, waitFor } from '@testing-library/react';
import WeatherComponent from './WeatherComponent';

test('fetches and renders data', async () => {
  render(<WeatherComponent />);

  // Wait for the component to finish rendering
  await waitFor(() => {
    // You can check if any part of your component is rendered,
    // for example, the title or loading message
    expect(screen.getByText('Weather World')).toBeInTheDocument();
  });
});
