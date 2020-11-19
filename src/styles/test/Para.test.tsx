import React from 'react';
import { render } from '@testing-library/react';
import { Para } from '../Para';

it('should render Para component', () => {
  const { container } = render(<Para variant="normal" />);
  const el = container.getElementsByTagName('div');
  expect(el.length).toBe(1);
});
