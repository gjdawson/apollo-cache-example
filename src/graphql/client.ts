import {ApolloClient, createHttpLink, from, NormalizedCacheObject} from "@apollo/client";
import {cache} from "./cache";
import {typeDefs} from "./type-defs";
import {onError} from "@apollo/client/link/error";

const httpLink = createHttpLink({
  uri: `http://localhost:4000/graphql`,
  fetch,
})

const errorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
})

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  connectToDevTools: true,
  typeDefs,
  link: from([errorLink, httpLink])
});
