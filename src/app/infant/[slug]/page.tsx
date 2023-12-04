import React from 'react'
import Header from '@components/Header/into'
import Footer from '@components/Footer'
import PerfilInfant from '@components/PerfilInfant'

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className='bg-light-surface dark:bg-dark-surface h-screen'>
      <Header />
      <section className='container mx-auto py-6 px-[20px]'>
        <PerfilInfant slug={params.slug} />
      </section>

      <Footer />
    </main>
  )
}
