import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MenuBigScreen from '../../components/MenuBigScreen'
import MenuSmallScreen from '../../components/MenuSmallScreen'
import ContactDetails from './ContactDetails'
import ContactForm from './ContactForm'
import ContactIcons from './ContactIcons'

import { ContactDetailsContent } from './content/ContactContent'

const HeaderContactSection = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;

  h3 {
    font-weight: 600;

    @media (max-width: 1200px) {
      font-size: 54px;
    }
  }

  p {
    font-family: 'DM Sans';
    font-size: 18px;
    letter-spacing: 0.54px;
    padding-bottom: 32px;
  }

  .contactDetailsHeadline {
    display: flex;
    flex-direction: column;
    gap: 32px;
    position: relative;

    &::before {
      content: '';
      width: 100%;
      height: 1px;
      bottom: 0;
      left: 0;
      background: #c8c8c8;
      position: absolute;
    }
  }

  .contactDetailsContent {
    display: flex;
    margin: 80px 10%;
    justify-content: space-between;

    @media (max-width: 1000px) {
      flex-direction: column;
      gap: 50px;
    }

    @media (max-width: 700px) {
      margin: 80px 5%;
    }
  }

  .contactDetailsContainer {
    width: 30%;

    @media (max-width: 1000px) {
      width: 90%;
      align-self: center;
    }
  }

  .contactDetails {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 32px 0;
    position: relative;

    &::after {
      content: '';
      width: 100%;
      height: 1px;
      bottom: 0;
      left: 0;
      background: #c8c8c8;
      position: absolute;
    }
  }
`

const ContactPage: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = (): void => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <HeaderContactSection>
      {windowWidth > 900 ? (
        <MenuBigScreen color="black" />
      ) : (
        <MenuSmallScreen color="black" />
      )}
      <div className="contactDetailsContent">
        <div className="contactDetailsContainer">
          <div className="contactDetailsHeadline">
            <h3>Let’s talk</h3>
            <p>
              We collaborate with thousands of creators, entrepreneurs and
              complete legends.
            </p>
          </div>
          <div className="contactDetails">
            {ContactDetailsContent.map((item, index) => (
              <ContactDetails
                src={item.src}
                title={item.title}
                text={item.text}
                alt={item.alt}
                key={index}
                delay={item.delay}
              />
            ))}
          </div>
          <ContactIcons />
        </div>
        <ContactForm />
      </div>
    </HeaderContactSection>
  )
}

export default ContactPage
