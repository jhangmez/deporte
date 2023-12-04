import { FormWrapper } from '../FormWrapper'
import { FormData } from '../types'
import { departments, provinces, distrites } from '@utils/data-address'
import { calculateAge, displayDate, formatGender } from '@utils/auxiliars'

type ResumeFormProps = {
  data: FormData
}

export const ResumeForm: React.FC<ResumeFormProps> = ({ data }) => {
  const age = calculateAge(data.birthday)
  const selectedDepartment =
    departments.find((item) => item.id === data.department)?.name || ''

  const selectedProvince =
    provinces.find((item) => item.id === data.province)?.name || ''

  const selectedDistrite =
    distrites.find((item) => item.id === data.distrite)?.name || ''
  return (
    <FormWrapper title='Resumen'>
      <p className='mb-1 font-semibold'>
        Nombre del infante:{' '}
        <div className='text-light-primary dark:text-dark-primary font-normal'>
          {data.firstname} {data.paternal} {data.maternal}
        </div>
      </p>

      <p className='mb-1 font-semibold'>
        Fecha de nacimiento:{' '}
        <div className='text-light-primary dark:text-dark-primary font-normal'>
          {displayDate(data.birthday)}
        </div>
      </p>
      <p className='mb-1 font-semibold'>
        País:{' '}
        <div className='text-light-primary dark:text-dark-primary font-normal'>
          {data.country}
        </div>
      </p>
      <p className='mb-1 font-semibold'>
        Departamento:{' '}
        <div className='text-light-primary dark:text-dark-primary font-normal'>
          {selectedDepartment}
        </div>
      </p>
      <p className='mb-1 font-semibold'>
        Provincia:{' '}
        <div className='text-light-primary dark:text-dark-primary font-normal'>
          {selectedProvince}
        </div>
      </p>
      <p className='mb-1 font-semibold'>
        Distrito:{' '}
        <div className='text-light-primary dark:text-dark-primary font-normal'>
          {selectedDistrite}
        </div>
      </p>
      <p className='mb-1 font-semibold'>
        Número postal:{' '}
        <div className='text-light-primary dark:text-dark-primary font-normal'>
          {data.postal}
        </div>
      </p>
      <p className='mb-1 font-semibold'>
        Género:{' '}
        <div className='text-light-primary dark:text-dark-primary font-normal'>
          {formatGender(data.gender)}
        </div>
      </p>
      <p className='mb-1 font-semibold'>
        Edad:{' '}
        <div className='text-light-primary dark:text-dark-primary font-normal'>
          {age.toString()}
        </div>
      </p>
    </FormWrapper>
  )
}
