// Products.jsx
import React from 'react';
import '../assets/css/Products.css';
import product1 from '../assets/images/product1.jpg';
import product2 from '../assets/images/product2.jpg';
import product3 from '../assets/images/product1.jpg';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <section id="products" className="products-section bg-gray-100 py-10 h-80vh overflow-y-auto">
      <div className="container mt-16 mx-auto flex flex-col items-center justify-center md:mt-16">
        <div className="text-white text-4xl md:text-5xl font-bold opacity-50 mb-2 md:mb-4 font-thin tracking-wider animate__animated animate__fadeInLeft">
          Our Products
        </div>
        <div className="text-white text-lg md:text-xl mt-8 text-center">
          Explore our wide range of high-quality marble products. From classic designs to modern styles, we have something for every project.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {[product1, product2, product3].map((product, index) => (
            <div key={index} className="max-w-md mx-auto bg-transparent outline-1 outline outline-slate-500 text-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl hover:bg-transparent hover:outline-amber-500 hover:outline-1 hover:outline transform hover:scale-105 transition duration-300">
              <img
                src={product}
                alt={`Product ${index + 1}`}
                className="mb-2 w-full h-60 object-cover rounded-md hover:opacity-75 hover:scale-105 transition-all duration-300 cursor-pointer"
              />
              <h2 className="text-lg md:text-xl font-bold mb-2 text-center">Product {index + 1}</h2>
            </div>
          ))}
        </div>
      </div>
      <Link to='/products'>
        <div className="box-1 text-xl w-screen mt-8 flex items-center justify-center">
          <div className="btn btn-one">
            Browse Products
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Products;
