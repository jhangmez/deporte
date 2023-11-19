// app/providers.tsx
'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ApolloWrapper } from '@lib/graphql'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloWrapper>
      <NextUIProvider>{children}</NextUIProvider>
    </ApolloWrapper>
  )
}
