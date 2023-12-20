import React, { useState,useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import useSignupStore from '../../stores/signupStore';

const CreateBill = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, getuserbyID } = useSignupStore();
  useEffect(() => {
    getuserbyID(id);
  }, [id]);
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    factoryName: '',
    contactNumber: '',
    cnic: '',
    measurementType: '',
    prodwidth: '',
    prodlength: '',
    result: ''
  });

  const steps = [
    { title: 'Step 1', icon: 'path to icon for step 1' },
    { title: 'Step 2', icon: 'path to icon for step 2' },
    { title: 'Step 3', icon: 'path to icon for step 3' },
    { title: 'Step 4', icon: 'path to icon for step 4' },
  ];

  const handleNext = () => {
    setStep(step + 1);
    console.log(step);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      // Update the 'result' field whenever 'prodwidth', 'prodlength', or 'measurementType' changes
      result:
        name === 'prodwidth' || name === 'prodlength' || name === 'measurementType'
          ? calculateResult({ ...prevData, [name]: value })
          : prevData.result,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
    console.log(formData); // You can replace this with your form submission logic
  };
  const useback = ()=>{
    navigate('/admin-panel/users');
}


const calculateResult = ({ prodwidth, prodlength, measurementType }) => {
  const width = parseFloat(prodwidth);
  const length = parseFloat(prodlength);

  if (isNaN(width) || isNaN(length)) {
    // Handle invalid input
    return '';
  }

  // Add your formulas for Square Foot and Running Foot
  if (measurementType === 'squareFoot') {
    const result = (width * length) / 144; // Adjust this formula as needed
    return isNaN(result) ? '' : result.toFixed(2);
  } else if (measurementType === 'runningFoot') {
    const result = length/12; // Adjust this formula as needed
    return isNaN(result) ? '' : result.toFixed(2);
  }

  return '';
};
  return (
    <>
    <button className="bg-white dark:bg-[#0F172A] ml-2 mt-2 text-indigo-500 dark:text-white p-2 rounded hover:bg-gray-800 hover:text-white transition duration-300" onClick={useback} >Back</button>
             
      <div className="flex items-center justify-center h-full p-10 mr-2 md:px-8 md:ml-2 ml-10">
      <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">   
      {step === 1 ? (   
        <>              
    <li className="mb-10 ms-6"> 
            
        <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
            <svg className="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
            </svg>
        </span>
        <h3 className="font-medium leading-tight text-xs lg:text-base">Personal Info</h3>
        
    </li>
     <li className="mb-10 ms-6">
     <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
         <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
             <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"/>
         </svg>
     </span>
     <h3 className="font-medium leading-tight text-xs lg:text-base">Product Details</h3>
    
 </li>
 <li className="mb-10 ms-6">
      <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
          <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
              <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
          </svg>
      </span>
      <h3 className="font-medium leading-tight text-xs lg:text-base">Poolish Details</h3>
     
  </li>
  <li className="mb-10 ms-6">
      <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
          <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
              <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
          </svg>
      </span>
      <h3 className="font-medium leading-tight text-xs lg:text-base"> Rate</h3>
     
  </li>
 </>
    ):
    step === 2 ? (
      <>
      <li className="mb-10 ms-6"> 
            
      <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
          <svg className="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
          </svg>
      </span>
      <h3 className="font-medium leading-tight text-xs lg:text-base">Personal Info</h3>
      
  </li>
    <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
        <svg className="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
          </svg>
        </span>
        <h3 className="font-medium leading-tight text-xs lg:text-base">Product Details</h3>
        
    </li>
    <li className="mb-10 ms-6">
      <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
          <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
              <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
          </svg>
      </span>
      <h3 className="font-medium leading-tight text-xs lg:text-base">Poolish Details</h3>
    
  </li>
  <li className="mb-10 ms-6">
      <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
          <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
              <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
          </svg>
      </span>
      <h3 className="font-medium leading-tight text-xs lg:text-base"> Rate</h3>
     
  </li>
    </>
    ) : step === 3 ? ( 
      <>
       <li className="mb-10 ms-6"> 
            
            <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                <svg className="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            </span>
            <h3 className="font-medium leading-tight">Personal Info</h3>
            
        </li>
          <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
              <svg className="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
          </svg>
              </span>
              <h3 className="font-medium leading-tight">Product Details</h3>
              
          </li>
          <li className="mb-10 ms-6">
      <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
      <svg className="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
          </svg>
      </span>
      <h3 className="font-medium leading-tight">Poolish Details</h3>
     
  </li>
  <li className="mb-10 ms-6">
      <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
          <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
              <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
          </svg>
      </span>
      <h3 className="font-medium leading-tight text-xs lg:text-base"> Rate</h3>
     
  </li>
          </>
          ) : step === 4 ? ( 
            <>
             <li className="mb-10 ms-6"> 
                  
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                      <svg className="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                      </svg>
                  </span>
                  <h3 className="font-medium leading-tight">Personal Info</h3>
                  
              </li>
                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                    <svg className="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
                    </span>
                    <h3 className="font-medium leading-tight">Product Details</h3>
                    
                </li>
                <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
            <svg className="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            </span>
            <h3 className="font-medium leading-tight">Poolish Details</h3>
           
        </li>
        <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
            <svg className="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            </span>
            <h3 className="font-medium leading-tight text-xs lg:text-base"> Rate</h3>
           
        </li>
                </>
                ):(
      <>
      <li className="mb-10 ms-6"> 
            
      <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
          <svg className="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
          </svg>
      </span>
      <h3 className="font-medium leading-tight">Personal Info</h3>
      <p className="text-sm">Step details here</p>
  </li>
      <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
            <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"/>
            </svg>
        </span>
        <h3 className="font-medium leading-tight">Product Details</h3>
        <p className="text-sm">Step details here</p>
    </li>
    <li className="mb-10 ms-6">
      <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
          <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
              <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
          </svg>
      </span>
      <h3 className="font-medium leading-tight">Poolish Details</h3>
      <p className="text-sm">Step details here</p>
  </li>
  <li className="mb-10 ms-6">
      <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
          <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
              <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
          </svg>
      </span>
      <h3 className="font-medium leading-tight text-xs lg:text-base"> Rate</h3>
     
  </li>
    </>
    ) }
    
   
</ol>
        <div className="w-full md:w-1/2 lg:w-full p-4">
          
          <div className="shadow-lg border border-2 rounded-lg rounded-md p-4">
      


            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              {/* Render form elements based on the current step */}
              {step === 1 && (
                <>
                  {/* Step 1: First Name, Last Name, Email */}
                  <div className="flex flex-col">
                    <label className="text-gray-500 mb-1 text-xs lg:text-base">First Name</label>
                    {data && (
  <input
  name="firstName"
  value={data.firstname}
  onChange={handleInputChange}
  className="text-xs lg:text-base mb-4 outline outline-gray-400 p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-black"
  type="text"
  placeholder="First Name" readOnly
/>
                    )}
                  

                    <label className="text-gray-500 mb-1 text-xs lg:text-base">Factory Name</label>
                    <input
                      name="factoryname"
                      value={data.factoryname}
                      onChange={handleInputChange}
                      className="text-xs lg:text-base mb-4 outline outline-gray-400 p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-black"
                      type="text"
                      placeholder="Enter Factory Name" readOnly
                    />

                    <label className="text-gray-500 mb-1 text-xs lg:text-base">Contact</label>
                    <input
                      name="contact"
                      value={data.contact}
                      onChange={handleInputChange}
                      className="text-xs lg:text-base outline mb-4 outline-gray-400 p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-black"
                      type="text"
                      placeholder="Enter phone Number" readOnly
                    />
                    <label className="text-gray-500 mb-1 text-xs lg:text-base">CNIC</label>
                     <input
                      name="cnic"
                      value={data.cnic}
                      onChange={handleInputChange}
                      className="text-xs lg:text-base outline outline-gray-400 p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-black"
                      type="text"
                      placeholder="Enter phone Number" readOnly
                    />
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  {/* Step 2: Factory Name, Contact Number, CNIC */}
                  <div className="flex flex-col">
                  <label className="text-gray-500 mb-2 text-xs lg:text-base">Product Name</label>
                     <input
                      name="productname"
                      value={formData.data}
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
            checked={formData.measurementType === 'squareFoot'}
            className="mr-2"
          />
          Square Foot
        </label>

        <label className='mr-4 text-xs lg:text-base'>
          <input
            type="radio"
            name="measurementType"
            value="runningFoot"
            onChange={handleInputChange}
            checked={formData.measurementType === 'runningFoot'}
            className="mr-2"
          />
          Running Foot
        </label>
      </div>
                    <label className="text-gray-500 mb-2 text-xs lg:text-base">Product Width</label>
                     <input
                      name="prodwidth"
                      value={formData.data}
                      onChange={handleInputChange}
                      className=" text-xs lg:text-base outline outline-gray-400 mb-2 p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-black"
                      type="number"
                      placeholder="Enter Product Width"
                    />

<label className="text-gray-500 mb-2 text-xs lg:text-base">Product Length</label>
                     <input
                      name="prodlength"
                      value={formData.data}
                      onChange={handleInputChange}
                      className="text-xs lg:text-base outline outline-gray-400 mb-2 p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-black"
                      type="number"
                      placeholder="Enter Product Length"
                    />

{formData.measurementType === 'squareFoot' && (
  <>
    <label className="text-gray-500 mb-2 text-xs lg:text-base">Square Foot</label>
    <input
      name="resultSquareFoot"
      value={formData.result}
      className="text-xs lg:text-base outline outline-gray-400 mb-2 p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-black"
      type="number"
      placeholder="Square Foot"
      readOnly
    />
  </>
)}
{formData.measurementType === 'runningFoot' && (
  <>
    <label className="text-gray-500 mb-2 text-xs lg:text-base">Running Foot</label>
    <input
      name="resultRunningFoot"
      value={formData.result}
      className="text-xs lg:text-base outline outline-gray-400 mb-2 p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-black"
      type="number"
      placeholder="Running Foot"
      readOnly
    />
  </>
)}


<label className="text-gray-500 mb-2 text-xs lg:text-base">Product Quantity</label>
                     <input
                      name="prodquantity"
                      value={formData.data}
                      onChange={handleInputChange}
                      className="text-xs lg:text-base outline outline-gray-400 mb-2 p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-black"
                      type="number"
                      placeholder="Enter Product Quantity"
                    />
                    

                    <label className="text-gray-500 mb-2 text-xs lg:text-base">Product Thickness</label>
                     <input
                      name="prodthickness"
                      value={formData.data}
                      onChange={handleInputChange}
                      className="text-xs lg:text-base outline outline-gray-400 mb-2 p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-black"
                      type="text"
                      placeholder="Enter Product Thickness"
                    />

<label className="text-gray-500 mb-2 text-xs lg:text-base">Product Rate</label>
                     <input
                      name="prodrate"
                      value={formData.data}
                      onChange={handleInputChange}
                      className="text-xs lg:text-base outline outline-gray-400 mb-2 p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-black"
                      type="text"
                      placeholder="Enter Product Rate"
                    />
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                 <div className="flex flex-col">
                  <label className="text-gray-500 mb-2 text-xs lg:text-base">Product Name</label>
                     <input
                      name="productname"
                      value={formData.data}
                      onChange={handleInputChange}
                      className="text-xs lg:text-base outline outline-gray-400 mb-4 p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-black"
                      type="text"
                      placeholder="Enter Product Name"
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
                  <button
                    type="submit"
                    className="bg-white dark:bg-[#0F172A] text-indigo-500 dark:text-white p-2 rounded hover:bg-gray-800 hover:text-white transition duration-300"
                  >
                    Submit
                  </button>
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
