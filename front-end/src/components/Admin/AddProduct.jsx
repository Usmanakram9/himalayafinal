import React, { useState } from "react";
import AdminNavBar from "./AdminNavbar";
import AdminFooter from "./AdminFooter";

const AddProduct = () => {
  const [productName, setProductName] = useState("");

  const handleAddProduct = () => {
    // You can implement the logic to add the product here
    // For now, let's just log the product name to the console
    console.log("Product added:", productName);
  };

  return (
    <>
      <AdminNavBar />
      <div className="flex flex-col items-center justify-center h-full" style={{fontFamily: "sans-serif"}}>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-gray-700 rounded-md p-4">
            <h1 className="text-2xl font-bold text-white mb-4">Add Product</h1>
            <div className="flex">
              <input
                type="text"
                placeholder="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="flex-grow p-2 rounded-l border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-white"
              />
              <button
                className="bg-white dark:bg-[#0F172A] text-indigo-500 dark:text-white p-2 rounded-r hover:bg-indigo-500 hover:text-white transition duration-300"
                onClick={handleAddProduct}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* adding products table here */}
      <div class="flex justify-center items-center h-full mt-24">
        <div class="relative w-4/5 overflow-x-auto shadow-md sm:rounded-lg">
          <h1 className=" text-4xl text-black text-center mb-12">
            All Products
          </h1>
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Product name
                </th>
                <th scope="col" class="px-6 py-3">
                  Color
                </th>
                <th scope="col" class="px-6 py-3">
                  Category
                </th>
                <th scope="col" class="px-6 py-3">
                  Price
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">Silver</td>
                <td class="px-6 py-4">Laptop</td>
                <td class="px-6 py-4">$2999</td>
                <td class="px-6 py-4">
                  <a
                    href="/"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">White</td>
                <td class="px-6 py-4">Laptop PC</td>
                <td class="px-6 py-4">$1999</td>
                <td class="px-6 py-4">
                  <a
                    href="/"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr class="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Magic Mouse 2
                </th>
                <td class="px-6 py-4">Black</td>
                <td class="px-6 py-4">Accessories</td>
                <td class="px-6 py-4">$99</td>
                <td class="px-6 py-4">
                  <a
                    href="/"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <AdminFooter />
    </>
  );
};

export default AddProduct;
