// // src/TermsPage.tsx
// import React from "react";
// import logoImage from "../assets/hl-2383902358 1.png"; // Replace with your logo image path
// import instagramIcon from "../assets/ig.png"; // Replace with your Instagram icon path
// import globeIcon from "../assets/react.svg"; // Replace with your globe/website icon path

// const TermsPage: React.FC = () => {
//   return (
//     <div className="relative bg-background text-white min-h-screen flex items-center justify-center py-16 overflow-hidden">
//       {/* Main Content */}
//       <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start justify-between gap-12">
//         {/* Left Column - Logo and Contact */}
//         <div className="w-full lg:w-1/3 text-center -mt-9 lg:text-left">
//           <div className="mb-6">
//             <div className="relative w-60 h-60 mx-auto">
//               <img
//                 src={logoImage}
//                 alt="Logo"
//                 className="w-40 h-40 object-cover rounded-full"
//               />
//             </div>

//             <h3 className="text-primary font-poppins text-sm mt-6">
//               Contact Us
//             </h3>
//             <p className="text-gray-400 text-sm">hello@iqonic.design</p>
//             <div className="mt-40">
//               <p className="text-primary text-sm">Visit Us:</p>
//               <div className="flex items-center justify-center lg:justify-start gap-2 mt-2">
//                 <img
//                   src={instagramIcon}
//                   alt="Instagram"
//                   className="w-4 h-4 sm:w-5 sm:h-5"
//                 />
//                 <a
//                   href="https://instagram.com/iqonicdesign"
//                   className="text-gray-400 text-sm hover:text-primary"
//                 >
//                   instagram.com/iqonicdesign
//                 </a>
//               </div>
//               <div className="flex items-center justify-center lg:justify-start gap-2 mt-2">
//                 <img
//                   src={globeIcon}
//                   alt="Website"
//                   className="w-4 h-4 sm:w-5 sm:h-5"
//                 />
//                 <a
//                   href="https://iqonic.design"
//                   className="text-gray-400 text-sm hover:text-primary"
//                 >
//                   iqonic.design
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Column - Terms */}
//         <div className="w-full lg:w-2/3 text-center lg:text-left">
//           <h1 className="text-4xl sm:text-5xl font-bold mb-8">Terms</h1>
//           <div className="space-y-32">
//             <div className="mt-44">
//               <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-yellow-400">
//                 Allowed to
//               </h2>
//               <ul className="list-none space-y-2 text-gray-400 text-sm sm:text-base">
//                 <li className="flex items-center">
//                   <span className="text-green-500 mr-2">✔</span> Use in personal
//                   and commercial projects
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-yellow-400">
//                 Not allowed to
//               </h2>
//               <ul className="list-none space-y-2 text-gray-400 text-sm sm:text-base">
//                 <li className="flex items-center">
//                   <span className="text-red-500 mr-2">✘</span> Use or edit any
//                   illustration/images within this illustration kit to be used on
//                   any other free or paid illustration or UI kit
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TermsPage;

// src/TermsPage.tsx
import React from "react";
import logoImage from "../assets/hl-2383902358 1.png";
import instagramIcon from "../assets/ig.png";
import globeIcon from "../assets/react.svg";

const TermsPage: React.FC = () => {
  return (
    <div className="relative bg-background text-white min-h-screen flex items-center justify-center py-8 md:py-16 overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start justify-between gap-8 md:gap-12">
        {/* Left Column - Logo and Contact */}
        <div className="w-full lg:w-1/3 text-center lg:text-left -mt-4 md:-mt-9">
          <div className="mb-6">
            <div className="relative w-40 h-40 md:w-60 md:h-60 mx-auto">
              <img
                src={logoImage}
                alt="Logo"
                className="w-40 h-40 object-cover rounded-full"
              />
            </div>

            <h3 className="text-primary font-poppins text-sm mt-4 md:mt-6">
              Contact Us
            </h3>
            <p className="text-gray-400 text-xs md:text-sm">
              hello@iqonic.design
            </p>
            <div className="mt-20 md:mt-40">
              <p className="text-primary text-xs md:text-sm">Visit Us:</p>
              <div className="flex items-center justify-center lg:justify-start gap-2 mt-1 md:mt-2">
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="w-3 h-3 sm:w-4 md:w-5 md:h-5"
                />
                <a
                  href="https://instagram.com/iqonicdesign"
                  className="text-gray-400 text-xs md:text-sm hover:text-primary break-all"
                >
                  instagram.com/iqonicdesign
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 mt-1 md:mt-2">
                <img
                  src={globeIcon}
                  alt="Website"
                  className="w-3 h-3 sm:w-4 md:w-5 md:h-5"
                />
                <a
                  href="https://iqonic.design"
                  className="text-gray-400 text-xs md:text-sm hover:text-primary"
                >
                  iqonic.design
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Terms */}
        <div className="w-full lg:w-2/3 text-center lg:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8">
            Terms
          </h1>
          <div className="space-y-16 md:space-y-22">
            <div className="mt-20 md:mt-44">
              <h2 className="text-lg sm:text-xl md:text-3xl font-semibold mb-3 md:mb-4 text-yellow-400">
                Allowed to
              </h2>
              <ul className="list-none space-y-1 md:space-y-2 text-gray-400 text-xs sm:text-sm md:text-base">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✔</span>
                  Use in personal and commercial projects
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl md:text-3xl font-semibold mb-3 md:mb-4 text-yellow-400">
                Not allowed to
              </h2>
              <ul className="list-none space-y-1 md:space-y-2 text-gray-400 text-xs sm:text-sm md:text-base">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">✘</span>
                  Use or edit any illustration/images within this illustration
                  kit to be used on any other free or paid illustration or UI
                  kit
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
