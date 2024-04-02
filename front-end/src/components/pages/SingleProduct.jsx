import React, { useRef, useEffect, useState } from "react";
import Footer from "../Footer";
import NewNavBar from "../NewNavBar";
import BreadCrump from "../BreadCrump";
import bg from "../../assets/images/bg.jpg";
import bg1 from "../../assets/images/bath.jpg";
import bg2 from "../../assets/images/product2.jpg";
import { CiSearch } from "react-icons/ci";
import "../../assets/css/Product/SingleProduct.css";
import { FaRupeeSign } from "react-icons/fa6";

import MarbleCalculator from "./utils/MarbleCalculator";
const SingleProduct = () => {
  const containerRef = useRef(null);
  const [mainImage, setMainImage] = useState(bg);
  const [showCalculator, setShowCalculator] = useState(false);

  const handleCalculateClick = () => {
    setShowCalculator(true);
  };

  const handleReverseClick = () => {
    setShowCalculator(false);
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("mousemove", handleMouseMove);
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const handleImageClick = (imageSrc) => {
    setMainImage(imageSrc);
  };

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const img = container.querySelector("img");
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;
    img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
  };
  const breadcrumbItems = [{ label: "Single Product" }];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NewNavBar />

      <div className="">
        <BreadCrump items={breadcrumbItems} />
      </div>
      <div className={`${showCalculator ? 'cont' : 'h-screen'} flex p-5 justify-between space-x-6`}>
        <div className="flex w-full">
          <div className="flex flex-col space-y-8 w-1/4 sideImg p-5 ">
            <div className="img">
              <img
                src={bg}
                alt="bg"
                onClick={() => handleImageClick(bg)}
                className={mainImage === bg ? "active" : "inactive"}
              />
            </div>
            <div className="img">
              <img
                src={bg1}
                alt="bg"
                onClick={() => handleImageClick(bg1)}
                className={mainImage === bg1 ? "active" : "inactive"}
              />
            </div>
            <div className="img">
              <img
                src={bg2}
                alt="bg"
                onClick={() => handleImageClick(bg2)}
                className={mainImage === bg2 ? "active" : "inactive"}
              />
            </div>
          </div>
          <div
            className="flex w-3/4 mainImg relative rounded"
            ref={containerRef}
          >
            <img src={mainImage} alt="bg " className={`w-full ${showCalculator ? 'h-3/4' : 'h-h-3/4'}`} />
            <CiSearch className="absolute top-0 right-0 m-2 text-3xl bg-white text-black rounded" />
          </div>
        </div>

        <div className="flex flex-col w-full space-y-4">
        {!showCalculator && (
          <>
          <div className="text-2xl font-bold">Black Granite</div>
         
          <div className="des text-justify">
          Experience the pinnacle of kitchen design – a seamless combination of style, functionality, and craftsmanship. From efficient workspaces to elegant finishes, our kitchen designs are tailored to elevate your culinary experience. Embrace a space that perfectly blends beauty and practicality, creating the heart of your home.
          </div>
          <div className="flex justify-between">
           <p>
           Price
           </p>
           <div className="flex space-x-2">
           <p><FaRupeeSign className="text-2xl" /> </p><p>25.00/-</p>
           </div>
          </div>
          <button className="text-cyan-800" onClick={handleCalculateClick}>Calculate</button>
          </>
      )}

{showCalculator && (
        <>
          <button onClick={handleReverseClick}>Reverse</button>
          <MarbleCalculator />
        </>
      )}
          {/* i picked the marble calculator form here */}


        </div>

      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
