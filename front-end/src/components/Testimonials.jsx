import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from "../assets/images/electronic.png";
import logo2 from "../assets/images/technology.png";
import logo3 from "../assets/images/nanotechnology.png";
import "../assets/css/Testimonials.css";

const Testimonials = () => {
  const testimonialsData = [
    {
      company: "AENOMTECH",
      logo: logo1,
      comment:
        "The greatest glory in living lies not in never falling, but in rising every time we fall",
      ceo: "Nelson Mandela",
    },
    {
      company: "TALLITECH",
      logo: logo2,
      comment:
        "It is during our darkest moments that we must focus to see the light.",
      ceo: "Aristotle",
    },
    {
      company: "HAWKITECH",
      logo: logo3,
      comment:
        "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
      ceo: "Franklin D. Roosevelt",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 768, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
    ],
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % testimonialsData.length;
      setCurrentSlide(nextSlide);
      sliderRef.current.slickGoTo(nextSlide);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide, testimonialsData.length]);

  return (
    <section
      id="testimonials"
      className="testimonials-section bg-gray-100 py-8 px-4 md:py-10 md:px-4"
    >
      <div className="container mt-16 mx-auto flex flex-col md:flex-row items-center text-center justify-center md:space-x-8 md:mt-32">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="md:text-5xl text-3xl text-white font-bold mb-4 md:mb-4">
            They Trust Us
          </h1>
          <Slider
            {...sliderSettings}
            ref={sliderRef}
            className="h-16 sm:h-24 md:h-32 mt-2 md:mt-28"
          >
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="flex items-center">
                <div className="flex items-center">
                  <img
                    src={testimonial.logo}
                    alt={testimonial.company}
                    className="h-12 mx-2 rounded-full"
                  />
                  <span className="text-black ml-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <p className="text-white text-base md:text-lg mb-4 md:mb-8">
            Over 1000 customers trust us, we have all types of marbles
          </p>
          <div className="flex flex-col md:flex-row gap-x-4 md:gap-x-24 mb-4 md:mb-0">
            <div className="mb-4">
              <div className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
                48+
              </div>
              <div className="text-white text-base md:text-lg">
                Working Hours
              </div>
            </div>
            <div className="mb-4">
              <div className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
                1000+
              </div>
              <div className="text-white text-base md:text-lg">Customers</div>
            </div>
            <div>
              <div className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
                100+
              </div>
              <div className="text-white text-base md:text-lg">Products</div>
            </div>
          </div>
          <div className="mt-4 md:mt-8">
            <p className="text-white text-base md:text-lg">
              {testimonialsData[currentSlide].comment}
            </p>
            <p className="text-white font-bold text-base md:text-lg mt-2">
              -- {testimonialsData[currentSlide].ceo}, CEO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
