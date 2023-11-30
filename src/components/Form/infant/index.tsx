'use client'

import { useState, useCallback, useMemo } from 'react'
import { Link } from '@nextui-org/react'
import { useQuery } from '@apollo/client'
import { Myself } from '@lib/graphql/query'
import { Skeleton } from '@nextui-org/skeleton'
import { Input } from '@nextui-org/input'
import { Card } from '@nextui-org/card'
import { Button } from '@nextui-org/button'
import { Slider } from '@nextui-org/slider'

const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4']

export default function Infant() {
  const { loading, error, data, refetch } = useQuery(Myself)

  const [activeStep, setActiveStep] = useState(0)
  const [formData, setFormData] = useState({})

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1)
  // }

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1)
  // }

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   })
  // }
  const handleNext = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }, [])

  const handleBack = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }, [])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }))
  }, [])

  const value = useMemo(() => activeStep + 1, [activeStep])

  return (
    <div className='text-light-onSurface dark:text-dark-onSurface'>
      <br></br>
      <span className='font-bold'>
        Se registrara al infante con el siguiente tutor:
      </span>
      <section>
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
      </section>
      <Card className='bg-light-onSecondaryContainer dark:bg-dark-onSecondaryContainer'>
        <Slider
          size='sm'
          step={1}
          hideThumb={true}
          label='Paso'
          showSteps={true}
          maxValue={steps.length}
          minValue={0}
          // value={activeStep + 1}
          value={value}
          defaultValue={0}
          className='max-w-md'
        />
        <div className='flex flex-col gap-2 justify-center items-center'>
          <Card>
            {activeStep === 0 && (
              <>
                <h1>Step 1</h1>
                <Input
                  label='Name'
                  type='text'
                  isRequired
                  name='name'
                  onChange={handleChange}
                  fullWidth
                />
              </>
            )}
            {activeStep === 1 && (
              <>
                <h1>Step 2</h1>
                <Input
                  label='Email'
                  name='email'
                  onChange={handleChange}
                  fullWidth
                />
              </>
            )}
            {activeStep === 2 && (
              <>
                <h1>Step 3</h1>
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
            {activeStep === 3 && (
              <>
                <h1>Step 4</h1>
                {JSON.stringify(formData, null, 2)}
              </>
            )}
          </Card>
          <Card>
            <Button
              color='primary'
              onClick={handleNext}
              disabled={activeStep === steps.length - 1}
            >
              {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
            </Button>
            {activeStep > 0 && (
              <Button color='secondary' onClick={handleBack}>
                Back
              </Button>
            )}
          </Card>
        </div>
      </Card>

      <div className='text-light-primary dark:text-dark-primary text-2xl font-bold leading-[44px]'>
        En proceso!
      </div>
      <Link href='/home'>Retornar a home</Link>
    </div>
  )
}
