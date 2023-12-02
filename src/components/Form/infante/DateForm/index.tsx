import { FormWrapper } from '../FormWrapper'
import { Input } from '@nextui-org/input'

type DateData = {
  date: string
}

type DateFormProps = DateData & {
  updateFields: (fields: Partial<DateData>) => void
}

export function DateForm({ date, updateFields }: DateFormProps) {
  const calculateAge = (birthdate: string): number => {
    const today = new Date()
    const birthDate = new Date(birthdate)
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--
    }

    return age
  }

  const age = calculateAge(date)
  const ageDisplay = isNaN(age) ? '' : age.toString()

  const todayDate = new Date().toISOString().split('T')[0]
  return (
    <FormWrapper title='Address Information'>
      <label>Fecha de nacimiento</label>
      <br></br>

      <Input
        label='Fecha de nacimiento'
        type='date'
        value={date}
        isRequired
        name='date'
        max={todayDate}
        onChange={(e) => updateFields({ date: e.target.value })}
        fullWidth
      />
      <br></br>
      <label>Edad</label>
      <br></br>

      <Input label='Edad' isReadOnly value={ageDisplay} fullWidth />
    </FormWrapper>
  )
}
