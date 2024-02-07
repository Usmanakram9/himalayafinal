import React from 'react';
import '../assets/css/Services.css';
import '../assets/css/button.css';

const Services = () => {
  return (
    <section id="services" className='services-section'>
      <div className="container mx-auto py-10">
        
        <h1 className="text-4xl text-white font-bold mb-6 text-center mt-16">Services</h1>

        <div className="text-center mb-8">
          <p className="text-white text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-white text-lg">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <hr className="border-t border-gray-300 mt-16" />

        <div className="flex justify-center mt-20">
          {/* Service 1 */}
          <div className="w-1/4 text-center mx-auto">
            <h2 className="text-xl text-white font-bold mb-4">Service 1</h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="box-1">
              <div className="btn btn-one">
                <span>More Details</span>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="w-1/4 text-center mx-auto">
            <h2 className="text-xl text-white font-bold mb-4">Service 2</h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </p>
            <div className="box-1">
              <div className="btn btn-one">
                <span>More Details</span>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="w-1/4 text-center mx-auto">
            <h2 className="text-xl text-white font-bold mb-4">Service 3</h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="box-1">
              <div className="btn btn-one">
                <span>More Details</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Services;
