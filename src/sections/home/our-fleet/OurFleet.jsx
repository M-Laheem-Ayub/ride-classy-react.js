import React from "react";
import { fleetData } from "../../../data/fleetData"; // Import your data

const OurFleet = () => {
  return (
    <div>
      <section className="bg-white ">
        <div className="relative text-center items-center w-full px-5 pb-16 py-12 mx-auto md:px-12 max-w-7xl">
          <div>
            <h2 className="text-[#161B1F] text-3xl sm:text-4xl Lg:text-5xl pb-4 font-extrabold font-playfair">Our Fleet</h2>
            <h5 className="text-[#838383] text-base pb-4 font-playfair font-semibold tracking-wider">
              Comfortable rides with our luxury and premium vehicles.
            </h5>
          </div>
          
          <div className="grid w-full grid-cols-1 gap-6 mx-auto md:grid-cols-4 text-black text-xl lett font-semibold font-[Roboto]">
            {fleetData.map((car, index) => (
              <div key={index}>
                <img className="w-full mb-6" src={car.img} alt={car.title} />
                <h1 className="mx-auto mb-2">{car.title}</h1>
                <p className="text-[#BFBFBF] text-base tracking-widest font-extralight">{car.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurFleet;
