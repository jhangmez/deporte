import { FormWrapper } from '../FormWrapper'
import { Input } from '@nextui-org/input'
import { sanitize } from 'isomorphic-dompurify'
import { Textarea } from '@nextui-org/input'

type InfantForm = {
  username: string
  bio: string
}

type InfantFormProps = InfantForm & {
  updateFields: (fields: Partial<InfantForm>) => void
}

export function InfantForm({ username, bio, updateFields }: InfantFormProps) {
  return (
    <FormWrapper title='Address Information'>
      <label>Username</label>
      <Input
        label='Username'
        type='text'
        value={username}
        description='Nombre unico para identificar al infante'
        isRequired
        name='username'
        onChange={(e) => {
          const value = e.target.value
          if (value === '' || /^[a-z0-9\.]+$/.test(value)) {
            updateFields({ username: value })
          }
        }}
        fullWidth
      />
      <label>Bio</label>

      <Textarea
        label='Biografia'
        type='text'
        value={bio}
        maxRows={10}
        maxLength={100}
        description='Maximo 100 caracteres'
        name='bio'
        onChange={(e) => {
          const sanitizedValue = sanitize(e.target.value)
          updateFields({ bio: sanitizedValue })
        }}
        fullWidth
      />
    </FormWrapper>
  )
}
