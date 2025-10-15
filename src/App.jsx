import React, { useState, useEffect } from "react";
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutSection'
import WhyChoose from './components/WhyChoose'
import Tokenomics from './components/Tokenomics'
import Roadmap from './components/Roadmap'
import CommunitySection from './components/CommunitySection'
import FAQSection from './components/FAQSection'
import ContactFooter from './components/ContactFooter'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const handleScroll = () => {
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect().top;
        if (rect < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount for already visible elements

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
     <Header theme={theme} setTheme={setTheme} />
     <HeroSection theme={theme}/>
     <AboutUs theme={theme}/>
     <WhyChoose />
     <Tokenomics />
     <Roadmap />
     <CommunitySection />
     <FAQSection />
     <ContactFooter theme={theme}/>
    </>
  )
}

export default App
