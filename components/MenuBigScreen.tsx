import React from 'react'
import { Link } from 'react-router-dom'

const MenuBigScreen = () => {
  return (
    <nav>
      <div className="divFlex">
        <img src="assets/Logo.png" aria-label="logo" className="imgLogo" />
        <h5>Canvix</h5>
      </div>
      <div className="divFlex">
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
      <button>Get in touch</button>
    </nav>
  )
}

export default MenuBigScreen
