'use client'

import { Link } from '@nextui-org/react'
import { useQuery } from '@apollo/client'
import { Myself } from '@lib/graphql/query'
import { Skeleton } from '@nextui-org/skeleton'

export default function Infant() {
  const { loading, error, data, refetch } = useQuery(Myself)
  return (
    <div className='text-light-onSurface dark:text-dark-onSurface'>
      <br></br>
      <span className='font-bold'>
        Se registrara al infante con el siguiente tutor:
      </span>
      {loading ? (
        <div className='max-w-[300px] w-full flex items-center gap-3'>
          <div className='w-full flex flex-col gap-2'>
            <Skeleton />
            <Skeleton className='h-3 w-4/5 rounded-lg' />
            <Skeleton className='h-3 w-3/5 rounded-lg' />
            <Skeleton className='h-3 w-4/5 rounded-lg' />
          </div>
        </div>
      ) : error ? (
        <p className='text-light-onSurface dark:text-dark-onSurface'>
          Error {error.message}
        </p>
      ) : (
        <section>
          <p className='font-semibold'>
            Nombre: <br></br>
            {data?.me?.name}
          </p>
          <p className='font-semibold'>
            Correo electronico: <br></br>
            {data?.me?.email}
          </p>
        </section>
      )}
      <div className='text-light-primary dark:text-dark-primary text-2xl font-bold leading-[44px]'>
        En proceso!
      </div>
      <Link href='/home'>Retornar a home</Link>
    </div>
  )
}
