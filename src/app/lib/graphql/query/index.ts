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

export const infantByUsername = gql(`
query InfantByUsername($username: String!) {
  infantByUsername(
    InfantUsername: {
      username: $username
    }) {
    username
    firstname
    paternal
    maternal
    birthday
    gender
    country
    department
    province
    distrite
    postal
  }
}
`)
