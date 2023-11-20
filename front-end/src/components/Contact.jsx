import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section bg-gray-100 py-6 md:py-10">
      <div className="container mt-16 mx-auto flex-col items-center justify-center mb-52 md:mt-32">
        <div className="text-white text-center text-3xl md:text-5xl font-bold opacity-50 mb-2 md:mb-4 font-thin tracking-wider animate__animated animate__fadeInLeft">
          Contact Us
        </div>
        <div className="text-white text-base md:text-xl mt-4 md:mt-8 text-center">
          Have questions or inquiries? Reach out to us using the contact information below or fill out the form.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-8">
          {/* Contact Info 1 */}
          <div className="text-white text-center mb-4 md:mb-8 flex flex-col justify-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" color="white" className="mb-2" />
            <h2 className="text-md md:text-xl font-bold mb-2">Visit Us</h2>
            <p className="text-xs md:text-sm min-h-[60px]">123 Marble Street, Cityville, Country</p>
          </div>

          {/* Contact Info 2 */}
          <div className="text-white text-center mb-4 md:mb-8 flex flex-col justify-center">
            <FontAwesomeIcon icon={faPhone} size="2x" color="white" className="mb-2" />
            <h2 className="text-md md:text-xl font-bold mb-2">Call Us</h2>
            <p className="text-xs md:text-sm min-h-[60px]">+1 (555) 123-4567</p>
          </div>

          {/* Contact Info 3 */}
          <div className="text-white text-center mb-4 md:mb-8 flex flex-col justify-center">
            <FontAwesomeIcon icon={faEnvelope} size="2x" color="white" className="mb-2" />
            <h2 className="text-md md:text-xl font-bold mb-2">Email Us</h2>
            <p className="text-xs md:text-sm min-h-[60px]">info@example.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-8 w-full max-w-md mx-auto">
          <form className="bg-transparent shadow-md rounded px-8 pt-6 pb-32">
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border bg-transparent rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline focus:border-none focus:outline-amber-500"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border bg-transparent rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline focus:border-none focus:outline-amber-500"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded bg-transparent w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline focus:border-none focus:outline-amber-500 h-32 resize-none"
                id="message"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="flex items-center justify-end">
            <button
              className="bg-transparent outline-slate-600 hover:bg-transparent hover:outline-amber-500 border hover:border-amber-500 text-white font-bold py-2 px-4 rounded transition duration-300"
              type="button"
            >
              Send
            </button>

            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
