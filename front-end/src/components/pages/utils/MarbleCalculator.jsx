import React, { useState } from "react";
import { RiLineHeight } from "react-icons/ri";
import { AiOutlineColumnWidth } from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { GiCrystalShine } from "react-icons/gi";
import { GrMoney } from "react-icons/gr";
import { CgSize } from "react-icons/cg";
import { MdOutlineRoundedCorner } from "react-icons/md";
import useMarbleCalculatorStore from '../../../stores/cartStore';

const MarbleCalculator = ({setPriceData}) => {
  const {
    selectedOption,
    setSelectedOption,
    topOptionChecked,
    setTopOptionChecked,
    edgeOptionChecked,
    setEdgeOptionChecked,
    length,
    setLength,
    width,
    setWidth,
    quantity,
    setQuantity,
    thickness,
    setThickness,
    subTotal,
    setSubTotal,
    resetCalculator,
  } = useMarbleCalculatorStore();

  const handleTopOptionChange = () => {
    setTopOptionChecked(!topOptionChecked);
  };

  const handleEdgeOptionChange = () => {
    setEdgeOptionChecked(!edgeOptionChecked);
  };

  const handleSubmit = () => {
    // console.log('Length:', length);
    // console.log('Width:', width);
    // console.log('Quantity:', quantity);
    // console.log('Thickness:', thickness);
    // console.log('Top Option Checked:', topOptionChecked);
    // console.log('Edge Option Checked:', edgeOptionChecked);
    // console.log('Sub Total:', subTotal);
    const newObj = {
      length,
      width,
      quantity,
      thickness,
      topOptionChecked,
      edgeOptionChecked,
      subTotal,
    }
    setPriceData(newObj);
  };

  return (
    <>
      <div className="flex w-full border-b border-gray-500 text-2xl">
        Measurement Type
      </div>
      <div className="flex items-center justify-center space-x-4 w-full ">
        <div>
          <input
            className="hidden"
            id="sqt"
            type="radio"
            name="radio"
            checked={selectedOption === "sqt"}
            onChange={() => setSelectedOption("sqt")}
          />
          <label
            className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer"
            htmlFor="sqt"
          >
            <span className="text-xs font-semibold uppercase">Square Foot</span>
          </label>
        </div>
        <div>
          <input
            className="hidden"
            id="rft"
            type="radio"
            name="radio"
            checked={selectedOption === "rft"}
            onChange={() => setSelectedOption("rft")}
          />
          <label
            className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer"
            htmlFor="rft"
          >
            <span className="text-xs font-semibold uppercase">
              Running Foot
            </span>
          </label>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex w-full border-b border-gray-500 text-2xl">
          Size
        </div>

        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mt-2 mb-4">
          <RiLineHeight />
          <input
            className="pl-2 outline-none border-none"
            type="text"
            name=""
            id=""
            placeholder="Length"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <AiOutlineColumnWidth />
          <input
            className="pl-2 outline-none border-none"
            type="text"
            name=""
            id=""
            placeholder="Width"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </div>

        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mt-2 mb-4">
          <MdOutlineProductionQuantityLimits />
          <input
            className="pl-2 outline-none border-none"
            type="text"
            name=""
            id=""
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <CgSize />
          <input
            className="pl-2 outline-none border-none"
            type="text"
            name=""
            id=""
            placeholder="Thickness"
            value={thickness}
            onChange={(e) => setThickness(e.target.value)}
          />
        </div>

        <div className="flex w-full border-b border-gray-500 text-2xl">
          Poolish
        </div>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mt-2 mb-4">
          <ul className="flex w-full justify-evenly">
            <li>
              <input
                type="checkbox"
                id="Top-option"
                value=""
                className="hidden peer"
                required=""
                checked={topOptionChecked}
                onChange={handleTopOptionChange}
              />
              <label
                htmlFor="Top-option"
                className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer  peer-checked:border-black  peer-checked:text-gray-600"
              >
                <div className="block">
                  <GiCrystalShine className="w-7 h-7" />{" "}
                  <div className="w-full text-lg font-semibold">
                    Top Poolish
                  </div>
                </div>
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="Edge-option"
                value=""
                className="hidden peer"
                required=""
                checked={edgeOptionChecked}
                onChange={handleEdgeOptionChange}
              />
              <label
                htmlFor="Edge-option"
                className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer  peer-checked:border-black  peer-checked:text-gray-600"
              >
                <div className="block">
                  <MdOutlineRoundedCorner className="w-7 h-7" />{" "}
                  <div className="w-full text-lg font-semibold">
                    Edge Poolish
                  </div>
                </div>
              </label>
            </li>
          </ul>
        </div>

        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mt-2 mb-4">
          <GrMoney />
          <input
            className="pl-2 outline-none border-none"
            type="text"
            name=""
            id=""
            placeholder="Sub Total"
            value={subTotal}
            onChange={(e) => setSubTotal(e.target.value)}
          />
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default MarbleCalculator;
