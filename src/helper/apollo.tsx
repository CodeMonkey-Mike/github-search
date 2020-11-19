import { ApolloLink, ApolloClient, InMemoryCache } from '@apollo/client';
import { HttpLink } from '@apollo/client/link/http';
import { API, AUTH_TOKEN } from '../configs';

const cache = new InMemoryCache({});

const link = ApolloLink.from([
  new HttpLink({
    uri: `${API.URL}${API.SUFFIX}`,
    // For server with deifferent domain use "include"
    credentials: 'include',
  }),
]);

const request = async (operation: any) => {
  operation.setContext({
    headers: {
      authorization: AUTH_TOKEN,
    },
  });
};
const client = new ApolloClient({
  link,
  cache,
});

export { client };
