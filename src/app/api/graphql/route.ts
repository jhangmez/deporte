import { ApolloServer } from '@apollo/server'
import { NextRequest } from 'next/server'
import prisma from '@lib/prisma/prisma'
import { startServerAndCreateNextHandler } from '@as-integrations/next'

const typeDefs = `#graphql
type user {
    id: Int!
    email: String!
    perinfId: Int!
    phonenumber: String!
  }

type personalinformation {
    id: Int!
    gender: String!
    firstname: String!
    lastname: String!
    username: String!
}

  type Query {
    todos: [user!]!,
    todosperfil: [personalinformation!]!
  }
`
const resolvers = {
  Query: {
    todos: async () => prisma?.user.findMany(),
    todosperfil: async () => {
      const users = await prisma?.personalinformation.findMany()
      return users.map((user) => ({
        ...user,
        gender: user.gender === 1 ? 'MASCULINO' : 'FEMENINO'
      }))
    }
  }
}
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
})
const handler = startServerAndCreateNextHandler<NextRequest>(apolloServer)
export async function GET(request: NextRequest) {
  return handler(request)
}
export async function POST(request: NextRequest) {
  return handler(request)
}
