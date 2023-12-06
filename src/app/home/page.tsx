'use client'

import { Button } from '@nextui-org/button'
import Header from '@components/Header/into'
import Footer from '@components/Footer/inside'
import { useQuery } from '@apollo/client'
import { InfantsByUser } from '@lib/graphql/query'
import { Link } from '@nextui-org/link'
import { Skeleton } from '@nextui-org/skeleton'
import { departments, provinces, distrites } from '@utils/data-address'
import { Icon } from '@iconify/react'
import { calculateAge, formatGender, formatMaternal } from '@utils/auxiliars'
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'
import { Divider } from '@nextui-org/divider'
export default function App() {
  const { loading, error, data, refetch } = useQuery(InfantsByUser)
  return (
    <main className='bg-light-surface dark:bg-dark-surface h-screen'>
      <Header />
      <section className='container mx-auto py-6 px-[20px]'>
        <section className='mb-4'>
          <p className='mb-1 text-2xl font-medium text-light-onSurface dark:text-dark-onSurface'>
            Deseas agregar a tu infante a la plataforma? Agregalo en el boton de
            abajo
          </p>
          <Button
            as={Link}
            href='/register/infant'
            className='bg-light-primary dark:bg-dark-primary text-light-onPrimary dark:text-dark-onPrimary'
          >
            Crear perfil infante
          </Button>
        </section>

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
          <>
            <div className='mb-1 text-2xl font-medium text-light-onSurface dark:text-dark-onSurface'>
              Infantes a cargo:
            </div>
            <div className='container flex flex-col lg:flex-row gap-5 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2'>
              {data?.InfantsByUser?.map((infant, index) => {
                const selectedDepartment =
                  departments.find(
                    (item) => item.id === infant?.profileinfant?.department
                  )?.name || ''
                return (
                  <Card
                    key={index}
                    className='bg-light-secondaryContainer dark:bg-dark-secondaryContainer'
                  >
                    <CardHeader className='mb-1 text-xl font-medium text-light-onSecondaryContainer dark:text-dark-onSecondaryContainer'>
                      {infant?.profileinfant?.firstname}{' '}
                      {infant?.profileinfant?.paternal}{' '}
                      {formatMaternal(infant?.profileinfant?.maternal)}
                    </CardHeader>
                    <Divider />
                    <CardBody>
                      <Link
                        href={`/infant/${infant?.profileinfant?.username}`}
                        className='font-semibold text-light-primary dark:text-dark-primary'
                      >
                        {infant?.profileinfant?.username}
                      </Link>{' '}
                      <p className='mb-1 font-semibold text-light-onSurface dark:text-dark-onSurface flex flex-row gap-2 items-center'>
                        <Icon
                          icon={
                            infant?.profileinfant?.gender === '1'
                              ? 'twemoji:male-sign'
                              : 'twemoji:female-sign'
                          }
                        />
                        {formatGender(String(infant?.profileinfant?.gender))}
                      </p>
                      {loading ? (
                        <div className='max-w-[150px] w-full flex items-center gap-3'>
                          <div className='w-full flex flex-col gap-2'>
                            <Skeleton />
                            <Skeleton className='h-3 w-4/5 rounded-lg' />
                          </div>
                        </div>
                      ) : (
                        <p className='mb-1 font-semibold text-light-onSurface dark:text-dark-onSurface flex flex-row gap-2 items-center'>
                          <Icon
                            icon={
                              infant?.profileinfant?.country === '89'
                                ? 'twemoji:flag-peru'
                                : 'healthicons:question-mark-negative'
                            }
                          />
                          {selectedDepartment}
                        </p>
                      )}
                    </CardBody>
                  </Card>
                )
              })}
            </div>
          </>
        )}
      </section>

      <div className='bg-light-surface dark:bg-dark-surface'>
        <Footer />
      </div>
    </main>
  )
}
