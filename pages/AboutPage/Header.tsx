import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { animated, useSpring } from '@react-spring/web'
import MenuBigScreen from '../../components/MenuBigScreen'
import MenuSmallScreen from '../../components/MenuSmallScreen'
import Stats from './Stats'

const HeaderSection = styled.header`
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;

  .headerBanner {
    background: black;
    width: 80%;
    border-radius: 20px;
    margin: 50px 0;
    display: flex;
    position: relative;
    justify-content: space-between;

    .headerTextDiv {
      padding: 70px 0 40px 5%;

      @media (max-width: 1200px) {
        width: 45%;
      }

      @media (max-width: 1050px) {
        width: 80%;
        justify-content: flex-start;
      }

      @media (max-width: 820px) {
        width: 90%;
      }

      @media (max-width: 450px) {
        padding-top: 20px;
        h3 {
          font-size: 44px;
        }
      }
    }

    .HeaderImage {
      width: 40%;
      position: relative;
      padding-top: 70px;

      img {
        position: absolute;
        width: auto;
        height: 514px;

        @media (max-width: 600px) {
          width: 80%;
          height: auto;
        }

        @media (max-width: 340px) {
          width: 70%;
        }
      }

      img:first-of-type {
        bottom: 80px;
        right: 90px;

        @media (max-width: 1050px) {
          right: 20%;
          bottom: 65px;
        }

        @media (max-width: 700px) {
          right: 15%;
        }
      }
      img:nth-child(2) {
        bottom: 55px;
        right: 60px;

        @media (max-width: 1050px) {
          right: 15%;
          bottom: 40px;
        }

        @media (max-width: 700px) {
          right: 10%;
        }
      }

      img:last-of-type {
        bottom: 30px;
        right: 30px;

        @media (max-width: 1050px) {
          right: 10%;
          bottom: 15px;
        }

        @media (max-width: 700px) {
          right: 5%;
        }
      }

      @media (max-width: 1050px) {
        width: 100%;
      }
    }

    p {
      font-family: 'DM Sans';
      font-size: 18px;
      font-weight: 400;
      letter-spacing: 0.54px;
      color: white;
      padding: 24px 0 32px 0;
      text-align: justify;
    }

    @media (max-width: 1320px) {
      width: 90%;
    }

    @media (max-width: 1200px) {
      h3 {
        font-size: 58px;
      }
      p {
        font-size: 16px;
      }
    }

    @media (max-width: 1050px) {
      flex-direction: column;
      height: 1100px;
    }

    @media (max-width: 820px) {
      height: 1200px;
    }

    @media (max-width: 450px) {
      width: 100%;
      height: 1000px;
      padding-top: 20px;
    }
  }

  .HeaderStats {
    display: flex;
    justify-content: space-between;
    padding-top: 100px;
    width: 80%;
    gap: 50px;

    @media (max-width: 700px) {
      flex-direction: column;
    }
  }
`

const StatsArray = [
  {
    title: '200+',
    subTitle: 'We’re a family',
    content:
      'Speedily say has suitable disposal add boy. On fourth doubt miles of child. Exercise joy man children rejoiced.'
  },
  {
    title: '99%',
    subTitle: 'Graphic Design ',
    content:
      'Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven offer see among.'
  },
  {
    title: '1.5M+',
    subTitle: 'Digital Marketing ',
    content:
      'Rooms oh fully taken by worse do. Points afraid but may end law lasted. Was out laughter raptures returned outweigh.'
  }
]

const Header = () => {
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

  const animatedImage = useSpring({
    from: { x: 150, y: 150, opacity: 0 },
    to: { x: 0, y: 0, opacity: 1 },
    delay: 100,
    config: {
      tension: 170,
      friction: 12,
      mass: 1,
      duration: 800
    }
  })

  const animatedImageSecond = useSpring({
    from: { x: 150, y: 150, opacity: 0 },
    to: { x: 0, y: 0, opacity: 1 },
    delay: 500,
    config: {
      tension: 170,
      friction: 12,
      mass: 1,
      duration: 800
    }
  })

  const animatedImageThird = useSpring({
    from: { x: 150, y: 150, opacity: 0 },
    to: { x: 0, y: 0, opacity: 1 },
    delay: 800,
    config: {
      tension: 170,
      friction: 12,
      mass: 1,
      duration: 800
    }
  })

  return (
    <HeaderSection>
      {windowWidth > 900 ? (
        <MenuBigScreen color="black" />
      ) : (
        <MenuSmallScreen color="black" />
      )}
      <div className="headerBanner">
        <div className="headerTextDiv">
          <p>Pleasure and so read the was hope.</p>
          <h3>
            Ready to take your
            <span className="coloredText">
              {' '}
              Business Growth <br />
            </span>{' '}
            to the next level?
          </h3>
          <p>
            Give your business a chance for exceptional growth. Our advertising
            agency offers effective solutions that will attract customers and
            strengthen your brand. We specialize in marketing, promotional
            strategy, and creative campaign design.
          </p>
        </div>
        <div className="HeaderImage">
          <animated.img
            src="assets/AboutLayer1.png"
            alt="people"
            style={{ ...animatedImage }}
          />
          <animated.img
            src="assets/AboutLayer2.png"
            alt="people"
            style={{ ...animatedImageSecond }}
          />
          <animated.img
            src="assets/AboutLayer3.png"
            alt="people"
            style={{ ...animatedImageThird }}
          />
        </div>
      </div>
      <div className="HeaderStats">
        {StatsArray.map(item => (
          <Stats
            title={item.title}
            subTitle={item.subTitle}
            content={item.content}
          />
        ))}
      </div>
    </HeaderSection>
  )
}

export default Header
