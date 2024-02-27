import React from "react";
import Navbar from "../components/Navbar";
import BackgroundSlider from "../components/BackgroundSlider";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
const Home = () =>{
    return(
        <div>
    <Navbar/>
    <BackgroundSlider/>
    <Destination/>
    <Trip/>
    <Footer/>
     </div>
    );
}
export default Home;