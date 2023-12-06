/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation Login($loginEmail: String!, $loginPassword: String!) {\n    login(email: $loginEmail, password: $loginPassword) {\n      token\n      user {\n        id\n        name\n        email\n      }\n    }\n  }\n": types.LoginDocument,
    "\n  mutation Signup($email: String!, $password: String!, $name: String) {\n  signup(email: $email, password: $password, name: $name) {\n    token\n  }\n}\n": types.SignupDocument,
    "\nmutation CreateInfant( $bio: String, $username: String!, $firstname: String, $paternal: String, $maternal: String, $gender: String, $birthday: DateTime, $country: String, $department: String, $province: String, $distrite: String, $authorization: Boolean!, $postal: String) {\n  createInfant(\n    bio: $bio,\n    username: $username,\n    firstname: $firstname,\n    paternal: $paternal,\n    maternal: $maternal,\n    gender: $gender,\n    birthday: $birthday,\n    country: $country,\n    department: $department,\n    province: $province,\n    distrite: $distrite,\n    authorization: $authorization,\n    postal: $postal\n    ) {\n    id\n  }\n}\n": types.CreateInfantDocument,
    "\n  query AllUsers {\n    allUsers {\n      id\n      name\n      email\n    }\n  }\n": types.AllUsersDocument,
    "\n  query Me {\n    me {\n      id\n      name\n      email\n      profile {\n        id\n        bio\n      }\n    }\n  }\n": types.MeDocument,
    "\nquery InfantByUsername($username: String!) {\n  infantByUsername(\n    InfantUsername: {\n      username: $username\n    }) {\n    username\n    firstname\n    paternal\n    maternal\n    birthday\n    gender\n    country\n    department\n    province\n    distrite\n    postal\n  }\n}\n": types.InfantByUsernameDocument,
    "\nquery GetUser($userId: String!) {\n  getUser(UserInput:{\n    id:$userId\n  }) {\n    bio\n    username\n    firstname\n    paternal\n    maternal\n  }\n allInfantsByUser(UserInput:{\n    id:$userId\n  }) {\n    profileinfant {\n      username\n      firstname\n      paternal\n      maternal\n      gender\n      country\n      department\n    }\n  }\n}\n": types.GetUserDocument,
    "\nquery InfantsByUser {\n  InfantsByUser {\n    profileinfant {\n      bio\n      id\n      username\n      firstname\n      paternal\n      maternal\n      birthday\n      gender\n      country\n      department\n      province\n      distrite\n      postal\n      authorization\n    }\n  }\n}": types.InfantsByUserDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Login($loginEmail: String!, $loginPassword: String!) {\n    login(email: $loginEmail, password: $loginPassword) {\n      token\n      user {\n        id\n        name\n        email\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation Login($loginEmail: String!, $loginPassword: String!) {\n    login(email: $loginEmail, password: $loginPassword) {\n      token\n      user {\n        id\n        name\n        email\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Signup($email: String!, $password: String!, $name: String) {\n  signup(email: $email, password: $password, name: $name) {\n    token\n  }\n}\n"): (typeof documents)["\n  mutation Signup($email: String!, $password: String!, $name: String) {\n  signup(email: $email, password: $password, name: $name) {\n    token\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation CreateInfant( $bio: String, $username: String!, $firstname: String, $paternal: String, $maternal: String, $gender: String, $birthday: DateTime, $country: String, $department: String, $province: String, $distrite: String, $authorization: Boolean!, $postal: String) {\n  createInfant(\n    bio: $bio,\n    username: $username,\n    firstname: $firstname,\n    paternal: $paternal,\n    maternal: $maternal,\n    gender: $gender,\n    birthday: $birthday,\n    country: $country,\n    department: $department,\n    province: $province,\n    distrite: $distrite,\n    authorization: $authorization,\n    postal: $postal\n    ) {\n    id\n  }\n}\n"): (typeof documents)["\nmutation CreateInfant( $bio: String, $username: String!, $firstname: String, $paternal: String, $maternal: String, $gender: String, $birthday: DateTime, $country: String, $department: String, $province: String, $distrite: String, $authorization: Boolean!, $postal: String) {\n  createInfant(\n    bio: $bio,\n    username: $username,\n    firstname: $firstname,\n    paternal: $paternal,\n    maternal: $maternal,\n    gender: $gender,\n    birthday: $birthday,\n    country: $country,\n    department: $department,\n    province: $province,\n    distrite: $distrite,\n    authorization: $authorization,\n    postal: $postal\n    ) {\n    id\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AllUsers {\n    allUsers {\n      id\n      name\n      email\n    }\n  }\n"): (typeof documents)["\n  query AllUsers {\n    allUsers {\n      id\n      name\n      email\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Me {\n    me {\n      id\n      name\n      email\n      profile {\n        id\n        bio\n      }\n    }\n  }\n"): (typeof documents)["\n  query Me {\n    me {\n      id\n      name\n      email\n      profile {\n        id\n        bio\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery InfantByUsername($username: String!) {\n  infantByUsername(\n    InfantUsername: {\n      username: $username\n    }) {\n    username\n    firstname\n    paternal\n    maternal\n    birthday\n    gender\n    country\n    department\n    province\n    distrite\n    postal\n  }\n}\n"): (typeof documents)["\nquery InfantByUsername($username: String!) {\n  infantByUsername(\n    InfantUsername: {\n      username: $username\n    }) {\n    username\n    firstname\n    paternal\n    maternal\n    birthday\n    gender\n    country\n    department\n    province\n    distrite\n    postal\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetUser($userId: String!) {\n  getUser(UserInput:{\n    id:$userId\n  }) {\n    bio\n    username\n    firstname\n    paternal\n    maternal\n  }\n allInfantsByUser(UserInput:{\n    id:$userId\n  }) {\n    profileinfant {\n      username\n      firstname\n      paternal\n      maternal\n      gender\n      country\n      department\n    }\n  }\n}\n"): (typeof documents)["\nquery GetUser($userId: String!) {\n  getUser(UserInput:{\n    id:$userId\n  }) {\n    bio\n    username\n    firstname\n    paternal\n    maternal\n  }\n allInfantsByUser(UserInput:{\n    id:$userId\n  }) {\n    profileinfant {\n      username\n      firstname\n      paternal\n      maternal\n      gender\n      country\n      department\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery InfantsByUser {\n  InfantsByUser {\n    profileinfant {\n      bio\n      id\n      username\n      firstname\n      paternal\n      maternal\n      birthday\n      gender\n      country\n      department\n      province\n      distrite\n      postal\n      authorization\n    }\n  }\n}"): (typeof documents)["\nquery InfantsByUser {\n  InfantsByUser {\n    profileinfant {\n      bio\n      id\n      username\n      firstname\n      paternal\n      maternal\n      birthday\n      gender\n      country\n      department\n      province\n      distrite\n      postal\n      authorization\n    }\n  }\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;