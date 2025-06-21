import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import OurServiceTitle from "../../../components/our-service-title/OurServiceTitle";
import { servicesData } from "../../../data/servicesData";

const OurServices = () => {
  return (
    <div>
      <OurServiceTitle />
      <section className="w-full bg-black pb-10 px-0">
        <main className="flex items-center flex-col md:flex-row md:flex-wrap md:items-baseline lg:flex-nowrap">
          {servicesData.map((service, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-4 py-2">
              <img className="mb-3" src={service.image} alt={service.title} />
              <div className="flex flex-col items-start">
                <h3 className="text-[#EFA765] text-3xl font-bold font-['Roboto']">
                  {service.title}
                </h3>
                <p className="mt-3.5 mb-1 leading-relaxed text-gray-400 text-base text-start font-normal font-['Roboto']">
                  {service.description}
                </p>
                <NavLink
                  to={service.path}
                  className="text-[#EFA765] text-base font-['Roboto'] hover:underline"
                >
                  Read More
                </NavLink>
              </div>
            </div>
          ))}
        </main>
      </section>
    </div>
  );
};

export default OurServices;
