import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white shadow-md w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 md:p-4">
          <NavLink to="/" className="focus:outline-none flex  items-center space-x-3 rtl:space-x-reverse ps-0 md:ps-4">
            <img src="assets/images/fg-images/logo.png" className="h-8 md:h-9" alt="Logo" />
          </NavLink>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-900 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div className={`${menuOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded  ${
                      isActive ? "text-black font-bold" : "text-gray-500 hover:text-black"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded  ${
                      isActive ? "text-black font-bold" : "text-gray-500 hover:text-black"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/book"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded  ${
                      isActive ? "text-black font-bold" : "text-gray-500 hover:text-black"
                    }`
                  }
                >
                  Book Online
                </NavLink>
              </li>
              <li className="flex items-center">
                <NavLink to="/admin" className="flex items-center space-x-2 px-4">
                  <img
                    src="https://i.pravatar.cc/40?img=12"
                    alt="Admin Profile"
                    className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-black transition"
                  />
                  <span className="hidden md:inline text-gray-700 font-medium">Admin</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
