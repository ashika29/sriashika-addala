import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the image in app', () => {
  render(<App />);
  const imageAltText = screen.getByAltText(/glitch/i);
  expect(imageAltText).toHaveAttribute('src');
});
