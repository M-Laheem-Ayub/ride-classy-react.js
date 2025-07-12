import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faPlus, 
  faEdit, 
  faTrash, 
  faCar, 
  faPlane, 
  faUsers, 
  faBuilding,
  faCheck,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

export default function RideStyles() {
  const [rideStyles, setRideStyles] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingStyle, setEditingStyle] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    basePrice: "",
    icon: "faCar",
    status: "active"
  });

  useEffect(() => {
    // Initialize with your business services
    setRideStyles([
      {
        id: 1,
        name: "Airport Transfers",
        description: "Luxury transfers from airport to city",
        basePrice: 2500,
        icon: "faPlane",
        status: "active",
        bookings: 45,
        revenue: 112500
      },
      {
        id: 2,
        name: "Intercity Rides",
        description: "Comfortable travel between cities",
        basePrice: 3500,
        icon: "faCar",
        status: "active",
        bookings: 32,
        revenue: 112000
      },
      {
        id: 3,
        name: "Events",
        description: "For events and special occasions",
        basePrice: 4000,
        icon: "faUsers",
        status: "active",
        bookings: 28,
        revenue: 112000
      },
      {
        id: 4,
        name: "Corporate Hire",
        description: "Special service for corporate clients",
        basePrice: 5000,
        icon: "faBuilding",
        status: "active",
        bookings: 25,
        revenue: 125000
      }
    ]);
  }, []);

  const getIcon = (iconName) => {
    const icons = {
      faCar: faCar,
      faPlane: faPlane,
      faUsers: faUsers,
      faBuilding: faBuilding
    };
    return icons[iconName] || faCar;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingStyle) {
      // Update existing style
      setRideStyles(prev => prev.map(style => 
        style.id === editingStyle.id 
          ? { ...style, ...formData, basePrice: parseInt(formData.basePrice) }
          : style
      ));
      setEditingStyle(null);
    } else {
      // Add new style
      const newStyle = {
        id: Date.now(),
        ...formData,
        basePrice: parseInt(formData.basePrice),
        bookings: 0,
        revenue: 0
      };
      setRideStyles(prev => [...prev, newStyle]);
    }
    setShowForm(false);
    setFormData({ name: "", description: "", basePrice: "", icon: "faCar", status: "active" });
  };

  const handleEdit = (style) => {
    setEditingStyle(style);
    setFormData({
      name: style.name,
      description: style.description,
      basePrice: style.basePrice.toString(),
      icon: style.icon,
      status: style.status
    });
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setRideStyles(prev => prev.filter(style => style.id !== id));
  };

  const toggleStatus = (id) => {
    setRideStyles(prev => prev.map(style => 
      style.id === id 
        ? { ...style, status: style.status === "active" ? "inactive" : "active" }
        : style
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-0 md:p-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Ride Styles Management</h1>
        <p className="text-gray-600">Manage your service categories</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Styles</p>
              <p className="text-2xl font-bold text-gray-900">{rideStyles.length}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <FontAwesomeIcon icon={faCar} className="text-blue-600 text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Styles</p>
              <p className="text-2xl font-bold text-gray-900">
                {rideStyles.filter(s => s.status === "active").length}
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <FontAwesomeIcon icon={faCheck} className="text-green-600 text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Bookings</p>
              <p className="text-2xl font-bold text-gray-900">
                {rideStyles.reduce((sum, style) => sum + style.bookings, 0)}
              </p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <FontAwesomeIcon icon={faUsers} className="text-purple-600 text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">
                ₨{rideStyles.reduce((sum, style) => sum + style.revenue, 0).toLocaleString()}
              </p>
            </div>
            <div className="bg-orange-100 p-3 rounded-full">
              <FontAwesomeIcon icon={faBuilding} className="text-orange-600 text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Add Button */}
      <div className="mb-6">
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Add New Style
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">
              {editingStyle ? "Edit Ride Style" : "Add New Ride Style"}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  rows="3"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Base Price (PKR)</label>
                <input
                  type="number"
                  value={formData.basePrice}
                  onChange={(e) => setFormData({...formData, basePrice: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Icon</label>
                <select
                  value={formData.icon}
                  onChange={(e) => setFormData({...formData, icon: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="faCar">Car</option>
                  <option value="faPlane">Plane</option>
                  <option value="faUsers">Users</option>
                  <option value="faBuilding">Building</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                  {editingStyle ? "Update" : "Add"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingStyle(null);
                    setFormData({ name: "", description: "", basePrice: "", icon: "faCar", status: "active" });
                  }}
                  className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Ride Styles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rideStyles.map((style) => (
          <div key={style.id} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-3">
                  <FontAwesomeIcon icon={getIcon(style.icon)} className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{style.name}</h3>
                  <p className="text-sm text-gray-600">{style.description}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(style)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button
                  onClick={() => handleDelete(style.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Base Price:</span>
                <span className="font-semibold">₨{style.basePrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Bookings:</span>
                <span className="font-semibold">{style.bookings}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Revenue:</span>
                <span className="font-semibold">₨{style.revenue.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Status:</span>
                <button
                  onClick={() => toggleStatus(style.id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    style.status === "active" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {style.status === "active" ? "Active" : "Inactive"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
