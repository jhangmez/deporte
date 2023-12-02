import { useState, FormEvent, useCallback } from 'react'
import { useMultistepForm } from './useMultistepForm'
import { ResumeForm } from './ResumeForm'
import { UserForm } from './UserForm'
import { AddressForm } from './AddressForm'
import { AuthorizationForm } from './AuthorizationForm'
import { DateForm } from './DateForm'
import { Button } from '@nextui-org/button'
import { Slider } from '@nextui-org/slider'
import { FormData } from './types'

const INITIAL_DATA: FormData = {
  authorization: true,
  firstName: '',
  paternal: '',
  maternal: '',
  date: '',
  country: '',
  department: '',
  province: '',
  distrite: '',
  postal: '',
  username: ''
}

export default function FormInfante() {
  const [data, setData] = useState(INITIAL_DATA)

  const updateFields = useCallback((fields: Partial<FormData>) => {
    setData((prev) => {
      return { ...prev, ...fields }
    })
  }, [])

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <AuthorizationForm {...data} updateFields={updateFields} />,
      <DateForm {...data} updateFields={updateFields} />,
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <ResumeForm data={data} />
    ])

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) return next()
  }

  return (
    <div className='text-light-onSurface dark:text-dark-onSurface'>
      <form onSubmit={onSubmit}>
        <div>
          Pasos {currentStepIndex + 1} / {steps.length}
          <Slider
            size='sm'
            step={1}
            hideThumb={true}
            showSteps={true}
            maxValue={steps.length}
            minValue={0}
            value={currentStepIndex + 1}
            defaultValue={0}
            className='max-w-md'
          />
        </div>
        {step}
        <div>
          {!isFirstStep && (
            <Button color='secondary' onPress={back}>
              Regresar
            </Button>
          )}
          <Button
            color='primary'
            type='submit'
            isDisabled={!data.authorization}
          >
            {isLastStep ? 'Enviar' : 'Siguiente'}
          </Button>
        </div>
      </form>
    </div>
  )
}
