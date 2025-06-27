import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Benefits from "../../sections/book-online/benefits/Benefits";

const BookOnline = () => {
  useEffect(() => {
    document.title = "Book Online - RideClassy";
  }, []);
  return (
    <div className=" bg-white">
      <Header />
      <main className="max-w-screen-xl md:text-base text-[14.6px]">
        <Benefits/>
        <p className="mb-14 px-3 text-center text-[#575757]">
          If you have any issue please contact us at{" "}
          <a
            href="mailto:contact@rideclassy.com"
            className="text-[#EFA765] "
          >
            contact@rideclassy.com
          </a>{" "}
          or call us at{" "}
          <a href="tel:+34933939367" className="text-[#EFA765]">
            +34 933 93 93 67
          </a>
          .
        </p>

        <p className="text-[#575757]  leading-relaxed ps-2.5 md:ps-9 pe-3 md:px-9 mb-10  ">
          Book your Barcelona airport transfer in advance with priority
          collection and flat fare. Our reliable service will take you from
          Barcelona Airport to the city center, so that all of your adventures
          can start smoothly! RideClassy offers a fast and comfortable transfer
          and chauffeur service, with the convenience of online booking. Our
          flat fares mean that there’s no extra or hidden cost.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default BookOnline;
