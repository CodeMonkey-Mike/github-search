import { gql } from '@apollo/client';

const REPOSITORY_FRAGMENT = gql`
  fragment repository on Repository {
    id
    description
    name
    url
    forkCount
    stargazerCount
    primaryLanguage {
      color
      id
      name
    }
  }
`;

export const SEARCH = gql`
  query($userId: String!, $cursor: String) {
    user(login: $userId) {
      repositories(first: 10, after: $cursor) {
        edges {
          node {
            ...repository
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
  ${REPOSITORY_FRAGMENT}
`;
