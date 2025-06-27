import React from 'react'
import { useEffect } from "react";
import Hero from '../../sections/home/hero/Hero'
import OurServices from '../../sections/home/our-services/OurServices'
import WhatWeOffer from '../../sections/home/what-we-offer/WhatWeOffer'
import OurFleet from '../../sections/home/our-fleet/OurFleet'

const Home = () => {
   useEffect(() => {
    document.title = "Best Transfers in Barcelona - RideClassy";
  }, []);
  return (
    <div>
      <Hero/>
      <OurServices/>
      <WhatWeOffer/>
      <OurFleet/>
    </div>
  )
}

export default Home
