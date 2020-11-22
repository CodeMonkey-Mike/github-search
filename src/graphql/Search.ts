import { gql } from '@apollo/client';

export const SEARCH = gql`
  query($userId: String!) {
    user(login: $userId) {
      repositories(last: 100, isLocked: false) {
        totalCount
        nodes {
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
      }
    }
  }
`;
