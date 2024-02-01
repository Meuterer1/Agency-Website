import { animated, useSpring } from '@react-spring/web'
import { easePolyOut } from 'd3-ease'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import ProcessStep from '../components/ProcessStep'

const ProcessSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 110px 50px;
  align-items: center;
  justify-content: center;
  text-align: center;

  .ProcessSectionHeadline {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    width: 50%;
    padding-bottom: 80px;

    h5 {
      color: #64ccc5;
      font-weight: 600;
    }
  }

  .ProcessSteps {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
  }
`
const ProcessStepsArray = [
  {
    src: 'assets/Ideate.png',
    alt: 'ideate icon',
    title: 'Ideate',
    content:
      'The ideation process is a crucial phase in the design process where creative thinking and brainstorming'
  },
  {
    src: 'assets/Research.png',
    alt: 'Research icon',
    title: 'Research',
    content:
      'Research is a critical component of the design process, helping designers understand the problem'
  },
  {
    src: 'assets/Create.png',
    alt: 'Create icon',
    title: 'Create',
    content:
      'Designing a process involves several key steps to ensure clarity, efficiency, successful implementation'
  },
  {
    src: 'assets/Testing.png',
    alt: 'Testing icon',
    title: 'Testing',
    content:
      'Testing is a crucial phase in the design process to ensure that the product or system meets the specified requirements'
  }
]

const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true
  })

  const animatedY = useSpring({
    from: { y: 200, opacity: 0, scale: 0 },
    to: { y: 0, opacity: 1, scale: 1 },
    delay: 500,
    config: { duration: 3000, easing: easePolyOut },
    pause: inView ? false : true
  })
  return (
    <ProcessSection ref={ref}>
      <animated.div className="ProcessSectionHeadline" style={{ ...animatedY }}>
        <h5>Process</h5>
        <h3>Process that moves things forward</h3>
      </animated.div>
      <div className="ProcessSteps">
        {ProcessStepsArray.map((item, index) => (
          <ProcessStep
            src={item.src}
            alt={item.alt}
            title={item.title}
            content={item.content}
            key={index}
          />
        ))}
      </div>
    </ProcessSection>
  )
}

export default Process
