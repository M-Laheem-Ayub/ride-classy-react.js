import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";
import fleetManager from "../../utils/fleetManager";
import revenueManager from "../../utils/revenueManager";

const TestControls = () => {
  const [showControls, setShowControls] = useState(false);

  const addVehicle = () => {
    const newVehicle = {
      title: `New Vehicle ${Date.now()}`,
      category: "STANDARD",
      img: "assets/images/fg-images/car1.webp"
    };
    fleetManager.addVehicle(newVehicle);
  };

  const addRevenue = () => {
    const amount = Math.floor(Math.random() * 15000) + 5000; // Random amount between 5000-20000 PKR
    const services = ['Airport Transfers', 'Intercity Rides', 'Events', 'Corporate Hire'];
    const service = services[Math.floor(Math.random() * services.length)];
    revenueManager.addRevenue(amount, service);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setShowControls(!showControls)}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        title="Test Controls"
      >
        <FontAwesomeIcon icon={faPlus} className="text-lg" />
      </button>

      {/* Control Panel */}
      {showControls && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 border min-w-[200px]">
          <h4 className="text-sm font-semibold text-gray-800 mb-3">Test Controls</h4>
          
          <div className="space-y-2">
            <button
              onClick={addVehicle}
              className="w-full bg-green-500 text-white px-3 py-2 rounded text-sm hover:bg-green-600 transition-colors flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              Add Vehicle
            </button>
            
            <button
              onClick={addRevenue}
              className="w-full bg-purple-500 text-white px-3 py-2 rounded text-sm hover:bg-purple-600 transition-colors flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faMoneyBillWave} className="mr-2" />
              Add Revenue
            </button>
          </div>
          
          <div className="mt-3 text-xs text-gray-500">
            <p>Fleet Count: {fleetManager.getFleetCount()}</p>
            <p>Total Revenue: ₨{revenueManager.getTotalRevenue().toLocaleString()}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestControls; 