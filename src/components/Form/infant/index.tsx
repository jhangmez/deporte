'use client'

import { useState, useCallback, useMemo, useEffect } from 'react'
// import { Link } from '@nextui-org/react'
// import { useQuery } from '@apollo/client'
// import { Myself } from '@lib/graphql/query'
// import { Skeleton } from '@nextui-org/skeleton'
import { Input } from '@nextui-org/input'
import { Card } from '@nextui-org/card'
import { Button } from '@nextui-org/button'
import { Slider } from '@nextui-org/slider'

const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4']

const validateEmail = (valueEmail: String) =>
  valueEmail.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)

const validateName = (valueName: String) =>
  valueName.match(/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/)

export default function Infant() {
  // const { loading, error, data, refetch } = useQuery(Myself)
  const [valueEmail, setValueEmail] = useState('')
  const [valueName, setValueName] = useState('')

  const [activeStep, setActiveStep] = useState(0)
  const [formData, setFormData] = useState({})

  const [isNameValid, setIsNameValid] = useState(false)

  const handleNext = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    setIsNameValid(false)
  }, [])

  const handleBack = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
    setIsNameValid(true)
  }, [])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }))

    if (e.target.name === 'name' || 'email' || 'phone') {
      setIsNameValid(e.target.value.length >= 2)
    }
  }, [])

  const valuestep = useMemo(() => activeStep + 1, [activeStep])

  // Esto es para email

  const isInvalidEmail = useMemo(() => {
    if (valueEmail === '') return false

    return validateEmail(valueEmail) ? false : true
  }, [valueEmail])

  // Esto es para name

  const isInvalidName = useMemo(() => {
    if (valueName === '') return false

    return validateName(valueName) ? false : true
  }, [valueName])
  console.log('Este es el valor de name inicial: ', valueName)

  return (
    <div className='text-light-onSurface dark:text-dark-onSurface'>
      {/* Agregar los datos del tutor */}
      <Card className='bg-light-onSecondaryContainer dark:bg-dark-onSecondaryContainer'>
        Paso {valuestep}
        <Slider
          size='sm'
          step={1}
          hideThumb={true}
          showSteps={true}
          maxValue={steps.length}
          minValue={0}
          value={valuestep}
          defaultValue={0}
          className='max-w-md'
        />
        <div className='flex flex-col gap-2 justify-center items-center'>
          <Card>
            {activeStep === 0 && (
              <>
                <h1>Nombres</h1>
                <Input
                  label='Name'
                  type='text'
                  value={valueName}
                  isRequired
                  name='name'
                  onChange={handleChange}
                  isInvalid={isInvalidName}
                  errorMessage={isInvalidName && 'Please enter a valid name'}
                  onValueChange={setValueName}
                  fullWidth
                />
                <br></br>
                <h1>Apellido Paterno</h1>
                <Input
                  label='Name'
                  type='text'
                  value={valueName}
                  isRequired
                  name='name'
                  onChange={handleChange}
                  isInvalid={isInvalidName}
                  errorMessage={isInvalidName && 'Please enter a valid name'}
                  onValueChange={setValueName}
                  fullWidth
                />
                <br></br>
                <h1>Apellido Materno</h1>
                <Input
                  label='Name'
                  type='text'
                  value={valueName}
                  isRequired
                  name='name'
                  onChange={handleChange}
                  isInvalid={isInvalidName}
                  errorMessage={isInvalidName && 'Please enter a valid name'}
                  onValueChange={setValueName}
                  fullWidth
                />
              </>
            )}

            {activeStep === 1 && (
              <>
                <h1>Numero telefonico</h1>
                <Input
                  isRequired
                  type='number'
                  label='Phone'
                  name='phone'
                  onChange={handleChange}
                  fullWidth
                />
              </>
            )}
            {activeStep === 2 && (
              <>
                <h1>Resumen</h1>
                {JSON.stringify(formData, null, 2)}
              </>
            )}
          </Card>
          <Card>
            <Button
              color='primary'
              onClick={handleNext}
              isDisabled={
                !isNameValid ||
                isInvalidEmail ||
                activeStep === steps.length - 1
              }
            >
              {activeStep === steps.length - 1 ? 'Enviar' : 'Siguiente'}
            </Button>
            {activeStep > 0 && (
              <Button color='secondary' onPress={handleBack}>
                Regresar
              </Button>
            )}
          </Card>
        </div>
      </Card>
    </div>
  )
}
