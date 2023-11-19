import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://localhost:3000/api/graphql',
  documents: ['src/**/*.ts'],
  generates: {
    './src/app/lib/gql/': {
      presetConfig: {
        gqlTagName: 'gql'
      },
      preset: 'client',
      plugins: [
        'typescript', // genera tipos de TypeScript para tu esquema de GraphQL
        'typescript-operations' // genera tipos de TypeScript para tus operaciones de GraphQL
      ]
    },
    './graphql.schema.json': {
      plugins: ['introspection']
    }
  }
}

export default config
