import { useQuery } from '@apollo/client'
import { infantByUsername } from '@lib/graphql/query'
import { Skeleton } from '@nextui-org/skeleton'
import { notFound } from 'next/navigation'
import { departments, provinces, distrites } from '@utils/data-address'
import { calculateAge, formatGender, formatMaternal } from '@utils/auxiliars'
import { Divider } from '@nextui-org/divider'
import { Avatar } from '@nextui-org/avatar'
import { Button } from '@nextui-org/button'
import { Icon } from '@iconify/react'

export default function Perfil({ slug }: { slug: string }) {
  const { loading, error, data, refetch } = useQuery(infantByUsername, {
    variables: { username: slug }
  })

  if (error) {
    return notFound()
  }

  const age = calculateAge(data?.infantByUsername?.birthday)
  const selectedDepartment =
    departments.find((item) => item.id === data?.infantByUsername?.department)
      ?.name || ''

  const selectedProvince =
    provinces.find((item) => item.id === data?.infantByUsername?.province)
      ?.name || ''

  const selectedDistrite =
    distrites.find((item) => item.id === data?.infantByUsername?.distrite)
      ?.name || ''

  return (
    <div className='container flex flex-col lg:px-36 lg:py-12 md:px-24 md:py-10'>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-row lg:gap-32 md:gap-20 gap-5'>
          <section className='justify-start'>
            {loading ? (
              <Skeleton className='flex rounded-full lg:w-48 lg:h-48 md:w-36 md:h-36 w-24 h-24 mb-2' />
            ) : (
              <Avatar
                src='/user_picture.jpg'
                className='lg:w-48 lg:h-48 md:w-36 md:h-36 w-24 h-24 text-large'
              />
            )}
          </section>

          <section className='flex flex-col flex-wrap'>
            {loading ? (
              <div className='max-w-[300px] w-full flex items-center gap-3'>
                <Skeleton className='h-3 w-3/5 rounded-lg' />
              </div>
            ) : (
              <p className='mb-1 text-light-onSurface dark:text-dark-onSurface flex flex-row gap-2 items-center'>
                <Icon
                  icon='icon-park-outline:sport'
                  width='24'
                  height='24'
                  className='text-light-onSurface dark:text-dark-onSurface'
                />
                {data?.infantByUsername?.username}{' '}
                <Button
                  isIconOnly
                  variant='light'
                  aria-label='Configuraciones'
                  size='sm'
                  className='text-light-onSurface dark:text-dark-onSurface'
                >
                  <Icon icon='tabler:dots' width='24' height='24' />
                </Button>
              </p>
            )}

            {loading ? (
              <div className='max-w-[300px] w-full flex items-center gap-3'>
                <Skeleton className='w-3/5 rounded-lg'>
                  <div className='h-3 w-full rounded-lg bg-secondary'></div>
                </Skeleton>
              </div>
            ) : (
              <p className='mb-1 text-xl font-medium text-light-onSurface dark:text-dark-onSurface'>
                {data?.infantByUsername?.firstname}{' '}
                {data?.infantByUsername?.paternal}{' '}
                {formatMaternal(data?.infantByUsername?.maternal)}
              </p>
            )}

            {loading ? (
              <Skeleton className='h-5 w-1/8 rounded-lg' />
            ) : (
              <Button className='bg-light-primary dark:bg-dark-primary text-light-onPrimary dark:text-dark-onPrimary'>
                <Icon icon='ic:baseline-plus' width='20' height='20' /> Seguir
              </Button>
            )}
          </section>
        </div>

        <section className='flex flex-row gap-5'>
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
                  data?.infantByUsername?.country === '89'
                    ? 'twemoji:flag-peru'
                    : 'healthicons:question-mark-negative'
                }
              />
              {selectedDepartment}
            </p>
          )}

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
                  data?.infantByUsername?.gender === '1'
                    ? 'twemoji:male-sign'
                    : 'twemoji:female-sign'
                }
              />
              {formatGender(String(data?.infantByUsername?.gender))}
            </p>
          )}
        </section>
      </div>

      <section className='flex flex-row gap-2'>
        {loading ? (
          <div className='max-w-[150px] w-full flex items-center gap-3'>
            <div className='w-full flex flex-col gap-2'>
              <Skeleton />
              <Skeleton className='h-3 w-4/5 rounded-lg' />
            </div>
          </div>
        ) : (
          <Button className='bg-light-secondary dark:bg-dark-secondary text-light-onSecondary dark:text-dark-onSecondary'>
            <Icon icon='material-symbols:contact-mail' width='20' height='20' />
            Contactar
          </Button>
        )}

        {loading ? (
          <div className='max-w-[150px] w-full flex items-center gap-3'>
            <div className='w-full flex flex-col gap-2'>
              <Skeleton />
              <Skeleton className='h-3 w-4/5 rounded-lg' />
            </div>
          </div>
        ) : (
          <Button className='bg-light-tertiary dark:bg-dark-tertiary text-light-onTertiary dark:text-dark-onTertiary'>
            <Icon icon='mdi:star-outline' width='20' height='20' /> Suscribir
          </Button>
        )}
      </section>

      <Divider className='my-4 bg-light-onSurface dark:bg-dark-onSurface' />

      {loading ? (
        <div className='max-w-[300px] w-full flex items-center gap-3'>
          <div className='w-full flex flex-col gap-2'>
            <Skeleton />
            <Skeleton className='h-3 w-4/5 rounded-lg' />
          </div>
        </div>
      ) : (
        <p className='mb-1 font-semibold text-light-onSurface dark:text-dark-onSurface'>
          Edad:{' '}
          <div className='text-light-primary dark:text-dark-primary font-normal'>
            {age.toString()}
          </div>
        </p>
      )}
    </div>
  )
}
