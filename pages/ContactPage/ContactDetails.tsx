import { animated, useSpring } from '@react-spring/web'
import { easeQuadInOut } from 'd3-ease'
import styled from 'styled-components'

interface ContactDetailsProps {
  src: string
  title: string
  text: string
  alt: string
  delay: number
}

const ContactDetailsDiv = styled(animated.div)`
  display: flex;
  gap: 25px;

  img {
    background-color: black;
    border-radius: 50%;
    padding: 10px;
    object-fit: fill;
    height: 50px;
    width: 50px;
  }

  h6 {
    font-weight: 600;
  }

  p {
    font-family: 'DM Sans';
    font-size: 16px;
    letter-spacing: 0.48px;
  }
`

const ContactDetails = ({
  src,
  title,
  text,
  alt,
  delay
}: ContactDetailsProps) => {
  const animatedContact = useSpring({
    from: { y: 100, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: delay,
    config: {
      duration: 1000,
      easing: easeQuadInOut
    }
  })

  return (
    <ContactDetailsDiv style={{ ...animatedContact }}>
      <img src={src} alt={alt} />
      <div>
        <h6>{title}</h6>
        <p>{text}</p>
      </div>
    </ContactDetailsDiv>
  )
}

export default ContactDetails
