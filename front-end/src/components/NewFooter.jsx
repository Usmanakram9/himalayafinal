import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../assets/css/Footer.css';

const NewFooter = () => {
  return (
    <footer className="bg-transparent outline outline-white outline-1 text-white py-8">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <div className="mb-4">
          <span className="text-4xl font-bold">Himalayas Enterprises</span>
          <p className="text-sm mt-2">© 2023 Your Company. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap justify-center space-x-4">
          <a href="/" className="hover:text-amber-500 transition duration-300 mb-2">Home</a>
          <a href="/" className="hover:text-amber-500 transition duration-300 mb-2">Products</a>
          <a href="/" className="hover:text-amber-500 transition duration-300 mb-2">About Us</a>
          <a href="/" className="hover:text-amber-500 transition duration-300 mb-2">Contact</a>
        </div>
        <div className="mt-4 flex items-center justify-center">
          <p className="text-sm">Follow us:</p>
          <div className="ml-4 flex space-x-4">
            <a href="/" className="text-white hover:text-amber-500 transition duration-300">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="/" className="text-white hover:text-amber-500 transition duration-300">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="/" className="text-white hover:text-amber-500 transition duration-300">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
