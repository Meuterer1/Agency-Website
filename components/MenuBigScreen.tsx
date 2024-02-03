import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const MenuBigScreen: React.FC = () => {
  return (
    <nav>
      <Logo />
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
