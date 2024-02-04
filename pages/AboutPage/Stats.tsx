import { animated, useSpring } from '@react-spring/web'
import { easeBackOut } from 'd3-ease'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

interface StatsProps {
  title: string
  subTitle: string
  content: string
}

const StatsDiv = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: black;
  gap: 15px;

  h6 {
    font-family: 'DM Sans';
    font-size: 25px;
    font-weight: 500;
    letter-spacing: 0.75px;
  }

  p {
    font-family: 'DM Sans';
    font-size: 18px;
    letter-spacing: 0.54px;
  }
`

const Stats = (props: StatsProps) => {
  const { title, subTitle, content } = props

  const [ref, inView] = useInView({
    triggerOnce: true
  })

  const animatedStats = useSpring({
    from: { y: 200, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 500,
    config: {
      duration: 1500,
      easing: easeBackOut
    },
    pause: inView ? false : true
  })

  return (
    <StatsDiv ref={ref} style={{ ...animatedStats }}>
      <h4>{title}</h4>
      <h6>{subTitle}</h6>
      <p>{content}</p>
    </StatsDiv>
  )
}

export default Stats
