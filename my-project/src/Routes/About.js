import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Aboutimg from "../assets/night.jpg"
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
const About = () => {
  return (
    <div>
      <Navbar/>
      <Hero cName = "hero"
            heroimg = {Aboutimg}
            title = "About"
             url = "/"
             btnClass = "show"/>
        <AboutUs/>
        <Footer/> 
    </div>
  )
}

export default About;
