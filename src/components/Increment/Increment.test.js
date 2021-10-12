import { render, screen } from '@testing-library/react';
import Increment from './Increment.jsx';

test('Incresing button has correct text', () => {
  render(<Increment />);
  const buttonElement = screen.getByTestId('incres-button');
  expect(buttonElement).toHaveTextContent('Increment');
});
