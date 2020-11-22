import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '.';

it('should render Not Found page', () => {
  const { getByText } = render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  );
  expect(getByText(/Error 404!/i)).toBeTruthy();
  expect(getByText(/Page not found/i)).toBeTruthy();
  expect(getByText(/to go to the homepage./i)).toBeTruthy();
});
