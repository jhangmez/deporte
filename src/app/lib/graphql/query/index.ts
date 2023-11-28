import { gql } from '../../gql'

export const AllUsers = gql(/* GraphQL */ `
  query AllUsers {
    allUsers {
      id
      name
      email
    }
  }
`)

export const Myself = gql(/* GraphQL */ `
  query Me {
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
