import { animated, useSpring } from '@react-spring/web'
import { easeSinOut } from 'd3-ease'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

interface ProcesStepProps {
  src: string
  alt: string
  title: string
  content: string
}

const ProcessDiv = styled(animated.div)`
  display: flex;
  flex-direction: column;
  width: 300px;
  position: relative;
  padding: 15px;
  background: transparent;

  &::before {
    content: '';
    border: 5px solid #f4f4f4;
    border-radius: 25px;
    position: absolute;
    width: 90%;
    height: 75%;
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  .ProcessHeadline {
    display: flex;
    justify-content: space-around;
    padding: 0 5px;
    align-items: center;
    position: relative;
  }

  p {
    padding: 30px;
    text-align: justify;
    position: relative;
  }

  h5 {
    background: white;
    padding: 5px 15px;
  }
`

const ProcessStep = (props: ProcesStepProps) => {
  const { src, alt, title, content } = props
  const { ref, inView } = useInView({
    triggerOnce: true
  })

  const animatedProcess = useSpring({
    from: { y: 200, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 100,
    config: { duration: 1000, easing: easeSinOut },
    pause: inView ? false : true
  })

  return (
    <ProcessDiv ref={ref} style={{ ...animatedProcess }}>
      <div>
        <div className="ProcessHeadline">
          <img src={src} alt={alt} />
          <h5>{title}</h5>
        </div>
        <p>{content}</p>
      </div>
    </ProcessDiv>
  )
}

export default ProcessStep
