import React from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Players from '@components/Players'

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className='w-screen h-screen '>
      <div className='bg-light-surface dark:bg-dark-surface'>
        <Header />
      </div>
      <div className='bg-light-surface dark:bg-dark-surface'>
        <Players slug={params.slug} />
      </div>

      <div className='bg-light-surface dark:bg-dark-surface'>
        <Footer />
      </div>
    </main>
  )
}
