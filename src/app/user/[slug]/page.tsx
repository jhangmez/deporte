'use client'

import { useState, useEffect } from 'react'
import HeaderInto from '@components/Header/into'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Perfil from '@components/Perfil'
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
      <div className='bg-light-surface dark:bg-dark-surface'>
        <Perfil slug={params.slug} />
      </div>

      <div className='bg-light-surface dark:bg-dark-surface'>
        <Footer />
      </div>
    </main>
  )
}
