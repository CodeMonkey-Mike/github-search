import React from 'react';
import { render } from '@testing-library/react';
import { Item } from '.';
const mockData = [
  {
    id: 1,
    description: 'text',
    name: 'repo1',
    url: '/url',
    forkCount: 1,
    stargazerCount: 1,
    primaryLanguage: {
      id: '1',
      color: '#cdcdcd',
      name: 'Javascript',
    },
  },
  {
    id: 2,
    description: 'text',
    name: 'repo1',
    url: '/url',
    forkCount: 1,
    stargazerCount: 1,
    primaryLanguage: {
      id: '1',
      color: '#cdcdcd',
      name: 'Javascript',
    },
  },
];
describe('Item - Actions', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });
  it('should render correctly', async () => {
    const { getByTestId } = render(<Item data={mockData} />);
    expect(getByTestId('search-item-1')).toBeTruthy();
    expect(getByTestId('search-item-2')).toBeTruthy();
  });
});
