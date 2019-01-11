// see https://github.com/the-road-to-graphql/react-apollo-client-testing-example/blob/master/src/test/client-mock.js

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { SchemaLink } from 'apollo-link-schema';
import { makeExecutableSchema } from 'graphql-tools';

import { schema, resolvers } from './schema';

export const cache = new InMemoryCache();

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
});

export default new ApolloClient({
  link: new SchemaLink({ schema: executableSchema }),
  cache,
});