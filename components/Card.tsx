import { animated, useSpring } from '@react-spring/web'
import { easePolyOut } from 'd3-ease'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

interface CardProps {
  background?: string
  color?: string
}

export interface CardComponentProps extends CardProps {
  img: string
  title: string
  content: string
  delay: number
}

const Card = styled(animated.div)<CardProps>`
  display: flex;
  flex-direction: column;
  padding: 45px;
  justify-content: space-between;
  width: 422px;
  height: 422px;
  background: ${props => (props.background ? props.background : '#F4F4F4)')};
  color: ${props => (props.color ? props.color : '#0C0C0CE5)')};
  border-radius: 20px;

  h6 {
    font-size: 25px;
    font-weight: 500;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.54px;
    text-align: start;
  }

  div:first-of-type {
    height: 80px;
    width: 80px;
    background: ${props => (props.color ? props.color : '#0C0C0CE5)')};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div:last-of-type {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 62px;
    text-align: start;
  }

  @media (max-width: 1030px) {
    width: 80%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
  @media (max-width: 450px) {
    width: 100%;
    height: 500px;
  }
`

const CardComponent = (props: CardComponentProps) => {
  const { background, color, img, title, content, delay } = props
  const [ref, inView] = useInView({ triggerOnce: true })

  const animatedProps = useSpring({
    from: { y: 300, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: delay,
    config: {
      duration: 1500,
      easing: easePolyOut
    },
    pause: inView ? false : true
  })

  console.log('Animated props: ', animatedProps)

  return (
    <Card
      background={background}
      color={color}
      style={{ ...animatedProps }}
      ref={ref}
    >
      <div className="cardImage">
        <img src={img} alt={`${title} icon`}></img>
      </div>
      <div>
        <h6 className="cardTitle">{title}</h6>
        <p className="cardContent">{content}</p>
      </div>
    </Card>
  )
}

export default CardComponent
