import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, scren } from '@testing-library/react'
import App from './index'

test('should', () => {
  render(<App />);
  const linkElement = screen.getByText(/Anecdote of the day/i);
  expect(linkElement).toBeInTheDocument();
})
 