import React from 'react'
import Gallery from '../components/Gallery'
import Header from '../components/Header'
import Mission from '../components/Mission'
import Process from '../components/Process'
import Services from '../components/Services'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Services />
      <Mission />
      <Process />
      <Gallery />
    </>
  )
}

export default App
