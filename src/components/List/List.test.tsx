import React from 'react';
import { render } from '@testing-library/react';
import { List } from '.';
const mockChild = <div data-testid="children">Item</div>;
describe('List - Actions', () => {
  it('should render loading', async () => {
    const { getByTestId } = render(<List loading={true} children={mockChild} />);
    expect(getByTestId('loading')).toBeTruthy();
  });
  it('should render Item', async () => {
    const { getByText, getByTestId } = render(<List loading={false} children={mockChild} />);
    expect(getByText(/Item/)).toBeTruthy();
    expect(getByTestId('children')).toBeTruthy();
  });
});
