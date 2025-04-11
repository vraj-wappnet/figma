// // import React from "react";
// // import cocktailImage from "../assets/img.svg"; // Replace with your cocktail image path
// // import spoonImage from "../assets/Frame 17.png";

// // const FindUsPage: React.FC = () => {
// //   return (
// //     <div className="relative bg-background text-white min-h-screen flex items-center justify-center py-16 overflow-hidden">
// //       {/* Left Column - Text and Button */}
// //       <div className="w-[53vw] h-[60vh] text-center lg:text-left">
// //         <div className="mb-4">
// //           <h2 className="text-gray text-4xl sm:text-3xl mb-2 font-cormorant">
// //             {" "}
// //             {/* Increased from text-4xl */}
// //             Contact
// //           </h2>
// //           <img
// //             src={spoonImage}
// //             alt="Spoon"
// //             className="w-8 sm:w-10 h-auto mx-auto md:mx-0 mb-1 sm:mb-2"
// //           />
// //           <h2 className="text-4xl sm:text-5xl font-semibold text-primary mb-6 font-cormorant">
// //             Find Us
// //           </h2>
// //         </div>
// //         <p className="text-gray-400 text-sm sm:text-base mb-4">
// //           Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
// //         </p>
// //         <p className="text-gray-400 text-sm sm:text-base mb-6">
// //           <span>Opening Hours</span>
// //           <br />
// //           Mon - Fri: 10:00 am - 02:00 am
// //           <br />
// //           Sat - Sun: 10:00 am - 03:00 am
// //         </p>
// //         <button className="bg-transparent border border-primary text-primary font-semibold py-2 px-4 rounded hover:bg-yellow-400 hover:text-black transition duration-300">
// //           Visit Us
// //         </button>
// //       </div>

// //       {/* Right Column - Image */}
// //       <div className="w-[36vw] h-[90vh] relative">
// //         <div className="relative">
// //           <img
// //             src={cocktailImage}
// //             alt="Cocktail"
// //             className="w-full h-auto object-cover rounded-lg shadow-lg"
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FindUsPage;

// // src/FindUsPage.tsx
// import React from "react";
// import cocktailImage from "../assets/img.svg"; // Replace with your cocktail image path
// import spoonImage from "../assets/Frame 17.png";

// const FindUsPage: React.FC = () => {
//   return (
//     <div className="relative bg-background text-white min-h-screen flex items-center justify-center py-8 sm:py-16 overflow-hidden">
//       {/* Main Content */}
//       <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-12">
//         {/* Left Column - Text and Button */}
//         <div className="w-full sm:w-[53vw] h-auto sm:h-[60vh] text-center sm:text-left">
//           <div className="mb-2 sm:mb-4">
//             <h2 className="text-gray-400 text-2xl sm:text-3xl md:text-4xl mb-1 font-cormorant">
//               Contact
//             </h2>
//             <img
//               src={spoonImage}
//               alt="Spoon"
//               className="w-6 sm:w-8 md:w-10 h-auto mx-auto md:mx-0 mb-1 sm:mb-2"
//             />
//             <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-primary mb-3 sm:mb-6 font-cormorant">
//               Find Us
//             </h2>
//           </div>
//           <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-2 sm:mb-4">
//             Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
//           </p>
//           <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-3 sm:mb-6">
//             <span>Opening Hours</span>
//             <br />
//             Mon - Fri: 10:00 am - 02:00 am
//             <br />
//             Sat - Sun: 10:00 am - 03:00 am
//           </p>
//           <button className="bg-transparent border border-primary text-primary font-semibold py-1 sm:py-2 px-2 sm:px-4 rounded text-xs sm:text-base hover:bg-yellow-400 hover:text-black transition duration-300">
//             Visit Us
//           </button>
//         </div>

//         {/* Right Column - Image */}
//         <div className="w-full sm:w-[36vw] h-[60vh] sm:h-[90vh] relative mt-6 sm:mt-0">
//           <div className="relative">
//             <img
//               src={cocktailImage}
//               alt="Cocktail"
//               className="w-full h-full object-cover rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FindUsPage;
// src/FindUsPage.tsx
import React from "react";
import cocktailImage from "../assets/img.svg"; // Replace with your cocktail image path
import spoonImage from "../assets/Frame 17.png";

const FindUsPage: React.FC = () => {
  return (
    <div className="relative bg-background text-white min-h-screen flex items-center justify-center py-8 sm:py-12 md:py-16 overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-8 flex flex-col sm:flex-row md:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-12">
        {/* Left Column - Text and Button */}
        <div className="w-full sm:w-[53vw] md:w-[45vw] lg:w-[45vw] h-auto sm:h-[60vh] md:h-[70vh] text-center sm:text-left">
          <div className="mb-2 sm:mb-3 md:mb-4">
            <h2 className="text-gray-400 text-xl sm:text-2xl md:text-3xl mb-1 font-cormorant">
              Contact
            </h2>
            <img
              src={spoonImage}
              alt="Spoon"
              className="w-6 sm:w-8 md:w-10 lg:w-12 h-auto mx-auto md:mx-0 mb-1 sm:mb-1 md:mb-2"
            />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-3 sm:mb-4 md:mb-6 font-cormorant">
              Find Us
            </h2>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-2 sm:mb-3 md:mb-4">
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
          </p>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6">
            <span>Opening Hours</span>
            <br />
            Mon - Fri: 10:00 am - 02:00 am
            <br />
            Sat - Sun: 10:00 am - 03:00 am
          </p>
          <button className="bg-transparent border border-primary text-primary font-semibold py-1 sm:py-1 md:py-2 px-2 sm:px-3 md:px-4 rounded text-xs sm:text-sm md:text-base hover:bg-yellow-400 hover:text-black transition duration-300">
            Visit Us
          </button>
        </div>

        {/* Right Column - Image */}
        <div className="w-full sm:w-[36vw] md:w-[40vw] lg:w-[36vw] h-[60vh] sm:h-[70vh] md:h-[85vh] lg:h-[90vh] relative mt-4 sm:mt-0 md:mt-0">
          <div className="relative">
            <img
              src={cocktailImage}
              alt="Cocktail"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindUsPage;
