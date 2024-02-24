import { animated, useSpring } from '@react-spring/web'
import { easePolyOut } from 'd3-ease'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../../components/Button'

const MissionSection = styled.section`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 5% 80px 5%;
  overflow: hidden;

  h5,
  h4 {
    color: #64ccc5;
    font-weight: 600;
  }

  h3 {
    font-weight: 600;
  }

  .MissionImage {
    width: 40%;
    height: 703px;
    position: relative;

    img {
      position: absolute;
      width: 100%;
    }
    img:first-of-type {
      top: 0;
      left: 0;
    }
    img:nth-child(2) {
      top: 32px;
      left: 52px;
    }
    img:last-of-type {
      top: 63px;
      left: 104px;
    }
  }

  .MissionContent {
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 45%;
    padding: 80px 0;

    .MissionStats {
      display: flex;
      flex-direction: row;
      gap: 59px;

      h4 {
        padding-bottom: 9px;
      }
    }

    button {
      margin-top: 32px;
      padding: 10px 20px 10px 10px;
    }
  }

  @media (max-width: 1200px) {
    .MissionContent {
      h3 {
        font-size: 55px;
      }
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;

    .MissionContent {
      width: 80%;
    }

    .MissionImage {
      width: 90%;
      height: 75vw;
      margin-bottom: 20px;
      img {
        width: 70vw;
        height: auto;
      }
    }
  }

  @media (max-width: 600px) {
    .MissionImage {
      width: 100%;

      img:nth-child(2) {
        left: 32px;
      }
      img:last-of-type {
        top: 63px;
        left: 64px;
      }
    }
  }
`

const images = [
  { src: 'assets/Mission_Layer3.png', delay: 500 },
  { src: 'assets/Mission_Layer2.png', delay: 1000 },
  { src: 'assets/Mission_Layer1.png', delay: 1500 }
]

const Mission: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true
  })

  const navigate = useNavigate()

  const handleButtonOnClick = () => {
    navigate('/contact')
  }

  const animatedProps = useSpring({
    from: { x: 400, opacity: 0 },
    to: { x: 0, opacity: 1 },
    delay: 500,
    config: {
      duration: 1500,
      easing: easePolyOut
    },
    pause: inView ? false : true
  })

  return (
    <MissionSection>
      <div className="MissionImage" ref={ref}>
        {images.map((item, index) => (
          <animated.img
            src={item.src}
            alt="people"
            style={{ ...animatedProps }}
            key={index}
          />
        ))}
      </div>
      <div className="MissionContent">
        <h5>About us</h5>
        <h3>The core mission behind all our work</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit metus ut
          tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.
        </p>
        <div className="MissionStats">
          <div>
            <h4>330 +</h4>
            <p>Companies helped</p>
          </div>
          <div>
            <h4>230 +</h4>
            <p>Revenue generated</p>
          </div>
        </div>

        <Button
          text="Start your Free Trial"
          background="#FBFBFB"
          spanbackground="#0C0C0C"
          onClick={handleButtonOnClick}
        />
      </div>
    </MissionSection>
  )
}

export default Mission
