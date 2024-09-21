import React from 'react';

const AllProducts = () => {
  return (
    <div className="bg-transparent py-8 px-4 md:px-16 flex flex-col md:flex-row justify-center items-center bg-gray-100">
      <div className="bg-green-500 rounded-3xl w-4/5 md:w-2/5 sm:w-3/5 flex justify-center items-center">
        <img
          src="./allProducts.png"
          alt="Products"
          className="rounded-3xl w-full h-auto object-cover max-w-xs md:max-w-full"
        />
      </div>

      <div className="md:w-1/2 w-full text-left md:px-16 lg:px-32 py-8 mt-8 md:mt-0 sm:px-8 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-black py-4 md:py-7">
          Easily add your design to a wide range of products
        </h2>
        <p className="text-gray-600 mt-4">
          With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.
        </p>
        <a
          href="#"
          className="text-green-600 mt-6 inline-block hover:underline font-semibold"
        >
          All products &rarr;
        </a>
      </div>
    </div>
  );
};

export default AllProducts;
