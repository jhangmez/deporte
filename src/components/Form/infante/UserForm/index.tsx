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

export function UserForm({
  firstName,
  paternal,
  maternal,
  updateFields
}: UserFormProps) {
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
        onChange={(e) => {
          const value = e.target.value
          if (value === '' || /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/.test(value)) {
            updateFields({ firstName: value })
          }
        }}
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
        onChange={(e) => {
          const value = e.target.value
          if (value === '' || /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/.test(value)) {
            updateFields({ paternal: value })
          }
        }}
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
        onChange={(e) => {
          const value = e.target.value
          if (value === '' || /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/.test(value)) {
            updateFields({ maternal: value })
          }
        }}
        fullWidth
      />
      <br />
    </FormWrapper>
  )
}
