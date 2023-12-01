import { FormWrapper } from '../FormWrapper'
import { useState } from 'react'
import { Checkbox } from '@nextui-org/react'

type AuthorizationData = {
  authorization: boolean
}

type AuthorizationFormProps = AuthorizationData & {
  updateFields: (fields: Partial<AuthorizationData>) => void
}

export function AuthorizationForm({
  authorization,
  updateFields
}: AuthorizationFormProps) {
  const [isSelected, setIsSelected] = useState(false)
  return (
    <FormWrapper title='Address Information'>
      <label>Autorizacion</label>
      <br></br>

      <Checkbox
        isSelected={authorization}
        defaultSelected={authorization}
        onValueChange={(value) => {
          setIsSelected(value)
          updateFields({ authorization: value })
        }}
        // onChange={(e) => updateFields({ authorization: isSelected })}
      >
        Subscribe (controlled)
      </Checkbox>
    </FormWrapper>
  )
}
