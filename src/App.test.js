import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the image in app', () => {
  render(<App />);
  const imageAltText = screen.getAllByAltText(/logo/i)[0];
  expect(imageAltText).toHaveAttribute('width');
  expect(imageAltText).toHaveAttribute('data-test-id', 'coming-soon-image');
});
