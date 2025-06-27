import { useEffect, useState } from "react";

export default function Payments() {
  const [payments, setPayments] = useState([]);

  // Dummy fetch - replace with real API
  useEffect(() => {
    setPayments([
      { id: 1, user: "Ali", amount: 5000, status: "Completed" },
      { id: 2, user: "Sara", amount: 7000, status: "Pending" },
    ]);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Payments</h2>
      <table className="min-w-full border text-left text-sm md:text-base">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">User</th>
            <th className="p-2 border">Amount</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((p) => (
            <tr key={p.id}>
              <td className="p-2 border">{p.user}</td>
              <td className="p-2 border">{p.amount}</td>
              <td className="p-2 border">{p.status}</td>
              <td className="p-2 border">
                <button className="bg-green-500 text-white px-2 py-1 rounded">Update Status</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
