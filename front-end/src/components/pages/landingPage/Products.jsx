import React from 'react';
import { useNavigate } from 'react-router-dom';

import bg from "../../../assets/images/bg.jpg";

const Products = () => {
    const navigate = useNavigate();
  const handleclick = async (e) => {
    e.preventDefault();
    navigate('../SingleProduct');
  }

   
  return (
    <>
      <div className="h-screen md:h-min flex flex-col w-full p-10">
        <div className="flex justify-center items-center flex-col pb-4">
          <div className="head">
            <div className="flex text-gray-500">EXPERIENCE MARBLE LUXURY</div>
          </div>
          <div className="des">
            <div className="flex pt-5 md:text-5xl text-2xl">
              Our most{" "}
              <span className="ml-2 border-b border-b-8 border-cyan-800 mr-2">
                Popular{" "}
              </span>{" "}
              Products
            </div>
          </div>
        </div>

       
          <div className="flex flex-col md:h-1/2 md:flex-row justify-between space-x-2 w-full pb-2">
            <div className="flex w-full ">
              <div className="relative w-full overflow-hidden">
                <img src={bg} className="h-3/4 rounded" alt="asdf" />
                <div className="name">
                  <p className="text-2xl font-bold">Black Granite</p>
                </div>
                <div className="des">
                  <p>Black Series</p>
                </div>
                <div className="price text-1xl font-bold">
                  <p>Rs: 4555 to Rs: 333</p>
                </div>
                <div className="button-container absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <button onClick={handleclick} type="button" className="bg-gradient-to-r from-cyan-600 to-cyan-800 hover:from-cyan-700 hover:to-cyan-900 focus:shadow-outline text-white py-2 px-4 rounded transition-transform transform translate-y-full">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="flex w-full ">
              <div className="relative w-full  overflow-hidden">
                <img src={bg} className="h-3/4 rounded" alt="asdf" />
                <div className="name">
                  <p className="text-2xl font-bold">Black Granite</p>
                </div>
                <div className="des">
                  <p>Black Series</p>
                </div>
                <div className="price text-1xl font-bold">
                  <p>Rs: 4555 to Rs: 333</p>
                </div>
                <div className="button-container absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <button className="bg-gradient-to-r from-cyan-600 to-cyan-800 hover:from-cyan-700 hover:to-cyan-900 focus:shadow-outline text-white py-2 px-4 rounded transition-transform transform translate-y-full">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="flex w-full ">
              <div className="relative w-full  overflow-hidden">
                <img src={bg} className="h-3/4 rounded" alt="asdf" />
                <div className="name">
                  <p className="text-2xl font-bold">Black Granite</p>
                </div>
                <div className="des">
                  <p>Black Series</p>
                </div>
                <div className="price text-1xl font-bold">
                  <p>Rs: 4555 to Rs: 333</p>
                </div>
                <div className="button-container absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <button className="bg-gradient-to-r from-cyan-600 to-cyan-800 hover:from-cyan-700 hover:to-cyan-900 focus:shadow-outline text-white py-2 px-4 rounded transition-transform transform translate-y-full">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            
          </div>

          
       
        <div className="flex justify-center">
        <button  className="border border-2 border-black text-black font-bold hover:bg-black hover:text-white focus:shadow-outline py-2 px-4 rounded transition-colors duration-1000" >
       View All Products
        </button>
      </div>

      </div>
    </>
  );
};

export default Products;
