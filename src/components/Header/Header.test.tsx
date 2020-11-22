import React from 'react';
import { waitFor, render } from '@testing-library/react';
import { Header } from '.';
const mockFn = jest.fn();
let rendered: any;
describe('Search - Actions', () => {
  beforeEach(() => {
    rendered = render(<Header onChangeTheme={mockFn} />);
  });
  it('should render header', async () => {
    const { getByText, getByTestId } = rendered;
    expect(getByText(/Github/)).toBeTruthy();
    await waitFor(() => {
      expect(getByTestId('header')).toBeTruthy();
      expect(getByTestId('heading')).toBeTruthy();
    });
  });
});
