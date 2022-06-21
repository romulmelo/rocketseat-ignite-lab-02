import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4oip9ev072c01xx5neeedmo/master",
  cache: new InMemoryCache()
})

export { client }
