import { animated, useSpring } from '@react-spring/web'
import { easeQuadOut } from 'd3-ease'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

interface GalleryItemProps {
  src: string
  alt: string
  headline: string
  text: string
  x: number
  delay: number
}

const GalleryItemSection = styled(animated.section)`
  display: flex;
  flex-direction: column;
  padding: 0 10%;

  img {
    width: 100%;
    height: auto;
    margin-bottom: 16px;
  }

  p {
    padding-top: 16px;
    letter-spacing: 0.54px;
  }

  @media (max-width: 700px) {
    padding: 0;
  }
`

const GalleryItem = (props: GalleryItemProps) => {
  const { src, alt, headline, text, x, delay } = props
  const [ref, inView] = useInView({
    triggerOnce: true
  })

  const animatedGalleryItem = useSpring({
    from: { x: x, opacity: 0 },
    to: { x: 0, opacity: 1 },
    delay: delay,
    pause: inView ? false : true,
    config: { easing: easeQuadOut, duration: 1000 }
  })
  return (
    <GalleryItemSection ref={ref} style={{ ...animatedGalleryItem }}>
      <img src={src} alt={alt} />
      <h5>{headline}</h5>
      <p>{text}</p>
    </GalleryItemSection>
  )
}

export default GalleryItem
