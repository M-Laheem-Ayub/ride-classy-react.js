import React from "react";
import { useEffect } from "react";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import PageTitle from "../../../components/page-title/PageTitle";
import HeadingWithParagraph from "../../../components/heading-with-paragraph/HeadingWithParagraph";
import ListWithBullets from "../../../components/list-with-bullets/ListWithBullets";
import { NavLink } from "react-router-dom";
import { eventsData } from "../../../data/eventsData";
import { whyChooseEvents } from "../../../data/whyChooseEvents";

const Events = () => {
  useEffect(() => {
    document.title = "Premier Event Transportation Services - RideClassy";
  }, []);

  return (
    <div className="flex flex-col justify-center items-center  md:text-base text-[14.6px]">
      <Header />
      <main className="max-w-screen-xl md:text-base text-[14.6px]">
        <PageTitle pageTitle={"Premier Event Transportation Services"} />
        <HeadingWithParagraph contentData={eventsData} />
        <h3 className="text-[21.5px] md:text-2xl font-roboto -mt-4 ps-2.5 md:ps-9 pe-3 md:pe-9">
          <strong>
            Why Choose RideClassy for Your Event in Barcelona and Madrid?
          </strong>
        </h3>
        <ListWithBullets contentData={whyChooseEvents} />
        <h3 className="text-[21.5px] md:text-2xl font-roboto -mt-4 ps-2.5 md:ps-9 pe-3 md:pe-9">
          <strong>Book Your Intercity Ride Today!</strong>
        </h3>
        <p className="text-[#575757]  leading-relaxed ps-2.5 md:ps-9 pe-3 md:px-9 mb-20  ">
          Don’t leave your{" "}
          <span className="font-semibold">
            event transportation in Barcelona
          </span>{" "}
          and <span className="font-semibold">Madrid</span> to chance. Trust
          RideClassy to handle all your travel arrangements in Barcelona and
          Madrid. Contact us today to discuss your event transportation needs
          and book your luxury ride. Experience the ultimate in style, comfort,
          and convenience with RideClassy, where your satisfaction is our
          priority.{" "}
          <NavLink to="/book-online" className="text-[#EFA765] hover:underline">
            Book now!
          </NavLink>
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
