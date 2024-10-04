import React, { useState } from "react";
import Cards from "./Cards";

const Carousel = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handlePrev = () => {
    setActiveItem((prev) => (prev === 0 ? 1 : 0));
  };

  const handleNext = () => {
    setActiveItem((prev) => (prev === 1 ? 0 : 1));
  };

  return (
    <div id="indicators-carousel" className="relative w-full">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* Item 1 */}
        <div className={`duration-700 ease-in-out ${activeItem === 0 ? 'block' : 'hidden'}`}>
          <Cards />
        </div>
        {/* Item 2 */}
        <div className={`duration-700 ease-in-out ${activeItem === 1 ? 'block' : 'hidden'}`}>
          <Cards />
        </div>
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        <button
          type="button"
          className={`w-3 h-3 rounded-full ${activeItem === 0 ? 'bg-white' : 'bg-gray-300'}`}
          aria-current={activeItem === 0}
          aria-label="Slide 1"
          onClick={() => setActiveItem(0)}
        ></button>
        <button
          type="button"
          className={`w-3 h-3 rounded-full ${activeItem === 1 ? 'bg-white' : 'bg-gray-300'}`}
          aria-current={activeItem === 1}
          aria-label="Slide 2"
          onClick={() => setActiveItem(1)}
        ></button>
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white  group-hover:bg-white group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only text-white">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white group-hover:bg-white group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only text-white">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
