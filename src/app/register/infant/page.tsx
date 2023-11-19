'use client'

import Form from '@components/Auth/form'
import Link from 'next/link'
import { Icon } from '@iconify/react'

export default function Register() {
  return (
    <div className='flex h-screen w-screen items-center justify-center bg-light-surface dark:bg-dark-surface'>
      <div className='z-10 w-full max-w-md overflow-hidden rounded-[12px] border shadow-xl'>
        <div className='flex flex-col items-center justify-center space-y-3 border-b bg-light-surfaceContainer dark:bg-dark-surfaceContainer px-4 py-6 pt-8 text-center sm:px-16'>
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

          <h3 className='text-xl font-semibold text-light-onSurface dark:text-dark-onSurface'>
            Crear infante
          </h3>
          <p className='text-sm text-light-onSurface dark:text-dark-onSurface'>
            Crea un perfil de infante para InDeportiva
          </p>
        </div>
        <Form type='register' />
      </div>
    </div>
  )
}
