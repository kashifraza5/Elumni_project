import React from 'react'
import  "./Destination.css"
import DestinationData from './DestinationData';
const Destination = () => {
  return (
    <div className='destination'>
      <h1>Popular Destination</h1>
      <p>Tours gives you apportunity to see alot,within time frame</p>
      <DestinationData
      className = 'first-des'
      heading = "Sawat"
      text = "Swat valley is locally known as Pakistan's Switzerland thanks to its snow-capped mountains and scenic views. Swat, a scenic valley in northwestern Pakistan, was once a Taliban stronghold where TV was banned, public hangings were not uncommon, and girls were barred from going to school.Swat is mostly inhabited by Pashtuns who make up 90.78% of the population. The dominant tribe is the Yusufzai tribe. The language spoken in the valley is Pashto (mainly the Yousafzai dialect)."
       img1 = 'https://w0.peakpx.com/wallpaper/975/73/HD-wallpaper-swat-pakistan-azadi-independence-landscape-mountain-pak-river-sky-valley.jpg'
       img2 = 'https://pakiholic.com/wp-content/uploads/2017/04/Swat-Valley-Photo-Credits-Noman-Zahoor-Janjua.jpg'/>
       <DestinationData
       className = 'first-des-reverse'
      heading = "Kalam"
      text = "With a mild, generally warm and temperate climate, Kalam features a Humid continental climate (Dfa) under the Köppen climate classification. The average temperature in Kalam is 13.4 °C (56.1 °F), while the annual precipitation averages 639 mm (25.16 in). November is the driest month with 15 mm (0.59 in) of precipitation, while April, the wettest month, has an average precipitation of 93 mm (3.66 in).July is the hottest month of the year with an average temperature of 24.1 °C (75.4 °F). The coldest month, January, has an average temperature of 1.5 °C (34.7 °F)."
       img1 = 'https://awe365.com/wp-content/uploads/2021/04/276f272af70e0806f0a00ea73ae572b6.jpg'
       img2 = 'https://swatvalley.pk/wp-content/uploads/2019/03/53067832_2236604603324984_8847600576419069952_o.jpg'/>
    </div>
  );
}

export default Destination
