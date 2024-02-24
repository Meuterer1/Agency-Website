import styled from 'styled-components'
import CardComponent, { CardComponentProps } from '../../components/Card'

const ServicesSection = styled.section`
  padding: 100px 60px 127px 60px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  h5 {
    color: #64ccc5;
    font-weight: 600;
    padding-bottom: 24px;
  }

  h4 {
    font-weight: 600;
  }

  .servicesHeadline {
    width: 40%;
    margin-bottom: 80px;

    @media (max-width: 1030px) {
      width: 60%;
    }

    @media (max-width: 1030px) {
      width: 100%;
    }
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 66px;

    width: 100%;

    @media (max-width: 1030px) {
      justify-content: center;
    }
  }
`

const Services: React.FC = () => {
  const CardComponentArray: CardComponentProps[] = [
    {
      img: 'assets/Pen.png',
      title: 'Content Marketing',
      content:
        'Our team creates engaging and shareable content that resonates with your audience, drives organic traffic',
      background: '#0C0C0C',
      color: '#F4F4F4',
      delay: 100
    },
    {
      img: 'assets/Design.png',
      title: 'Graphic Design',
      content:
        'Unlock the power of visual storytelling with our expert graphic design services tailored to elevate your brand and captivate.',
      background: '#F4F4F4',
      color: '#0C0C0C',
      delay: 250
    },
    {
      img: 'assets/Speaker.png',
      title: 'Digital Marketing',
      content:
        'Elevate your brand s online presence with our data-driven digital marketing strategies. From SEO and content marketing',
      background: '#F4F4F4',
      color: '#0C0C0C',
      delay: 400
    },
    {
      img: 'assets/Palette.png',
      title: 'Web Design',
      content:
        'We specialize in creating visually stunning, user-friendly websites that align with your brand identity and deliver an exceptional.',
      background: '#F4F4F4',
      color: '#0C0C0C',
      delay: 100
    },
    {
      img: 'assets/Consultant.png',
      title: 'IT Consulting',
      content:
        'IT consulting, or information technology consulting, refers to the practice of providing advisory and implementation services',
      background: '#F4F4F4',
      color: '#0C0C0C',
      delay: 250
    },
    {
      img: 'assets/Diamond.png',
      title: 'Brand Identity',
      content:
        'It involves creating a unique and recognizable identity that sets the brand apart from competitors and resonates with the target audience.',
      background: '#F4F4F4',
      color: '#0C0C0C',
      delay: 400
    }
  ]

  return (
    <ServicesSection>
      <div className="servicesHeadline">
        <h5>Our Services</h5>
        <h4>High-impact services for your business</h4>
      </div>
      <div className="cards">
        {CardComponentArray.map((props, id) => (
          <CardComponent {...props} key={id} />
        ))}
      </div>
    </ServicesSection>
  )
}

export default Services
