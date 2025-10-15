import { useEffect } from 'react'
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
     <Header />
     <HeroSection />
     <AboutUs />
     <WhyChoose />
     <Tokenomics />
     <Roadmap />
     <CommunitySection />
     <FAQSection />
     <ContactFooter />
    </>
  )
}

export default App
