import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import useBillStore from "../../stores/billStore";

const FormDataBox = ({ formData, onDelete, onUpdate }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleViewDetail = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="bg-white p-4 m-4 rounded-lg shadow-md">
      <div className="flex flex-col">
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
              <span className="font-bold">Factory Name:</span>{" "}
              {formData.factoryName}
            </h3>
            <h3 className="text-xl mb-2">
              <span className="font-bold">Contact:</span> {formData.contact}
            </h3>
            <h3 className="text-xl mb-2">
              <span className="font-bold">CNIC:</span> {formData.cnic}
            </h3>

            {/* New Fields */}
            <h3 className="text-xl mb-2">
              <span className="font-bold">Product Name:</span>{" "}
              {formData.productName}
            </h3>
            <h3 className="text-xl mb-2">
              <span className="font-bold">Measurement Type:</span>{" "}
              {formData.measurementType}
            </h3>
            <h3 className="text-xl mb-2">
              <span className="font-bold">Product Width:</span>{" "}
              {formData.prodWidth}
            </h3>
            <h3 className="text-xl mb-2">
              <span className="font-bold">Product Length:</span>{" "}
              {formData.prodLength}
            </h3>
            <h3 className="text-xl mb-2">
              <span className="font-bold">Square Foot/Running Foot:</span>{" "}
              {formData.result}
            </h3>

            <h3 className="text-xl mb-2">
              <span className="font-bold">Product Quantity:</span>{" "}
              {formData.prodQuantity}
            </h3>
            <h3 className="text-xl mb-2">
              <span className="font-bold">Product Thickness:</span>{" "}
              {formData.prodThickness}
            </h3>
            <h3 className="text-xl mb-2">
              <span className="font-bold">Product Rate:</span>{" "}
              {formData.prodRate}
            </h3>
            <h3 className="text-xl mb-2">
              <span className="font-bold">Product Amount:</span>{" "}
              {formData.prodamount}
            </h3>
            <h3 className="text-xl mb-2">
              <span className="font-bold">Top Polish:</span>{" "}
              {formData.topPoolish ? "Yes" : "No"}
            </h3>
            <h3 className="text-xl mb-2">
              <span className="font-bold">Result Polish:</span>{" "}
              {formData.resultPoolish}
            </h3>
            <h3 className="text-xl mb-2">
              <span className="font-bold">Polish Amount:</span>{" "}
              {formData.poolishAmount}
            </h3>
            <h3 className="text-xl mb-2">
              <span className="font-bold">Edge Polish:</span>{" "}
              {formData.edgepoolish}
            </h3>
            <h3 className="text-xl mb-2">
              <span className="font-bold">Edge Polish Rate:</span>{" "}
              {formData.edgepoolishrate}
            </h3>
            <h3 className="text-xl mb-2">
              <span className="font-bold">Edge Polish Amount:</span>{" "}
              {formData.edgepoolishamount}
            </h3>
            <h3 className="text-xl mb-2">
              <span className="font-bold">Leather Polish:</span>{" "}
              {formData.leatherpoolish ? "Yes" : "No"}
            </h3>
            <h3 className="text-xl mb-2">
              <span className="font-bold">Antique Polish:</span>{" "}
              {formData.antiquePoolish ? "Yes" : "No"}
            </h3>
            <h3 className="text-xl mb-2">
              <span className="font-bold">Glossy Polish:</span>{" "}
              {formData.glossyPoolish ? "Yes" : "No"}
            </h3>
            <h3 className="text-xl mb-2">
              <span className="font-bold">Edge Polish Antique:</span>{" "}
              {formData.edgepoolishAntique ? "Yes" : "No"}
            </h3>
            <h3 className="text-xl mb-2">
              <span className="font-bold">Edge Polish Glossy:</span>{" "}
              {formData.edgepoolishGlossy ? "Yes" : "No"}
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
          {showDetails ? "Hide Details" : "View Details"}
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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const billStore = useBillStore();
  const useback = () => {
    navigate("/admin-panel/");
  };
  const [allFormData, setAllFormData] = useState([]);
  const [billDetails, setBillDetails] = useState({
    subtotalAmount: 0,
    paid: "",
    balance: 0,
  });

  useEffect(() => {
    const counter = localStorage.getItem("counter") || 0;
    const keys = Array.from({ length: counter }, (_, i) => `formData${i + 1}`);
    const formDataArray = keys.map((key) => JSON.parse(localStorage.getItem(key)));
    const filteredFormDataArray = formDataArray.filter((data) => data);
  
    // Calculate the initial subtotal
    const initialSubtotal = filteredFormDataArray.reduce(
      (sum, formData) => sum + Number(formData.subtotal),
      0
    );
  
    setAllFormData(filteredFormDataArray);
  
    // Use a functional update to avoid the circular dependency issue
    setBillDetails((prev) => {
      const paidAmount = Number(prev.paid);
      const balanceAmount = initialSubtotal - paidAmount;
  
      return {
        ...prev,
        subtotalAmount: initialSubtotal,
        balance: balanceAmount,
      };
    });
  }, [allFormData, billDetails.paid]);
  
  
  const handleDelete = (index) => {
    // Check if the index is within the valid range
    if (index >= 0 && index < allFormData.length) {
      // Remove the corresponding form data from local storage
      const key = `formData${index + 1}`;
      localStorage.removeItem(key);
  
      // Update the counter in local storage (if needed)
      localStorage.setItem("counter", localStorage.getItem("counter") - 1);
  
      // Update the state to reflect the change
      setAllFormData((prevData) => {
        // Create a new array without the deleted item
        const updatedData = [...prevData.slice(0, index), ...prevData.slice(index + 1)];
        return updatedData;
      });
    }
  };
  
  
  

  const handleUpdate = (index) => {
    // Implement your logic for handling the update here
    // You can navigate to another page or show a modal, for example
  };

  const handleCreateBill = async () => {
    try {
      const allFormData = [];
      for (let i = 1; i <= localStorage.getItem("counter"); i++) {
        const formDataKey = `formData${i}`;
        const formData = JSON.parse(localStorage.getItem(formDataKey));
        if (formData) {
          allFormData.push(formData);
        }
      }
  
      const subtotalAmount = Number(billDetails.subtotalAmount);
      const paidAmount = Number(billDetails.paid);
  
      const newBill = {
        // customerId: , // Replace with the actual customer ID
        customerName: allFormData[0].firstname, // Replace with the actual customer name
        factoryName: allFormData[0].factoryName, // Replace with the actual factory name
        contactNum: allFormData[0].contact, // Replace with the actual contact number
        cnic:allFormData[0].cnic, // Replace with the actual CNIC (numeric value)
        formFields: allFormData.map(formData => ({
          firstname: formData.firstname,
          factoryName: formData.factoryName,
          contact: formData.contact,
          cnic: Number(formData.cnic), // Ensure cnic is a number
          // Add other form fields based on your formFieldSchema
          productName: formData.productName,
    measurementType: formData.measurementType,
    prodWidth: formData.prodWidth,
    prodLength: formData.prodLength,
    result: formData.result,
    prodQuantity: formData.prodQuantity,
    prodThickness: formData.prodThickness,
    prodRate: formData.prodRate,
    prodamount: formData.prodamount,
    topPoolish: formData.topPoolish === "Yes",  
    resultPoolish: formData.resultPoolish,
    poolishAmount: formData.poolishAmount,
    edgepoolish: formData.edgepoolish,
    edgepoolishrate: formData.edgepoolishrate,
    edgepoolishamount: formData.edgepoolishamount,
    leatherpoolish: formData.leatherpoolish === "Yes",  // Convert to boolean
    antiquePoolish: formData.antiquePoolish === "Yes",  // Convert to boolean
    glossyPoolish: formData.glossyPoolish === "Yes",  // Convert to boolean
    edgepoolishAntique: formData.edgepoolishAntique === "Yes",  // Convert to boolean
    edgepoolishGlossy: formData.edgepoolishGlossy === "Yes",  // Convert to boolean
          // ...
        })),
        paidAmount: paidAmount,
        balance: billDetails.balance,
        totalAmount: subtotalAmount,
      };
  
      // Call the createBill action from the Zustand store
      await billStore.createBill(newBill);
  
      // After creating the bill, you might want to reset the forms or perform other actions
      // Reset the form data, navigate to another page, etc.
  
      // Optional: Reset the local storage and navigate to another page
      // localStorage.clear();
      // navigate("/success-page"); // Replace with the actual success page path
  
    } catch (error) {
      console.error('Error creating bill:', error);
      // Optionally, you can set an error state in your component if needed
    }
  };

  

  const handlePaidChange = (e) => {
    const paidAmount = Number(e.target.value);

    // Calculate balance when "Paid" changes
    const balanceAmount = billDetails.subtotalAmount - paidAmount;

    // Update the state with the calculated values
    setBillDetails((prev) => ({
      ...prev,
      paid: e.target.value,
      balance: balanceAmount,
    }));
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
            <label className="block text-sm font-medium text-gray-700">
              Subtotal Amount
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              value={billDetails.subtotalAmount}
              readOnly
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Paid
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              value={billDetails.paid}
              onChange={handlePaidChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Balance
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              value={billDetails.balance}
              readOnly
            />
          </div>

          <button
        className="bg-white dark:bg-[#0F172A] ml-2 mt-2 text-indigo-500 dark:text-white p-2 rounded hover:bg-gray-800 hover:text-white transition duration-300"
        onClick={handleCreateBill}
      >
        Create Bill 
      </button>
        </div>
      </div>
    </>
  );
};

export default BillVerification;
