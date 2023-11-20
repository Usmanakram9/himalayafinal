import React, { useState } from 'react';

const NewNavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light relative overflow-hidden fixed z-20">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed inset-y-0 z-10 flex flex-col w-80 transition-transform duration-300 text-white`}
      >
        <svg
          className="absolute inset-0 w-full h-full text-black opacity-70"
          style={{ filter: 'drop-shadow(10px 0 10px #00000030)' }}
          preserveAspectRatio="none"
          viewBox="0 0 309 800"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M268.487 0H0V800H247.32C207.957 725 207.975 492.294 268.487 367.647C329 243 314.906 53.4314 268.487 0Z"
          />
        </svg>
        <div
          className={`${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } fixed inset-y-0 z-10 flex flex-col w-80 transition-transform duration-300 text-white`}
        >
          
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="absolute top-6 right-10 p-2 text-white hover:text-gray-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span className="sr-only">Close sidebar</span>
          </button>
          <ul className="mt-20 ml-8 space-y-4">
            <li>
              <a href="#home" className="text-lg text-white hover:text-amber-500">
                Home
              </a>
            </li>
            <li>
              <a href="#product-carousel" className="text-lg text-white hover:text-amber-500">
                Featured Products
              </a>
            </li>
            <li>
              <a href="#services" className="text-lg text-white hover:text-amber-500">
                Services
              </a>
            </li>
            <li>
              <a href="#testimonials" className="text-lg text-white hover:text-amber-500">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#about" className="text-lg text-white hover:text-amber-500">
                About
              </a>
            </li>
            <li>
              <a href="#products" className="text-lg text-white hover:text-amber-500">
                Products
              </a>
            </li>
            <li>
              <a href="#contact" className="text-lg text-white hover:text-amber-500">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Menu Button (Fixed) */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed p-2 text-2xl bg-black text-white rounded-lg top-5 left-5"
      >
        Menu
      </button>
    </div>
  );
};

export default NewNavBar;
