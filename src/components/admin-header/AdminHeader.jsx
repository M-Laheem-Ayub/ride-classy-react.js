import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faAngleDoubleLeft,
  faUser,
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const AdminHeader = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between bg-white border-b p-4 shadow">
      {/* Left Section: Toggle + Title */}
      <div className="flex items-center gap-1 md:gap-3">
        <button
          className="p-2 pt-3 rounded hover:bg-gray-100 focus:outline-none"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? (
            <FontAwesomeIcon icon={faAngleDoubleLeft} className="w-5 h-5 text-gray-700" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="w-5 h-5 text-gray-700" />
          )}
        </button>

        <h1 className="md:text-xl text-lg font-bold text-gray-800">Admin Panel</h1>
      </div>

      {/* Right Section: Actions */}
      <div className="flex items-center space-x-3">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center space-x-1 px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          <span className="hidden sm:inline">Back to Website</span>
        </button>

       
        {/* Profile */}
        <button className="p-2 rounded-full hover:bg-gray-100">
          <FontAwesomeIcon icon={faUser} className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
