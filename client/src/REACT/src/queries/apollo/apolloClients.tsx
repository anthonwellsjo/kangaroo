import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloSanityClient = new ApolloClient({ uri: "https://8ci5beth.api.sanity.io/v1/graphql/production/default", cache: new InMemoryCache({}) });
export const apolloDbClient = new ApolloClient({ uri: "http://localhost:4000/graphql", cache: new InMemoryCache({}) });
