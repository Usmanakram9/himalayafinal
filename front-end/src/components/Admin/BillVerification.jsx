import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const FormDataBox = ({ formData, onDelete, onUpdate }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleViewDetail = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="bg-white p-4 m-4 rounded-lg shadow-md">
      <div className='flex flex-col'>
        <h3 className="text-xl mb-2">
          <span className="font-bold">First Name:</span> {formData.firstname}
        </h3>
        <h3 className="text-xl mb-2">
          <span className="font-bold">Bill:</span> {formData.subtotal}
        </h3>

        {/* Conditionally render additional fields when showDetails is true */}
        {showDetails && (
          <>
            <h3 className="text-xl mb-2">
              <span className="font-bold">Factory Name:</span> {formData.factoryName}
            </h3>
            <h3 className="text-xl mb-2">
              <span className="font-bold">Contact:</span> {formData.contact}
            </h3>
            <h3 className="text-xl mb-2">
              <span className="font-bold">CNIC:</span> {formData.cnic}
            </h3>
            {/* Add more fields as needed */}
          </>
        )}
      </div>

      <div className="button mt-4">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md"
          onClick={handleViewDetail}
        >
          {showDetails ? 'Hide Details' : 'View Details'}
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md ml-2"
          onClick={onDelete}
        >
          <FontAwesomeIcon icon={faTrash} className="mr-2" /> Delete
        </button>
      </div>
    </div>
  );
};

const BillVerification = () => {
  const navigate = useNavigate();
  const useback = () => {
    navigate("/admin-panel/");
  };
  const [allFormData, setAllFormData] = useState([]);
  const [billDetails, setBillDetails] = useState({
    subtotalAmount: 0,
    paid: '',
    balance: 0,
  });

  useEffect(() => {
    const counter = localStorage.getItem('counter') || 0;
    const keys = Array.from({ length: counter }, (_, i) => `formData${i + 1}`);
    const formDataArray = keys.map((key) => JSON.parse(localStorage.getItem(key)));
    const filteredFormDataArray = formDataArray.filter((data) => data);

    // Calculate the initial subtotal
    const initialSubtotal = filteredFormDataArray.reduce((sum, formData) => sum + Number(formData.subtotal), 0);

    setAllFormData(filteredFormDataArray);
    setBillDetails((prev) => ({ ...prev, subtotalAmount: initialSubtotal }));
  }, [allFormData]);

  const handleDelete = (index) => {
    const counter = localStorage.getItem('counter') || 0;
    const key = `formData${index + 1}`;

    // Remove the corresponding form data from local storage
    localStorage.removeItem(key);

    // Update the counter in local storage (if needed)
    localStorage.setItem('counter', counter - 1);

    // Update the state to reflect the change
    setAllFormData((prevData) => prevData.filter((_, i) => i !== index));
  };

  const handleUpdate = (index) => {
    // Implement your logic for handling the update here
    // You can navigate to another page or show a modal, for example
  };

  const handleCreateBill = () => {
    // Ensure that subtotalAmount and paid are numbers
    const subtotal = allFormData.reduce((total, data) => total + Number(data.subtotal), 0);
    const paidAmount = Number(billDetails.paid);

    // Calculate balance
    const balanceAmount = subtotal - paidAmount;

    // Update the state with the calculated values
    setBillDetails((prev) => ({ ...prev, subtotalAmount: subtotal, balance: balanceAmount }));
  };

  const handlePaidChange = (e) => {
    const paidAmount = Number(e.target.value);

    // Calculate balance when "Paid" changes
    const balanceAmount = billDetails.subtotalAmount - paidAmount;

    // Update the state with the calculated values
    setBillDetails((prev) => ({ ...prev, paid: e.target.value, balance: balanceAmount }));
  };

  return (
    <>
      <button
        className="bg-white dark:bg-[#0F172A] ml-2 mt-2 text-indigo-500 dark:text-white p-2 rounded hover:bg-gray-800 hover:text-white transition duration-300"
        onClick={useback}
      >
        Back
      </button>
      <div className="container mx-auto my-8 flex flex-wrap">
        <div className="w-full lg:w-2/3">
          <h2 className="text-3xl font-bold mb-4">All Saved Form Data:</h2>
          {allFormData.map((formData, index) => (
            <div key={index} className="mb-4">
              <FormDataBox
                formData={formData}
                onDelete={() => handleDelete(index)}
                onUpdate={() => handleUpdate(index)}
              />
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/3 p-4 bg-gray-200 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Bill Details</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Subtotal Amount</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              value={billDetails.subtotalAmount}
              readOnly
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Paid</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              value={billDetails.paid}
              onChange={handlePaidChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Balance</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              value={billDetails.balance}
              readOnly
            />
          </div>

          {/* Remove the Create Bill button, as the balance updates live */}
        </div>
      </div>
    </>
  );
};

export default BillVerification;
