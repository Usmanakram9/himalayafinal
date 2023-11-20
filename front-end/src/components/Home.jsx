import React from 'react';
import { Link } from 'react-scroll';
import '../assets/css/Home.css';
import DotNavigation from './DotNavigation';
import Carousel from './Carousel';
import Services from './Services';
import Testimonials from './Testimonials';
import About from './About';
import Products from './Products';
import Contact from './Contact';
import NewFooter from './NewFooter';

const Home = () => {
  return (
    <>
    <section id='home' className='home'>
      <div className="flex flex-col h-full items-center justify-center mt-0 font-thin tracking-wider">
        <div
          id='himalayasText'
          className="text-white text-4xl md:text-7xl font-bold opacity-50 mb-2 md:mb-4 font-thin tracking-wider animate__animated animate__fadeInLeft"
        >
          Himalayas
        </div>

        <div className="text-white text-4xl md:text-7xl font-bold opacity-100 mb-2 md:mb-4 font-thin tracking-wider animate__animated animate__fadeInLeft">
          Enterprises
        </div>
        <p className="text-white text-center text-base md:text-lg font-thin tracking-wider animate__animated animate__fadeInLeft">
          All types of Marbles in your hands
        </p>

        <div className="mt-44 md:mt-44 flex flex-col items-center">
          <Link
            to="product-carousel"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="text-white text-lg font-thin tracking-wider hover:text-gray-300 cursor-pointer animate-bounce"
          >
            Discover
            <div className="mt-2 ml-12 md:mt-3 h-16 w-0.5 bg-white transform rotate-180"></div>
          </Link>
        </div>

        <div className="mt-8 md:mt-24 flex flex-col items-end fixed right-8 bottom-8">
          <div className="text-white text-xs">
            <div>S</div>
            <div>c</div>
            <div>r</div>
            <div>o</div>
            <div>l</div>
            <div>l</div>
          </div>
          <div className="mt-2 mr-2 h-8 w-0.5 bg-white transform rotate-180"></div>
        </div>
      </div>
    </section>

    <>
    <div>
      <DotNavigation/>
    </div>
    <div className='sticky top-0'>
      <Carousel/>
    </div>
    <div className='sticky top-0'>
     <Services/>
    </div>
    <div className='sticky top-0'>
     <Testimonials/>
    </div>
    <div className='sticky top-0'>
     <About/>
    </div>
    <div>
     <Products/>
    </div>
    <div className='sticky top-0'>
     <Contact/>
    </div>
    <div className='sticky top-0'>
     <NewFooter/>
    </div>
    </>
    </>
  );
};

export default Home;
