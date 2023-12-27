import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useBillStore } from "../../stores/billStore";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";


const InvoiceHub = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getBillsByCustomerId, bills } = useBillStore();
  const selectedBills = useMemo(
    () => bills.filter((bill) => bill.customerId === id),
    [bills, id]
  );
  const [formFieldResults, setFormFieldResults] = useState([]);

  const createdAtDate = bills.length > 0 ? new Date(bills[0].createdAt) : null;


  // Format the date as a string
  const formattedDate = createdAtDate
  ? createdAtDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  : "";

  useEffect(() => {
    // Fetch bills based on the customer ID using Zustand store
    getBillsByCustomerId(id);
  }, [id, getBillsByCustomerId]);

  useEffect(() => {
    if (selectedBills.length > 0) {
      // Iterate through each bill and extract all fields from formFields
      const results = selectedBills.flatMap((bill) =>
        bill.formFields.map((field) => ({ ...field }))
      );
      setFormFieldResults(results);
    }
  }, [selectedBills]);

  const useback = useCallback(() => {
    navigate("/admin-panel/users");
  }, [navigate]);

  return (
    <>
      <div className="container mx-auto mt-8 p-8 bg-white rounded shadow-lg">
        {/* Back Button */}
        <button className="text-blue-500 text-sm mb-4" onClick={useback}>
          &larr; Back
        </button>

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
        <div className="overflow-x-auto rounded">
          <table className="w-full table-auto border-collapse  border border-gray-200">
            <thead>
              <tr>
                <th className="w-1/3 border p-2 text-center">Total Amount</th>
                <th className="w-1/3 border p-2 text-center">Paid</th>
                <th className="w-1/3 border p-2 text-center bg-red-500">
                  Balance
                </th>
              </tr>
            </thead>
            <tbody>
              {bills.map((bill, index) => (
                <tr key={index}>
                  <td className="w-1/3 border border-black p-2 text-center">
                    {bill.totalAmount}
                  </td>
                  <td className="w-1/3 border border-black p-2 text-center">
                    {bill.paidAmount}
                  </td>
                  <td className="w-1/3 border border-black p-2 text-center">
                    {bill.balance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Search Container */}
        <div className="container mx-auto mt-8 p-8 bg-white rounded shadow-lg">
          {/* Search Bar */}
          <div className="flex items-center justify-end mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 border border-gray-200 rounded"
            />
          </div>

          {/* Attractive Box for Each Bill */}
          {selectedBills.map((bill, index) => (
            <div
              key={index}
              className="bg-gray-400 text-white p-4 rounded mb-4"
            >
              <div className="bDetail flex justify-between">
                <h2 className="text-xl font-bold mb-4">Bill ID: {bill._id}</h2>
                <h2 className="text-xl font-bold mb-4">
                  Dated: {formattedDate}
                </h2>
              </div>
              <div className="mx-auto mt-8 p-8 bg-white rounded shadow-lg">
                <div className="flex flex-col mx-0 mt-8">
                  <table className="min-w-full divide-y divide-slate-500">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0"
                        >
                          Description
                        </th>
                        <th
                          scope="col"
                          className="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell"
                        >
                          Square Foot
                        </th>
                        <th
                          scope="col"
                          className="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell"
                        >
                          Rate
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-3 pr-4 text-right text-sm font-normal text-slate-700 sm:pr-6 md:pr-0"
                        >
                          Amount
                        </th>
                         <th
                          scope="col"
                          className="py-3.5 pl-3 pr-4 text-right text-sm font-normal text-slate-700 sm:pr-6 md:pr-0"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {bill.formFields.map((field, fieldIndex) => [
                        Array.isArray(field) ? (
                          field.map((subField, subFieldIndex) => (
                            <tr
                              key={subFieldIndex}
                              className="border-b border-slate-200"
                            >
                              <td className="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                                <div className="font-medium text-slate-700">
                                  {subField.productName}
                                </div>
                              </td>
                              <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                                {subField.result}
                              </td>
                              <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                                {subField.prodQuantity}
                              </td>
                              <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                                {subField.prodRate}
                              </td>
                              <td className="py-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                                {subField.prodamount}
                              </td>
                              <td className="py-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
  
                              <button className="ml-2 focus:outline-none">
    <FontAwesomeIcon icon={faEye} />
  </button>
</td>
                            </tr>
                          ))
                        ) : (
                          <tr
                            className="border-b border-slate-200"
                            key={fieldIndex}
                          >
                            <td className="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                              <div className="font-medium text-slate-700">
                                {field.productName}
                              </div>
                            </td>
                            <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                              {field.result}
                            </td>
                            <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                              {field.prodQuantity}
                            </td>
                            <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                              {field.prodRate}
                            </td>
                            <td className="py-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                              {field.prodamount}
                            </td>
                            <td className="py-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
  
                              <button className="ml-2 focus:outline-none">
    <FontAwesomeIcon icon={faEye} />
  </button>
</td>
                            
                          </tr>
                        ),
                      ])}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th
                          scope="row"
                          colSpan="4"
                          className="hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0"
                        >
                          Sub total
                        </th>
                        <th
                          scope="row"
                          className="pt-4 pl-4 pr-3 text-sm font-normal text-left text-slate-700 sm:hidden"
                        >
                          Sub total
                        </th>
                        <td className="pt-6 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                          {bills.length > 0 && bills[0].totalAmount}
                        </td>
                      </tr>

                      {/* <tr>
         <th scope="row" colSpan="3" className="hidden pt-4 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0">
          Tax
         </th>
         <th scope="row" className="pt-4 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden">
          Tax
         </th>
         <td className="pt-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
          $0.00
         </td>
        </tr> */}
                      <tr>
                        <th
                          scope="row"
                          colSpan="4"
                          className="hidden pt-4 pl-6 pr-3 text-sm font-normal text-right text-slate-700 sm:table-cell md:pl-0"
                        >
                          Paid Amount
                        </th>
                        <th
                          scope="row"
                          className="pt-4 pl-4 pr-3 text-sm font-normal text-left text-slate-700 sm:hidden"
                        >
                          Paid Amount
                        </th>
                        <td className="pt-4 pl-3 pr-4 text-sm font-normal text-right text-slate-700 sm:pr-6 md:pr-0">
                          {bills.length > 0 && bills[0].paidAmount}
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          colSpan="4"
                          className="hidden pt-4 pl-6 pr-3 text-sm font-normal text-right text-slate-700 sm:table-cell md:pl-0"
                        >
                          Balance
                        </th>
                        <th
                          scope="row"
                          className="pt-4 pl-4 pr-3 text-sm font-normal text-left text-slate-700 sm:hidden"
                        >
                          Balance
                        </th>
                        <td className="pt-4 pl-3 pr-4 text-sm font-normal text-right text-slate-700 sm:pr-6 md:pr-0">
                          {bills.length > 0 && bills[0].balance}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InvoiceHub;
