import { gql } from '../../gql'

export const Login = gql(/* GraphQL */ `
  mutation Login($loginEmail: String!, $loginPassword: String!) {
    login(email: $loginEmail, password: $loginPassword) {
      token
      user {
        id
        name
        email
      }
    }
  }
`)
