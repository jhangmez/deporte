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

export const getUser = gql(`
query GetUser($userId: String!) {
  getUser(UserInput:{
    id:$userId
  }) {
    bio
    username
    firstname
    paternal
    maternal
  }
 allInfantsByUser(UserInput:{
    id:$userId
  }) {
    profileinfant {
      username
      firstname
      paternal
      maternal
      gender
      country
      department
    }
  }
}
`)

export const InfantsByUser = gql(`
query InfantsByUser {
  InfantsByUser {
    profileinfant {
      bio
      id
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
      authorization
    }
  }
}`)
