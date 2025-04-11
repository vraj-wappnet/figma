// import React from "react";
// import gImage from "../assets/G (1).png";
// import tomato from "../assets/tomoto.png";
// import logo from "../assets/logo.png";
// import one from "../assets/1.png";
// import vector from "../assets/vector.png";
// import spoonImage from "../assets/Frame 17.png";

// const LaurelsPage: React.FC = () => {
//   return (
//     <div className="relative bg-background text-white min-h-screen flex items-center justify-center py-16 overflow-hidden">
//       {/* Logo at top left corner */}
//       <div className="absolute top-6 left-8 z-20">
//         <img src={logo} alt="Logo" className="w-20 h-20" />
//       </div>

//       <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
//         <div className="w-full lg:w-1/2  lg:ml-14">
//           {/* Awards & Recognition Header (without logo now) */}
//           <div className="mb-8">
//             <div className="ml-1">
//               <h4 className="text-2xl sm:text-3xl font-semibold">
//                 Awards & Recognition
//               </h4>
//               <img
//                 src={spoonImage}
//                 alt="Spoon"
//                 className="w-16 h-auto mx-auto md:mx-0 mb-2"
//               />
//             </div>
//           </div>

//           {/* Laurels */}
//           <h1 className="sm:text-4xl font-cormorant font-bold text-primary mb-8">
//             Our Laurels
//           </h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* First Row */}
//             <div className="flex items-center">
//               <div className="relative w-18 h-18 mr-4">
//                 <img
//                   src={vector}
//                   alt="Number 3"
//                   className="w-17 h-17 object-cover"
//                 />
//                 <img
//                   src={one}
//                   alt="Laurel 3"
//                   className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-9 object-cover opacity-75"
//                 />
//               </div>
//               <p className="text-gray-400 text-sm sm:text-base">
//                 <p className="text-primary font-cormorant">Outstanding Chef</p>{" "}
//                 Lorem ipsum dolor sit amet, consectetur.
//               </p>
//             </div>

//             <div className="flex items-center">
//               <div className="relative w-18 h-18 mr-4">
//                 <img
//                   src={vector}
//                   alt="Number 3"
//                   className="w-17 h-17 object-cover"
//                 />
//                 <img
//                   src={one}
//                   alt="Laurel 3"
//                   className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-9 object-cover opacity-75"
//                 />
//               </div>
//               <p className="text-gray-400 text-sm sm:text-base">
//                 <p className="text-primary font-cormorant"> 1 Rising Star</p>{" "}
//                 Lorem ipsum dolor sit amet, consectetur.
//               </p>
//             </div>

//             {/* Second Row */}
//             <div className="flex items-center">
//               <div className="relative w-18 h-18 mr-4">
//                 <img
//                   src={vector}
//                   alt="Number 3"
//                   className="w-17 h-17 object-cover"
//                 />
//                 <img
//                   src={one}
//                   alt="Laurel 3"
//                   className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-9 object-cover opacity-75"
//                 />
//               </div>
//               <p className="text-gray-400 text-sm sm:text-base">
//                 <p className="text-primary font-cormorant">5 AA Hospitality </p>{" "}
//                 Lorem ipsum dolor sit amet, consectetur.
//               </p>
//             </div>

//             <div className="flex items-center">
//               <div className="relative w-18 h-18 mr-4">
//                 <img
//                   src={vector}
//                   alt="Number 3"
//                   className="w-17 h-17 object-cover"
//                 />
//                 <img
//                   src={one}
//                   alt="Laurel 3"
//                   className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-9 object-cover opacity-75"
//                 />
//               </div>
//               <p className="text-gray-400 text-sm sm:text-base">
//                 <p className="text-primary font-cormorant">
//                   {" "}
//                   3 Outstanding Chef{" "}
//                 </p>{" "}
//                 Lorem ipsum dolor sit amet, consectetur.
//               </p>
//             </div>
//           </div>
//         </div>
//         {/* Right Column - Main Image */}
//         <div className="w-[31vw] relative transform -translate-y-6">
//           <div className="relative max-w-md mx-auto lg:max-w-none">
//             <img
//               src={tomato}
//               alt="Dish"
//               className="w-[28vw] h-auto object-cover rounded-lg shadow-lg"
//             />
//             {/* Larger G image with adjusted positioning */}
//             <div className="absolute bottom-0 left-0 transform -translate-x-[28%] translate-y-[1%]">
//               <img
//                 src={gImage}
//                 alt="G Overlay"
//                 className="w-48 h-48 object-contain"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LaurelsPage;
// src/LaurelsPage.tsx
import React from "react";
import gImage from "../assets/G (1).png";
import tomato from "../assets/tomoto.png";
import logo from "../assets/logo.png";
import one from "../assets/1.png";
import vector from "../assets/vector.png";
import spoonImage from "../assets/Frame 17.png";

const LaurelsPage: React.FC = () => {
  return (
    <div className="relative bg-background text-white min-h-screen flex items-center justify-center py-8 sm:py-16 overflow-hidden">
      {/* Logo at top left corner */}
      <div className="absolute top-4 sm:top-6 left-4 sm:left-8 z-20">
        <img src={logo} alt="Logo" className="w-16 sm:w-20 h-16 sm:h-20" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-12">
        <div className="w-full lg:w-1/2 lg:ml-0 sm:ml-4">
          {/* Awards & Recognition Header */}
          <div className="mb-4 sm:mb-8">
            <div className="ml-1">
              <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                Awards & Recognition
              </h4>
              <img
                src={spoonImage}
                alt="Spoon"
                className="w-12 sm:w-16 h-auto mx-auto md:mx-0 mb-1 sm:mb-2"
              />
            </div>
          </div>

          {/* Laurels */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-cormorant font-bold text-primary mb-4 sm:mb-8">
            Our Laurels
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
            {/* First Row */}
            <div className="flex items-center">
              <div className="relative w-16 sm:w-18 h-16 sm:h-18 mr-2 sm:mr-4">
                <img
                  src={vector}
                  alt="Number 3"
                  className="w-16 sm:w-17 h-16 sm:h-17 object-cover"
                />
                <img
                  src={one}
                  alt="Laurel 3"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 sm:w-4 h-6 sm:h-9 object-cover opacity-75"
                />
              </div>
              <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                <p className="text-primary font-cormorant">Outstanding Chef</p>{" "}
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>

            <div className="flex items-center">
              <div className="relative w-16 sm:w-18 h-16 sm:h-18 mr-2 sm:mr-4">
                <img
                  src={vector}
                  alt="Number 1"
                  className="w-16 sm:w-17 h-16 sm:h-17 object-cover"
                />
                <img
                  src={one}
                  alt="Laurel 1"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 sm:w-4 h-6 sm:h-9 object-cover opacity-75"
                />
              </div>
              <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                <p className="text-primary font-cormorant">1 Rising Star</p>{" "}
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>

            {/* Second Row */}
            <div className="flex items-center">
              <div className="relative w-16 sm:w-18 h-16 sm:h-18 mr-2 sm:mr-4">
                <img
                  src={vector}
                  alt="Number 5"
                  className="w-16 sm:w-17 h-16 sm:h-17 object-cover"
                />
                <img
                  src={one}
                  alt="Laurel 5"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 sm:w-4 h-6 sm:h-9 object-cover opacity-75"
                />
              </div>
              <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                <p className="text-primary font-cormorant">5 AA Hospitality</p>{" "}
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>

            <div className="flex items-center">
              <div className="relative w-16 sm:w-18 h-16 sm:h-18 mr-2 sm:mr-4">
                <img
                  src={vector}
                  alt="Number 3"
                  className="w-16 sm:w-17 h-16 sm:h-17 object-cover"
                />
                <img
                  src={one}
                  alt="Laurel 3"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 sm:w-4 h-6 sm:h-9 object-cover opacity-75"
                />
              </div>
              <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                <p className="text-primary font-cormorant">
                  3 Outstanding Chef
                </p>{" "}
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Main Image */}
        <div className="w-full sm:w-[31vw] lg:w-[31vw] relative transform sm:-translate-y-2 md:-translate-y-6">
          <div className="relative max-w-xs sm:max-w-md mx-auto lg:max-w-none">
            <img
              src={tomato}
              alt="Dish"
              className="w-full sm:w-[28vw] h-auto object-cover rounded-lg shadow-lg"
            />
            {/* Larger G image with adjusted positioning */}
            <div className="absolute bottom-0 left-0 transform -translate-x-[20%] sm:-translate-x-[28%] translate-y-[2%] sm:translate-y-[1%]">
              <img
                src={gImage}
                alt="G Overlay"
                className="w-32 sm:w-48 h-32 sm:h-48 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaurelsPage;
