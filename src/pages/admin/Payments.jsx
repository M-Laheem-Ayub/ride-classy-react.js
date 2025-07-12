import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faEdit,
  faTrash,
  faCreditCard,
  faCheck,
  faTimes,
  faMoneyBillWave,
  faClock,
  faExclamationTriangle,
  faFilter,
  faSearch,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

export default function Payments() {
  const [payments, setPayments] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPayment, setEditingPayment] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    customerName: "",
    customerPhone: "",
    service: "",
    amount: "",
    paymentMethod: "cash",
    status: "pending",
    bookingDate: "",
    paymentDate: "",
  });

  useEffect(() => {
    // Initialize with Pakistani business data
    setPayments([
      {
        id: 1,
        customerName: "Ahmed Ali",
        customerPhone: "+92-300-1234567",
        service: "Airport Transfer",
        amount: 2500,
        paymentMethod: "cash",
        status: "completed",
        bookingDate: "2024-01-15",
        paymentDate: "2024-01-15",
        pickupLocation: "Lahore Airport",
        dropLocation: "Gulberg, Lahore",
        driver: "Muhammad Hassan",
        vehicle: "Mercedes S-Class",
      },
      {
        id: 2,
        customerName: "Sara Khan",
        customerPhone: "+92-301-2345678",
        service: "Intercity Ride",
        amount: 3500,
        paymentMethod: "card",
        status: "pending",
        bookingDate: "2024-01-16",
        paymentDate: "",
        pickupLocation: "Lahore",
        dropLocation: "Islamabad",
        driver: "Usman Khan",
        vehicle: "Skoda Superb",
      },
      {
        id: 3,
        customerName: "Usman Raza",
        customerPhone: "+92-302-3456789",
        service: "Corporate Event",
        amount: 5000,
        paymentMethod: "bank_transfer",
        status: "completed",
        bookingDate: "2024-01-14",
        paymentDate: "2024-01-14",
        pickupLocation: "Corporate Office",
        dropLocation: "Marriott Hotel",
        driver: "Ali Raza",
        vehicle: "Mercedes V-Class",
      },
      {
        id: 4,
        customerName: "Fatima Zahra",
        customerPhone: "+92-303-4567890",
        service: "Wedding Event",
        amount: 8000,
        paymentMethod: "cash",
        status: "completed",
        bookingDate: "2024-01-13",
        paymentDate: "2024-01-13",
        pickupLocation: "Bridal Home",
        dropLocation: "Wedding Hall",
        driver: "Ahmed Ali",
        vehicle: "Mercedes E-Class",
      },
      {
        id: 5,
        customerName: "Muhammad Bilal",
        customerPhone: "+92-304-5678901",
        service: "Airport Transfer",
        amount: 3000,
        paymentMethod: "card",
        status: "failed",
        bookingDate: "2024-01-17",
        paymentDate: "",
        pickupLocation: "Islamabad Airport",
        dropLocation: "Blue Area, Islamabad",
        driver: "Muhammad Hassan",
        vehicle: "Skoda Superb",
      },
    ]);
  }, []);

  const getStatusColor = (status) => {
    const colors = {
      completed: "bg-green-100 text-green-800",
      pending: "bg-yellow-100 text-yellow-800",
      failed: "bg-red-100 text-red-800",
      cancelled: "bg-gray-100 text-gray-800",
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  const getPaymentMethodIcon = (method) => {
    const icons = {
      cash: faMoneyBillWave,
      card: faCreditCard,
      bank_transfer: faCreditCard,
    };
    return icons[method] || faMoneyBillWave;
  };

  const getPaymentMethodText = (method) => {
    const texts = {
      cash: "Cash",
      card: "Card",
      bank_transfer: "Bank Transfer",
    };
    return texts[method] || method;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingPayment) {
      // Update existing payment
      setPayments((prev) =>
        prev.map((payment) =>
          payment.id === editingPayment.id
            ? { ...payment, ...formData, amount: parseInt(formData.amount) }
            : payment
        )
      );
      setEditingPayment(null);
    } else {
      // Add new payment
      const newPayment = {
        id: Date.now(),
        ...formData,
        amount: parseInt(formData.amount),
        bookingDate:
          formData.bookingDate || new Date().toISOString().split("T")[0],
        paymentDate:
          formData.status === "completed"
            ? new Date().toISOString().split("T")[0]
            : "",
        pickupLocation: "",
        dropLocation: "",
        driver: "",
        vehicle: "",
      };
      setPayments((prev) => [...prev, newPayment]);
    }
    setShowForm(false);
    setFormData({
      customerName: "",
      customerPhone: "",
      service: "",
      amount: "",
      paymentMethod: "cash",
      status: "pending",
      bookingDate: "",
      paymentDate: "",
    });
  };

  const handleEdit = (payment) => {
    setEditingPayment(payment);
    setFormData({
      customerName: payment.customerName,
      customerPhone: payment.customerPhone,
      service: payment.service,
      amount: payment.amount.toString(),
      paymentMethod: payment.paymentMethod,
      status: payment.status,
      bookingDate: payment.bookingDate,
      paymentDate: payment.paymentDate,
    });
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setPayments((prev) => prev.filter((payment) => payment.id !== id));
  };

  const updateStatus = (id, newStatus) => {
    setPayments((prev) =>
      prev.map((payment) => {
        if (payment.id === id) {
          return {
            ...payment,
            status: newStatus,
            paymentDate:
              newStatus === "completed"
                ? new Date().toISOString().split("T")[0]
                : payment.paymentDate,
          };
        }
        return payment;
      })
    );
  };

  const getFilteredPayments = () => {
    let filtered = payments;

    // Filter by status
    if (filterStatus !== "all") {
      filtered = filtered.filter((payment) => payment.status === filterStatus);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (payment) =>
          payment.customerName
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          payment.customerPhone.includes(searchTerm) ||
          payment.service.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  };

  const getTotalStats = () => {
    const total = payments.length;
    const completed = payments.filter((p) => p.status === "completed").length;
    const pending = payments.filter((p) => p.status === "pending").length;
    const failed = payments.filter((p) => p.status === "failed").length;
    const totalAmount = payments.reduce((sum, p) => sum + p.amount, 0);
    const completedAmount = payments
      .filter((p) => p.status === "completed")
      .reduce((sum, p) => sum + p.amount, 0);

    return { total, completed, pending, failed, totalAmount, completedAmount };
  };

  const stats = getTotalStats();
  const filteredPayments = getFilteredPayments();

  return (
    <div className="min-h-screen bg-gray-50 md:p-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Payment Management
        </h1>
        <p className="text-gray-600">Manage your payments</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-2 md:gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Total Payments
              </p>
              <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <FontAwesomeIcon
                icon={faCreditCard}
                className="text-blue-600 text-xl"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.completed}
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-600 text-xl"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.pending}
              </p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <FontAwesomeIcon
                icon={faClock}
                className="text-yellow-600 text-xl"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Failed</p>
              <p className="text-2xl font-bold text-gray-900">{stats.failed}</p>
            </div>
            <div className="bg-red-100 p-3 rounded-full">
              <FontAwesomeIcon
                icon={faExclamationTriangle}
                className="text-red-600 text-xl"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Amount</p>
              <p className="text-2xl font-bold text-gray-900">
                ₨{stats.totalAmount.toLocaleString()}
              </p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <FontAwesomeIcon
                icon={faMoneyBillWave}
                className="text-purple-600 text-xl"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Collected</p>
              <p className="text-2xl font-bold text-gray-900">
                ₨{stats.completedAmount.toLocaleString()}
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-600 text-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow-md p-3 md:p-6 mb-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search by customer name, phone, or service..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 lg:gap-4">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            >
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center text-sm"
            >
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              Add Payment
            </button>
          </div>
        </div>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 md:p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">
              {editingPayment ? "Edit Payment" : "Add New Payment"}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Customer Name
                  </label>
                  <input
                    type="text"
                    value={formData.customerName}
                    onChange={(e) =>
                      setFormData({ ...formData, customerName: e.target.value })
                    }
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="text"
                    value={formData.customerPhone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        customerPhone: e.target.value,
                      })
                    }
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                >
                  <option value="">Select Service</option>
                  <option value="Airport Transfer">Airport Transfer</option>
                  <option value="Intercity Ride">Intercity Ride</option>
                  <option value="Corporate Event">Corporate Event</option>
                  <option value="Wedding Event">Wedding Event</option>
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Amount (PKR)
                  </label>
                  <input
                    type="number"
                    value={formData.amount}
                    onChange={(e) =>
                      setFormData({ ...formData, amount: e.target.value })
                    }
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Payment Method
                  </label>
                  <select
                    value={formData.paymentMethod}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        paymentMethod: e.target.value,
                      })
                    }
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="cash">Cash</option>
                    <option value="card">Card</option>
                    <option value="bank_transfer">Bank Transfer</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) =>
                      setFormData({ ...formData, status: e.target.value })
                    }
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                    <option value="failed">Failed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Booking Date
                  </label>
                  <input
                    type="date"
                    value={formData.bookingDate}
                    onChange={(e) =>
                      setFormData({ ...formData, bookingDate: e.target.value })
                    }
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>
              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                  {editingPayment ? "Update" : "Add"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingPayment(null);
                    setFormData({
                      customerName: "",
                      customerPhone: "",
                      service: "",
                      amount: "",
                      paymentMethod: "cash",
                      status: "pending",
                      bookingDate: "",
                      paymentDate: "",
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

      {/* Payments Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden px-1">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            {/* Hide table header on mobile screens */}
            <thead className="bg-gray-50 hidden md:table-header-group">
              <tr>
                <th className="px-2 md:px-4 lg:px-4 py-2 md:py-3 text-left text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="hidden md:table-cell px-2 md:px-4 lg:px-4 py-2 md:py-3 text-left text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                  Service
                </th>
                <th className="px-2 md:px-4 lg:px-4 py-2 md:py-3 text-left text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="hidden lg:table-cell px-2 md:px-4 lg:px-4 py-2 md:py-3 text-left text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                  Method
                </th>
                <th className="px-2 md:px-4 lg:px-4 py-2 md:py-3 text-left text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="hidden md:table-cell px-2 md:px-4 lg:px-4 py-2 md:py-3 text-left text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-2 md:px-4 lg:px-4 py-2 md:py-3 text-left text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPayments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50">
                  {/* Mobile Layout - Stacked information */}
                  <td className="px-2 md:px-4 lg:px-4 py-3 md:py-4">
                    <div className="md:hidden">
                      {/* Mobile: Customer info at top */}
                      <div className="mb-2">
                        <div className="text-sm font-medium text-gray-900">
                          {payment.customerName}
                        </div>
                        <div className="text-xs text-gray-500">
                          {payment.customerPhone}
                        </div>
                      </div>
                      
                      {/* Mobile: Service info */}
                      <div className="mb-2">
                        <div className="text-xs text-gray-600 font-medium">
                          {payment.service}
                        </div>
                        <div className="text-xs text-gray-500">
                          {payment.pickupLocation} → {payment.dropLocation}
                        </div>
                      </div>
                      
                      {/* Mobile: Amount and Status in a row */}
                      <div className="flex justify-start items-center mb-2">
                        <div className="text-sm font-bold w-24 text-gray-900">
                          ₨{payment.amount.toLocaleString()}
                        </div>
                        <div className="w-24  ">
                        <span
                          className={`px-2 py-1 inline-flex text-xs leading-4 font-semibold rounded-full ${getStatusColor(
                            payment.status
                          )}`}
                        >
                          {payment.status}
                        </span>
                        </div>
                        <div className=" flex space-x-2 w-24">
                        <button
                          onClick={() => handleEdit(payment)}
                          className="text-blue-600 hover:text-blue-900 p-1"
                          title="Edit"
                        >
                          <FontAwesomeIcon icon={faEdit} className="text-sm" />
                        </button>
                        <button
                          onClick={() => handleDelete(payment.id)}
                          className="text-red-600 hover:text-red-900 p-1"
                          title="Delete"
                        >
                          <FontAwesomeIcon icon={faTrash} className="text-sm" />
                        </button>
                        {payment.status === "pending" && (
                          <button
                            onClick={() => updateStatus(payment.id, "completed")}
                            className="text-green-600 hover:text-green-900 p-1"
                            title="Mark Complete"
                          >
                            <FontAwesomeIcon icon={faCheck} className="text-sm" />
                          </button>
                        )}
                      </div>
                      </div>
                      
                      {/* Mobile: Action buttons */}
                      
                    </div>
                    
                    {/* Desktop Layout - Original table structure */}
                    <div className="hidden md:block">
                      <div className="text-[11px] font-medium text-gray-900">
                        {payment.customerName}
                      </div>
                      <div className="text-[11px] text-gray-500">
                        {payment.customerPhone}
                      </div>
                    </div>
                  </td>
                  
                  {/* Desktop Service Column */}
                  <td className="hidden md:table-cell px-2 md:px-4 lg:px-4 py-3 md:py-4 whitespace-nowrap">
                    <div className="text-[11px] text-gray-900">
                      {payment.service}
                    </div>
                    <div className="text-[11px] text-gray-500">
                      {payment.pickupLocation} → {payment.dropLocation}
                    </div>
                  </td>
                  
                  {/* Desktop Amount Column */}
                  <td className="hidden md:table-cell px-2 md:px-4 lg:px-4 py-3 md:py-4 whitespace-nowrap">
                    <div className="text-[11px] font-medium text-gray-900">
                      ₨{payment.amount.toLocaleString()}
                    </div>
                  </td>
                  
                  {/* Desktop Method Column */}
                  <td className="hidden lg:table-cell px-2 md:px-4 lg:px-4 py-3 md:py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FontAwesomeIcon
                        icon={getPaymentMethodIcon(payment.paymentMethod)}
                        className="text-gray-400 mr-2"
                      />
                      <span className="text-[11px] text-gray-900">
                        {getPaymentMethodText(payment.paymentMethod)}
                      </span>
                    </div>
                  </td>
                  
                  {/* Desktop Status Column */}
                  <td className="hidden md:table-cell px-2 md:px-4 lg:px-4 py-3 md:py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 inline-flex text-[11px] leading-5 font-semibold rounded-full ${getStatusColor(
                        payment.status
                      )}`}
                    >
                      {payment.status}
                    </span>
                  </td>
                  
                  {/* Desktop Date Column */}
                  <td className="hidden md:table-cell px-2 md:px-4 lg:px-4 py-3 md:py-4 whitespace-nowrap text-[11px] text-gray-500">
                    {payment.bookingDate}
                  </td>
                  
                  {/* Desktop Actions Column */}
                  <td className="hidden md:table-cell px-2 md:px-4 lg:px-4 py-3 md:py-4 whitespace-nowrap text-[11px] font-medium">
                    <div className="flex space-x-1 md:space-x-2">
                      <button
                        onClick={() => handleEdit(payment)}
                        className="text-blue-600 hover:text-blue-900 p-1"
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button
                        onClick={() => handleDelete(payment.id)}
                        className="text-red-600 hover:text-red-900 p-1"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                      {payment.status === "pending" && (
                        <button
                          onClick={() => updateStatus(payment.id, "completed")}
                          className="text-green-600 hover:text-green-900 p-1"
                        >
                          <FontAwesomeIcon icon={faCheck} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
