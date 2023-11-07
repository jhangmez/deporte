import Link from 'next/link'
import Header from '@components/Header'
import Footer from '@components/Footer'
import type { Metadata } from 'next'
import Textbutton from '@Buttons/Text'

const title = 'jhangmez | Skills'
const description = 'Pagina de jhangmez'

export const metadata: Metadata = {
  title,
  description
}

export default function NotFound() {
  return (
    <main className='w-screen h-screen'>
      <div className='bg-light-surface dark:bg-dark-surface '>
        <Header />
      </div>
      <div className='bg-light-surface dark:bg-dark-surface'>
        <div className='flex justify-center items-center h-screen'>
          <p className='text-light-onSurface dark:text-dark-onSurface'>
            <h1 className='lg:text-6xl font-bold text-2xl'>Oops!</h1>
            <h1 className='lg:text-6xl font-bold text-2xl'>Error 404</h1>

            <h2 className='lg:text-6xl font-bold text-2xl'>No encontrado</h2>

            <Link href='/'>
              <Textbutton label='Retornar' />
            </Link>
          </p>
        </div>
      </div>
      <div className='bg-light-surface dark:bg-dark-surface'>
        <Footer />
      </div>
    </main>
  )
}
