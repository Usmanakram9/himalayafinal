import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavbar";
import AdminFooter from "./AdminFooter";
import useProductStore from "../../stores/productStore";
import useSubProductStore from "../../stores/subProductStore";
import Toast, { showSuccessToast, showErrorToast } from "../Toast";

const AddSubProduct = () => {
  const [productName, setProductName] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [buttonName, setButtonName] = useState("Add SubProduct");
  const [selectedSubProductId, setSelectedSubProductId] = useState(null);

  const { data: productData, getProducts } = useProductStore();
  const {
    data: subProductData,
    getSubProducts,
    addSubProduct,
    deleteSubProduct,
    updateSubProduct,
    isLoading: subProductLoading,
    error: subProductError,
  } = useSubProductStore();

  useEffect(() => {
    const fetchData = async () => {
      await getProducts();
      await getSubProducts();
    };

    fetchData();
  }, [getProducts, getSubProducts]);

  console.log(subProductData);
  const handleAddProduct = async () => {
    try {
      if (!selectedProduct || !productName || !description || !selectedFile) {
        throw new Error("Please fill in all fields.");
      }

      // Upload the image first
      const imageFormData = new FormData();
      imageFormData.append("image", selectedFile);
      const { image } = await useSubProductStore
        .getState()
        .uploadImage(imageFormData);

      // Prepare subProduct data
      const subProductData = {
        product: selectedProduct, // Make sure selectedProduct is the correct product ID
        subimage: image,
        subprodname: productName,
        subproddesc: description,
      };

      if (
        !subProductData.subimage ||
        !subProductData.subprodname ||
        !subProductData.subproddesc
      ) {
        throw new Error("Please fill in all fields.");
      }

      if (selectedSubProductId) {
        await updateSubProduct(selectedSubProductId, subProductData);
        showSuccessToast("SubProduct updated successfully!");
      } else {
        // Add new subProduct
        await addSubProduct(subProductData);
        showSuccessToast("SubProduct added successfully!");
      }

      // Clear form fields and reset button state
      setProductName("");
      setSelectedProduct("");
      setDescription("");
      setSelectedFile(null);
      setSelectedSubProductId(null);
      setButtonName("Add SubProduct");

      // Fetch updated subProducts
      getSubProducts();
    } catch (error) {
      showErrorToast(`Error: ${error.message}`);
    }
  };

  const handleDropdownChange = (e) => {
    console.log("Selected Product ID:", e.target.value);
    setSelectedProduct(e.target.value);
  };

  // Deleteing a SubProduct
  const deleteHandler = async (subProductId) => {
    try {
      await deleteSubProduct(subProductId);
      showSuccessToast("Product deleted successfully!");
    } catch (error) {
      showErrorToast(`Error: ${error.message}`);
    }
  };

  // Adding update functionality
  // Adding update functionality
  const editHandler = async (subProduct) => {
    try {
      // Extract the product ID directly
      const productId = subProduct.product._id;
      console.log(productId);
      // Set the correct product ID
      setSelectedProduct(productId);
      setProductName(subProduct.subprodname);
      setDescription(subProduct.subproddesc);
      setSelectedFile(subProduct.subimage);
      setSelectedSubProductId(subProduct._id);
      setButtonName("Update");
    } catch (error) {
      console.error(`Error in editHandler: ${error.message}`);
    }
  };

  return (
    <>
      <AdminNavBar />
      <div className="flex flex-col items-center justify-center h-full">
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
                Select Main Product
              </label>
              <select
                id="selectProduct"
                value={selectedProduct}
                onChange={handleDropdownChange}
                className="p-2 rounded border-0 bg-transparent outline-none text-white placeholder-black dark:placeholder-gray-500 dark:text-black"
              >
                {productData &&
                  productData.map((option) => (
                    <option key={option._id} value={option._id}>
                      {option.nameofproduct}
                    </option>
                  ))}
              </select>
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="image" className="text-white mb-1">
                Upload Image
              </label>
              <input
                type="file"
                id="image"
                onChange={(e) => setSelectedFile(e.target.files[0])}
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
              {buttonName}
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center h-full mt-24">
        <div className="relative w-4/5 overflow-x-auto shadow-md sm:rounded-lg">
          <h1 className="text-4xl text-black text-center mb-12">
            All Sub-Products
          </h1>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Sub Product Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(subProductData) &&
                subProductData.map((subProduct, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {subProduct.product && subProduct.product.nameofproduct
                        ? subProduct.product.nameofproduct
                        : "N/A"}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {subProduct.subprodname}
                    </td>
                    <td className="px-6 py-4">{subProduct.subproddesc}</td>
                    <td className="px-6 py-4">
                      {subProduct.subimage &&
                        typeof subProduct.subimage === "string" && (
                          <img
                            src={subProduct.subimage}
                            alt="SubProduct"
                            className="h-28 w-28"
                          />
                        )}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        onClick={() => editHandler(subProduct)}
                      >
                        Edit
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                        onClick={() => deleteHandler(subProduct._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <Toast />
      <AdminFooter />
    </>
  );
};

export default AddSubProduct;
