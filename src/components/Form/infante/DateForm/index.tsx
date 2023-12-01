import { FormWrapper } from '../FormWrapper'
import { Input } from '@nextui-org/input'

type DateData = {
  date: string
}

type AddressFormProps = DateData & {
  updateFields: (fields: Partial<DateData>) => void
}

export function DateForm({ date, updateFields }: AddressFormProps) {
  return (
    <FormWrapper title='Address Information'>
      <label>Fecha de nacimiento</label>
      <br></br>

      <Input
        label='Fecha de nacimiento'
        type='date'
        value={date}
        isRequired
        name='firstName'
        onChange={(e) => updateFields({ date: e.target.value })}
        // errorMessage={date && 'Please enter a valid name'}
        fullWidth
      />
    </FormWrapper>
  )
}
