import React from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Producto from '@components/Producto'

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className='w-screen h-screen '>
      <div className='bg-light-surface dark:bg-dark-surface'>
        <Header />
      </div>
      <div className='bg-light-surface dark:bg-dark-surface'>
        <Producto slug={params.slug} />
      </div>

      <div className='bg-light-surface dark:bg-dark-surface'>
        <Footer />
      </div>
    </main>
  )
}
