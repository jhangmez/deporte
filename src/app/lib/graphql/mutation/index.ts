import exp from 'constants'
import { gql } from '../../gql'

export const Login = gql(`
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
  mutation Signup($email: String!, $password: String!, $name: String) {
  signup(email: $email, password: $password, name: $name) {
    token
  }
}
`)

export const CreateInfant = gql(`
mutation CreateInfant( $bio: String, $username: String!, $firstname: String, $paternal: String, $maternal: String, $gender: String, $birthday: DateTime, $country: String, $department: String, $province: String, $distrite: String, $authorization: Boolean!, $postal: String) {
  createInfant(
    bio: $bio,
    username: $username,
    firstname: $firstname,
    paternal: $paternal,
    maternal: $maternal,
    gender: $gender,
    birthday: $birthday,
    country: $country,
    department: $department,
    province: $province,
    distrite: $distrite,
    authorization: $authorization,
    postal: $postal
    ) {
    id
  }
}
`)
