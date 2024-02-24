import { ButtonHTMLAttributes, FC } from 'react'
import styled from 'styled-components'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  background: string
  spanbackground?: string
  color?: string
}

interface ArrowButton {
  background: string
  content: string
}

export interface StyledButtonProps extends ButtonProps {
  text: string
}

const ButtonSection = styled.button<ButtonProps>`
  padding: 0 20px;
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

  &:focus {
    outline: 3px dotted #64ccc5;
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

  .buttonText {
    padding: 0;
  }

  @media (max-width: 460px) {
    gap: 5px;
    padding: 10px 15px 10px 5px;
  }

  transition: 0.7s ease;
`

const SliderButtonSection = styled(ButtonSection)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  border-radius: 50%;
  border: 1px solid black;
  margin: 0;

  &:hover {
    border: 1px solid transparent;
  }
`

export const Button: FC<StyledButtonProps> = ({
  background,
  spanbackground,
  color,
  text,
  ...props
}) => {
  return (
    <ButtonSection
      background={background}
      spanbackground={spanbackground}
      color={color}
      {...props}
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
      <p className="buttonText">{text}</p>
    </ButtonSection>
  )
}

export const SliderButton = ({ content, background }: ArrowButton) => {
  return (
    <SliderButtonSection background={background}>
      {' '}
      <img src={content} alt="arrow" />{' '}
    </SliderButtonSection>
  )
}
