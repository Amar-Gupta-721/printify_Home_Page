import React, { useState } from 'react';

const Feedback = () => {
  const testimonials = [
    {
      name: 'Robert A. Voltaire',
      title: 'Store link',
      image: './person.png',
      quote: 'Printify has been an incredible service for us musicians unable to keep large amount of inventory...',
    },
    {
      name: 'Quinten Barney',
      title: 'Store link',
      image: './person.png',
      quote: 'Printify has been an incredible service for us musicians unable to keep large amount of inventory...',
    },
    {
      name: 'Nikki',
      title: 'Store link',
      image: './person.png',
      quote: 'Printify has been an incredible service for us musicians unable to keep large amount of inventory...',
    },
    {
      name: 'Spencer, Brett, and Kyle',
      title: 'Store link',
      image: './person.png',
      quote: 'Printify has been an incredible service for us musicians unable to keep large amount of inventory...',
    },
    {
      name: 'April Showers',
      title: 'Store link',
      image: './person.png',
      quote: 'Printify has been an incredible service for us musicians unable to keep large amount of inventory...',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const feedbacksToShow = 3;

  const handleRightClick = () => {
    if (currentIndex + feedbacksToShow < testimonials.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleLeftClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="container mx-auto px-6 md:px-16 lg:px-28 py-8 md:py-16 bg-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12">
        <div className="md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
          <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left mb-4 text-neutral-700">
            Trusted by over 8M sellers around the world
          </h2>
        </div>
        <div className="md:w-1/2 lg:w-1/3">
          <p className="text-center md:text-left text-gray-500">
            Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button
          onClick={handleLeftClick}
          className="mr-4 bg-gray-300 hover:bg-gray-400 text-gray-400 font-bold py-2 px-2 rounded-full transition-transform transform hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.slice(currentIndex, currentIndex + feedbacksToShow).map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center justify-center bg-white p-4 md:p-5 rounded-lg shadow-lg">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
              />
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674h4.908c.969 0 1.371 1.24.588 1.81l-3.974 2.888 1.518 4.674c.3.921-.755 1.688-1.538 1.117L10 14.427l-3.974 2.888c-.783.57-1.838-.196-1.538-1.117l1.518-4.674-3.974-2.888c-.783-.57-.38-1.81.588-1.81h4.908l1.518-4.674z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-md md:text-lg font-semibold mt-4">{testimonial.name}</h3>
              <p className="text-gray-500 mt-2">{testimonial.title}</p>
              <p className="text-gray-700 mt-4 text-center px-4">{testimonial.quote}</p>
            </div>
          ))}
        </div>

        <button
          onClick={handleRightClick}
          className="ml-4 bg-gray-300 hover:bg-gray-400 text-gray-400 font-bold py-2 px-2 rounded-full transition-transform transform hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Feedback;
