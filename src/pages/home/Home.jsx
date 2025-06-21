import React from 'react'
import { useEffect } from "react";
import Header from '../../components/header/Header'
import Hero from '../../sections/home/hero/Hero'
import OurServices from '../../sections/home/our-services/OurServices'
import WhatWeOffer from '../../sections/home/what-we-offer/WhatWeOffer'
import OurFleet from '../../sections/home/our-fleet/OurFleet'
import Footer from '../../components/footer/Footer'

const Home = () => {
   useEffect(() => {
    document.title = "Best Transfers in Barcelona - RideClassy";
  }, []);
  return (
    <div>
      <Header/>
      <Hero/>
      <OurServices/>
      <WhatWeOffer/>
      <OurFleet/>
      <Footer/>
    </div>
  )
}

export default Home
