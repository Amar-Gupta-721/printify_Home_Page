import React from 'react';

const StoreConnections = () => {
  return (
    <div className="bg-white w-full py-16 px-4 md:px-52 text-center">
      {/* Title Section */}
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Connect your store</h2>
      <p className="text-gray-500 text-lg mb-8">
        Printify easily integrates with major e-commerce platforms and marketplaces
      </p>

      {/* Logo Grid */}
      <div className="relative flex justify-center items-center">
        {/* Center Icon */}
        <div className="w-20 h-20 bg-green-500 rounded-lg flex justify-center items-center absolute z-10">
          <img
            src="./Printify.png"
            alt="Center Logo"
            className="w-full h-full rounded-xl"
          />
        </div>

        {/* Other Platform Logos */}
        <div className="grid grid-cols-3 gap-10 md:gap-16 lg:gap-20 mx-auto max-w-screen-lg">
          {/* Top row */}
          <div className="w-20 h-20 bg-gray-100 rounded-lg flex justify-center items-center">
            <img src="./B.png" alt="Logo 1" className="w-full h-full rounded-xl" />
          </div>
          <div className="w-20 h-20 bg-gray-100 rounded-lg flex justify-center items-center">
            <img src="./API.png" alt="Logo 2" className="w-full h-full rounded-xl" />
          </div>
          <div className="w-20 h-20 bg-gray-100 rounded-lg flex justify-center items-center">
            <img src="./Bird.png" alt="Logo 3" className="w-full h-full rounded-xl" />
          </div>

          {/* Middle row (skipping center for the green logo) */}
          <div className="w-20 h-20 bg-gray-100 rounded-lg flex justify-center items-center">
            <img src="./SquareSpace.png" alt="Logo 4" className="w-full h-full rounded-xl" />
          </div>
          {/* Empty div for spacing */}
          <div></div>
          <div className="w-20 h-20 bg-gray-100 rounded-lg flex justify-center items-center">
            <img src="./Woo.png" alt="Logo 5" className="w-full h-full rounded-xl" />
          </div>

          {/* Bottom row */}
          <div className="w-20 h-20 bg-gray-100 rounded-lg flex justify-center items-center">
            <img src="./Wix.png" alt="Logo 6" className="w-full h-full rounded-xl" />
          </div>
          <div className="w-20 h-20 bg-gray-100 rounded-lg flex justify-center items-center">
            <img src="./Shopsy.png" alt="Logo 7" className="w-full h-full rounded-xl" />
          </div>
          <div className="w-20 h-20 bg-gray-100 rounded-lg flex justify-center items-center">
            <img src="./Etsy.png" alt="Logo 8" className="w-full h-full rounded-xl" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center bg-green-200 p-10 rounded-xl mt-16">
        <div className="text-left mb-4 md:mb-0">
          <h2 className="text-green-800 text-2xl font-bold">
            Are you a large business looking for custom solutions?
          </h2>
        </div>
        <div className="flex-shrink-0">
          <button className="text-gray-800 bg-white font-semibold py-2 px-4 rounded shadow-md">
            Talk to sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoreConnections;
