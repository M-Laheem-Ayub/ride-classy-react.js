import { useEffect, useState } from "react";

export default function Vehicles() {
  const [vehicles, setVehicles] = useState([]);

  // Dummy fetch - API endpoint replace karo
  useEffect(() => {
    // For now, static data
    setVehicles([
      { id: 1, model: "Mercedes S-Class", capacity: 4 },
      { id: 2, model: "Toyota Corolla", capacity: 4 },
      { id: 3, model: "Hiace Van", capacity: 10 },
    ]);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Vehicles</h2>
      <table className="min-w-full border text-left text-sm md:text-base">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Model</th>
            <th className="p-2 border">Capacity</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((v) => (
            <tr key={v.id}>
              <td className="p-2 border">{v.model}</td>
              <td className="p-2 border">{v.capacity}</td>
              <td className="p-2 border">
                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
