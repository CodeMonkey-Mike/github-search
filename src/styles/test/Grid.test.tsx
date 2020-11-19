import React from 'react';
import { render } from '@testing-library/react';
import { Grid, GridCell } from '../Grid';

it('should render Grid component', () => {
  const { container } = render(<Grid variant="lg" />);
  const el = container.getElementsByTagName('div');
  expect(el.length).toBe(1);
});

it('should render GridCell component', () => {
  const { container } = render(
    <Grid variant="lg">
      <GridCell span="4" />
    </Grid>
  );
  const el = container.getElementsByTagName('div');
  expect(el.length).toBe(2);
});
