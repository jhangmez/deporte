import React from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import ListarFutbol from '@components/Listar/Futbol'
import ListarSinclub from '@components/Listar/Sinclub'
import ListarClubes from '@components/Listar/Clubes'
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
        <ListarFutbol />
      </div>
      <div className='bg-light-surface dark:bg-dark-surface'>
        <ListarSinclub />
      </div>
      <div className='bg-light-surface dark:bg-dark-surface'>
        <ListarClubes />
      </div>
      <div className='bg-light-surface dark:bg-dark-surface'>
        <Footer />
      </div>
    </main>
  )
}
