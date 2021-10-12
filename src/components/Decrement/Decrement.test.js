import { render, screen } from '@testing-library/react';
import Decrement from './Decrement.jsx';

test('Decresing button has correct text', () => {
  render(<Decrement />);
  const buttonElement = screen.getByTestId('decrease-button');
  expect(buttonElement).toHaveTextContent('-');
});
