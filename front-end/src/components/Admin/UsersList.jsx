import React, { useEffect } from "react";
import useSignupStore from "../../stores/signupStore";
import AdminNavBar from "./AdminNavbar";
import AdminFooter from "./AdminFooter";
import "../../assets/css/UserList.css";
import { Link } from "react-router-dom";

const UsersList = () => {
  const { data, getUsers } = useSignupStore();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <AdminNavBar />
      <div className="userList flex flex-col items-center justify-center h-full">
        <div className="container mx-auto">
          <h1 className="text-3xl sm:text-4xl text-center font-bold mb-8">
            Customers List
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data?.map((user) => (
              <div
                key={user.id}
                className=" bg-opacity-10 bg-black overflow-hidden shadow-md rounded-lg transition transform hover:scale-105"
              >
                <div className="p-4">
                  <h2 className="text-base sm:text-lg font-semibold mb-2">
                    {user.firstname} {user.lastname}
                  </h2>
                  <div className="text-xs sm:text-sm mb-4">
                    <p>Email: {user.email}</p>
                    <p>Factory Name: {user.factoryname}</p>
                    <p>Contact Number: {user.contact}</p>
                    <p>CNIC: {user.cnic}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center px-4 py-2 bg-gray-100">
                  <button className="text-xs sm:text-sm text-blue-600 hover:underline mr-2">
                    Edit
                  </button>
                  <Link to={`/admin-panel/createBill/${user._id}`} className="text-xs sm:text-sm text-green-600 hover:underline mr-2">
                    Create Bill
                  </Link>
                  <button className="text-xs sm:text-sm text-red-600 hover:underline">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <AdminFooter />
    </>
  );
};

export default UsersList;
