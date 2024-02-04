import { animated, useSpring } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import { Button } from '../../components/Button'
import GalleryItem from './GalleryItem'

const GallerySection = styled.section`
  display: flex;
  margin: 60px 110px;
  justify-content: center;
  flex-wrap: wrap;
  overflow: hidden;
  background-color: white;

  h3 {
    width: 100%;
    text-align: center;
    padding-bottom: 85px;
  }

  .GalleryBody {
    display: flex;
    width: 100%;
    justify-content: space-between;

    .GalleryItems {
      display: flex;
      flex-direction: column;
      gap: 88px;
      width: 100%;

      button {
        align-self: end;
        margin: 80px 10% 0 0;
      }
    }
  }

  @media (max-width: 1000px) {
    margin: 60px;

    .GalleryBody {
      display: block;

      .GalleryItems {
        button {
          align-self: center;
          margin: 80px 0 0 0;
        }
      }
    }
  }

  @media (max-width: 400px) {
    margin: 60px 30px;
  }
`

const Gallery = () => {
  const [ref, InView] = useInView({
    triggerOnce: true
  })

  const animatedGalleryHeadline = useSpring({
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
    delay: 500,
    pause: InView ? false : true,
    config: {
      duration: 1500
    }
  })
  return (
    <GallerySection>
      <animated.h3 ref={ref} style={{ ...animatedGalleryHeadline }}>
        Recent Showcase
      </animated.h3>
      <div className="GalleryBody">
        <div className="GalleryItems">
          <GalleryItem
            src="assets/Gallery3.png"
            alt="flower"
            headline="Web UI design"
            text="Creative  UI design"
            x={-150}
            delay={2000}
          />
          <GalleryItem
            src="assets/Gallery2.png"
            alt="flowers"
            headline="UI Design"
            text="Creative Rebranding for logo"
            x={-150}
            delay={1500}
          />
        </div>
        <div className="GalleryItems">
          <Button
            text="Start your Free Trial"
            background="#0C0C0C"
            spanbackground="#FBFBFB"
            color="#FBFBFB"
          />
          <GalleryItem
            src="assets/Gallery1.png"
            alt="MEN"
            headline="To design Digital Strategy"
            text="Social Media Marketing"
            x={150}
            delay={1000}
          />
          <GalleryItem
            src="assets/Gallery4.png"
            alt="woman"
            headline="UI Design"
            text="Creative Rebranding for logo"
            x={150}
            delay={1500}
          />
        </div>
      </div>
    </GallerySection>
  )
}

export default Gallery
