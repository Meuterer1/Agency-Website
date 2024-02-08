import { animated, useSpring } from '@react-spring/web'
import { easeBackInOut } from 'd3-ease'

import styled from 'styled-components'

const ContactIconsDiv = styled(animated.div)`
  display: flex;
  gap: 50px;
  margin-top: 18px;
`

const ContactIcons = () => {
  const animatedIcons = useSpring({
    from: { y: 100, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 2000,
    config: {
      duration: 1000,
      easing: easeBackInOut
    }
  })
  return (
    <ContactIconsDiv style={{ ...animatedIcons }}>
      <img src="assets/FacebookIcon.png" alt="Facebook icon" />
      <img src="assets/InstagramIcon.png" alt="Instagram icon" />
      <img src="assets/LinkedinIcon.png" alt="Linkedin icon" />
    </ContactIconsDiv>
  )
}

export default ContactIcons
