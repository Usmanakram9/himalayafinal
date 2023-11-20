import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/product-screen.css';
import porduct1 from '../assets/images/product1.jpg'
import porduct2 from '../assets/images/product2.jpg'

const ProductsScreen = () => {
  const products = [
    {
      id: 1,
      name: 'Blue Swirl',
      image: porduct1,
    },
    {
      id: 2,
      name: 'Golden Vein',
      image: porduct2,
    },
    {
      id: 3,
      name: 'Crystal Clear',
      image: porduct1,
    },
    {
      id: 4,
      name: 'Red Nebula',
      image: porduct2,
    },
    {
      id: 5,
      name: 'Moonlight Mist',
      image: porduct1,
    },
    {
      id: 6,
      name: 'Silver Mirage',
      image: porduct2,
    },
    {
      id: 7,
      name: 'Rainbow Ripple',
      image: porduct1,
    },
    {
      id: 8,
      name: 'Emerald Elegance',
      image: porduct2,
    },
  ];
  

  return (
    <section id='product-screen' className='product-screen'>
      <Link to="/" className="text-xl text-white w-28 text-center rounded ml-24 mt-20 bg-black mb-4 block">
        Back
      </Link>
      <div className="container mx-auto mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="max-w-md mx-auto bg-transparent outline-1 outline outline-slate-500  text-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl hover:bg-transparent hover:outline-amber-500 hover:outline-1 hover:outline transform hover:scale-105 transition duration-300">
              <div className="relative h-64 w-full overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transform scale-100 transition duration-300 hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                </div>
                <div className="flex space-x-2 text-sm font-medium justify-start mt-4">
                  <button className="transition ease-in duration-300 inline-flex items-center text-sm font-medium bg-transparent outline outline-1 outline-slate-500 px-5 py-2 hover:outline hover:outline-1 hover:outline-amber-500 tracking-wider text-white rounded-full">
                    <span>Buy Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsScreen;
