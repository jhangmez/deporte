import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  ignoreNoDocuments: true,
  schema: 'http://localhost:4000',
  documents: ['src/**/*.ts'],
  generates: {
    'src/app/lib/gql/': {
      presetConfig: {
        gqlTagName: 'gql'
      },
      preset: 'client'
    },
    './graphql.schema.json': {
      plugins: ['introspection']
    }
  }
}

export default config
