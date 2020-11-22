import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import Search from '.';
import { MockedProvider } from '@apollo/client/testing';
import { SEARCH } from '../../graphql';

describe('Search page - Actions', () => {
  const mocks = [
    {
      request: {
        query: SEARCH,
        variables: { userId: 'master' },
      },
      result: {
        data: {
          user: {
            repositories: {
              edges: [
                {
                  node: {
                    id: 'MDEwOlJlcG9zaXRvcnk5ODM2OTk=',
                    description:
                      'A Wiki-based CMS, written as a research of concepts of tags and categorization.',
                    name: 'nord-engine',
                    url: 'https://github.com/master/nord-engine',
                    forkCount: 0,
                    stargazerCount: 0,
                    primaryLanguage: {
                      color: '#3572A5',
                      id: 'MDg6TGFuZ3VhZ2UxNDU=',
                      name: 'Python',
                      __typename: 'Language',
                    },
                    __typename: 'Repository',
                  },
                  __typename: 'RepositoryEdge',
                },
              ],
              pageInfo: {
                endCursor: 'Y3Vyc29yOnYyOpHOACCJGw==',
                hasNextPage: true,
                __typename: 'PageInfo',
              },
            },
          },
        },
      },
    },
    {
      request: {
        query: SEARCH,
        variables: { aaa: 8 },
      },
      error: new Error('Something went wrong'),
    },
  ];
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
  it('should render search box', async () => {
    const { getByTestId } = render(
      <MockedProvider mocks={mocks}>
        <Search />
      </MockedProvider>
    );
    expect(getByTestId('search-wrapper')).toBeTruthy();
    expect(getByTestId('search-input')).toBeTruthy();
    expect(getByTestId('list')).toBeTruthy();
    fireEvent.change(getByTestId('search-input'), { target: { value: 'master' } });
    await waitFor(() => {
      expect(getByTestId('search-item-MDEwOlJlcG9zaXRvcnk5ODM2OTk=')).toBeTruthy();
    });
  });
});
