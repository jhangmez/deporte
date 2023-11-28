'use client'

import React from 'react'
import { Link } from '@nextui-org/react'
import { Button } from '@nextui-org/button'
import Header from '@components/Header/into'
import { useQuery } from '@apollo/client'
import { AllUsers, Myself } from '@lib/graphql/query'
import { Skeleton } from '@nextui-org/skeleton'
export default function App() {
  // const { loading, error, data, refetch } = useQuery(AllUsers)
  const { loading, error, data, refetch } = useQuery(Myself)
  return (
    <main className='bg-light-surface dark:bg-dark-surface'>
      <Header />
      <Button
        as={Link}
        href='/register/infant'
        className='bg-light-primary dark:bg-dark-primary text-light-onPrimary dark:text-dark-onPrimary'
      >
        Crear perfil infante
      </Button>
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
        <div
          key={data?.me?.id}
          className='text-light-onSurface dark:text-dark-onSurface'
        >
          <br></br>
          {data?.me?.email}
          <br></br>
          {data?.me?.id}
          <br></br>
          {data?.me?.name}
          <br></br>
          {data?.me?.profile?.bio}
          <br></br>
          {data?.me?.profile?.id}
          <br></br>
        </div>
      )}
    </main>
  )
}
