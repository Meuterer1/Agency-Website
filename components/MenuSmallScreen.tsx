import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { animated, useSpring } from '@react-spring/web'
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
  z-index: 2;
`

const MenuSmallScreen = (props: MenuSmallScreenProps) => {
  const [isMenuActive, setIsMenuActive] = useState(false)

  const showAnimatedMenu = useSpring({
    opacity: isMenuActive ? 1 : 0,
    x: isMenuActive ? 0 : 100,
    config: {
      duration: 500
    }
  })

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
        <animated.div
          className="smallMenuActive"
          style={{ ...showAnimatedMenu }}
        >
          <FontAwesomeIcon
            icon={faXmark}
            size="2xl"
            onClick={handleMenuOnClick}
          />
          <ul className="divFlex">
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
            <li>
              <Link to={'/contact'}>Contact</Link>
            </li>
          </ul>
        </animated.div>
      )}
    </>
  )
}

export default MenuSmallScreen
