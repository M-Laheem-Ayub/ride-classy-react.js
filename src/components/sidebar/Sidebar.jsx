// src/components/sidebar/Sidebar.jsx
import { useNavigate } from "react-router-dom";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faCar,
  faCarSide,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ open, setOpen }) => {
  const navigate = useNavigate();

  const menuItems = [
    { to: "/admin/dashboard", label: "Dashboard", icon: faTachometerAlt },
    { to: "/admin/ride-styles", label: "Ride Styles", icon: faCar },
    { to: "/admin/vehicles", label: "Vehicles", icon: faCarSide },
    { to: "/admin/payments", label: "Payments", icon: faCreditCard },
  ];

  return (
    <Fragment>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed z-50 lg:static top-0 left-0 h-full bg-gray-900 text-white transform transition-all duration-300 ease-in-out
        ${
          open
            ? "translate-x-0 w-64"
            : "-translate-x-full lg:translate-x-0 lg:w-16"
        }`}
      >
        <nav className="flex flex-col p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.to}
              onClick={() => {
                navigate(item.to, { replace: true });
                if (window.innerWidth < 1024) setOpen(false);
              }}
              className={`flex items-center space-x-3 p-2 rounded hover:bg-gray-700 transition`}
            >
              <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
              {open && <span>{item.label}</span>}
            </button>
          ))}
        </nav>
      </div>
    </Fragment>
  );
};

export default Sidebar;
