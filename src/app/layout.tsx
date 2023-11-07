import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { Toaster } from 'react-hot-toast'
import AuthStatus from '@components/Auth/auth-status'
import { Suspense } from 'react'

const myFont = localFont({ src: './Tektur-VariableFont_wdth,wght.ttf' })

const title = 'Ronal | Tienda virtual'
const description = 'Tienda virtual'

export const metadata: Metadata = {
  title,
  description
  // twitter: {
  //   card: 'summary_large_image',
  //   title,
  //   description
  // }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`${myFont.className} selection:bg-light-primary selection:text-light-onPrimary dark:selection:bg-dark-primary dark:selection:text-dark-onPrimary`}
      >
        <Toaster />
        <Suspense fallback='Loading...'>
          <AuthStatus />
        </Suspense>
        <noscript>Página realizada por @jhangmez de HarkaySoft</noscript>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
