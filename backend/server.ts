import { ApolloServer } from 'apollo-server'

import typeDefs from './schema'
import Query from './resolver/Query'
import Mutation from './resolver/Mutation'
import db from './db'

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
  },
  context: {
    db,
  }
})

server.listen(4000).then(({ url }) => {
  console.log(`Running a GraphQL API server ${url}`)
})
