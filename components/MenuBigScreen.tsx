import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Logo from './Logo'

interface MenuBigScreenProps {
  color: string
}

const MenuBigScreenNav = styled.nav<MenuBigScreenProps>`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 10%;
  border: none;
  background: transparent;
  color: ${props => props.color};

  button {
    background-color: ${props => (props.color === 'black' ? 'black' : 'white')};
    color: ${props => (props.color === 'black' ? 'white' : 'black')};
    padding: 8px 15px;
    border-radius: 23px;
    border: none;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.54px;

    &:hover {
      cursor: pointer;
      background-color: #64ccc5;
    }
  }

  a {
    color: ${props => props.color};
    font-size: 20px;
    font-weight: 400;
    &:hover {
      color: #64ccc5;
    }
  }
`

const MenuBigScreen = (props: MenuBigScreenProps) => {
  const navigate = useNavigate()
  const handleButtonOnClick = () => {
    navigate('/contact')
  }

  return (
    <MenuBigScreenNav color={props.color}>
      <Logo color={props.color} />
      <div className="divFlex">
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
      </div>
      <button onClick={handleButtonOnClick}>Get in touch</button>
    </MenuBigScreenNav>
  )
}

export default MenuBigScreen
