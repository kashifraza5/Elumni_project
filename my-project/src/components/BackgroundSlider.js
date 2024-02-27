import React, { useEffect } from 'react'
import { useState } from 'react';
import "./BackgroundSlider.css"
import imageSlide from './Data';
const BackgroundSlider = () => {
  const[currentState,setCurrentState] = useState(0)
  useEffect(() =>{
    const timer  = setTimeout(() => {
      if (currentState===2){
        setCurrentState(0)
      }
      else{
         setCurrentState(currentState+1)
      }

    },5000) 
    return  () => clearTimeout(timer)
  },[currentState])
  
  const bgImageStyle = {
    backgroundImage : `url(${imageSlide[currentState].url})`,
    backgroundPosition : 'center',
    backgroundSize : '100% 100%',
    height : '100%',
  }
  const goToNext = (currentState) =>{
        setCurrentState(currentState)
  }
  return (
      <div className='auto'>
      <div className='container-style'>
        <div style={bgImageStyle}></div>
        {/* <div className='transparent-background'></div> */}
        <div className='description'>

        <div className='carosal-boult'>
              {
                imageSlide.map((imageSlide, currentState)=>(
                  <span key={currentState} onClick={()=> goToNext(currentState)}></span>
                ))
              }
            </div>

             <div className='mytxt'>
              <h1>{imageSlide[currentState].title}</h1>
              <p>{imageSlide[currentState].body}</p>
              <a href="/" className='TBUTTON'>Travel Plan</a> 
             </div>
          
        </div>

      </div>
    </div>
    
  );
}

export default BackgroundSlider;
