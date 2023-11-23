import React, { useEffect } from "react";
import useSignupStore from "../../stores/signupStore";
import AdminNavBar from "./AdminNavbar";
import AdinFooter from "./AdminFooter";

const UsersList = () => {
  const { data, getUsers } = useSignupStore();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <AdminNavBar />
      <div className="flex flex-col items-center justify-center h-full">
        <div className="container mx-auto">
          <h1 className="text-3xl sm:text-4xl text-center dark:text-black font-bold mb-8">
            Customers List
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((user) => (
              <div
                key={user.id}
                className="bg-white overflow-hidden shadow-md rounded-lg dark:bg-gray-800 dark:border-gray-700 transition transform hover:scale-105"
              >
                <div className="p-4">
                  <h2 className="text-base sm:text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">
                    {user.firstname} {user.lastname}
                  </h2>
                  <div className="text-xs sm:text-sm mb-4">
                    <p>
                      <span className="text-blue-600 dark:text-blue-300">
                        Email:{" "}
                      </span>{" "}
                      <span className="text-white">{user.email}</span>
                    </p>
                    <p>
                      <span className="text-blue-600 dark:text-blue-300">
                        Factory Name:{" "}
                      </span>{" "}
                      <span className="text-white">{user.factoryname}</span>
                    </p>
                    <p>
                      <span className="text-blue-600 dark:text-blue-300">
                        Contact Number:{" "}
                      </span>{" "}
                      <span className="text-white">{user.contact}</span>
                    </p>
                    <p>
                      <span className="text-blue-600 dark:text-blue-300">
                        CNIC:
                      </span>{" "}
                      <span className="text-white">{user.cnic}</span>
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center px-4 py-2 bg-gray-100 dark:bg-gray-700">
                  <button className="text-xs sm:text-sm text-blue-600 dark:text-blue-500 hover:underline mr-2">
                    Edit
                  </button>
                  <button className="text-xs sm:text-sm text-green-600 dark:text-green-500 hover:underline mr-2">
                    Create Bill
                  </button>
                  <button className="text-xs sm:text-sm text-red-600 dark:text-red-500 hover:underline">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <AdinFooter />
    </>
  );
};

export default UsersList;
