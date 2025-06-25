import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ContactUs from "../../sections/contact/contact-us/ContactUs";
import PageTitle from "../../components/page-title/PageTitle";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact - RideClassy";
  }, []);
  return (
    <div className="bg-[#1a2025] md:text-base text-[14.6px]">
      <Header />
      <main className="">
        <div className=" text-[#161B1F] ">
          <PageTitle pageTitle={"Contact"} />
        </div>
        <div className="px-2.5 md:px-9">
          <div className="relative  flex items-center mx-auto h-[40vh] sm:h-[52vh] md:h-[70vh] lg:h-[88vh]">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-bottom bg-no-repeat xl:bg-fixed"
              style={{
                backgroundImage: "url('/assets/images/bg-images/contact.jpeg')",
              }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0  bg-black bg-opacity-60"></div>

            {/* Bottom shadow */}
            <div className="absolute bottom-0 w-full left-0 h-full bg-gradient-to-t from-[#1a2025]/100  to-transparent pointer-events-none"></div>

            {/* Text */}
            <h1 className="relative z-10 mx-auto text-4xl sm:text-5xl md:text-[80px] text-[#EFA765] font-playfair font-black text-start pr-0">
              Get In Touch
            </h1>
          </div>
        </div>

        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
