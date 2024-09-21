import React from 'react';
import { FaCheck } from "react-icons/fa6";
import { FaRegPlayCircle } from "react-icons/fa";

const Main = () => {
  return (
    <div className="container flex flex-col md:flex-row items-center justify-center min-h-screen pt-24 py-16 px-6 md:px-24">
      <div className="flex flex-col text-left md:px-20 mt-12 md:mt-8">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Create and sell <br /> custom products
        </h1>
        <ul className="list-none ml-3 text-left font-bold text-neutral-600 mb-8">
          <li className="flex items-center my-2">
            <span className="mr-2 text-green-500 text-2xl"><FaCheck /></span>
            <span>100% Free to use</span>
          </li>
          <li className="flex items-center my-2">
            <span className="mr-2 text-green-500 text-2xl"><FaCheck /></span>
            <span>900+ High-Quality Products</span>
          </li>
          <li className="flex items-center my-2">
            <span className="mr-2 text-green-500 text-2xl"><FaCheck /></span>
            <span>Largest global print network</span>
          </li>
        </ul>

        <div className="flex mt-8">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 mr-4 rounded">
            Start for free
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded flex items-center">
            <span className="mr-2 text-2xl"><FaRegPlayCircle /></span>
            <span>How it works?</span>
          </button>
        </div>
        <p className="mt-4 text-green-500 font-bold">
          Trusted by over 8M sellers around the world
        </p>
      </div>
      <div className="mt-12 md:mt-6">
        <img
          src="./main_img.png"
          alt="T-shirt mockup"
          className="max-w-full h-auto rounded-md"
        />
      </div>
    </div>
  );
}

export default Main;
