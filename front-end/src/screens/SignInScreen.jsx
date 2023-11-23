// SignInForm.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SignInScreen = () => {
  return (
    <>
      {/* Email */}
      <div className="mb-4">
        <label
          className="block text-white text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="lg"
            color="white"
            className="mr-2"
          />
          <input
            className="shadow appearance-none border bg-transparent rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline focus:border-none focus:outline-amber-500"
            id="email"
            type="email"
            placeholder="Email Address"
          />
        </div>
      </div>

      {/* Password */}
      <div className="mb-4">
        <label
          className="block text-white text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="lg"
            color="white"
            className="mr-2"
          />
          <input
            className="shadow appearance-none border bg-transparent rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline focus:border-none focus:outline-amber-500"
            id="password"
            type="password"
            placeholder="Enter Password"
          />
        </div>
      </div>
    </>
  );
};

export default SignInScreen;
