import { gql } from '@lib/gql'

export const getTodosQuery = gql(/* GraphQL */ `
  query Query {
    todos {
      id
      email
      perinfId
      phonenumber
    }
  }
`)
