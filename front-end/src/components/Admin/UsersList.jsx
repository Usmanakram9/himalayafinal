import React, { useState, useEffect } from "react";
import useSignupStore from "../../stores/signupStore";
import AdminNavBar from "./AdminNavbar";
import AdminFooter from "./AdminFooter";
import "../../assets/css/UserList.css";
import { Link } from "react-router-dom";

const UsersList = () => {
  const {
    singleUser,
    data,
    getUsers,
    deleteUserById,
    getUserById,
    updateUserById,
  } = useSignupStore();

  useEffect(() => {
    getUsers();
  }, []);

  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState({
    firstname: "",
    lastname: "",
    factoryname: "",
    email: "",
    contact: "",
    cnic: "",
  });

  const handleDelete = async (userId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      await deleteUserById(userId);
      getUsers();
    }
  };

  const handleUpdate = async (userId) => {
    // Set edit mode to true and fetch user details
    setEditMode(true);
    await getUserById(userId);
    setEditedUser(singleUser);
  };

  const handleChange = (e) => {
    // Update the state when the user changes input values
    setEditedUser({
      ...editedUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    // Update the user details
    await updateUserById(singleUser._id, editedUser);
    // Reset edit mode and fetch the updated user list
    setEditMode(false);
    getUsers();
  };

  return (
    <>
      <AdminNavBar />
      <div className="userList flex flex-col items-center justify-center h-full">
        <div className="container mx-auto">
          <h1 className="text-3xl sm:text-4xl text-center font-bold mb-8">
            Client List
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.isArray(data) && data.length > 0 ? (
              data.map((user) => (
                <div
                  key={user._id}
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
                    <button
                      className="text-xs sm:text-sm text-blue-600 hover:underline mr-2"
                      onClick={() => handleUpdate(user._id)}
                    >
                      Edit
                    </button>
                    <Link
                      to={`/admin-panel/createBill/${user._id}`}
                      className="text-xs sm:text-sm text-green-600 hover:underline mr-2"
                    >
                      Create Bill
                    </Link>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="text-xs sm:text-sm text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No data available</p>
            )}
          </div>
        </div>
      </div>

      {/* Display user details in a form when in edit mode */}
      {editMode && (
        <div className="container mx-auto mt-8">
          <h2 className="text-2xl font-bold mb-4">Edit User Details</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="firstname"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={editedUser.firstname}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastname"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={editedUser.lastname}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="factoryname"
                className="block text-sm font-medium text-gray-700"
              >
                Factory Name
              </label>
              <input
                type="text"
                id="factoryname"
                name="factoryname"
                value={editedUser.factoryname}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={editedUser.email}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact"
                className="block text-sm font-medium text-gray-700"
              >
                Contact
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={editedUser.contact}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="cnic"
                className="block text-sm font-medium text-gray-700"
              >
                CNIC
              </label>
              <input
                type="text"
                id="cnic"
                name="cnic"
                value={editedUser.cnic}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mt-4">
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-blue-500 text-white p-2 rounded-md"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}

      <AdminFooter />
    </>
  );
};

export default UsersList;
