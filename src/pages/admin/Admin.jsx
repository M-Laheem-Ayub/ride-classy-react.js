import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminHeader from "../../components/admin-header/AdminHeader";
import Sidebar from "../../components/sidebar/Sidebar";
import Dashboard from "./Dashboard";
import Payment from "./Payments";
import RideStyles from "./RideStyles";
import Vehicles from "./Vehicles";

const Admin = () => {
   useEffect(() => {
    document.title = "Admin Panel - RideClassy";
  }, []);
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 1024); // Desktop par open by default

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <AdminHeader setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />

        <main className="flex-1 p-4 overflow-y-auto">
          <Routes>
            {/* Redirect /admin to /admin/dashboard */}
            <Route path="/" element={<Navigate to="dashboard" replace />} />

            <Route path="dashboard" element={<Dashboard />} />
            <Route path="ride-styles" element={<RideStyles />} />
            <Route path="vehicles" element={<Vehicles />} />
            <Route path="payments" element={<Payment />} />
            <Route path="*" element={<RideStyles />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Admin;
