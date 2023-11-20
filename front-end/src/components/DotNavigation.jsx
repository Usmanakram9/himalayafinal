import React, { useState, useEffect, useRef } from 'react';

const DotNavigation = () => {
  const [activeDot, setActiveDot] = useState(1);
  const dotRefs = useRef([]);

  const handleDotClick = (dotNumber) => {
    setActiveDot(dotNumber);

    const sectionIds = ['home', 'product-carousel', 'services', 'testimonials', 'about', 'products', 'contact'];
    const sectionId = sectionIds[dotNumber - 1];
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const sectionIds = ['home', 'product-carousel', 'services', 'testimonials', 'about', 'products', 'contact'];

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust as needed, this is the percentage of the target element visible in the root
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const activeSectionIndex = sectionIds.indexOf(entry.target.id);
          setActiveDot(activeSectionIndex + 1);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sectionIds.forEach((sectionId, index) => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        observer.observe(sectionElement);
        dotRefs.current[index] = sectionElement;
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const renderDots = (totalDots) => {
    const dots = [];
    for (let i = 1; i <= totalDots; i++) {
      dots.push(
        <button
          key={i}
          onClick={() => handleDotClick(i)}
          ref={(ref) => (dotRefs.current[i - 1] = ref)}
          className={`h-2 w-2 mx-2 my-1 rounded-full transition-transform ${
            i === activeDot
              ? 'bg-black ring ring-amber-700 animate-ping transform scale-105'
              : 'bg-gray-300'
          }`}
        ></button>
      );
    }
    return dots;
  };

  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 flex flex-col items-center justify-center mr-6 z-20">
      <div className="h-12 w-0.5 bg-white my-2"></div>
      {renderDots(7)}
      <div className="h-12 w-0.5 bg-white my-2"></div>
    </div>
  );
};

export default DotNavigation;
