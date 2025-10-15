import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutSection'
import WhyChoose from './components/WhyChoose'
import Tokenomics from './components/Tokenomics'
import Roadmap from './components/Roadmap'
import CommunitySection from './components/CommunitySection'

function App() {

  return (
    <>
     <Header />
     <HeroSection />
     <AboutUs />
     <WhyChoose />
     <Tokenomics />
     <Roadmap />
     <CommunitySection />
    </>
  )
}

export default App
