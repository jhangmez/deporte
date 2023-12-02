import { FormWrapper } from '../FormWrapper'
import { useState } from 'react'
import { countries, departments, provinces, distrites } from './data'
import { Icon } from '@iconify/react'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Input
} from '@nextui-org/react'

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
      <label>Departamento: {selectedDepartment}</label>
      <br></br>

      <Dropdown>
        <DropdownTrigger>
          <Button
            startContent={<Icon icon='subway:down-2' width='12' height='12' />}
          >
            {selectedDepartment || 'Elija un departamento'}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label='Elija un departamento'
          items={departments}
          disallowEmptySelection
        >
          {(item) => (
            <DropdownItem
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
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>

      <br></br>
      <label>
        Provincia:{selectedProvince} {province}
      </label>
      <br></br>

      <Dropdown>
        <DropdownTrigger>
          <Button
            isDisabled={!department}
            startContent={<Icon icon='subway:down-2' width='12' height='12' />}
          >
            {selectedProvince || 'Elija una Provincia'}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label='Elija una Provincia'
          items={filteredProvinces}
          disallowEmptySelection
        >
          {(item) => (
            <DropdownItem
              key={item.id}
              onPress={() => {
                updateFields({ province: item.id, distrite: '' })
                setFilteredDistrite(
                  distrites.filter(
                    (distrite) => distrite.province_id === item.id
                  )
                )
              }}
            >
              {item.name}
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
      <br></br>
      <label>
        Distrito:{selectedDistrite} {distrite}
      </label>
      <br></br>

      <Dropdown>
        <DropdownTrigger>
          <Button
            isDisabled={!province}
            startContent={<Icon icon='subway:down-2' width='12' height='12' />}
          >
            {selectedDistrite || 'Elija un distrito'}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label='Elija un distrito'
          items={filteredDistrite}
          disallowEmptySelection
        >
          {(item) => (
            <DropdownItem
              key={item.id}
              onPress={() => {
                updateFields({ distrite: item.id })
              }}
            >
              {item.name}
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>

      <br></br>
      <label>Numero postal: {postal}</label>
      <br></br>
      <Input
        label='Numero postal'
        type='text'
        value={postal}
        name='maternal'
        // onChange={(e) => updateFields({ postal: e.target.value })}
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
