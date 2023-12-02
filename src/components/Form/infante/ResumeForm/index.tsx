import { FormWrapper } from '../FormWrapper'
import { FormData } from '../types'

type ResumeFormProps = {
  data: FormData
}

export const ResumeForm: React.FC<ResumeFormProps> = ({ data }) => {
  return (
    <FormWrapper title='Resume Details'>
      <label>Resumen</label>
      <br></br>
      {JSON.stringify(data, null, 2)}
    </FormWrapper>
  )
}
