import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const MenuSmallScreen: React.FC = () => {
  const [isMenuActive, setIsMenuActive] = useState(false)

  const handleMenuOnClick = (): void => {
    setIsMenuActive(!isMenuActive)
  }

  return (
    <>
      <nav>
        <div className="divFlex">
          <img src="assets/Logo.png" aria-label="logo" className="imgLogo" />
          <h5>Canvix</h5>
        </div>
        <FontAwesomeIcon icon={faBars} size="2xl" onClick={handleMenuOnClick} />
      </nav>

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
