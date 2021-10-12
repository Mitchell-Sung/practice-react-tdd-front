import { render, screen } from '@testing-library/react';
import Counter from './Counter.jsx';

test('The counter starts at 0', () => {
  render(<Counter />);
  // screen object를 이용해서 원하는 element에 접근할 때 ID로 이용한다.

  const counterElement = screen.getByTestId('counter');

  // id가 counter인 element의 텍스트가 0인지 테스트
  expect(counterElement).toHaveTextContent(0);
});

/**
  NOTE:

  expect(counterElement).toBe(0); 을 사용하게 되면 에러가 발생된다. 왜냐하면
  toBe() 함수는 <h3 data-testid="counter">{counter}</h3> 의 전체를 검사하기 때문이다.
 */
