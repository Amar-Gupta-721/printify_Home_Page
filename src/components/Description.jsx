import React from 'react';

const Description = () => {
  return (
    <div className="container mx-auto px-8 md:px-16 lg:px-48 py-16 md:py-28 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <img
            src="./custom-products.webp"
            alt="T-Shirt"
            className="w-28 h-28 md:w-40 md:h-40 object-contain"
          />
          <h2 className="text-xl font-bold text-green-500 mt-6">CREATE</h2>
          <h2 className="text-lg md:text-xl font-bold">Custom Products</h2>
          <p className="text-gray-500 mt-4 font-semibold text-sm">
            Easily add your designs to a wide range of products using our free tools.
          </p>
        </div>

        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <img
            src="./your-products.webp"
            alt="Tag and Scissors"
            className="w-28 h-28 md:w-40 md:h-40 object-contain"
          />
          <h2 className="text-xl font-bold text-green-500 mt-6">SELL</h2>
          <h2 className="text-lg md:text-xl font-semibold">On Your Terms</h2>
          <p className="text-gray-500 mt-4 font-semibold text-sm">
            You choose the products, sale price, and where to sell.
          </p>
        </div>

        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <img
            src="./fullfillment.webp"
            alt="Notepad"
            className="w-28 h-28 md:w-40 md:h-40 object-contain"
          />
          <h2 className="text-xl font-bold text-green-500 mt-6">WE HANDLE</h2>
          <h2 className="text-lg md:text-xl font-semibold">Fulfillment</h2>
          <p className="text-gray-500 mt-4 font-semibold text-sm">
            Once an order is placed, we automatically handle all the printing and delivery logistics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
