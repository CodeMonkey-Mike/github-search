import { ApolloLink, ApolloClient, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { HttpLink } from '@apollo/client/link/http';
import { API, AUTH_TOKEN } from '../configs';

const cache = new InMemoryCache({});

const link = ApolloLink.from([
  new HttpLink({
    uri: `${API.URL}${API.SUFFIX}`,
  }),
]);

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(link),
  cache,
});

export { client };
