'use client'

import { GithubJhan, LinkedinJhan, VercelHarkaysoft } from '@routes'
import { Icon } from '@iconify/react'
import localFont from 'next/font/local'
import Link from 'next/link'

const myFont = localFont({ src: '../Poppins-SemiBold.ttf' })

export default function FooterInside() {
  return (
    <footer className='container mx-auto py-6 px-[20px]'>
      <hr className='my-6 border-gray-200 dark:border-gray-700 lg:my-8' />
      <section className='sm:flex sm:items-center sm:justify-between'>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2023{'  '}
          <Link
            href={VercelHarkaysoft}
            className='hover:underline'
            target='_blank'
          >
            <span
              className={`${myFont.className} self-center text-1xl whitespace-nowrap pb-3`}
            >
              Harkay
              <span className={`${myFont.className} text-2xl text-[0.8em]`}>
                {' '}
                S O F T
              </span>
            </span>
          </Link>
          . Todos los derechos reservados.
        </span>
        <div className='flex mt-4 space-x-5 sm:justify-center sm:mt-0'>
          <div className='text-light-onSurface dark:text-dark-onSurface hover:text-gray-900 dark:hover:text-white'>
            <Link href={GithubJhan} target='_blank'>
              <Icon icon='mdi:github' width='24' />
            </Link>
          </div>
          <div className='text-light-onSurface dark:text-dark-onSurface hover:text-gray-900 dark:hover:text-white'>
            <Link href={LinkedinJhan} target='_blank'>
              <Icon icon='mdi:linkedin' width='24' />
            </Link>
          </div>
        </div>
      </section>
    </footer>
  )
}
