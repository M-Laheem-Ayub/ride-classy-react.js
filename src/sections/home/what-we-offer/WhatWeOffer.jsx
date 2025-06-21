import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { offerData } from "../../../data/offerData"; // Import the data

const WhatWeOffer = () => {
  return (
    <div>
      <div className="text-center max-w-screen-xl mx-auto md:h-[88vh]">
        <div className="flex flex-col md:flex-row md:h-[88vh]">
          <div
            className="w-full md:w-1/2 h-[44vh] md:h-[88vh]"
            style={{
              backgroundImage:
                "url('/assets/images/bg-images/what-we-offer.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />

          <div className="py-12 w-full md:w-1/2 flex flex-col bg-[#1a2025] md:h-[88vh]">
            <h2 className="pb-10 font-playfair text-[1.6rem] md:text-[2.4rem] text-[#EFA765] font-bold px-20 md:px-12">
              We make sure that your every ride is comfortable
            </h2>
            <div className="w-4/5 flex flex-wrap items-baseline justify-center mx-auto">
              {offerData.map((item, index) => (
                <div
                  key={index}
                  className="w-full h-1/2 md:w-1/3 mb-4 flex flex-col justify-center items-center"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-full border-white border-[2px]">
                    <FontAwesomeIcon
                      icon={item.icon}
                      title={item.title}
                      className="text-white text-2xl"
                    />
                  </div>
                  <h5 className="text-white text-xl pt-3">{item.title}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
