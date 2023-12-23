import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useSignupStore from "../../stores/signupStore";

const CreateBill = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { singleUser: data, getUserById } = useSignupStore();

  useEffect(() => {
    getUserById(id);
  }, [id]);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstname: data && data.firstname ? data.firstname : "",
    factoryName: data && data.factoryname ? data.factoryname : "",
    contact: data && data.contact ? data.contact : "",
    cnic: data && data.cnic ? data.cnic : "",
    productName: "",
    measurementType: "",
    prodWidth: "",
    prodLength: "",
    result: "",
    resultSquareFoot: "",
    resultRunningFoot: "",
    prodQuantity: "",
    prodThickness: "",
    prodRate: "",
    prodamount: "",
    topPoolish: false,
    resultPoolish: "",
    poolishAmount: "",
    edgepoolish: "",
    edgepoolishrate: "",
    edgepoolishamount: "",
    subtotal: 0,

    leatherpoolish: false,
    antiquePoolish: false,
    glossyPoolish: false,
    edgepoolishAntique: false,
    edgepoolishGlossy: false,
  });

  const steps = [
    { title: "Step 1", icon: "path to icon for step 1" },
    { title: "Step 2", icon: "path to icon for step 2" },
    { title: "Step 3", icon: "path to icon for step 3" },
    { title: "Step 4", icon: "path to icon for step 4" },
  ];

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle exclusive selection for the three checkboxes in "poolishType"
    if (
      type === "checkbox" &&
      ["leatherpoolish", "antiquePoolish", "glossyPoolish"].includes(name)
    ) {
      setFormData((prevData) => ({
        ...prevData,
        leatherpoolish: name === "leatherpoolish" ? checked : false,
        antiquePoolish: name === "antiquePoolish" ? checked : false,
        glossyPoolish: name === "glossyPoolish" ? checked : false,
        // Add other state updates as needed
      }));
    }

    // Handle exclusive selection for the two checkboxes in "ePoolishType"
    else if (
      type === "checkbox" &&
      ["edgepoolishAntique", "edgepoolishGlossy"].includes(name)
    ) {
      setFormData((prevData) => ({
        ...prevData,
        edgepoolishAntique: name === "edgepoolishAntique" ? checked : false,
        edgepoolishGlossy: name === "edgepoolishGlossy" ? checked : false,
        // Add other state updates as needed
      }));
    }

    // Handle other input types
    else {
      setFormData((prevData) => {
        const updatedData = {
          ...prevData,
          [name]: type === "checkbox" ? checked : value,
          result:
            name === "prodWidth" ||
            name === "prodLength" ||
            name === "measurementType" ||
            name === "prodQuantity"
              ? calculateResult({ ...prevData, [name]: value })
              : prevData.result,
          poolishAmount:
            name === "prodWidth" ||
            name === "prodLength" ||
            name === "resultPoolish"
              ? calculatePoolish({ ...prevData, [name]: value })
              : prevData.poolishAmount,
          edgepoolishamount:
            name === "prodLength" ||
            name === "edgepoolishrate" ||
            name === "prodQuantity"
              ? calculateedgepoolish({ ...prevData, [name]: value })
              : prevData.edgepoolishamount,
          prodamount:
            name === "measurementType" ||
            name === "prodRate" ||
            name === "result"
              ? calculateproductAmount({ ...prevData, [name]: value })
              : name === "prodamount"
              ? value
              : prevData.prodamount,
        };

        return updatedData;
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Increment a counter (you might want to store this in state or elsewhere)
    const counter = localStorage.getItem("counter") || 0;
    const nextCounter = parseInt(counter, 10) + 1;
  
    // Add a unique identifier (id) to the form data
    const updatedFormData = {
      ...formData,
      id: nextCounter,
      leatherpoolish: formData.leatherpoolish ? "Yes" : "No",
      antiquePoolish: formData.antiquePoolish ? "Yes" : "No",
      glossyPoolish: formData.glossyPoolish ? "Yes" : "No",
      edgepoolishAntique: formData.edgepoolishAntique ? "Yes" : "No",
      edgepoolishGlossy: formData.edgepoolishGlossy ? "Yes" : "No",
      // Add similar updates for other fields as needed
    };
  
    // Save formData to local storage with a dynamic key
    const key = `formData${nextCounter}`;
    localStorage.setItem(key, JSON.stringify(updatedFormData));
  
    // Update the counter in local storage
    localStorage.setItem("counter", nextCounter);
  
    // Clear the form data
    setFormData({
      firstname: "",
      factoryName: "",
      contact: "",
      cnic: "",
      productName: "",
      measurementType: "",
      prodWidth: "",
      prodLength: "",
      result: "",
      resultSquareFoot: "",
      resultRunningFoot: "",
      prodQuantity: "",
      prodThickness: "",
      prodRate: "",
      prodamount: "",
      topPoolish: false,
      resultPoolish: "",
      poolishAmount: "",
      edgepoolish: "",
      edgepoolishrate: "",
      edgepoolishamount: "",
      subtotal: 0,
  
      leatherpoolish: false,
      antiquePoolish: false,
      glossyPoolish: false,
      edgepoolishAntique: false,
      edgepoolishGlossy: false,
    });
  
    setStep(2);
    console.log(updatedFormData); // You can replace this with your form submission logic
  };
  

  const useback = () => {
    navigate("/admin-panel/users");
  };

  const handleNextPage = () => {
    // Increment a counter (you might want to store this in state or elsewhere)
    const counter = localStorage.getItem("counter") || 0;
    const nextCounter = parseInt(counter, 10) + 1;

    // Update the values for checkboxes
    const updatedFormData = {
      ...formData,
      leatherpoolish: formData.leatherpoolish ? "Yes" : "No",
      antiquePoolish: formData.antiquePoolish ? "Yes" : "No",
      glossyPoolish: formData.glossyPoolish ? "Yes" : "No",
      edgepoolishAntique: formData.edgepoolishAntique ? "Yes" : "No",
      edgepoolishGlossy: formData.edgepoolishGlossy ? "Yes" : "No",
      // Add similar updates for other fields as needed
    };

    // Save formData to local storage with a dynamic key
    const key = `formData${nextCounter}`;
    localStorage.setItem(key, JSON.stringify(updatedFormData));

    // Update the counter in local storage
    localStorage.setItem("counter", nextCounter);

    // Clear the form data
    setFormData({
      firstname: formData.firstname,
      factoryName: formData.factoryName,
      contact: formData.contact,
      cnic: formData.cnic,
      productName: "",
      measurementType: "",
      prodWidth: "",
      prodLength: "",
      result: "",
      resultSquareFoot: "",
      resultRunningFoot: "",
      prodQuantity: "",
      prodThickness: "",
      prodRate: "",
      prodamount: "",
      topPoolish: false,
      resultPoolish: "",
      poolishAmount: "",
      edgepoolish: "",
      edgepoolishrate: "",
      edgepoolishamount: "",
      subtotal: 0,

      leatherpoolish: false,
      antiquePoolish: false,
      glossyPoolish: false,
      edgepoolishAntique: false,
      edgepoolishGlossy: false,
    });

    // Navigate to the next page
    navigate("/admin-panel/verification");
  };

  const calculatePoolish = ({ prodWidth, prodLength, resultPoolish }) => {
    const width = parseFloat(prodWidth);
    const length = parseFloat(prodLength);
    const resultpol = parseFloat(resultPoolish);
    if (isNaN(width) || isNaN(length) || isNaN(resultpol)) {
      // Handle invalid input
      return "";
    }

    const result = ((width * length) / 144) * resultpol; // Adjust this formula as needed
    return isNaN(result) ? "" : result.toFixed(2);
  };

  const calculateedgepoolish = ({ 
    prodLength,
    edgepoolishrate,
    prodQuantity,
  }) => {
    const length = parseFloat(prodLength);
    const edgerate = parseFloat(edgepoolishrate);
    const quant = parseFloat(prodQuantity);

    if (isNaN(length) || isNaN(edgerate) || isNaN(quant)) {
      return "";
    }

    const result = (length / 12) * edgerate * quant;
    return isNaN(result) ? "" : result.toFixed(2);
  };
  const calculateResult = ({
    prodWidth,
    prodLength,
    measurementType,
    prodQuantity,
  }) => {
    const width = parseFloat(prodWidth);
    const length = parseFloat(prodLength);
    const quant = parseFloat(prodQuantity);

    if (isNaN(width) || isNaN(length) || isNaN(quant)) {
      // Handle invalid input
      return "";
    }

    // Add your formulas for Square Foot and Running Foot
    if (measurementType === "squareFoot") {
      const result = (width * length * quant) / 144; // Adjust this formula as needed
      return isNaN(result) ? "" : result.toFixed(2);
    } else if (measurementType === "runningFoot") {
      const result = (length / 12) * quant; // Adjust this formula as needed
      return isNaN(result) ? "" : result.toFixed(2);
    }

    return "";
  };

  const calculateproductAmount = ({ measurementType, prodRate, result }) => {
    const prodrate = parseFloat(prodRate);
    const sqt = parseFloat(result);

    if (isNaN(prodrate) || isNaN(sqt)) {
      return "";
    }

    if (measurementType === "squareFoot") {
      const result = prodrate * sqt;
      return isNaN(result) ? "" : parseInt(result, 10);
    } else if (measurementType === "runningFoot") {
      const result = prodrate * sqt;
      return isNaN(result) ? "" : parseInt(result, 10);
    }

    return "";
  };

  const handleCalculateTotal = () => {
    const prod = parseFloat(formData.prodamount) || 0;
    const poolish = parseFloat(formData.poolishAmount) || 0;
    const edge = parseFloat(formData.edgepoolishamount) || 0;

    const subtotal = prod + poolish + edge;

    setFormData((prevData) => ({
      ...prevData,
      subtotal: isNaN(subtotal) ? "" : parseInt(subtotal, 10),
    }));

    console.log("Total:", subtotal);
    // You can update the state or perform any other actions with the total value
  };
  return (
    <>
      <button
        className="bg-white dark:bg-[#0F172A] ml-2 mt-2 text-indigo-500 dark:text-white p-2 rounded hover:bg-gray-800 hover:text-white transition duration-300"
        onClick={useback}
      >
        Back
      </button>

      <div className="flex items-center justify-center h-full p-10 mr-2 md:px-8 md:ml-2 ml-10">
        <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
          {step === 1 ? (
            <>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                  <svg
                    className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight text-xs lg:text-base">
                  Personal Info
                </h3>
              </li>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                  <svg
                    className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight text-xs lg:text-base">
                  Product Details
                </h3>
              </li>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                  <svg
                    className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight text-xs lg:text-base">
                  Poolish Details
                </h3>
              </li>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                  <svg
                    className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight text-xs lg:text-base">
                  {" "}
                  Rate
                </h3>
              </li>
            </>
          ) : step === 2 ? (
            <>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                  <svg
                    className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight text-xs lg:text-base">
                  Personal Info
                </h3>
              </li>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                  <svg
                    className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight text-xs lg:text-base">
                  Product Details
                </h3>
              </li>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                  <svg
                    className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight text-xs lg:text-base">
                  Poolish Details
                </h3>
              </li>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                  <svg
                    className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight text-xs lg:text-base">
                  {" "}
                  Rate
                </h3>
              </li>
            </>
          ) : step === 3 ? (
            <>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                  <svg
                    className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight">Personal Info</h3>
              </li>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                  <svg
                    className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight">Product Details</h3>
              </li>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                  <svg
                    className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight">Poolish Details</h3>
              </li>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                  <svg
                    className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight text-xs lg:text-base">
                  {" "}
                  Rate
                </h3>
              </li>
            </>
          ) : step === 4 ? (
            <>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                  <svg
                    className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight">Personal Info</h3>
              </li>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                  <svg
                    className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight">Product Details</h3>
              </li>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                  <svg
                    className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight">Poolish Details</h3>
              </li>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                  <svg
                    className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight text-xs lg:text-base">
                  {" "}
                  Rate
                </h3>
              </li>
            </>
          ) : (
            <>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                  <svg
                    className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight">Personal Info</h3>
                <p className="text-sm">Step details here</p>
              </li>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                  <svg
                    className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight">Product Details</h3>
                <p className="text-sm">Step details here</p>
              </li>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                  <svg
                    className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight">Poolish Details</h3>
                <p className="text-sm">Step details here</p>
              </li>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                  <svg
                    className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight text-xs lg:text-base">
                  {" "}
                  Rate
                </h3>
              </li>
            </>
          )}
        </ol>

        <div className="w-full md:w-1/2 lg:w-full p-4">
          <div className="shadow-lg border border-2 rounded-lg rounded-md p-4">
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              {/* Render form elements based on the current step */}
              {step === 1 && (
                <>
                  {/* Step 1: First Name, Last Name, Email */}
                  <div className="flex flex-col">
                    <label className="text-gray-500 mb-1 text-xs lg:text-base">
                      First Name
                    </label>
                    {data && (
                      <input
                        name="firstName"
                        value={data.firstname}
                        onChange={handleInputChange}
                        className="text-xs lg:text-base mb-4 outline outline-gray-400 p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-black"
                        type="text"
                        placeholder="First Name"
                      />
                    )}

                    <label className="text-gray-500 mb-1 text-xs lg:text-base">
                      Factory Name
                    </label>
                    <input
                      name="factoryname"
                      value={data.factoryname}
                      onChange={handleInputChange}
                      className="text-xs lg:text-base mb-4 outline outline-gray-400 p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-black"
                      type="text"
                      placeholder="Enter Factory Name"
                    />

                    <label className="text-gray-500 mb-1 text-xs lg:text-base">
                      Contact
                    </label>
                    <input
                      name="contact"
                      value={data.contact}
                      onChange={handleInputChange}
                      className="text-xs lg:text-base outline mb-4 outline-gray-400 p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-black"
                      type="text"
                      placeholder="Enter phone Number"
                    />
                    <label className="text-gray-500 mb-1 text-xs lg:text-base">
                      CNIC
                    </label>
                    <input
                      name="cnic"
                      value={data.cnic}
                      onChange={handleInputChange}
                      className="text-xs lg:text-base outline outline-gray-400 p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-black"
                      type="text"
                      placeholder="Enter phone Number"
                    />
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  {/* Step 2: Factory Name, Contact Number, CNIC */}
                  <div className="flex flex-col">
                    <label className="text-gray-500 mb-2 text-xs lg:text-base">
                      Product Name
                    </label>
                    <input
                      name="productName"
                      value={formData.productName}
                      onChange={handleInputChange}
                      className="text-xs lg:text-base outline outline-gray-400 mb-4 p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-black"
                      type="text"
                      placeholder="Enter Product Name"
                    />

                    <div className="flex items-center mb-4">
                      <label className="mr-4 text-xs lg:text-base">
                        <input
                          type="radio"
                          name="measurementType"
                          value="squareFoot"
                          onChange={handleInputChange}
                          checked={formData.measurementType === "squareFoot"}
                          className="mr-2"
                        />
                        Square Foot
                      </label>

                      <label className="mr-4 text-xs lg:text-base">
                        <input
                          type="radio"
                          name="measurementType"
                          value="runningFoot"
                          onChange={handleInputChange}
                          checked={formData.measurementType === "runningFoot"}
                          className="mr-2"
                        />
                        Running Foot
                      </label>
                    </div>
                    <label className="text-gray-500 mb-2 text-xs lg:text-base">
                      Product Width
                    </label>
                    <input
                      name="prodWidth"
                      value={formData.prodWidth}
                      onChange={handleInputChange}
                      className=" text-xs lg:text-base outline outline-gray-400 mb-2 p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-black"
                      type="number"
                      placeholder="Enter Product Width"
                    />

                    <label className="text-gray-500 mb-2 text-xs lg:text-base">
                      Product Length
                    </label>
                    <input
                      name="prodLength"
                      value={formData.prodLength}
                      onChange={handleInputChange}
                      className="text-xs lg:text-base outline outline-gray-400 mb-2 p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-black"
                      type="number"
                      placeholder="Enter Product Length"
                    />
                    <label className="text-gray-500 mb-2 text-xs lg:text-base">
                      Product Quantity
                    </label>
                    <input
                      name="prodQuantity"
                      value={formData.prodQuantity}
                      onChange={handleInputChange}
                      className="text-xs lg:text-base outline outline-gray-400 mb-2 p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-black"
                      type="number"
                      placeholder="Enter Product Quantity"
                    />

                    {formData.measurementType === "squareFoot" && (
                      <>
                        <label className="text-gray-500 mb-2 text-xs lg:text-base">
                          Square Foot
                        </label>
                        <input
                          name="resultSquareFoot"
                          value={formData.result}
                          className="text-xs lg:text-base outline outline-gray-400 mb-2 p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-black"
                          type="number"
                          placeholder="Square Foot"
                        />
                      </>
                    )}
                    {formData.measurementType === "runningFoot" && (
                      <>
                        <label className="text-gray-500 mb-2 text-xs lg:text-base">
                          Running Foot
                        </label>
                        <input
                          name="resultRunningFoot"
                          value={formData.result}
                          className="text-xs lg:text-base outline outline-gray-400 mb-2 p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-black"
                          type="number"
                          placeholder="Running Foot"
                        />
                      </>
                    )}

                    

                    <label className="text-gray-500 mb-2 text-xs lg:text-base">
                      Product Thickness
                    </label>
                    <input
                      name="prodThickness"
                      value={formData.prodThickness}
                      onChange={handleInputChange}
                      className="text-xs lg:text-base outline outline-gray-400 mb-2 p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-black"
                      type="text"
                      placeholder="Enter Product Thickness"
                    />

                    <label className="text-gray-500 mb-2 text-xs lg:text-base">
                      Product Rate
                    </label>
                    <input
                      name="prodRate"
                      value={formData.prodRate}
                      onChange={handleInputChange}
                      className="text-xs lg:text-base outline outline-gray-400 mb-2 p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-black"
                      type="number"
                      placeholder="Enter Product Rate"
                    />

                    <label className="text-gray-500 mb-2 text-xs lg:text-base">
                      Product Amount
                    </label>
                    <input
                      name="prodamount"
                      value={formData.prodamount}
                      onChange={handleInputChange}
                      className="text-xs lg:text-base outline outline-gray-400 mb-2 p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-black"
                      type="number"
                      placeholder="Product Amount"
                    />
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <div className="flex flex-col mb-4">
                    <label className="mr-4 text-xs lg:text-base">
                      <input
                        type="checkbox"
                        name="topPoolish"
                        value="topPoolish"
                        onChange={handleInputChange}
                        checked={formData.topPoolish}
                        className="mr-2 mb-4"
                      />
                      Top Poolish
                    </label>
                    {formData.topPoolish && (
                      <>
                        <div className="poolishType flex">
                          <label className="mr-4 text-xs lg:text-base">
                            <input
                              type="checkbox"
                              name="leatherpoolish"
                              value="leatherpoolish"
                              onChange={handleInputChange}
                              checked={formData.leatherpoolish}
                              className="mr-2 mb-4"
                            />
                            Leather Poolish
                          </label>
                          <label className="mr-4 text-xs lg:text-base">
                            <input
                              type="checkbox"
                              name="antiquePoolish"
                              value="antiquePoolish"
                              onChange={handleInputChange}
                              checked={formData.antiquePoolish}
                              className="mr-2 mb-4"
                            />
                            Antique Poolish
                          </label>
                          <label className="mr-4 text-xs lg:text-base">
                            <input
                              type="checkbox"
                              name="glossyPoolish"
                              value="glossyPoolish"
                              onChange={handleInputChange}
                              checked={formData.glossyPoolish}
                              className="mr-2 mb-4"
                            />
                            Gloosy Poolish
                          </label>
                        </div>

                        <label className="text-gray-500 mb-2 text-xs lg:text-base">
                          Poolish Rate
                        </label>
                        <input
                          name="resultPoolish"
                          value={formData.resultPoolish}
                          onChange={handleInputChange}
                          className="text-xs lg:text-base outline outline-gray-400 mb-2 p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-black"
                          type="number"
                          placeholder="Poolish Rate"
                        />

                        <label className="text-gray-500 mb-2 text-xs lg:text-base">
                          Poolish Amount
                        </label>
                        <input
                          name="poolishAmount"
                          value={formData.poolishAmount}
                          onChange={handleInputChange}
                          className="text-xs lg:text-base outline outline-gray-400 mb-2 p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-black"
                          type="number"
                          placeholder="Poolish Amount"
                        />
                      </>
                    )}
                    <label className="mr-4 text-xs lg:text-base">
                      <input
                        type="checkbox"
                        name="edgepoolish"
                        value="edgepoolish"
                        onChange={handleInputChange}
                        checked={formData.edgepoolish}
                        className="mr-2 mb-4"
                      />
                      Edge Poolish
                    </label>

                    {formData.edgepoolish && (
                      <>
                        <div className="ePoolishType flex">
                          <label className="mr-4 text-xs lg:text-base">
                            <input
                              type="checkbox"
                              name="edgepoolishAntique"
                              value="edgepoolishAntique"
                              onChange={handleInputChange}
                              checked={formData.edgepoolishAntique}
                              className="mr-2 mb-4"
                            />
                            Antique Poolish
                          </label>

                          <label className="mr-4 text-xs lg:text-base">
                            <input
                              type="checkbox"
                              name="edgepoolishGlossy"
                              value="edgepoolishGlossy"
                              onChange={handleInputChange}
                              checked={formData.edgepoolishGlossy}
                              className="mr-2 mb-4"
                            />
                            Glossy Poolish
                          </label>
                        </div>
                        <label className="text-gray-500 mb-2 text-xs lg:text-base">
                          Edge Poolish Rate
                        </label>
                        <input
                          name="edgepoolishrate"
                          value={formData.edgepoolishrate}
                          onChange={handleInputChange}
                          className="text-xs lg:text-base outline outline-gray-400 mb-2 p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-black"
                          type="number"
                          placeholder="Edge Poolish Rate"
                        />

                        <label className="text-gray-500 mb-2 text-xs lg:text-base">
                          Edge Poolish Amount
                        </label>
                        <input
                          name="edgepoolishamount"
                          value={formData.edgepoolishamount}
                          onChange={handleInputChange}
                          className="text-xs lg:text-base outline outline-gray-400 mb-2 p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-black"
                          type="number"
                          placeholder="Edge Poolish Amount"
                        />
                      </>
                    )}
                  </div>
                </>
              )}
              {step === 4 && (
                <>
                  <button
                    type="button"
                    onClick={handleCalculateTotal}
                    className="bg-white dark:bg-[#0F172A] text-indigo-500 dark:text-white p-2 rounded hover:bg-gray-800 hover:text-white transition duration-300"
                  >
                    Calculate Total
                  </button>
                  <div className="flex flex-col mb-4">
                    <label className="text-gray-500 mb-2 text-xs lg:text-base">
                      Sub Total
                    </label>
                    <input
                      name="subtotal"
                      value={formData.subtotal}
                      onChange={handleInputChange}
                      className="text-xs lg:text-base outline outline-gray-400 mb-2 p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-black"
                      type="text"
                      placeholder="Sub Total"
                    />
                  </div>
                </>
              )}

              {/* Navigation buttons */}
              <div className="flex justify-between">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="bg-white dark:bg-[#0F172A] text-indigo-500 dark:text-white p-2 rounded hover:bg-gray-800 hover:text-white transition duration-300"
                  >
                    Previous
                  </button>
                )}
                {step < steps.length && (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="bg-white dark:bg-[#0F172A] text-indigo-500 dark:text-white p-2 rounded hover:bg-gray-800 hover:text-white transition duration-300"
                  >
                    Next
                  </button>
                )}
                {step === steps.length && (
                  <>
                    <button
                      type="submit"
                      className="bg-white dark:bg-[#0F172A] text-indigo-500 dark:text-white p-2 rounded hover:bg-gray-800 hover:text-white transition duration-300"
                    >
                      Save & Add more
                    </button>

                    <button
                      type="submit"
                      className="bg-white dark:bg-[#0F172A] text-indigo-500 dark:text-white p-2 rounded hover:bg-gray-800 hover:text-white transition duration-300"
                      onClick={handleNextPage}
                    >
                      Continue to create
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateBill;
