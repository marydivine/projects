// src/Table.jsx
import React from 'react';

const Table = () => {
  // Sample data
  const rows = [
    { serialNo: 1, transactionId: '543632', user: 'John Doe', amount: 100, transactionType: 'Credit' },
    { serialNo: 2, transactionId: '156728', user: 'Jane Smith', amount: 200, transactionType: 'Debit' },
    { serialNo: 3, transactionId: '546722', user: 'Alice Johnson', amount: 150, transactionType: 'Credit' },
    { serialNo: 4, transactionId: '147933', user: 'Bob Brown', amount: 250, transactionType: 'Debit' },
    { serialNo: 5, transactionId: '564826', user: 'Eva Wilson', amount: 180, transactionType: 'Credit' },
  ];

  return (
    <div className="flex flex-col h-screen">

      <div className="bg-gray-800 text-white py-4 px-8">
        Navbar Component
      </div>

      <div className="flex flex-1">
    
        <div className="bg-gray-200 w-64 p-4">
          Sidebar Component
        </div>

  
        <div className="flex-1 bg-white p-4 overflow-auto">
          <table className="table-auto border border-black">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border border-black text-black">Serial No</th>
                <th className="px-4 py-2 border border-black text-black">Transaction ID</th>
                <th className="px-4 py-2 border border-black text-black">User</th>
                <th className="px-4 py-2 border border-black text-black">Amount</th>
                <th className="px-4 py-2 border border-black text-black">Transaction Type</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td className="border border-black px-4 py-2 text-black">{row.serialNo}</td>
                  <td className="border border-black px-4 py-2 text-black">{row.transactionId}</td>
                  <td className="border border-black px-4 py-2 text-black">{row.user}</td>
                  <td className="border border-black px-4 py-2 text-black">{row.amount}</td>
                  <td className="border border-black px-4 py-2 text-black">{row.transactionType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
