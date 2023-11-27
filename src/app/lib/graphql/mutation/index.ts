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

export const Signup = gql(`
  mutation Mutation($email: String!, $password: String!, $name: String) {
  signup(email: $email, password: $password, name: $name) {
    token
  }
}
`)
