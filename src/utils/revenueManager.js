// Revenue Management Utility
class RevenueManager {
  constructor() {
    this.revenueData = [];
    this.expenses = {
      fuel: 45000, // PKR - Petrol prices in Pakistan
      maintenance: 30000, // PKR - Vehicle maintenance
      salaries: 120000, // PKR - Driver salaries
      insurance: 15000, // PKR - Vehicle insurance
      marketing: 25000, // PKR - Digital marketing
      other: 10000 // PKR - Miscellaneous expenses
    };
    this.listeners = [];
  }

  // Add new revenue entry
  addRevenue(amount, service, date = new Date()) {
    const revenueEntry = {
      id: Date.now(),
      amount,
      service,
      date: date.toISOString(),
      month: date.getMonth(),
      year: date.getFullYear()
    };
    
    this.revenueData.push(revenueEntry);
    this.notifyListeners();
    return revenueEntry;
  }

  // Get monthly revenue
  getMonthlyRevenue(month = new Date().getMonth(), year = new Date().getFullYear()) {
    return this.revenueData
      .filter(entry => entry.month === month && entry.year === year)
      .reduce((sum, entry) => sum + entry.amount, 0);
  }

  // Get yearly revenue
  getYearlyRevenue(year = new Date().getFullYear()) {
    return this.revenueData
      .filter(entry => entry.year === year)
      .reduce((sum, entry) => sum + entry.amount, 0);
  }

  // Get total revenue
  getTotalRevenue() {
    return this.revenueData.reduce((sum, entry) => sum + entry.amount, 0);
  }

  // Get revenue by service
  getRevenueByService() {
    const serviceRevenue = {};
    this.revenueData.forEach(entry => {
      if (!serviceRevenue[entry.service]) {
        serviceRevenue[entry.service] = 0;
      }
      serviceRevenue[entry.service] += entry.amount;
    });
    return serviceRevenue;
  }

  // Calculate monthly expenses
  getMonthlyExpenses() {
    return Object.values(this.expenses).reduce((sum, expense) => sum + expense, 0);
  }

  // Calculate profit/loss
  calculateProfitLoss(month = new Date().getMonth(), year = new Date().getFullYear()) {
    const revenue = this.getMonthlyRevenue(month, year);
    const expenses = this.getMonthlyExpenses();
    const profit = revenue - expenses;
    
    return {
      revenue,
      expenses,
      profit,
      isProfit: profit >= 0,
      profitMargin: revenue > 0 ? (profit / revenue * 100).toFixed(1) : 0
    };
  }

  // Get revenue trend data
  getRevenueTrendData() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                   'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const currentYear = new Date().getFullYear();
    
    return months.map((month, index) => {
      const revenue = this.getMonthlyRevenue(index, currentYear);
      const bookings = Math.floor(revenue / 1500); // Estimate bookings based on PKR revenue
      
      return {
        month,
        revenue,
        bookings
      };
    });
  }

  // Update expenses
  updateExpenses(newExpenses) {
    this.expenses = { ...this.expenses, ...newExpenses };
    this.notifyListeners();
  }

  // Get expense breakdown
  getExpenseBreakdown() {
    return Object.entries(this.expenses).map(([category, amount]) => ({
      name: category.charAt(0).toUpperCase() + category.slice(1),
      value: amount,
      color: this.getExpenseColor(category)
    }));
  }

  // Get expense color
  getExpenseColor(category) {
    const colors = {
      fuel: '#FF6B6B',
      maintenance: '#4ECDC4',
      salaries: '#45B7D1',
      insurance: '#96CEB4',
      marketing: '#FFEAA7',
      other: '#DDA0DD'
    };
    return colors[category] || '#8884d8';
  }

  // Subscribe to revenue changes
  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  // Notify all listeners of changes
  notifyListeners() {
    this.listeners.forEach(listener => listener(this.revenueData));
  }

  // Initialize with sample data
  initializeSampleData() {
    const currentYear = new Date().getFullYear();
    const sampleData = [
      { month: 0, amount: 180000, service: 'Airport Transfers' }, // PKR rates
      { month: 1, amount: 210000, service: 'Intercity Rides' },
      { month: 2, amount: 195000, service: 'Events' },
      { month: 3, amount: 245000, service: 'Corporate Hire' },
      { month: 4, amount: 220000, service: 'Airport Transfers' },
      { month: 5, amount: 270000, service: 'Intercity Rides' },
      { month: 6, amount: 290000, service: 'Events' },
      { month: 7, amount: 275000, service: 'Corporate Hire' },
      { month: 8, amount: 240000, service: 'Airport Transfers' },
      { month: 9, amount: 255000, service: 'Intercity Rides' },
      { month: 10, amount: 285000, service: 'Events' },
      { month: 11, amount: 315000, service: 'Corporate Hire' }
    ];

    sampleData.forEach(({ month, amount, service }) => {
      const date = new Date(currentYear, month, 15);
      this.addRevenue(amount, service, date);
    });
  }
}

// Create singleton instance
const revenueManager = new RevenueManager();

// Initialize with sample data
revenueManager.initializeSampleData();

export default revenueManager; 