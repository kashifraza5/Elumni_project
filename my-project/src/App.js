// import Navbar from "../components/Navbar";
import './App.css';
import Home from './Routes/Home';
import About from './Routes/About';
import Service from './Routes/Service';
import Contact from './Routes/Contact';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
   <div>
    <ScrollToTop/>
    <Routes>
      
      <Route path="/" element = {<Home/>}/>
      <Route path="/about" element = {<About/>}/>
      <Route path="/service" element = {<Service/>}/>
      <Route path="/contacts" element = {<Contact/>}/>
    </Routes>
     
       
      </div>
  );

}

export default App;
