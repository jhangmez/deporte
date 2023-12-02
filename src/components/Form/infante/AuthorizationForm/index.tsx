import { FormWrapper } from '../FormWrapper'
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
  return (
    <FormWrapper title='Address Information'>
      <label>Autorizacion</label>
      <br></br>
      <Checkbox
        isSelected={authorization}
        defaultSelected={authorization}
        onValueChange={(value) => {
          updateFields({ authorization: value })
        }}
      ></Checkbox>
    </FormWrapper>
  )
}
