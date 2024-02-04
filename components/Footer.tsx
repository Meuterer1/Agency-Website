import React from 'react'
import styled from 'styled-components'

import Subscribe from './Subscribe'

import { Link } from 'react-router-dom'
import Logo from './Logo'

const FooterSection = styled.footer`
  background: black;
  width: 100%;
  color: white;
  padding: 100px;

  .footerContent {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    a {
      color: white;

      &:hover {
        color: #64ccc5;
      }
    }

    p {
      margin-top: 24px;
      max-width: 350px;
      font-family: 'DM Sans', sans-serif;

      font-size: 18px;
      letter-spacing: 0.54px;
    }

    h6 {
      font-weight: 600;
      font-family: 'DM Sans', sans-serif;
    }

    ul:first-of-type {
      margin-right: 30px;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 16px;

      margin-top: 24px;
      li {
        font-family: 'DM Sans', sans-serif;
        letter-spacing: 0.48px;
      }
    }

    .footerLogo {
      @media (max-width: 910px) {
        margin-right: calc(100% - 350px);
        margin-bottom: 60px;
      }

      @media (max-width: 380px) {
        margin-right: 0;
      }
    }

    .footerSubscribe {
      order: 4;
      @media (max-width: 1270px) {
        margin-top: 60px;
        width: 100%;
      }
    }

    div:nth-of-type(3) {
      @media (max-width: 420px) {
        margin-top: 60px;
      }
    }
  }

  @media (max-width: 550px) {
    padding: 100px 30px;
  }
`

const Footer: React.FC = () => {
  return (
    <FooterSection>
      <div className="footerContent">
        <div className="footerLogo">
          <Logo />
          <p>
            We’re a team of strategic creator and digital innovator, united
            focus in our pursuit of mastery and joyful.
          </p>
        </div>
        <div>
          <h6>Pages</h6>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Home 2</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Contact us</Link>
            </li>
            <li>
              <Link to="/">Portfolio</Link>
            </li>
            <li>
              <Link to="/">Portfolio Single</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6>Utility Pages</h6>
          <ul>
            <li>
              <Link to="/">Style Guide</Link>
            </li>
            <li>
              <Link to="/">Instruction</Link>
            </li>
            <li>
              <Link to="/">License</Link>
            </li>
            <li>
              <Link to="/">Changelog us</Link>
            </li>
            <li>
              <Link to="/">Error 404</Link>
            </li>
            <li>
              <Link to="/">Password Protected</Link>
            </li>
          </ul>
        </div>
        <div className="footerSubscribe">
          <h6>Subscribe</h6>
          <Subscribe />
        </div>
      </div>
      <div></div>
    </FooterSection>
  )
}

export default Footer
