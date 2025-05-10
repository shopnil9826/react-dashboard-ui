import React from "react";

function TopCustomers() {
  const customers = [
    {
      id: 1,
      name: "Ava Mitchell",
      email: "ava.mitchell@example.com",
      spent: 1220.75,
      avatar: "https://i.pravatar.cc/80?img=32",
    },
    {
      id: 2,
      name: "Liam Thompson",
      email: "liam.t@example.com",
      spent: 1150.4,
      avatar: "https://i.pravatar.cc/80?img=12",
    },
    {
      id: 3,
      name: "Sofia Martinez",
      email: "sofia.m@example.com",
      spent: 1102.0,
      avatar: "https://i.pravatar.cc/80?img=24",
    },
    {
      id: 4,
      name: "Noah Patel",
      email: "noah.patel@example.com",
      spent: 980.3,
      avatar: "https://i.pravatar.cc/80?img=44",
    },
    {
      id: 5,
      name: "Emily Chen",
      email: "emily.chen@example.com",
      spent: 945.85,
      avatar: "https://i.pravatar.cc/80?img=56",
    },
  ];
  return (
    <div>
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4 text-purple-700">
          Top 5 Customers
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left border border-gray-200 rounded-lg">
            <thead className="bg-purple-50 text-purple-700">
              <tr>
                <th className="p-3 border-b font-semibold">Avatar</th>
                <th className="p-3 border-b font-semibold">Name</th>
                <th className="p-3 border-b font-semibold">Email</th>
                <th className="p-3 border-b font-semibold">Total Spent ($)</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr
                  key={customer.id}
                  className="hover:bg-purple-50 transition-colors"
                >
                  <td className="p-3 border-b">
                    <img
                      src={customer.avatar}
                      alt={customer.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </td>
                  <td className="p-3 border-b font-medium text-gray-800">
                    {customer.name}
                  </td>
                  <td className="p-3 border-b text-gray-600">
                    {customer.email}
                  </td>
                  <td className="p-3 border-b text-gray-700 font-semibold">
                    ${customer.spent.toFixed(2)}
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

export default TopCustomers;
