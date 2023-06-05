import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://apidev.kunpro.co/graphql/',
    cache: new InMemoryCache(),
});

export default client