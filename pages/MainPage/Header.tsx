import { animated, useSpring } from '@react-spring/web'
import React, { useEffect, useState } from 'react'
import MenuBigScreen from '../../components/MenuBigScreen'
import MenuSmallScreen from '../../components/MenuSmallScreen'

import styled from 'styled-components'

const HeadSection = styled.section`
    background: black;
    display: flex;
    position: relative;
    color: white;
    width: 100%;
    justify-content: center;
    &::before {
      content: '';
      background: url('assets/HeaderBackground.png'),
        lightgray -327.864px -170.396px / 135.025% 130.862% no-repeat;
      opacity: 0.15;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }

    &::after {
      content: '';
      background: url('assets/Ornament.png'), no-repeat;
      background-size: cover;
      position: absolute;
      top: 189px;
      left: -41px;
      z-index: 0;
      width: 183px;
      height: 192px;

      @media (max-width: 500px) {
        opacity: 0.5;
      }
    }

    a {
      color: white;
      font-size: 20px;
      font-weight: 400;
    }

    & > * {
      position: relative;
      z-index: 1;
    }

    @media (max-width: 1000px) {
      height: 1800px;
      padding: 0;
    }
  }

  .headerContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .headerContentSection {
    display: flex;
    padding: 20px 20px 0 50px;
    justify-content: space-between;

    &:first-child(1) {
      padding-top: 139px;
      background-color: red;
    }
  }

  .headerImageDiv {
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(153, 237, 229, 0.2) 0%,
      rgba(178, 241, 235, 0.16) 25.52%,
      rgba(215, 246, 243, 0.1) 43.23%,
      rgba(234, 249, 247, 0.07) 82.29%,
      rgba(251, 251, 251, 0) 100%
    );
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 150px;
    right: 20px;
    z-index: -1;
    padding: 143px;
    width: 700px;
    height: 700px;

    &::before {
      content: '';
      top: 5%;
      position: absolute;
      left: 5%;
      height: 90%;
      width: 90%;

      border: 2px solid rgba(178, 241, 235, 0.16);
      border-image-slice: 1;
      border-radius: 50%;
    }

    &::after {
      content: '';
      top: 12%;
      position: absolute;
      left: 12%;
      height: 76%;
      width: 76%;

      border: 2px solid rgba(100, 204, 197, 0.5);
      border-image-slice: 1;
      border-radius: 50%;
    }

    @media (max-width: 1000px) {
      top: 950px;
      left: 50%;
      transform: translateX(-50%);
    }

    @media (max-width: 700px) {
      width: 100vw;
      height: auto;
      padding: 112px;
      top: 1000px;
    }

    @media (max-width: 600px) {
      top: 1200px;
      padding: 90px;
    }

    @media (max-width: 400px) {
      top: 1300px;
      padding: 75px;
    }

    @media (max-width: 355px) {
      top: 1400px;
    }
  }

  .headerImage {
    width: 100%;
    height: auto;
  }

  .headerTextDiv {
    padding: 130px 0 0 8%;
    width: 51%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    &:nth-child(1) p {
      width: 90%;
    }

    p {
      font-size: 18px;
      font-weight: 400;
      letter-spacing: 0.54px;
      padding: 24px 0 32px 0;
      text-align: justify;
    }

    button {
      padding: 10px 20px 10px 10px;
      border: none;
      border-radius: 23px;
      font-size: 20px;
      display: flex;
      gap: 10px;
      align-items: center;
      margin-bottom: 81px;

      &:hover {
        background-color: #64ccc5;
        cursor: pointer;
      }

      span {
        background-color: black;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      @media (max-width: 460px) {
        gap: 5px;
        padding: 10px 15px 10px 5px;
      }
    }

    @media (max-width: 1400px) {
      padding: 130px 0 0 0;
    }

    @media (max-width: 1000px) {
      width: 100%;

      div:first-of-type {
        padding: 0 20px 20px 110px;
      }
    }

    @media (max-width: 800px) {
      div:first-of-type {
        padding: 0 20px 20px 10px;
      }
    }
  }

  .imgLogo {
    height: 40px;
    width: 40px;
  }

  .brands {
    display: flex;
    width: 100%;
    flex-direction: column;
    padding-bottom: 50px;

    p {
      color: #64ccc5;
      font-size: 20px;
      font-weight: 600;
    }

    ul {
      display: flex;
      list-style: none;
      width: 100%;

      @media (max-width: 600px) {
        flex-wrap: wrap;
      }
    }

    li {
      max-height: 50px;
      img {
        height: 100%;
      }
    }

    @media (max-width: 900px) {
      p {
        padding-left: 15px;
      }
    }
  }

  .smallMenuActive {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: end;
    padding: 50px;

    ul {
      display: flex;
      flex-direction: column;
      padding: 50px 20px 30px 20px;
      align-items: end;
    }

    button {
      background-color: white;
      padding: 8px 15px;
      border-radius: 23px;
      border: none;
      font-size: 18px;
      font-weight: 400;
      letter-spacing: 0.54px;
      width: fit-content;
      width: -moz-fit-content;

      &:hover {
        cursor: pointer;
        background-color: #64ccc5;
      }
    }
`

const Header: React.FC = () => {
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

  const animatedRotate = useSpring({
    from: { transform: 'translateX(0deg)' },
    to: { transform: 'translateX(360deg)' },
    delay: 500,
    config: { duration: 1000 }
  })

  const animatedOpacity = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
    config: { duration: 2000 }
  })

  const animatedNeon = useSpring({
    from: { opacity: 0, velocity: 0, reset: true },
    to: async (next, cancel) => {
      await next({ opacity: 1, velocity: 1, reset: true })
      await next({ opacity: 0, velocity: 0, reset: true })
      await next({ opacity: 1, velocity: 0, reset: true })
      await next({ opacity: 0, velocity: 0, reset: true })
      await next({ opacity: 1, velocity: 0, reset: true })
      await next({ opacity: 0, velocity: 0, reset: true })
      await next({ opacity: 1, velocity: 0, reset: true })
      await next({ opacity: 0, velocity: 0, reset: true })
      await next({ opacity: 1, velocity: 0, reset: true })
      await next({ opacity: 0, velocity: 0, reset: true })
      await next({ opacity: 1, velocity: 0, reset: true })
      await next({ opacity: 0, velocity: 0, reset: true })
      await next({ opacity: 1, velocity: 0, reset: true })
    },
    delay: 2100,
    config: { tension: 170, friction: 12, mass: 1, duration: 200 }
  })

  return (
    <HeadSection>
      <div className="headerContainer">
        {windowWidth > 900 ? (
          <MenuBigScreen color="white" />
        ) : (
          <MenuSmallScreen />
        )}
        <section className="headerContentSection">
          <div className="headerTextDiv">
            <div>
              <animated.h3 style={{ ...animatedOpacity }}>
                Ready to take your
                <animated.span
                  className="coloredText"
                  style={{ ...animatedNeon }}
                >
                  {' '}
                  Business Growth <br />
                </animated.span>{' '}
                to the next level?
              </animated.h3>
              <p>
                Give your business a chance for exceptional growth. Our
                advertising agency offers effective solutions that will attract
                customers and strengthen your brand. We specialize in marketing,
                promotional strategy, and creative campaign design.
              </p>
              <button>
                <span>
                  <img src="assets/ArrowRight.png" alt="arrow right" />
                </span>
                Start your Free Trial
              </button>
            </div>
            <div className="brands">
              <p>Trusted by Laeading Brands</p>
              <ul>
                <li>
                  <img src="assets/Greenish.png" alt="Greenish logo" />
                </li>
                <li>
                  <img src="assets/Automotion.png" alt="Automotion logo" />
                </li>
                <li>
                  <img src="assets/Leafe.png" alt="Leafe logo" />
                </li>
                <li>
                  <img src="assets/Mindfullness.png" alt="Mindfullness logo" />
                </li>
              </ul>
            </div>
          </div>
          <animated.div
            className="headerImageDiv"
            style={{ ...animatedRotate }}
          >
            <img
              src="assets/ElipsePhoto.png"
              className="headerImage"
              alt="people"
            />
          </animated.div>
        </section>
      </div>
    </HeadSection>
  )
}

export default Header
