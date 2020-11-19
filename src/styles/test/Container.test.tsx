import React from 'react';
import { render } from '@testing-library/react';
import { Container } from '../Container';

it('should render Container component', () => {
  const { container } = render(<Container variant="fluid" />);
  const el = container.getElementsByTagName('div');
  expect(el.length).toBe(1);
});
