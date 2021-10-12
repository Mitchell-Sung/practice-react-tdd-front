import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../Counter/Counter.jsx';
import Increment from './Increment.jsx';

test('Incresing button has correct text', () => {
  render(<Increment />);
  const buttonElement = screen.getByTestId('increase-button');
  expect(buttonElement).toHaveTextContent('+');
});

test('When the increase button is pressed, the counter changes to 1', () => {
  render(<Increment />);
  const buttonElement = screen.getByTestId('increase-button');
  fireEvent.click(buttonElement);

  render(<Counter />);
  const counterElement = screen.getByTestid('counter');
  expect(counterElement).toHaveTextContent(1);
});
