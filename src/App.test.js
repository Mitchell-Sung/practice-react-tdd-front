import App from './App.js';
import { render, screen, fireEvent } from '@testing-library/react';

test('The counter starts at 0', () => {
  render(<App />);
  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent(0);
});

test('Plus button has correct text', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('plus-button');
  expect(buttonElement).toHaveTextContent('+');
});

test('Minus button has correct text', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('minus-button');
  expect(buttonElement).toHaveTextContent('-');
});

test('When the plus button is pressed, the counter changes to 1', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('plus-button');
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent(1);
});
