import { FormWrapper } from '../FormWrapper'
import { Input } from '@nextui-org/input'
import { Select, SelectItem } from '@nextui-org/select'
import { calculateAge, displayDate, parseStringToDate } from '@utils/auxiliars'

type DateData = {
  birthday: Date | null
  gender: string
}

type DateFormProps = DateData & {
  updateFields: (fields: Partial<DateData>) => void
}

type Gender = { label: string; id: string }

const genders: Gender[] = [
  { label: 'Masculino', id: '1' },
  { label: 'Femenino', id: '2' }
]

export function DateForm({ birthday, gender, updateFields }: DateFormProps) {
  const todayDate = new Date().toISOString().split('T')[0]
  const age = calculateAge(birthday)

  return (
    <FormWrapper title='Address Information'>
      <label>Fecha de nacimiento</label>
      <br></br>

      <Input
        label='Fecha de nacimiento'
        type='date'
        value={displayDate(birthday)}
        isRequired
        name='date'
        max={todayDate}
        onChange={(e) =>
          updateFields({ birthday: parseStringToDate(e.target.value) })
        }
        fullWidth
      />
      <label>Genero</label>
      <br></br>
      <Select
        items={genders}
        isRequired
        label='Seleccione el genero'
        value={gender}
        defaultSelectedKeys={[gender]}
        placeholder='Seleccione el genero'
        className='max-w-xs'
        onChange={(e) => updateFields({ gender: e.target.value })}
      >
        {(gender) => <SelectItem key={gender.id}>{gender.label}</SelectItem>}
      </Select>
      <br></br>
      <label>Edad</label>
      <br></br>

      <Input
        label='Edad'
        description='Se escribe automáticamente'
        isReadOnly
        value={age.toString()}
        fullWidth
      />
    </FormWrapper>
  )
}
