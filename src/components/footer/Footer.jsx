import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#1a2025] self-end pt-6 border-t border-gray-200 text-center">
        <div className="px-10 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:text-start">
              <a href="/" className="md:block flex justify-center ">
                <img
                  src="/assets/images/fg-images/web-logo.png"
                  className="h-8"
                  alt="Logo"
                />
              </a>
              <a
                href="mailto:contact@rideclassy.com"
                className="mt-2 text-base text-[#EFA765] block hover:underline"
              >
                contact@rideclassy.com
              </a>
              <a
                href="tel:+34933939367"
                className="mt-2 text-base text-[#EFA765] block hover:underline"
              >
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
                    to="/privacy-policy"
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

            <div className="flex justify-center md:justify-start">
              {/* Image clickable */}
              <NavLink to="/payment">
                <img
                  src="/assets/images/fg-images/payment-gateway.png"
                  alt="Payment options"
                  className="cursor-pointer"
                />
              </NavLink>
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
