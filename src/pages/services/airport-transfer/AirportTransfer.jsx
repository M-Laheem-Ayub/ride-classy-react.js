import React from "react";
import { useEffect } from "react";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import PageTitle from "../../../components/page-title/PageTitle";
import HeadingWithParagraph from "../../../components/heading-with-paragraph/HeadingWithParagraph";
import { airportTransferData } from "../../../data/airportTransferData";
import ListWithBullets from "../../../components/list-with-bullets/ListWithBullets";
import { NavLink } from "react-router-dom";
import { whyChooseIntercityRide } from "../../../data/whyChooseIntercityRide";
import { whyChooseAirportTransfer } from "../../../data/whyChooseAirportTransfer";

const AirportTransfer = () => {

    useEffect(() => {
    document.title = "Barcelona Airport Transfers - RideClassy";
  }, []);

  return (
    <div  className="flex flex-col justify-center items-center  md:text-base text-[14.6px]">
      <Header />
      <main className="max-w-screen-xl md:text-base text-[14.6px]">
      <PageTitle pageTitle={"Barcelona Airport Transfers"} />
      <img
        className=" px-2 md:px-9 "
        src="assets/images/fg-images/airport-transfer.jpeg"
        alt="airport-transfer-image"
      />
      <HeadingWithParagraph contentData={airportTransferData} />
      <p className="font-sans text-[#575757] px-2.5 md:px-9 mb-8"><strong>Why Choose RideClassy?</strong></p>
      <ListWithBullets contentData={whyChooseAirportTransfer} />
      <p className="text-[#575757]  leading-relaxed ps-2.5 md:ps-9 pe-3 md:px-9 mb-20  ">
        At RideClassy, we understand the importance of a stress-free travel
        experience, especially when you’re just starting your visit or
        concluding a fulfilling trip. With our top-notch Barcelona airport
        transfer service, you can rest assured that you are in good hands. Book
        your ride today and experience the ultimate in comfort and class with
        RideClassy. Welcome to Barcelona, where your journey with us is just as
        exciting as the destination!{" "}
        <NavLink to="/book-online" className="text-[#EFA765] hover:underline">
          Click here to book online.
        </NavLink>
      </p>
      </main>
      <Footer />
    </div>
  );
};

export default AirportTransfer;
