'use client'

import React from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import ListarProductos from '@components/ListarProducto'

export default function Home() {
  return (
    <main className='w-screen h-screen '>
      <div className='bg-light-surface dark:bg-dark-surface'>
        <Header />
      </div>

      <div className='bg-light-surface dark:bg-dark-surface'>
        <ListarProductos />
      </div>

      <div className='bg-light-surface dark:bg-dark-surface'>
        <Footer />
      </div>
    </main>
  )
}
