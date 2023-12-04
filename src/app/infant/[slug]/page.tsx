'use client'

import { useState, useEffect } from 'react'
import HeaderInto from '@components/Header/into'
import Header from '@components/Header'
import Footer from '@components/Footer'
import PerfilInfant from '@components/PerfilInfant'
import { isLogin } from '@utils/authLink'

interface PageProps {
  params: {
    slug: string
  }
}

export default function Page({ params }: PageProps) {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const checkLogin = async () => {
      setLoggedIn(await isLogin())
    }
    checkLogin()
  }, [])

  return (
    <main className='bg-light-surface dark:bg-dark-surface h-screen'>
      {loggedIn ? <HeaderInto /> : <Header />}
      <section className='container mx-auto py-6 px-[20px]'>
        <PerfilInfant slug={params.slug} />
      </section>

      <Footer />
    </main>
  )
}
