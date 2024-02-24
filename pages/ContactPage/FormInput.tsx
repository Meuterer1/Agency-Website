import styled from 'styled-components'

interface FormInputProps {
  label: string
}

const FormInputDiv = styled.div`
  display: flex;
  flex-direction: column;

  label,
  input {
    font-family: 'DM Sans';
    font-size: 18px;
    letter-spacing: 0.54px;
  }

  input {
    height: 50px;
    background: transparent;
    border: none;
    border-bottom: 1px solid #c8c8c8;
    margin-bottom: 50px;

    &:focus-visible {
      outline: none;
    }
  }
`

const FormInput = ({ label }: FormInputProps) => {
  return (
    <FormInputDiv>
      <label htmlFor={`${label}`}>{label}</label>
      <input type="text" id={`${label}`} placeholder=" " />
    </FormInputDiv>
  )
}

export default FormInput
