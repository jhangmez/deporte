import { useMemo } from 'react'
import { FormWrapper } from '../FormWrapper'
import { Input } from '@nextui-org/input'

type UserData = {
  firstName: string
  paternal: string
  maternal: string
}

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

const validateName = (valueName: string) => {
  return !valueName.match(/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/)
}

const useValidation = (value: string) =>
  useMemo(() => {
    if (value === '') return false
    return validateName(value)
  }, [value])

export function UserForm({
  firstName,
  paternal,
  maternal,
  updateFields
}: UserFormProps) {
  const isInvalidName = useValidation(firstName)
  const isInvalidPaternal = useValidation(paternal)
  const isInvalidMaternal = useValidation(maternal)

  return (
    <FormWrapper title='Detalle de infante'>
      <br />

      <label>Nombres</label>
      <Input
        label='Nombres'
        type='text'
        value={firstName}
        isRequired
        name='firstName'
        onChange={(e) => updateFields({ firstName: e.target.value })}
        errorMessage={isInvalidName && 'Please enter a valid name'}
        fullWidth
      />
      <br />
      <label>Apellido paterno</label>
      <br />
      <Input
        label='Apellido paterno'
        type='text'
        value={paternal}
        isRequired
        name='paternal'
        onChange={(e) => updateFields({ paternal: e.target.value })}
        errorMessage={isInvalidPaternal && 'Please enter a valid name'}
        fullWidth
      />
      <br />
      <label>Apellido materno</label>
      <br />
      <Input
        label='Apellido materno'
        type='text'
        value={maternal}
        isRequired
        name='maternal'
        onChange={(e) => updateFields({ maternal: e.target.value })}
        errorMessage={isInvalidMaternal && 'Please enter a valid name'}
        fullWidth
      />
      <br />
    </FormWrapper>
  )
}
