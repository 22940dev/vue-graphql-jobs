import ApolloClient from 'apollo-boost'
import Vue from 'vue'
import VueApollo from 'vue-apollo'

const API_URL = 'https://api.graphql.jobs/'

Vue.use(VueApollo)

const apolloClient = new ApolloClient({
    uri: API_URL
})


export const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
        $loadingKey: 'loading'
    }
})
