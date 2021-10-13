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

test('When the minus button is pressed, the counter changes to -1', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('minus-button');
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent(-1);
});

// TODO fireEvent

test('on/off button has blue color', () => {
  render(<App />);
  const buttonElement = screen.getByTestId('onOff-button');
  expect(buttonElement).toHaveStyle({ backgroundColor: '#4caf50' });
});

test('Prevent the plus button from being pressed when the on/off button is clicked', () => {
  render(<App />);
  const onOffBtnElement = screen.getByTestId('onOff-button');
  fireEvent.click(onOffBtnElement);
  const plusBtnEle = screen.getByTestId('plus-button');
  expect(plusBtnEle).toBeDisabled();
});
