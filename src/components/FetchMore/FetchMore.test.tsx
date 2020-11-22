import React from 'react';
import { render } from '@testing-library/react';
import { FetchMore } from '.';
let mockFn = jest.fn();
describe('Fetchmore', () => {
  it('should render button', async () => {
    const { getByTestId } = render(<FetchMore loading={false} fetchMore={mockFn} />);
    expect(getByTestId('button-load-more')).toBeTruthy();
  });
  it('should render loading image', async () => {
    const { getByTestId } = render(<FetchMore loading={true} fetchMore={mockFn} />);
    expect(getByTestId('img-loading')).toBeTruthy();
  });
});
