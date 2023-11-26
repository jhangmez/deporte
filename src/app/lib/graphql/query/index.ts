import { gql } from '../../gql'

export const AllUsers = gql(/* GraphQL */ `
  query Query {
    allUsers {
      id
      name
      email
    }
  }
`)

export const me = gql(/* GraphQL */ `
  query Query {
    me {
      id
      name
      email
      profile {
        id
        bio
      }
    }
  }
`)
