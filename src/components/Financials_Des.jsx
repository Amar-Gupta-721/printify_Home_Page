import React from 'react';

const Financials_Des = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-12 lg:mt-24 px-4 lg:px-24 xl:px-48">
      <div className="bg-gray-800 px-8 lg:px-12 xl:px-24 py-8 lg:py-16 rounded-3xl w-full lg:w-1/2 lg:h-4/5">
        <h1 className="text-3xl lg:text-4xl font-bold text-white">Make Money, Risk-Free</h1>
        <p className="text-gray-400 mt-4">You pay for fulfillment only when you make a sale</p>
        
        <div className="bg-gray-900 p-6 lg:p-10 rounded-lg mt-6 lg:mt-8">
          <div className="flex justify-between">
            <p className="text-white text-lg">You sell a t-shirt</p>
            <p className="text-white">$ 30</p>
          </div>
          <div className="flex justify-between mt-4">
            <p className="text-white text-lg">You pay for its production</p>
            <p className="text-white">$ 12</p>
          </div>
          <hr className="my-6 lg:my-8" />
          <div className="flex justify-between mt-4 font-bold">
            <p className="text-green-400">Your profit</p>
            <p className="text-green-400">$ 18</p>
          </div>
        </div>

        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-sm mt-6 lg:mt-8 w-full lg:w-auto">
          Start selling
        </button>
        <p className="text-gray-400 mt-4 text-xs lg:text-sm">100% Free to use - 900+ Products - Largest print network</p>
      </div>

      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
        <img
          src="./Financial_Des.png"
          alt="Woman watering a money plant"
          className="w-3/4 h-auto rounded-xl max-w-xs lg:max-w-full"
        />
      </div>
    </div>
  );
};

export default Financials_Des;
