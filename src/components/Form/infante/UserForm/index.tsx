import { FormWrapper } from '../FormWrapper'
import { Input } from '@nextui-org/input'

type UserData = {
  firstname: string
  paternal: string
  maternal: string
}

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

export function UserForm({
  firstname,
  paternal,
  maternal,
  updateFields
}: UserFormProps) {
  return (
    <FormWrapper title='Detalle de infante'>
      <label>Nombres</label>
      <Input
        label='Nombres'
        type='text'
        value={firstname}
        isRequired
        name='firstname'
        onChange={(e) => {
          const value = e.target.value
          if (value === '' || /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/.test(value)) {
            updateFields({ firstname: value })
          }
        }}
        fullWidth
      />

      <label>Apellido paterno</label>

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

      <label>Apellido materno</label>

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
    </FormWrapper>
  )
}
