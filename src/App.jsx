import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutSection'
import WhyChoose from './components/WhyChoose'

function App() {

  return (
    <>
     <Header />
     <HeroSection />
     <AboutUs />
     <WhyChoose />
    </>
  )
}

export default App
