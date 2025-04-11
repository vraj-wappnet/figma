// import chefImage from "../assets/chef.png"; // Replace with your chef image path
// import signatureImage from "../assets/Kevin Luo.png"; // Replace with your signature image path
// import badgeImage from "../assets/“.png"; // Replace with your "JEJ" badge image path
// import spoonImage from "../assets/Frame 17.png"; // Replace with the path to your spoon image

// const ChefBeliefPage = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-background text-white">
//       {/* Left Section - Image */}
//       <div className="relative w-[37vw]  p-4">
//         <div className=" bg-gray-800 p-4 rounded-lg">
//           <img
//             src={chefImage}
//             alt="Chef Kevin Luo"
//             className="w-full h-auto object-cover"
//           />
//         </div>
//       </div>

//       {/* Right Section - Text, Badge, and Signature */}
//       <div className="w-[50vw] h-[70vh] p-4">
//         <div className="bg-gray-800 p-6 rounded-lg">
//           <h2 className="text-2xl font-bold text-primary mb-2">Chef's Word</h2>
//           <img
//             src={spoonImage}
//             alt="Spoon"
//             className="w-16 h-auto mx-auto md:mx-0 mb-2" // Adjust size and centering
//           />
//           <h1 className="title font-cormorant text-primary text-3xl md:text-5xl font-bold mb-4">
//             What we believe in
//           </h1>{" "}
//           <div className="space-y-4 mt-12">
//             <p className="text-gray-300">
//               <img
//                 src={badgeImage}
//                 alt="JEJ Badge"
//                 className="w-8 h-7 inline-block align-top mr-2"
//               />
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
//               velit nulla, lobortis a mauris eget, scelerisque interdum arcu.
//               Vivamus nulla lobortis mauris eget, scelerisque interdum arcu.
//               Congue lacinia integer consectetur semper sit.
//             </p>
//           </div>
//           <p className="mt-4 text-gray-400">Kevin Luo</p>
//           <p className="text-gray-400">Chef & Founder</p>
//           <div className="mt-6">
//             <img
//               src={signatureImage}
//               alt="Signature"
//               className="w-[15vw] h-auto"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChefBeliefPage;

// src/ChefBeliefPage.tsx
import React from "react";
import chefImage from "../assets/chef.png"; // Replace with your chef image path
import signatureImage from "../assets/Kevin Luo.png"; // Replace with your signature image path
import badgeImage from "../assets/“.png"; // Replace with your "JEJ" badge image path
import spoonImage from "../assets/Frame 17.png"; // Replace with the path to your spoon image

const ChefBeliefPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-white py-8 sm:py-16 overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-12">
        {/* Left Section - Image */}
        <div className="w-full sm:w-[37vw] lg:w-[35vw] p-2 sm:p-4">
          <div className="bg-gray-800 p-2 sm:p-4 rounded-lg">
            <img
              src={chefImage}
              alt="Chef Kevin Luo"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right Section - Text, Badge, and Signature */}
        <div className="w-full sm:w-[50vw] lg:w-[50vw] h-auto sm:h-[70vh] p-2 sm:p-4">
          <div className="bg-gray-800 p-2 sm:p-6 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-1 sm:mb-2">
              Chef's Word
            </h2>
            <img
              src={spoonImage}
              alt="Spoon"
              className="w-10 sm:w-16 h-auto mx-auto mb-1 sm:mb-2" // Smaller on small screens
            />
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-cormorant text-primary font-bold mb-2 sm:mb-4">
              What we believe in
            </h1>
            <div className="space-y-2 sm:space-y-4 mt-6 sm:mt-12">
              <p className="text-gray-300 text-sm sm:text-base">
                <img
                  src={badgeImage}
                  alt="JEJ Badge"
                  className="w-6 sm:w-8 h-5 sm:h-7 inline-block align-top mr-1 sm:mr-2"
                />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                velit nulla, lobortis a mauris eget, scelerisque interdum arcu.
                Vivamus nulla lobortis mauris eget, scelerisque interdum arcu.
                Congue lacinia integer consectetur semper sit.
              </p>
            </div>
            <p className="mt-2 sm:mt-4 text-gray-400 text-sm sm:text-base">
              Kevin Luo
            </p>
            <p className="text-gray-400 text-sm sm:text-base">Chef & Founder</p>
            <div className="mt-4 sm:mt-6">
              <img
                src={signatureImage}
                alt="Signature"
                className="w-[30vw] sm:w-[15vw] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefBeliefPage;
