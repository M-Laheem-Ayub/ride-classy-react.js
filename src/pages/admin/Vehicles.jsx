import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faPlus, 
  faEdit, 
  faTrash, 
  faCar, 
  faCheck,
  faTimes,
  faTools,
  faGasPump,
  faUserTie,
  faCalendarAlt
} from "@fortawesome/free-solid-svg-icons";

export default function Vehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState(null);
  const [formData, setFormData] = useState({
    model: "",
    category: "STANDARD",
    capacity: "",
    year: "",
    plateNumber: "",
    driver: "",
    status: "active",
    fuelType: "petrol",
    maintenanceDue: ""
  });

  useEffect(() => {
    // Initialize with your fleet data
    setVehicles([
      {
        id: 1,
        model: "Mercedes S-Class",
        category: "FIRST CLASS",
        capacity: 4,
        year: 2022,
        plateNumber: "LHR-1234",
        driver: "Ahmed Ali",
        status: "active",
        fuelType: "petrol",
        maintenanceDue: "2024-03-15",
        image: "/assets/images/fg-images/car4.webp",
        bookings: 45,
        revenue: 225000,
        lastService: "2024-01-15"
      },
      {
        id: 2,
        model: "Skoda Superb",
        category: "STANDARD",
        capacity: 4,
        year: 2021,
        plateNumber: "LHR-5678",
        driver: "Muhammad Hassan",
        status: "active",
        fuelType: "petrol",
        maintenanceDue: "2024-04-20",
        image: "/assets/images/fg-images/car1.webp",
        bookings: 38,
        revenue: 190000,
        lastService: "2024-01-10"
      },
      {
        id: 3,
        model: "Mercedes E-Class",
        category: "BUSINESS CLASS",
        capacity: 4,
        year: 2023,
        plateNumber: "LHR-9012",
        driver: "Usman Khan",
        status: "maintenance",
        fuelType: "petrol",
        maintenanceDue: "2024-02-28",
        image: "/assets/images/fg-images/car2.webp",
        bookings: 42,
        revenue: 210000,
        lastService: "2024-01-20"
      },
      {
        id: 4,
        model: "Mercedes V-Class",
        category: "MINIVAN / SUV",
        capacity: 8,
        year: 2022,
        plateNumber: "LHR-3456",
        driver: "Ali Raza",
        status: "active",
        fuelType: "diesel",
        maintenanceDue: "2024-05-10",
        image: "/assets/images/fg-images/car3.webp",
        bookings: 35,
        revenue: 175000,
        lastService: "2024-01-05"
      }
    ]);
  }, []);

  const getStatusColor = (status) => {
    const colors = {
      active: "bg-green-100 text-green-800",
      maintenance: "bg-yellow-100 text-yellow-800",
      inactive: "bg-red-100 text-red-800"
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  const getCategoryColor = (category) => {
    const colors = {
      "FIRST CLASS": "bg-purple-100 text-purple-800",
      "BUSINESS CLASS": "bg-blue-100 text-blue-800",
      "STANDARD": "bg-green-100 text-green-800",
      "MINIVAN / SUV": "bg-orange-100 text-orange-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingVehicle) {
      // Update existing vehicle
      setVehicles(prev => prev.map(vehicle => 
        vehicle.id === editingVehicle.id 
          ? { ...vehicle, ...formData, capacity: parseInt(formData.capacity), year: parseInt(formData.year) }
          : vehicle
      ));
      setEditingVehicle(null);
    } else {
      // Add new vehicle
      const newVehicle = {
        id: Date.now(),
        ...formData,
        capacity: parseInt(formData.capacity),
        year: parseInt(formData.year),
        bookings: 0,
        revenue: 0,
        lastService: new Date().toISOString().split('T')[0]
      };
      setVehicles(prev => [...prev, newVehicle]);
    }
    setShowForm(false);
    setFormData({
      model: "",
      category: "STANDARD",
      capacity: "",
      year: "",
      plateNumber: "",
      driver: "",
      status: "active",
      fuelType: "petrol",
      maintenanceDue: ""
    });
  };

  const handleEdit = (vehicle) => {
    setEditingVehicle(vehicle);
    setFormData({
      model: vehicle.model,
      category: vehicle.category,
      capacity: vehicle.capacity.toString(),
      year: vehicle.year.toString(),
      plateNumber: vehicle.plateNumber,
      driver: vehicle.driver,
      status: vehicle.status,
      fuelType: vehicle.fuelType,
      maintenanceDue: vehicle.maintenanceDue
    });
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setVehicles(prev => prev.filter(vehicle => vehicle.id !== id));
  };

  const toggleStatus = (id) => {
    setVehicles(prev => prev.map(vehicle => {
      if (vehicle.id === id) {
        const newStatus = vehicle.status === "active" ? "inactive" : "active";
        return { ...vehicle, status: newStatus };
      }
      return vehicle;
    }));
  };

  const getTotalStats = () => {
    const total = vehicles.length;
    const active = vehicles.filter(v => v.status === "active").length;
    const maintenance = vehicles.filter(v => v.status === "maintenance").length;
    const totalRevenue = vehicles.reduce((sum, v) => sum + v.revenue, 0);
    const totalBookings = vehicles.reduce((sum, v) => sum + v.bookings, 0);

    return { total, active, maintenance, totalRevenue, totalBookings };
  };

  const stats = getTotalStats();

  return (
    <div className="min-h-screen bg-gray-50 p-0 md:p-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Vehicle Fleet Management</h1>
        <p className="text-gray-600">Manage your vehicle fleet</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Vehicles</p>
              <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <FontAwesomeIcon icon={faCar} className="text-blue-600 text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active</p>
              <p className="text-2xl font-bold text-gray-900">{stats.active}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <FontAwesomeIcon icon={faCheck} className="text-green-600 text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Maintenance</p>
              <p className="text-2xl font-bold text-gray-900">{stats.maintenance}</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <FontAwesomeIcon icon={faTools} className="text-yellow-600 text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">₨{stats.totalRevenue.toLocaleString()}</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <FontAwesomeIcon icon={faUserTie} className="text-purple-600 text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Bookings</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalBookings}</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-full">
              <FontAwesomeIcon icon={faCalendarAlt} className="text-orange-600 text-xl" />
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
          Add New Vehicle
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">
              {editingVehicle ? "Edit Vehicle" : "Add New Vehicle"}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Model</label>
                <input
                  type="text"
                  value={formData.model}
                  onChange={(e) => setFormData({...formData, model: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="STANDARD">Standard</option>
                  <option value="BUSINESS CLASS">Business Class</option>
                  <option value="FIRST CLASS">First Class</option>
                  <option value="MINIVAN / SUV">Minivan / SUV</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Capacity</label>
                  <input
                    type="number"
                    value={formData.capacity}
                    onChange={(e) => setFormData({...formData, capacity: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                  <input
                    type="number"
                    value={formData.year}
                    onChange={(e) => setFormData({...formData, year: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Plate Number</label>
                <input
                  type="text"
                  value={formData.plateNumber}
                  onChange={(e) => setFormData({...formData, plateNumber: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Driver</label>
                <input
                  type="text"
                  value={formData.driver}
                  onChange={(e) => setFormData({...formData, driver: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({...formData, status: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="active">Active</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Fuel Type</label>
                  <select
                    value={formData.fuelType}
                    onChange={(e) => setFormData({...formData, fuelType: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="petrol">Petrol</option>
                    <option value="diesel">Diesel</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Maintenance Due</label>
                <input
                  type="date"
                  value={formData.maintenanceDue}
                  onChange={(e) => setFormData({...formData, maintenanceDue: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                  {editingVehicle ? "Update" : "Add"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingVehicle(null);
                    setFormData({
                      model: "",
                      category: "STANDARD",
                      capacity: "",
                      year: "",
                      plateNumber: "",
                      driver: "",
                      status: "active",
                      fuelType: "petrol",
                      maintenanceDue: ""
                    });
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

      {/* Vehicles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 relative">
              <img 
                src={vehicle.image} 
                alt={vehicle.model}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(vehicle.status)}`}>
                  {vehicle.status}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{vehicle.model}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(vehicle.category)}`}>
                    {vehicle.category}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(vehicle)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    onClick={() => handleDelete(vehicle.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Capacity:</span>
                    <p className="font-semibold">{vehicle.capacity} persons</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Year:</span>
                    <p className="font-semibold">{vehicle.year}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Plate:</span>
                    <p className="font-semibold">{vehicle.plateNumber}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Fuel:</span>
                    <p className="font-semibold capitalize">{vehicle.fuelType}</p>
                  </div>
                </div>

                <div className="border-t pt-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Driver:</span>
                    <span className="font-semibold text-sm">{vehicle.driver}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Bookings:</span>
                    <span className="font-semibold">{vehicle.bookings}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Revenue:</span>
                    <span className="font-semibold">₨{vehicle.revenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Maintenance:</span>
                    <span className="text-sm">{vehicle.maintenanceDue}</span>
                  </div>
                </div>

                <div className="flex space-x-2 pt-3 border-t">
                  <button
                    onClick={() => toggleStatus(vehicle.id)}
                    className={`flex-1 px-3 py-2 rounded-md text-sm font-medium ${
                      vehicle.status === "active" 
                        ? "bg-green-100 text-green-800 hover:bg-green-200" 
                        : "bg-red-100 text-red-800 hover:bg-red-200"
                    }`}
                  >
                    {vehicle.status === "active" ? "Deactivate" : "Activate"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
