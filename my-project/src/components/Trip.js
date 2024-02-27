import React from 'react'
import "./Trip.css"
import TripData from './TripData';
const Trip = () => {
  return (
    <div className='trip'>
      <h1>Recent Trips</h1>
      <p>You Can Discover Unique Destination Using Google Maps</p>
      <div className='tripCard'>
        <TripData
        image = 'https://www.electronic-sirens.com/wp-content/uploads/2020/02/titulka-1.jpg'
        heading = 'Trip in Indonesia'
        text = 'Embark on an unforgettable journey to Indonesia, where the enchanting beauty of diverse landscapes, rich cultural tapestry, and warm hospitality awaits you. As your guide through this tropical paradise, I ll lead you to the mesmerizing beaches of Bali'
        />
        <TripData
        image = 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/97/39/7f/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_f31158e4bb953d28a308'
        heading = 'Trip in Japan'
        text = 'Embark on an unforgettable journey to Japan, where the enchanting beauty of diverse landscapes, rich cultural tapestry, and warm hospitality awaits you. As your guide through this tropical paradise, I ll lead you to the mesmerizing beaches of Bali'
        />
        <TripData
        image = 'https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-88a144f/theplanetd.com/images/cities-in-spain-valencia-1.jpg'
        heading = 'Trip in Spain'
        text = 'Embark on an unforgettable journey to Spain, where the enchanting beauty of diverse landscapes, rich cultural tapestry, and warm hospitality awaits you. As your guide through this tropical paradise, I ll lead you to the mesmerizing beaches of Bali'
        />
      </div>
    </div>
  );
}

export default Trip
