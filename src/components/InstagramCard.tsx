import React from "react";
import heroImg from "../assets/insta.png";
import spoonImage from "../assets/Frame 17.png";

const InstagramCard: React.FC = () => {
  return (
    <div className="relative bg-background text-white min-h-screen flex items-center justify-center py-8 md:py-16 overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left Column - Text and Button */}
        <div className="w-full lg:w-1/3 text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-xl md:text-2xl font-cormorant">Instagram</h2>
          <img
            src={spoonImage}
            alt="Spoon"
            className="w-10 md:w-12 h-auto mx-auto md:mx-0 mb-2"
          />
          <div className="flex items-center justify-center lg:justify-start mb-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary font-cormorant">
              Photo Gallery
            </h1>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed mb-4 md:mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Voluptatem
            mattis ipsum turpis elit, elit scelerisque adipiscing gestas.
          </p>
          <button className="bg-transparent border border-primary text-primary font-semibold py-1 md:py-2 px-3 md:px-4 rounded hover:text-black transition duration-300 text-sm md:text-base">
            View More
          </button>
        </div>

        {/* Right Column - Image Gallery */}
        <div className="w-full h-auto lg:h-[70vh] lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {/* Image 1 */}
          <div className="relative w-full h-40 sm:h-48 md:h-60 lg:h-full">
            <img
              src={heroImg}
              alt="Gallery Image 1"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Image 2 */}
          <div className="relative w-full h-40 sm:h-48 md:h-60 lg:h-full">
            <img
              src={heroImg}
              alt="Gallery Image 2"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Image 3 */}
          <div className="relative w-full h-40 sm:h-48 md:h-60 lg:h-full">
            <img
              src={heroImg}
              alt="Gallery Image 3"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramCard;
