import React, { useState } from "react";
import AdminNavBar from "./AdminNavbar";
import AdminFooter from "./AdminFooter";

const AddSubProduct = () => {
  const [productName, setProductName] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleAddProduct = () => {
    // Implement logic to add the product with the entered details
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const getRandomOptions = () => {
    // Replace these with your actual options
    const options = ["Option 1", "Option 2", "Option 3"];
    return options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ));
  };

  return (
    <>
      <AdminNavBar />
      <div className="flex flex-col items-center justify-center h-full" style={{fontFamily: "Times New Roman"}}>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-gray-700 rounded-md p-4">
            <h1 className="text-2xl font-bold text-white mb-4">
              Add Sub Product
            </h1>
            <div className="flex flex-col mb-4">
              <label htmlFor="productName" className="text-white mb-1">
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                placeholder="Enter product name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-white"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="selectProduct" className="text-white mb-1">
                Select Product
              </label>
              <select
                id="selectProduct"
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
                className="p-2 rounded border-0 bg-transparent outline-none text-white placeholder-black dark:placeholder-gray-500 dark:text-black"
              >
                {getRandomOptions()}
              </select>
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="image" className="text-white mb-1">
                Upload Image
              </label>
              <input
                type="file"
                id="image"
                onChange={handleFileChange}
                className="p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-white"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="description" className="text-white mb-1">
                Description
              </label>
              <textarea
                id="description"
                placeholder="Enter product description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="p-2 rounded border-0 bg-transparent outline-none text-white placeholder-white dark:placeholder-gray-500 dark:text-white"
              />
            </div>
            <button
              className="bg-white dark:bg-[#0F172A] text-indigo-500 dark:text-white p-2 rounded hover:bg-indigo-500 hover:text-white transition duration-300"
              onClick={handleAddProduct}
            >
              Add SubProduct
            </button>
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

export default AddSubProduct;
