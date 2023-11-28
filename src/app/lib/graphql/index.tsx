import { ApolloLink, HttpLink } from '@apollo/client'
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink
} from '@apollo/experimental-nextjs-app-support/ssr'
import { setContext } from '@apollo/client/link/context'
import { getSession } from 'next-auth/react'

const authLink = setContext(async (_, context) => {
  const session = await getSession()
  const modifiedHeader = {
    headers: {
      ...context.headers,
      Authorization: session?.user.accessToken
        ? `Bearer ${session?.user.accessToken}`
        : ''
    }
  }
  return modifiedHeader
})

function makeClient() {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL
  })

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true
            }),
            // httpLink
            authLink.concat(httpLink)
          ])
        : // : httpLink
          authLink.concat(httpLink)
  })
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  )
}
