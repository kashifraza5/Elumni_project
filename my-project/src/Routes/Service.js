import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Trip from '../components/Trip';
import Crusal from '../components/MultipulesItems';
import MultipleItems from '../components/MultipulesItems';
// import Aboutimg from "../assets/night.jpg"
const Service = () => {
  return (
    <div>
      <Navbar/>
      <Hero cName = "hero"
            heroimg = "https://etihadtraveltours.com/wp-content/uploads/2023/04/luca-bravo-O453M2Liufs-unsplash-scaled.jpg"
            title = "Services"
             url = "/"
             btnClass = "show"/>
      {/* <MultipleItems/> */}
      <Trip/>
      <Footer/> 
    </div>
  )
}

export default Service
