import { animated, useSpring } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import { SliderButton } from '../../components/Button'

const QuotesSection = styled(animated.section)`
  margin: 100px;
  background: #f4f4f4;
  padding: 45px;
  border-radius: 20px;
  gap: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h5 {
    font-size: 25px;
    font-weight: 700;
  }

  h6 {
    font-weight: 600;
    margin-bottom: 5px;
  }

  p {
    letter-spacing: 0.48px;
  }

  .sliders {
    margin-top: 21px;
    display: flex;
    justify-content: center;
    gap: 11px;
  }

  @media (max-width: 700px) {
    margin: 100px 50px;

    h5 {
      font-size: 20px;
    }
  }

  @media (max-width: 400px) {
    margin: 100px 25px;
  }
`

const Quotes = () => {
  const [ref, inView] = useInView({ triggerOnce: true })
  const animatedY = useSpring({
    from: { y: 300, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 100,
    config: {
      duration: 1000,
      tension: 120,
      friction: 14
    },
    pause: inView ? false : true
  })
  return (
    <QuotesSection ref={ref} style={{ ...animatedY }}>
      <div>
        <img src="assets/User_Avatar.png" alt="user avatar" />
      </div>
      <h5>
        “Be genuine in your assessment, and provide constructive feedback to
        benefit both potential customers and the company providing the product
        or service.”
      </h5>
      <div>
        <h6>Jacqueline Miller</h6>
        <p>CEO of an eduport</p>
        <div className="sliders">
          <SliderButton content="assets/ArrowLeft.png" background="black" />
          <SliderButton
            content="assets/BigArrowRight.png"
            background="transparent"
          />
        </div>
      </div>
    </QuotesSection>
  )
}

export default Quotes
