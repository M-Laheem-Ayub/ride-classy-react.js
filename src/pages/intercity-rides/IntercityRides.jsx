import React from "react";
import { useEffect } from "react";
import PageTitle from "../../components/page-title/PageTitle";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import HeadingWithParagraph from "../../components/heading-with-paragraph/HeadingWithParagraph";
import { IntercityRidesData } from "../../data/IntercityRidesData";
import ListWithTitle from "../../components/list-with-title/ListWithTitle";
import { whyChooseIntercityRide } from "../../data/whyChooseIntercityRide";
import ListWithBullets from "../../components/list-with-bullets/ListWithBullets";
import { perfectServices } from "../../data/perfectServices";
import { NavLink } from "react-router-dom";

const IntercityRides = () => {
  useEffect(() => {
    document.title =
      "Intercity Rides with RideClassy: Experience Seamless Travel Between Cities - RideClassy";
  }, []);
  return (
    <div className="flex flex-col justify-center items-center  md:text-base text-[14.6px]">
      <Header />
      <main className="max-w-screen-xl">
        <PageTitle
          pageTitle={
            "Intercity Rides with RideClassy: Experience Seamless Travel Between Cities"
          }
        />
        <HeadingWithParagraph
          contentData={IntercityRidesData}
          startIndex={0}
          endIndex={1}
        />
         <h3 className="text-[21.5px] md:text-2xl font-roboto -mt-4 mb-2 ps-2.5 md:ps-9 pe-3 md:pe-9">
          <strong>Why Choose RideClassy for Your Intercity Travel?</strong>
        </h3>
        <ListWithTitle contentData={whyChooseIntercityRide} />
        <HeadingWithParagraph contentData={IntercityRidesData} startIndex={1} />
        <ListWithBullets contentData={perfectServices} />
        <h3 className="text-[21.5px] md:text-2xl font-roboto -mt-4 mb-2 ps-2.5 md:ps-9 pe-3 md:pe-9">
          <strong>Book Your Intercity Ride Today!</strong>
        </h3>
        <p className="text-[#575757]  leading-relaxed ps-2.5 md:ps-9 pe-3 md:px-9 mb-6  ">
          Experience the ultimate in convenience and luxury with RideClassy’s
          intercity rides. Visit our website or contact us directly to book your
          next journey. Let us make your intercity travel as pleasant as
          possible, allowing you to relax and enjoy the ride.{" "}
          <NavLink to="/book-online" className="text-[#EFA765] hover:underline">
            Book online!
          </NavLink>
        </p>
        <p className="text-[#575757] leading-relaxed ps-2.5 md:ps-9 pe-3 md:px-9 mb-24    ">
          Travel between cities with elegance and ease. Choose RideClassy for
          your next intercity adventure and travel beyond the ordinary.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default IntercityRides;
