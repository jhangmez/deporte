import { useQuery } from '@apollo/client'
import { infantByUsername } from '@lib/graphql/query'
import { Skeleton } from '@nextui-org/skeleton'
import { notFound } from 'next/navigation'
import { departments, provinces, distrites } from '@utils/data-address'
import { calculateAge, formatGender } from '@utils/auxiliars'

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
    <>
      {loading ? (
        <div className='max-w-[300px] w-full flex items-center gap-3'>
          <div className='w-full flex flex-col gap-2'>
            <Skeleton />
            <Skeleton className='h-3 w-4/5 rounded-lg' />
            <Skeleton className='h-3 w-3/5 rounded-lg' />
            <Skeleton className='h-3 w-4/5 rounded-lg' />
          </div>
        </div>
      ) : (
        <>
          <p className='mb-1 font-semibold text-light-onSurface dark:text-dark-onSurface'>
            Nombre del infante:{' '}
            <div className='text-light-primary dark:text-dark-primary font-normal'>
              {data?.infantByUsername?.firstname}{' '}
              {data?.infantByUsername?.paternal}
            </div>
          </p>
          <p className='mb-1 font-semibold text-light-onSurface dark:text-dark-onSurface'>
            Edad:{' '}
            <div className='text-light-primary dark:text-dark-primary font-normal'>
              {age.toString()}
            </div>
          </p>
          <p className='mb-1 font-semibold text-light-onSurface dark:text-dark-onSurface'>
            Género:{' '}
            <div className='text-light-primary dark:text-dark-primary font-normal'>
              {formatGender(String(data?.infantByUsername?.gender))}
            </div>
          </p>
          <p className='mb-1 font-semibold text-light-onSurface dark:text-dark-onSurface'>
            Departamento:{' '}
            <div className='text-light-primary dark:text-dark-primary font-normal'>
              {selectedDepartment}
            </div>
          </p>
        </>
      )}
    </>
  )
}
