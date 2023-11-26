// app/providers.tsx
'use client'

import { SessionProvider } from 'next-auth/react'
import { ApolloWrapper } from '@lib/graphql'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ApolloWrapper>{children}</ApolloWrapper>
    </SessionProvider>
  )
}
