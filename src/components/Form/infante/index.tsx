import { useState, FormEvent, useCallback } from 'react'
import { useMultistepForm } from './useMultistepForm'
import { ResumeForm } from './ResumeForm'
import { UserForm } from './UserForm'
import { AddressForm } from './AddressForm'
import { AuthorizationForm } from './AuthorizationForm'
import { DateForm } from './DateForm'
import { InfantForm } from './infantForm'
import { Button } from '@nextui-org/button'
import { Slider } from '@nextui-org/slider'
import { FormData } from './types'
import { useRouter } from 'next/navigation'
import { useMutation } from '@apollo/client'
import { CreateInfant } from '@lib/graphql/mutation'
import { Spinner } from '@nextui-org/spinner'
import toast from 'react-hot-toast'

const INITIAL_DATA: FormData = {
  authorization: false,
  bio: '',
  username: '',
  firstname: '',
  paternal: '',
  maternal: '',
  gender: '',
  birthday: null,
  country: '',
  department: '',
  province: '',
  distrite: '',
  postal: ''
}

export default function FormInfante() {
  const [createInfant] = useMutation(CreateInfant)
  const [loading, setLoading] = useState(false)
  const [dataINITIAL, setDataINITIAL] = useState(INITIAL_DATA)
  const router = useRouter()

  const updateFields = useCallback((fields: Partial<FormData>) => {
    setDataINITIAL((prev) => {
      return { ...prev, ...fields }
    })
  }, [])

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <AuthorizationForm
        key='authorizationForm'
        {...dataINITIAL}
        updateFields={updateFields}
      />,
      <InfantForm
        key='infantForm'
        {...dataINITIAL}
        updateFields={updateFields}
      />,
      <DateForm key='dateForm' {...dataINITIAL} updateFields={updateFields} />,
      <UserForm key='userForm' {...dataINITIAL} updateFields={updateFields} />,
      <AddressForm
        key='addressForm'
        {...dataINITIAL}
        updateFields={updateFields}
      />,
      <ResumeForm key='resumeForm' data={dataINITIAL} />
    ])

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) {
      return next()
    } else {
      e.preventDefault()
      setLoading(true)
      createInfant({ variables: dataINITIAL })
        .then((response) => {
          setLoading(false)
          if (response.errors) {
            toast.error('Hubo un error al crear el infante')
          } else {
            toast.success(
              '¡Infante creado exitosamente! Redirigiendo a home...'
            )
            setTimeout(() => {
              router.push('/home')
            }, 2000)
          }
        })
        .catch((error) => {
          toast.error(`Error: ${error.message}`)
        })
    }
  }

  return (
    <div className='text-light-onSurface dark:text-dark-onSurface'>
      <form onSubmit={onSubmit}>
        <div>
          Pasos {currentStepIndex + 1} / {steps.length}
          <Slider
            className='max-w-md'
            color='warning'
            size='sm'
            step={1}
            hideThumb={true}
            showSteps={true}
            maxValue={steps.length}
            minValue={0}
            value={currentStepIndex + 1}
            defaultValue={0}
          />
        </div>
        {step}
        <div>
          {!isFirstStep && (
            <Button
              className='bg-light-secondary dark:bg-dark-secondary text-light-onSecondary dark:text-dark-onSecondary'
              onPress={back}
            >
              Regresar
            </Button>
          )}
          <Button
            className='bg-light-primary dark:bg-dark-primary text-light-onPrimary dark:text-dark-onPrimary'
            type='submit'
            isDisabled={!dataINITIAL.authorization}
          >
            {loading ? <Spinner /> : isLastStep ? 'Enviar' : 'Siguiente'}
          </Button>
        </div>
      </form>
    </div>
  )
}
