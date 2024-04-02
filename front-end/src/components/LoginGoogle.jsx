import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import useSignupStore from "../stores/signupStore";

const LoginGoogle = () => {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();
  const { signupWithGoogle } = useSignupStore();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        // Make a request to get user information using the access token
        const response = await axios.get(
          "https://www.googleapis.com/oauth2/v1/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );

        console.log(userInfo);
        // Set user information in state
        setUserInfo(response.data);
        const googleResponse = await signupWithGoogle(response.data);

        if (googleResponse) {
          navigate("/");
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    },
  });

  return (
    <div>
      <button
        className=" w-80 py-2 mb-3 flex justify-center items-center hover:bg-gray-200 rounded-full bg-transparent border border-gray-500"
        onClick={() => login()}
      >
        <FcGoogle className="mr-2" /> Continue with Google
      </button>
    </div>
  );
};

export default LoginGoogle;
