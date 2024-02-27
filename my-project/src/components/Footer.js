import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div>
            <h1>Trippy</h1>
            <p>Choose Your Favourite Destination</p>
        </div>
        <div>
            <a href='/'>
                <i className='fa-brands fa-facebook-square'></i>
            </a>
            <a href='/'>
                <i className='fa-brands fa-instagram-square'></i>
            </a>
            <a href='/'>
                <i className='fa-brands fa-behance-square'></i>
            </a>
            <a href='/'>
                <i className='fa-brands fa-twitter-square'></i>
            </a>
        </div>
      </div>
      <div className='bottom'>
        <div>
            <h4>Project</h4>
            <a href='/'>Changelog</a>
            <a href='/'>Status</a>
            <a href='/'>License</a>
            <a href='/'>All Version</a>
        </div>
        <div>
            <h4>Comunity</h4>
            <a href='/'>Changelog</a>
            <a href='/'>Status</a>
            <a href='/'>License</a>
            <a href='/'>All Version</a>
        </div>
        <div>
            <h4>Help</h4>
            <a href='/'>Changelog</a>
            <a href='/'>Status</a>
            <a href='/'>License</a>
            <a href='/'>All Version</a>
        </div>
        <div>
            <h4>Others</h4>
            <a href='/'>Changelog</a>
            <a href='/'>Status</a>
            <a href='/'>License</a>
            <a href='/'>All Version</a>
        </div>
      </div>
    </div>
  );
}

export default Footer
