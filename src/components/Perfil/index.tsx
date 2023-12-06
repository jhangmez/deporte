'use client'

import { useQuery } from '@apollo/client'
import { getUser } from '@lib/graphql/query'
import { notFound } from 'next/navigation'
import { Link } from '@nextui-org/link'
import { Skeleton } from '@nextui-org/skeleton'
import { departments, provinces, distrites } from '@utils/data-address'
import { Icon } from '@iconify/react'
import { calculateAge, formatGender, formatMaternal } from '@utils/auxiliars'
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'
import { Divider } from '@nextui-org/divider'

export default function Perfil({ slug }: { slug: string }) {
  const { loading, error, data, refetch } = useQuery(getUser, {
    variables: { userId: slug }
  })
  if (error) {
    return notFound()
  }

  return (
    <div className='container mx-auto py-6 px-[20px]'>
      {loading ? (
        <Skeleton className='flex rounded-full lg:w-48 lg:h-48 md:w-36 md:h-36 w-24 h-24 mb-2' />
      ) : (
        <p className='text-light-onSurface dark:text-dark-onSurface'>
          <div className='mb-1 text-4xl font-medium text-light-onSurface dark:text-dark-onSurface'>
            {data?.getUser?.firstname} {data?.getUser?.paternal}{' '}
            {formatMaternal(data?.getUser?.maternal)}
          </div>

          <div className='mb-1 text-2xl font-medium text-light-onSurface dark:text-dark-onSurface'>
            Infantes a cargo:
          </div>
          <div className='container flex flex-col lg:flex-row gap-5 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2'>
            {data?.allInfantsByUser?.map((infant, index) => {
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
        </p>
      )}
    </div>
  )
}
