import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import Aboutimg from "../assets/2.jpg"
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Hero cName = "hero"
            heroimg = {Aboutimg}
            title = "Contact"
             url = "/"
             btnClass = "show"/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default Contact
