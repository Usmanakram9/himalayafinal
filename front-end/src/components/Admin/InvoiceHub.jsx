import React, { useEffect, useState } from 'react';
import { useBillStore } from '../../stores/billStore';
import { useParams,useNavigate } from "react-router-dom";

const InvoiceHub = () => {
    const navigate = useNavigate();
  const { id } = useParams();
  const { getBillsByCustomerId, bills } = useBillStore();
  const selectedBills = bills.filter((bill) => bill.customerId === id);
  const [formFieldResults, setFormFieldResults] = useState([]);

  useEffect(() => {
    // Fetch bills based on the customer ID using Zustand store
    getBillsByCustomerId(id);
  }, [id, getBillsByCustomerId]);

  useEffect(() => {
    if (selectedBills.length > 0) {
      // Iterate through each bill and extract all fields from formFields
      const results = selectedBills.flatMap((bill) => bill.formFields.map((field) => ({ ...field })));
      setFormFieldResults(results);
    }
  }, [selectedBills]);
  const useback = () => {
    navigate("/admin-panel/users");
  };

  return (
    <>
      <div className="container mx-auto mt-8 p-8 bg-white rounded shadow-lg">
        {/* Back Button */}
        <button className="text-blue-500 text-sm mb-4" onClick={useback}>&larr; Back</button>

        {/* Heading */}
        <div className="clientDetail flex flex-wrap gap-x-4">
          {/* Top Section */}
          <div className="flex flex-col">
            <div className="flex items-center mb-2">
              <h1 className="text-2xl font-bold mr-2">Client Name:</h1>
              <span>{bills.length > 0 && bills[0].customerName}</span>
            </div>
            <div className="flex items-center mb-2">
              <h1 className="text-2xl font-bold mr-2">Factory Name:</h1>
              <span>{bills.length > 0 && bills[0].factoryName}</span>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col">
            <div className="flex items-center mb-2">
              <h1 className="text-2xl font-bold mr-2">CNIC:</h1>
              <span>{bills.length > 0 && bills[0].cnic}</span>
            </div>
            <div className="flex items-center mb-2">
              <h1 className="text-2xl font-bold mr-2">Contact Number:</h1>
              <span>{bills.length > 0 && bills[0].contactNum}</span>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="w-1/3 border p-2 text-center">Total Amount</th>
                <th className="w-1/3 border p-2 text-center">Paid</th>
                <th className="w-1/3 border p-2 text-center bg-red-500">Balance</th>
              </tr>
            </thead>
            <tbody>
              {bills.map((bill, index) => (
                <tr key={index}>
                  <td className="w-1/3 border border-black p-2 text-center">{bill.totalAmount}</td>
                  <td className="w-1/3 border border-black p-2 text-center">{bill.paidAmount}</td>
                  <td className="w-1/3 border border-black p-2 text-center">{bill.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Search Container */}
        <div className="container mx-auto mt-8 p-8 bg-white rounded shadow-lg">
          {/* Search Bar */}
          <div className="flex items-center justify-end mb-4">
            <input type="text" placeholder="Search..." className="p-2 border border-gray-300 rounded" />
          </div>

          {/* Attractive Box for Each Bill */}
          {selectedBills.map((bill, index) => (
  <div key={index} className="bg-blue-500 text-white p-4 rounded mb-4">
    <h2 className="text-xl font-bold mb-4">Bill ID: {bill._id}</h2>

    {bill.formFields.map((field, fieldIndex) => (
      <div key={fieldIndex} className="mb-4">
        {Array.isArray(field) ? (
          <>
            <h3 className="text-lg font-bold mb-2">Form Fields Array {fieldIndex + 1}</h3>
            {field.map((subField, subFieldIndex) => (
              <div key={subFieldIndex} className="mb-2">
                {Object.entries(subField).map(([key, value]) => (
                  <p key={key} className="mb-1">
                    <span className="font-bold">{key}:</span> {value === true ? 'Yes' : value === false ? 'No' : value}
                  </p>
                ))}
              </div>
            ))}
          </>
        ) : (
          <>
            <h3 className="text-lg font-bold mb-2">Form Fields Object {fieldIndex + 1}</h3>
            {Object.entries(field).map(([key, value]) => (
              <p key={key} className="mb-1">
                <span className="font-bold">{key}:</span> {value === true ? 'Yes' : value === false ? 'No' : value}
              </p>
            ))}
          </>
        )}
      </div>
    ))}
  </div>
))}

        </div>
      </div>
    </>
  );
};

export default InvoiceHub;
