import { ApolloProvider } from "@apollo/client"
import { client } from "./lib/apollo"

import Router from "@/routes"

function App() {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  )
}

export default App
