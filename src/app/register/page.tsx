'use client'

import Form from '@components/Auth/form'
import Link from 'next/link'
import { Icon } from '@iconify/react'

export default function Register() {
  return (
    <main className='flex flex-col md:flex-row-reverse md:h-screen bg-light-surface dark:bg-dark-surface h-screen'>
      <section className='flex items-start w-full px-4 mx-auto md:px-0 md:items-center md:w-1/3'>
        <div className=' relative md:-left-2 bg-light-surface dark:bg-dark-surface pt-5 py-5'>
          <Link
            href='/'
            className='w-fit h-14 justify-start items-center gap-[5px] inline-flex'
          >
            <Icon
              icon='icon-park-outline:sport'
              width='28'
              height='28'
              className='text-light-onSurface dark:text-dark-onSurface'
            />
            <div>
              <span className='text-light-onSurface dark:text-dark-onSurface text-2xl font-bold leading-[44px]'>
                In
              </span>
              <span className='text-light-primary dark:text-dark-primary text-2xl font-bold leading-[44px]'>
                Deportiva
              </span>
            </div>
          </Link>
        </div>
      </section>
      <section className='justify-center px-4 md:px-0 md:flex md:w-2/3 md:border-r'>
        <div className='w-full max-w-sm py-4 mx-auto my-auto min-w-min md:py-9 md:w-7/12'>
          <h3 className='text-xl font-semibold text-light-onSurface dark:text-dark-onSurface'>
            Crear cuenta
          </h3>
          <p className='text-sm text-light-onSurface dark:text-dark-onSurface'>
            Crea una cuenta con tu correo electrónico y contraseña.
          </p>
          <Form type='register' />
        </div>
      </section>
    </main>
  )
}
