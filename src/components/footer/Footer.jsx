import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#1a2025] pt-6 border-t border-gray-200">
        <div className="px-10 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:text-start">
              <a href="#" className="md:block flex justify-center ">
                <img
                  src="assets/images/fg-images/web-logo.png"
                  className="h-8"
                  alt="Logo"
                />
              </a>
              <a className="mt-2 text-base text-[#EFA765] block">
                contact@rideclassy.com
              </a>
              <a className="mt-2 text-base text-[#EFA765] block">
                +34 933 93 93 67
              </a>
            </div>

            <div className="md:text-start text-[#54595F]">
              <ul className="text-base space-y-5">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-[#EFA765]" : "hover:text-[#EFA765]"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/privacy"
                    className={({ isActive }) =>
                      isActive ? "text-[#EFA765]" : "hover:text-[#EFA765]"
                    }
                  >
                    Privacy Policy
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? "text-[#EFA765]" : "hover:text-[#EFA765]"
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>

            <div>
              <img src="assets/images/fg-images/payment-gateway.png" alt="" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-6">
            <div className="flex space-x-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-v52tLnvL3FEjfxjPvZWbvUMYvVUtAm9R6A&s"
                alt="Google Play"
                className="h-10"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJgk5tpxJC_1CAnsXwo2VvBGyQGI-o5c1PJw&s"
                alt="App Store"
                className="h-10"
              />
            </div>
          </div>
        </div>
        <div className="text-center h-32 text-base text-[#575757] mt-6 bg-[#161b1f] pt-4">
          RideClassy | All Rights Reserved © 2024.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
