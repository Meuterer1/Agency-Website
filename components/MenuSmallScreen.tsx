import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from './Logo'

interface MenuSmallScreenProps {
  color: string
}

const MenuSmallScreenNav = styled.nav<MenuSmallScreenProps>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 10%;
  color: ${props => props.color};
`

const MenuSmallScreen = (props: MenuSmallScreenProps) => {
  const [isMenuActive, setIsMenuActive] = useState(false)

  const handleMenuOnClick = (): void => {
    setIsMenuActive(!isMenuActive)
  }

  return (
    <>
      <MenuSmallScreenNav color={props.color}>
        <Logo color={props.color} />
        <FontAwesomeIcon icon={faBars} size="2xl" onClick={handleMenuOnClick} />
      </MenuSmallScreenNav>

      {isMenuActive && (
        <div className="smallMenuActive">
          <FontAwesomeIcon
            icon={faXmark}
            size="2xl"
            onClick={handleMenuOnClick}
          />
          <ul className="divFlex">
            <li>
              <Link to={'/home'}>Home</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
            <li>
              <Link to={'/contact'}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default MenuSmallScreen
