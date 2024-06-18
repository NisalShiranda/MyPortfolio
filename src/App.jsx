


import Navbar from "./pages/Navbar/Navbar"
import Hero from "./pages/HeroSection/Hero"
import Banner from "./pages/BannerSection/Banner"
import Skills from "./pages/SkillsSection/Skills"
import MyWorks from "./pages/MyWorks/MyWorks"
import Contact from "./pages/Contact/ContactSection"
import Footer from "./pages/FooterSection/Footer"
// import Web from './components/Web'
// import Ui from './components/UI'
import './App.css'
import BacktoTopButton from "./components/BackToTopButton"

function App() {
  
    
   
  

  return (
    <>
      <Navbar />
      <Hero />
      <Banner />
      <Skills />
      <MyWorks  />
      <Contact />
      <Footer />
      <BacktoTopButton />
      
    </>
  )
}

export default App
