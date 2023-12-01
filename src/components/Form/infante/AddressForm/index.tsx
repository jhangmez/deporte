import { FormWrapper } from '../FormWrapper'
import { useState } from 'react'
import { Autocomplete, AutocompleteItem } from '@nextui-org/react'
import { countries, departments, provinces } from './data'

type AddressData = {
  country: string
  department: string
  province: string
  postal: string
}

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void
}

export function AddressForm({
  country,
  department,
  province,
  postal,
  updateFields
}: AddressFormProps) {
  const [selectedKey, setSelectedKey] = useState(true)
  const [filteredProvinces, setFilteredProvinces] = useState(provinces)

  return (
    <FormWrapper title='Address Information'>
      {/* <label>Pais de nacimiento</label>
      <br></br>
      <Autocomplete
        label='Pais de nacimiento'
        placeholder='Pais de nacimiento'
        defaultItems={countries}
        defaultSelectedKey={country}
        className='max-w-xs'
        allowsCustomValue={true}
        onSelectionChange={(id) => {
          updateFields({ country: String(id) })
        }}
        scrollShadowProps={{
          isEnabled: false
        }}
      >
        {(item) => (
          <AutocompleteItem key={item.id}>{item.name}</AutocompleteItem>
        )}
      </Autocomplete>
      <br></br> */}
      <label>Departamento</label>
      <br></br>
      {department}
      <br></br>
      <Autocomplete
        label='Departamento'
        placeholder='Departamento'
        isRequired
        defaultItems={departments}
        defaultSelectedKey={department}
        className='max-w-xs'
        allowsCustomValue
        onSelectionChange={(id) => {
          updateFields({ department: String(id) })
          if (id) {
            setFilteredProvinces(
              provinces.filter((province) => province.department_id === id)
            )
            setSelectedKey(!id)
          } else {
            setSelectedKey(true)
          }
        }}
        scrollShadowProps={{
          isEnabled: false
        }}
      >
        {(item) => (
          <AutocompleteItem key={item.id}>{item.name}</AutocompleteItem>
        )}
      </Autocomplete>
      <br></br>
      <label>Provincia</label>
      <br></br>
      <Autocomplete
        label='Provincia'
        isDisabled={selectedKey}
        placeholder='Provincia'
        isRequired
        defaultItems={filteredProvinces}
        defaultSelectedKey={province}
        className='max-w-xs'
        allowsCustomValue
        onSelectionChange={(id) => {
          updateFields({ province: String(id) })
        }}
        scrollShadowProps={{
          isEnabled: false
        }}
      >
        {(item) => (
          <AutocompleteItem key={item.id}>{item.name}</AutocompleteItem>
        )}
      </Autocomplete>
    </FormWrapper>
  )
}
