import { render, screen } from '@testing-library/react';
import App from './App';

test('AAA Brewing Co', () => {
  render(<App />);
  const textElement = screen.getByText(/AAA Brewing Co/i);
  expect(textElement).toBeInTheDocument();
});
