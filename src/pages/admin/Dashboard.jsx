// src/pages/Dashboard.jsx
import React, { useState, useEffect } from "react";
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCar, 
  faMoneyBillWave, 
  faChartLine, 
  faUsers,
  faArrowUp,
  faArrowDown,
  faCalendarAlt,
  faClock
} from "@fortawesome/free-solid-svg-icons";
import fleetManager from "../../utils/fleetManager";
import revenueManager from "../../utils/revenueManager";
import TestControls from "../../components/dashboard/TestControls";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState({
    fleetCount: 0,
    totalRevenue: 0,
    monthlyRevenue: 0,
    profit: 0,
    loss: 0,
    isProfit: true,
    totalBookings: 0,
    activeDrivers: 0
  });

  // Revenue data for charts
  const [revenueData, setRevenueData] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);

  useEffect(() => {
    // Get real data from managers
    const fleetCount = fleetManager.getFleetCount();
    const revenueData = revenueManager.getRevenueTrendData();
    const profitLoss = revenueManager.calculateProfitLoss();
    const totalRevenue = revenueManager.getTotalRevenue();
    const monthlyRevenue = revenueManager.getMonthlyRevenue();
    const totalBookings = revenueData.reduce((sum, item) => sum + item.bookings, 0);
    
    // Get service distribution
    const serviceRevenue = revenueManager.getRevenueByService();
    const totalServiceRevenue = Object.values(serviceRevenue).reduce((sum, val) => sum + val, 0);
    const serviceData = Object.entries(serviceRevenue).map(([service, revenue]) => ({
      name: service,
      value: Math.round((revenue / totalServiceRevenue) * 100),
      color: getServiceColor(service)
    }));

    // Get monthly breakdown
    const monthlyData = [
      { name: "Revenue", value: monthlyRevenue, color: "#4CAF50" },
      { name: "Expenses", value: profitLoss.expenses, color: "#F44336" },
      { name: "Profit", value: profitLoss.profit, color: "#2196F3" }
    ];

    setDashboardData({
      fleetCount,
      totalRevenue,
      monthlyRevenue,
      profit: Math.abs(profitLoss.profit),
      loss: profitLoss.isProfit ? 0 : Math.abs(profitLoss.profit),
      isProfit: profitLoss.isProfit,
      totalBookings,
      activeDrivers: 8 // Mock data
    });

    setRevenueData(revenueData);
    setServiceData(serviceData);
    setMonthlyData(monthlyData);

    // Subscribe to fleet changes
    const unsubscribeFleet = fleetManager.subscribe((fleet) => {
      setDashboardData(prev => ({
        ...prev,
        fleetCount: fleet.length
      }));
    });

    // Subscribe to revenue changes
    const unsubscribeRevenue = revenueManager.subscribe(() => {
      const newRevenueData = revenueManager.getRevenueTrendData();
      const newProfitLoss = revenueManager.calculateProfitLoss();
      const newMonthlyRevenue = revenueManager.getMonthlyRevenue();
      
      setDashboardData(prev => ({
        ...prev,
        totalRevenue: revenueManager.getTotalRevenue(),
        monthlyRevenue: newMonthlyRevenue,
        profit: Math.abs(newProfitLoss.profit),
        loss: newProfitLoss.isProfit ? 0 : Math.abs(newProfitLoss.profit),
        isProfit: newProfitLoss.isProfit
      }));
      
      setRevenueData(newRevenueData);
    });

    // Cleanup subscriptions
    return () => {
      unsubscribeFleet();
      unsubscribeRevenue();
    };
  }, []);

  // Helper function to get service colors
  const getServiceColor = (service) => {
    const colors = {
      'Airport Transfers': '#8884d8',
      'Intercity Rides': '#82ca9d',
      'Events': '#ffc658',
      'Corporate Hire': '#ff7300'
    };
    return colors[service] || '#8884d8';
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="min-h-screen bg-gray-50 p-0 md:p-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome to your admin dashboard. Here's an overview of your operations.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Fleet Count */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Fleet</p>
              <p className="text-2xl font-bold text-gray-900">{dashboardData.fleetCount}</p>
              <p className="text-xs text-gray-500 mt-1">Active Vehicles</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <FontAwesomeIcon icon={faCar} className="text-blue-600 text-xl" />
            </div>
          </div>
        </div>

        {/* Monthly Revenue */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
              <p className="text-2xl font-bold text-gray-900">₨{dashboardData.monthlyRevenue.toLocaleString()}</p>
              <div className="flex items-center mt-1">
                <FontAwesomeIcon icon={faArrowUp} className="text-green-500 text-xs mr-1" />
                <span className="text-xs text-green-500">+12.5% from last month</span>
              </div>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <FontAwesomeIcon icon={faMoneyBillWave} className="text-green-600 text-xl" />
            </div>
          </div>
        </div>

        {/* Profit/Loss */}
        <div className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${dashboardData.isProfit ? 'border-green-500' : 'border-red-500'}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{dashboardData.isProfit ? 'Profit' : 'Loss'}</p>
              <p className={`text-2xl font-bold ${dashboardData.isProfit ? 'text-green-600' : 'text-red-600'}`}>
                ₨{dashboardData.profit.toLocaleString()}
              </p>
              <div className="flex items-center mt-1">
                <FontAwesomeIcon 
                  icon={dashboardData.isProfit ? faArrowUp : faArrowDown} 
                  className={`${dashboardData.isProfit ? 'text-green-500' : 'text-red-500'} text-xs mr-1`} 
                />
                <span className={`text-xs ${dashboardData.isProfit ? 'text-green-500' : 'text-red-500'}`}>
                  {dashboardData.isProfit ? '+₨2,700' : '-₨2,300'} this month
                </span>
              </div>
            </div>
            <div className={`p-3 rounded-full ${dashboardData.isProfit ? 'bg-green-100' : 'bg-red-100'}`}>
              <FontAwesomeIcon 
                icon={faChartLine} 
                className={`${dashboardData.isProfit ? 'text-green-600' : 'text-red-600'} text-xl`} 
              />
            </div>
          </div>
        </div>

        {/* Total Bookings */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Bookings</p>
              <p className="text-2xl font-bold text-gray-900">{dashboardData.totalBookings}</p>
              <p className="text-xs text-gray-500 mt-1">This year</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <FontAwesomeIcon icon={faUsers} className="text-purple-600 text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Revenue Trend Chart */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`₨${value.toLocaleString()}`, 'Revenue']} />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="#4CAF50" 
                strokeWidth={3}
                dot={{ fill: '#4CAF50', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Service Distribution */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Service Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={serviceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {serviceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value}%`, 'Market Share']} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Additional Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Monthly Breakdown */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Monthly Financial Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => [`₨${value.toLocaleString()}`, 'Amount']} />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Bookings Trend */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Bookings Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [value, 'Bookings']} />
              <Area 
                type="monotone" 
                dataKey="bookings" 
                stroke="#8884d8" 
                fill="#8884d8" 
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Drivers</p>
              <p className="text-2xl font-bold text-gray-900">{dashboardData.activeDrivers}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <FontAwesomeIcon icon={faUsers} className="text-blue-600 text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">₨{dashboardData.totalRevenue.toLocaleString()}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <FontAwesomeIcon icon={faMoneyBillWave} className="text-green-600 text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg. Booking Value</p>
              <p className="text-2xl font-bold text-gray-900">₨{(dashboardData.totalRevenue / dashboardData.totalBookings).toFixed(0)}</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <FontAwesomeIcon icon={faChartLine} className="text-purple-600 text-xl" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Test Controls for demonstration */}
      <TestControls />
    </div>
  );
}
