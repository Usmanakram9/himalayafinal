import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhone,
  faIdCard,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import NewNavBar from "../components/NewNavBar";
import NewFooter from "../components/NewFooter";
import useSignupStore from "../stores/signupStore";
import Toast, { showSuccessToast, showErrorToast } from "../components/Toast";

const SignupScreen = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [factoryName, setFactoryName] = useState("");
  const [contactNumber, setContactNumber] = useState(0);
  const [CNIC, setCNIC] = useState(0);

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

      setFirstname("");
      setLastname("");
      setEmail("");
      setFactoryName("");
      setContactNumber(0);
      setCNIC(0);
    } catch (error) {
      showErrorToast(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <NewNavBar />
      <section className="signup-section bg-gray-100 py-6 md:py-10">
        <div className="container mt-16 mx-auto flex-col items-center justify-center mb-52 md:mt-32">
          <div className="text-center text-3xl md:text-5xl font-bold opacity-50 mb-2 md:mb-4 font-thin animate__animated animate__fadeInLeft">
            Sign Up
          </div>

          {/* Form */}
          <div className="mt-8 w-full max-w-md mx-auto">
            <form className="bg-transparent shadow-md rounded px-8 pt-6 pb-32">
              {/* First Name */}
              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faUser}
                    size="lg"
                    className="mr-2 text-gray-600"
                  />
                  <input
                    className="shadow appearance-none border bg-transparent rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline focus:border-none focus:outline-amber-500"
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>
              </div>

              {/* Last Name */}
              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faUser}
                    size="lg"
                    className="mr-2 text-gray-600"
                  />
                  <input
                    className="shadow appearance-none border bg-transparent rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline focus:border-none focus:outline-amber-500"
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="lg"
                    className="mr-2 text-gray-600"
                  />
                  <input
                    className="shadow appearance-none border bg-transparent rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline focus:border-none focus:outline-amber-500"
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Factory Name */}
              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="factoryName"
                >
                  Factory Name
                </label>
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faUser}
                    size="lg"
                    className="mr-2 text-gray-600"
                  />
                  <input
                    className="shadow appearance-none border bg-transparent rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline focus:border-none focus:outline-amber-500"
                    id="factoryName"
                    type="text"
                    placeholder="Factory Name"
                    onChange={(e) => setFactoryName(e.target.value)}
                  />
                </div>
              </div>

              {/* Contact */}
              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="contact"
                >
                  Contact
                </label>
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    size="lg"
                    className="mr-2 text-gray-600"
                  />
                  <input
                    className="shadow appearance-none border bg-transparent rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline focus:border-none focus:outline-amber-500"
                    id="contact"
                    type="text"
                    placeholder="Contact Number"
                    onChange={(e) => setContactNumber(e.target.value)}
                  />
                </div>
              </div>

              {/* CNIC */}
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="cnic">
                  CNIC
                </label>
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faIdCard}
                    size="lg"
                    className="mr-2 text-gray-600"
                  />
                  <input
                    className="shadow appearance-none border bg-transparent rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline focus:border-none focus:outline-amber-500"
                    id="cnic"
                    type="text"
                    placeholder="CNIC"
                    onChange={(e) => setCNIC(e.target.value)}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-end">
                <button
                  className="bg-transparent outline-slate-600 hover:bg-transparent hover:outline-amber-500 border hover:border-amber-500 text-white font-bold py-2 px-4 rounded transition duration-300"
                  type="button"
                  onClick={signupHandler}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
        <NewFooter />
      </section>
      <Toast />
    </>
  );
};

export default SignupScreen;
