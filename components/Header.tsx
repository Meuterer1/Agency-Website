import { animated, useSpring } from '@react-spring/web'
import React, { useEffect, useState } from 'react'

import './styles/header.scss'

import MenuBigScreen from './MenuBigScreen'
import MenuSmallScreen from './MenuSmallScreen'

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
    <header>
      <div className="headerContainer">
        {windowWidth > 900 ? <MenuBigScreen /> : <MenuSmallScreen />}
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
    </header>
  )
}

export default Header
