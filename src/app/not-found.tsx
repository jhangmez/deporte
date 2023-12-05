'use client'

import { Link } from '@nextui-org/link'
import { Button } from '@nextui-org/button'
import Header from '@components/Header'
import Footer from '@components/Footer'
import type { Metadata } from 'next'
import { Chip } from '@nextui-org/chip'
import { Icon } from '@iconify/react'

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
      <div className='bg-light-surface  dark:bg-dark-surface'>
        <div className='flex flex-col justify-center items-center  h-screen'>
          <p className='text-light-onSurface dark:text-dark-onSurface'>
            <h1 className='lg:text-6xl font-bold text-2xl'>Oops!</h1>
            <h1 className='lg:text-6xl font-bold text-2xl'>Error 404</h1>
            <h2 className='lg:text-6xl font-bold text-2xl'>No encontrado</h2>

            <div className='flex flex-col gap-2'>
              <div>
                <Button
                  href='/'
                  as={Link}
                  className='text-light-primary dark:text-dark-primary bg-light-onPrimary dark:bg-dark-onPrimary'
                  variant='bordered'
                >
                  Retornar
                </Button>
              </div>
              <Chip
                className=' bg-light-tertiaryContainer darl:bg-dark-tertiaryContainer'
                startContent={<Icon icon='zondicons:exclamation-solid' />}
              >
                Si crees que es un error, actualiza la página.
              </Chip>
            </div>
          </p>
        </div>
      </div>
      <div className='bg-light-surface dark:bg-dark-surface'>
        <Footer />
      </div>
    </main>
  )
}
