import React from 'react'
import styled from 'styled-components'

import Logo from './Logo'

const FooterSection = styled.section`
  background: black;
  width: 100%;
  color: white;
  padding: 100px;
`

const Footer: React.FC = () => {
  return (
    <FooterSection>
      <div>
        <Logo />
      </div>
      <div></div>
    </FooterSection>
  )
}

export default Footer
