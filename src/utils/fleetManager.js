// Fleet Management Utility
import { fleetData } from "../data/fleetData";

class FleetManager {
  constructor() {
    this.fleet = [...fleetData];
    this.listeners = [];
  }

  // Get current fleet count
  getFleetCount() {
    return this.fleet.length;
  }

  // Get all fleet data
  getFleetData() {
    return this.fleet;
  }

  // Add new vehicle to fleet
  addVehicle(vehicle) {
    const newVehicle = {
      id: Date.now(), // Simple ID generation
      img: vehicle.img || "assets/images/fg-images/car1.webp",
      title: vehicle.title,
      category: vehicle.category || "STANDARD",
      status: "active",
      addedDate: new Date().toISOString()
    };
    
    this.fleet.push(newVehicle);
    this.notifyListeners();
    return newVehicle;
  }

  // Remove vehicle from fleet
  removeVehicle(vehicleId) {
    this.fleet = this.fleet.filter(vehicle => vehicle.id !== vehicleId);
    this.notifyListeners();
  }

  // Update vehicle status
  updateVehicleStatus(vehicleId, status) {
    const vehicle = this.fleet.find(v => v.id === vehicleId);
    if (vehicle) {
      vehicle.status = status;
      this.notifyListeners();
    }
  }

  // Get fleet statistics
  getFleetStats() {
    const total = this.fleet.length;
    const active = this.fleet.filter(v => v.status === 'active').length;
    const maintenance = this.fleet.filter(v => v.status === 'maintenance').length;
    const inactive = this.fleet.filter(v => v.status === 'inactive').length;

    return {
      total,
      active,
      maintenance,
      inactive,
      utilizationRate: total > 0 ? (active / total * 100).toFixed(1) : 0
    };
  }

  // Get fleet by category
  getFleetByCategory() {
    const categories = {};
    this.fleet.forEach(vehicle => {
      if (!categories[vehicle.category]) {
        categories[vehicle.category] = [];
      }
      categories[vehicle.category].push(vehicle);
    });
    return categories;
  }

  // Subscribe to fleet changes
  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  // Notify all listeners of changes
  notifyListeners() {
    this.listeners.forEach(listener => listener(this.fleet));
  }
}

// Create singleton instance
const fleetManager = new FleetManager();

export default fleetManager; 