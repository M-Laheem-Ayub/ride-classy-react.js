import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadphones,
  faCalendarDays,
  faPlaneArrival,
} from "@fortawesome/free-solid-svg-icons";

const benefits = [
  {
    icon: faCalendarDays,
    title: "Free cancellation",
    description: "Up to 24 hours before pickup",
  },
  {
    icon: faPlaneArrival,
    title: "Flight tracking",
    description: "Chauffeur will monitor your flight",
  },
  {
    icon: faHeadphones,
    title: "24/7 Support",
    description: "Dedicated customer service",
  },
];
const Benefits = () => {
  return (
    <div>
      <section className="py-10">
          <div className="flex lg:flex-col-reverse flex-col">
            <h1 className="text-[39px] lg:pt-20 pb-20 pt-0 text-[#333131] font-playfair  font-extrabold text-center mb-8">
              Book Online
            </h1>
            <div className="grid grid-cols-1 px-6 md:grid-cols-3 py-2 bg-[#f6f6f6]">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center text-center md:items-start md:text-start p-2.5 lg:p-4"
                >
                  <FontAwesomeIcon
                    icon={benefit.icon}
                    className="w-12 h-12 md:pb-0 pb-3  text-[#54595f] flex-shrink-0"
                  />
                  <div className="ml-4">
                    <h3 className="text-[16.5px] sm:text-lg lg:text-[22px] font-robotoSlab text-[#222222]">
                      {benefit.title}
                    </h3>
                    <p className="lg:text-base text-[14.6px] text-[#575757]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    </div>
  )
}

export default Benefits
