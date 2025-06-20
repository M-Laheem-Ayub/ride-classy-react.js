import React from 'react'
import Header from '../../components/header/Header'
import Hero from '../../sections/hero/Hero'
import OurServices from '../../sections/our-services/OurServices'
import WhatWeOffer from '../../sections/what-we-offer/WhatWeOffer'
import OurFleet from '../../sections/our-fleet/OurFleet'
import Footer from '../../components/footer/Footer'

const Home = () => {
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
