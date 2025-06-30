import { provideApollo } from 'apollo-angular';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { inject } from '@angular/core';
import { HttpLink } from 'apollo-angular/http';

export const graphqlProvider = provideApollo(() => ({
  cache: new InMemoryCache(),
  link: inject(HttpLink).create({
    uri: 'https://backcasamentosm.onrender.com/graphql',
  }),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
}));

