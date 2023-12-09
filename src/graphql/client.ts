import { ApolloClient, InMemoryCache } from "@apollo/client";

export const cache = new InMemoryCache();

export const client = new ApolloClient({
  cache,
  uri: "http://localhost:5001/graphql",
  // Provide some optional constructor fields
  name: "react-web-client",
  //   version: "1.3",
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  },
});
