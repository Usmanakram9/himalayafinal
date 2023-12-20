import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhone,
  faIdCard,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import AdminNavBar from "./AdminNavbar";
import AdminFooter from "./AdminFooter";
import useSignupStore from "../../stores/signupStore";
import Toast, {
  showSuccessToast,
  showErrorToast,
} from "../../components/Toast";

const AddCustomer = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [factoryName, setFactoryName] = useState("");
  const [contactNumber, setContactNumber] = useState();
  const [CNIC, setCNIC] = useState();

  const { addUser } = useSignupStore();

  const signupHandler = (e) => {
    e.preventDefault();

    const newUser = {
      firstname,
      lastname,
      email,
      factoryname: factoryName,
      contact: contactNumber,
      cnic: CNIC,
    };

    try {
      addUser(newUser);
      showSuccessToast("Registered successfully!");

      // Clear form fields
      setFirstname("");
      setLastname("");
      setEmail("");
      setFactoryName("");
      setContactNumber();
      setCNIC();
    } catch (error) {
      showErrorToast(`Error: ${error.message}`);
    }
  };

  const style = {
    fontFamily: "Courier New",
  };

  return (
    <>
      <AdminNavBar />
      <div
        style={style}
        className="flex flex-col items-center justify-center h-full"
      >
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-gray-900 rounded-md p-4">
            <h1 className="text-2xl font-bold text-white mb-4">Add Customer</h1>
            <form className="flex flex-col space-y-4">
              {/* First Name */}
              <div className="flex flex-col">
                <label className="text-white mb-1">First Name</label>
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faUser}
                    size="lg"
                    className="mr-2 text-gray-600"
                  />
                  <input
                    className="p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-white"
                    type="text"
                    placeholder="First Name"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>
              </div>

              {/* Last Name */}
              <div className="flex flex-col">
                <label className="text-white mb-1">Last Name</label>
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faUser}
                    size="lg"
                    className="mr-2 text-gray-600"
                  />
                  <input
                    className="p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-white"
                    type="text"
                    placeholder="Last Name"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-white mb-1">Email</label>
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="lg"
                    className="mr-2 text-gray-600"
                  />
                  <input
                    className="p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-white"
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Factory Name */}
              <div className="flex flex-col">
                <label className="text-white mb-1">Factory Name</label>
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faUser}
                    size="lg"
                    className="mr-2 text-gray-600"
                  />
                  <input
                    className="p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-white"
                    type="text"
                    placeholder="Factory Name"
                    value={factoryName}
                    onChange={(e) => setFactoryName(e.target.value)}
                  />
                </div>
              </div>

              {/* Contact */}
              <div className="flex flex-col">
                <label className="text-white mb-1">Contact</label>
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    size="lg"
                    className="mr-2 text-gray-600"
                  />
                  <input
                    className="p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-white"
                    type="text"
                    placeholder="Contact Number"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                  />
                </div>
              </div>

              {/* CNIC */}
              <div className="flex flex-col">
                <label className="text-white mb-1">CNIC</label>
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faIdCard}
                    size="lg"
                    className="mr-2 text-gray-600"
                  />
                  <input
                    className="p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-white"
                    type="text"
                    placeholder="CNIC"
                    value={CNIC}
                    onChange={(e) => setCNIC(e.target.value)}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                className="bg-white dark:bg-[#0F172A] text-indigo-500 dark:text-white p-2 rounded hover:bg-gray-800 hover:text-white transition duration-300"
                type="button"
                onClick={signupHandler}
              >
                Add Customer
              </button>
            </form>
          </div>
        </div>
      </div>
      <Toast />
      <AdminFooter />
    </>
  );
};

export default AddCustomer;
