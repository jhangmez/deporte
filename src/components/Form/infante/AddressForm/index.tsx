import { FormWrapper } from '../FormWrapper'
import { useState } from 'react'
import { departments, provinces, distrites } from '@utils/data-address'
import { Input } from '@nextui-org/input'
import { Select, SelectItem } from '@nextui-org/select'

type AddressData = {
  country: string
  department: string
  province: string
  distrite: string
  postal: string
}

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void
}

const countries = [{ label: 'Perú', id: '89' }]

export function AddressForm({
  country,
  department,
  province,
  distrite,
  postal,
  updateFields
}: AddressFormProps) {
  const [filteredProvinces, setFilteredProvinces] = useState(provinces)
  const [filteredDistrite, setFilteredDistrite] = useState(distrites)

  const selectedDepartment =
    departments.find((item) => item.id === department)?.name || ''

  const selectedProvince =
    provinces.find((item) => item.id === province)?.name || ''

  const selectedDistrite =
    distrites.find((item) => item.id === distrite)?.name || ''

  return (
    <FormWrapper title='Informacion de contacto'>
      <label>Pais:</label>
      <br></br>
      <Select
        label='Elija el pais'
        isRequired
        placeholder='Elija el pais'
        description='Solo disponible para Perú'
        items={countries}
        defaultSelectedKeys={[country]}
        onChange={(e) => updateFields({ country: e.target.value })}
        className='max-w-xs'
      >
        {(country) => <SelectItem key={country.id}>{country.label}</SelectItem>}
      </Select>

      <label>Departamento:</label>
      <br></br>

      <Select
        items={departments}
        label='Elija un departamento'
        isRequired
        placeholder='Elija un departamento'
        value={selectedDepartment}
        defaultSelectedKeys={[department]}
        scrollShadowProps={{
          isEnabled: false
        }}
        className='max-w-xs'
      >
        {(item) => (
          <SelectItem
            key={item.id}
            onPress={() => {
              updateFields({
                department: item.id,
                province: '',
                distrite: ''
              })
              setFilteredProvinces(
                provinces.filter(
                  (province) => province.department_id === item.id
                )
              )
            }}
          >
            {item.name}
          </SelectItem>
        )}
      </Select>

      <br></br>
      <label>Provincia:</label>
      <br></br>

      <Select
        items={filteredProvinces}
        isRequired
        defaultSelectedKeys={[province]}
        value={selectedProvince}
        isDisabled={!department}
        label='Elija una Provincia'
        placeholder='Elija una Provincia'
        scrollShadowProps={{
          isEnabled: false
        }}
        className='max-w-xs'
      >
        {(item) => (
          <SelectItem
            key={item.id}
            onPress={() => {
              updateFields({ province: item.id, distrite: '' })
              setFilteredDistrite(
                distrites.filter((distrite) => distrite.province_id === item.id)
              )
            }}
          >
            {item.name}
          </SelectItem>
        )}
      </Select>

      <br></br>
      <label>Distrito:</label>
      <br></br>

      <Select
        items={filteredDistrite}
        isDisabled={!province}
        defaultSelectedKeys={[distrite]}
        isRequired
        value={selectedDistrite}
        label='Elija un distrito'
        scrollShadowProps={{
          isEnabled: false
        }}
        placeholder='Elija un distrito'
        className='max-w-xs'
      >
        {(item) => (
          <SelectItem
            key={item.id}
            onPress={() => {
              updateFields({ distrite: item.id })
            }}
          >
            {item.name}
          </SelectItem>
        )}
      </Select>

      <br></br>
      <label>Numero postal: </label>
      <br></br>
      <Input
        label='Numero postal'
        type='text'
        value={postal}
        name='maternal'
        onChange={(e) => {
          const value = e.target.value
          if (value === '' || /^[0-9]+$/.test(value)) {
            updateFields({ postal: value })
          }
        }}
        fullWidth
      />
      <br />
    </FormWrapper>
  )
}
