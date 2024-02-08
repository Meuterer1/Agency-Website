import styled from 'styled-components'
import { Button } from '../../components/Button'
import FormInput from './FormInput'

const ContactFormDiv = styled.div`
  width: 60%;
  background-color: #f4f4f4;
  border-radius: 20px;
  padding: 45px 45px 0 45px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  div {
    width: 45%;

    @media (max-width: 700px) {
      width: 100%;
    }
  }

  div:last-of-type {
    width: 100%;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`

const ContactForm = () => {
  return (
    <ContactFormDiv>
      <FormInput label="First name" />
      <FormInput label="Last name" />
      <FormInput label="Email name" />
      <FormInput label="Form name" />
      <FormInput label="Message name" />
      <Button text="Submit Now" background={'black'} color="white" />
    </ContactFormDiv>
  )
}

export default ContactForm
