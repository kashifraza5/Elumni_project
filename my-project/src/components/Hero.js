import React from 'react'
import "./Hero.css"
const Hero = (props) => {
  return (
    <>
    <div className={props.cName}>
                 <img alt='heroimg' src={props.heroimg}/>
        <div className='hero-text'>
            <h1>{props.title}</h1>
            <p>{props.txt}</p>
            <a href={props.url} className={props.btnClass}>{props.buttontxt}</a>
        </div>
          </div>  
    </>
  )
}

export default Hero;
