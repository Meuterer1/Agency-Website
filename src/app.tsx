import React from 'react'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import Header from '../components/Header'
import Mission from '../components/Mission'
import Process from '../components/Process'
import Quotes from '../components/Quotes'
import Services from '../components/Services'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Services />
      <Mission />
      <Process />
      <Gallery />
      <Quotes />
      <Footer />
    </>
  )
}

export default App
