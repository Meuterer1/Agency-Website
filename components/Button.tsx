import styled from 'styled-components'

interface ButtonProps {
  background: string
  spanbackground: string
  color?: string
}

export interface StyledButtonProps extends ButtonProps {
  text: string
}

const ButtonSection = styled.button<ButtonProps>`
  padding: 10px 20px 10px 10px;
  background: ${props => props.background};
  border: none;
  border-radius: 23px;
  font-size: 20px;
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 81px;
  max-width: 268px;
  color: ${props => (props.color ? props.color : 'black')};

  &:hover {
    background-color: #64ccc5;
    cursor: pointer;
  }

  span {
    background-color: ${props => props.spanbackground};
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 460px) {
    gap: 5px;
    padding: 10px 15px 10px 5px;
  }
`

const Button = (props: StyledButtonProps) => {
  const { background, spanbackground, color } = props
  return (
    <ButtonSection
      background={background}
      spanbackground={spanbackground}
      color={color}
    >
      <span>
        <img
          src={`${
            spanbackground === '#FBFBFB'
              ? 'assets/BlackArrowRight.png'
              : 'assets/ArrowRight.png'
          }`}
          alt="arrow right"
        />
      </span>
      {props.text}
    </ButtonSection>
  )
}

export default Button
