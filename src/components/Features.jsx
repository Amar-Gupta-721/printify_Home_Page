import React from 'react';

const Features = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-8 md:px-16 lg:px-52 py-8 my-24">
      {/* Higher Profits Section */}
      <div className="flex flex-col text-center md:text-left">
        <img src="./higher-profits.svg" alt="Piggy Bank" className="w-20 h-20 md:w-32 md:h-32 mx-auto md:mx-0" />
        <h3 className="text-lg font-semibold mt-4">Higher Profits</h3>
        <p className="text-gray-500 font-semibold mt-2">
          We offer some of the lowest prices in the industry because print providers continuously compete to win your business.
        </p>
      </div>

      {/* Robust Scaling Section */}
      <div className="flex flex-col text-center md:text-left">
        <img src="./robust-scaling.svg" alt="Graph" className="w-20 h-20 md:w-32 md:h-32 mx-auto md:mx-0" />
        <h3 className="text-lg font-semibold mt-4">Robust Scaling</h3>
        <p className="text-gray-500 font-semibold mt-2">
          Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.
        </p>
      </div>

      {/* Best Selection Section */}
      <div className="flex flex-col text-center md:text-left">
        <img src="./best-selection.svg" alt="Smartphone" className="w-20 h-20 md:w-32 md:h-32 mx-auto md:mx-0" />
        <h3 className="text-lg font-semibold mt-4">Best Selection</h3>
        <p className="text-gray-500 font-semibold mt-2">
          With 900+ products and top quality brands, you can choose the best products for your business.
        </p>
      </div>
    </div>
  );
};

export default Features;
