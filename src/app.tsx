import React from 'react'
import { Route, Routes } from 'react-router'
import Footer from '../components/Footer'
import MainPage from '../pages/MainPage/MainPage'

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<MainPage />} />
        <Route path="/contact" element={<MainPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
