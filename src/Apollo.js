import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import nodeFetch from 'node-fetch'

export default new ApolloClient({
  connectToDevTools: process.browser,
  ssrMode: !process.browser,
  link: new HttpLink({
    uri: 'https://api.graphcms.com/simple/v1/awesomeTalksClone',
    fetch: typeof window !== 'undefined' ? fetch : nodeFetch
  }),
  cache: process.browser
    ? new InMemoryCache().restore(window.__APOLLO_STATE__)
    : new InMemoryCache()
})
