import React from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Listar from '@components/Listar'
import HeroVideo from '@components/HeroVideo'

export default function Home() {
  return (
    <main>
      <div className='bg-light-surface dark:bg-dark-surface'>
        <Header />
      </div>
      <div className='bg-light-surface dark:bg-dark-surface'>
        <HeroVideo />
      </div>
      <div className='bg-light-surface dark:bg-dark-surface'>
        <Listar />
      </div>
      <div className='bg-light-surface dark:bg-dark-surface'>
        <Footer />
      </div>
    </main>
  )
}
