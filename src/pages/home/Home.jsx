import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "../../sections/home/hero/Hero";
import OurServices from "../../sections/home/our-services/OurServices";
import WhatWeOffer from "../../sections/home/what-we-offer/WhatWeOffer";
import OurFleet from "../../sections/home/our-fleet/OurFleet";

const Home = () => {
  useEffect(() => {
    document.title = "Best Transfers in Barcelona - RideClassy";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <OurServices />
      <WhatWeOffer />
      <OurFleet />
    </motion.div>
  );
};

export default Home;
