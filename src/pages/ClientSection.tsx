// import { useState, useEffect, useRef } from "react";
// import peopleIcon from "../assets/i1.png";
// import buildingIcon from "../assets/i2.png";
// import groupIcon from "../assets/i3.png";
// import logo1 from "../assets/l1.png";
// import logo2 from "../assets/l2.png";
// import logo3 from "../assets/l3.png";

// const ClientSection = () => {
//   const logoGroups = [
//     [logo1, logo2, logo3, logo1, logo3],
//     [logo2, logo3, logo1, logo2, logo1],
//     [logo3, logo1, logo2, logo3, logo2],
//   ];

//   const [currentLogoSet, setCurrentLogoSet] = useState(0);
//   const [transitioning, setTransitioning] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);
//   const intervalRef = useRef<number | null>(null);

//   useEffect(() => {
//     const startAnimation = () => {
//       if (intervalRef.current) clearInterval(intervalRef.current);

//       intervalRef.current = setInterval(() => {
//         if (!isPaused) {
//           setTransitioning(true);
//           setTimeout(() => {
//             setCurrentLogoSet((prev) => (prev + 1) % logoGroups.length);
//             setTransitioning(false);
//           }, 1000); // Transition duration
//         }
//       }, 3000); // Change every 3 seconds
//     };

//     startAnimation();
//     return () => {
//       if (intervalRef.current) clearInterval(intervalRef.current);
//     };
//   }, [isPaused]);

//   const handleMouseEnter = () => {
//     setIsPaused(true);
//   };

//   const handleMouseLeave = () => {
//     setIsPaused(false);
//   };

//   return (
//     <div className="min-h-screen bg-white bg-center">
//       <div className="container mx-auto px-4 py-16 text-center">
//         {/* Our Clients Section */}
//         <div className="mb-12">
//           <h2 className="text-3xl text-black mb-4 font-semibold">
//             Our Clients
//           </h2>
//           <p className="text-sm text-gray-500 mb-6">
//             We have been working with some Fortune 500+ clients
//           </p>

//           <div
//             className="flex justify-center items-center h-24"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             {logoGroups[currentLogoSet].map((logo, index) => (
//               <div
//                 key={index}
//                 className={`mx-4 md:mx-8 transition-all duration-1000 ease-in-out ${
//                   transitioning
//                     ? "opacity-0 scale-90 translate-y-2"
//                     : "opacity-100 scale-100 translate-y-0"
//                 } hover:scale-110`}
//                 style={{
//                   transitionDelay: `${index * 100}ms`,
//                   width: "80px",
//                   height: "40px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <img
//                   src={logo}
//                   alt={`Client Logo ${index + 1}`}
//                   className="max-h-full max-w-full object-contain"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Rest of your component remains the same */}
//         <div className="mb-12">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//             Manage your entire community in a single system
//           </h1>
//           <p className="text-lg text-gray-600">Who is Nexcent suitable for?</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="flex flex-col items-center">
//             <img
//               src={peopleIcon}
//               alt="Membership Icon"
//               className="w-16 h-16 mb-4"
//             />
//             <h3 className="text-xl font-semibold text-gray-800">
//               Membership Organisations
//             </h3>
//           </div>
//           <div className="flex flex-col items-center">
//             <img
//               src={buildingIcon}
//               alt="National Associations Icon"
//               className="w-16 h-16 mb-4"
//             />
//             <h3 className="text-xl font-semibold text-gray-800">
//               National Associations
//             </h3>
//           </div>
//           <div className="flex flex-col items-center">
//             <img
//               src={groupIcon}
//               alt="Clubs and Groups Icon"
//               className="w-16 h-16 mb-4"
//             />
//             <h3 className="text-xl font-semibold text-gray-800">
//               Clubs And Groups
//             </h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClientSection;

import { useState, useEffect, useRef } from "react";
import peopleIcon from "../assets/i1.png";
import buildingIcon from "../assets/i2.png";
import groupIcon from "../assets/i3.png";
import logo1 from "../assets/l1.png";
import logo2 from "../assets/l2.png";
import logo3 from "../assets/l3.png";

const ClientSection = () => {
  // All logos in a flat array for the carousel
  const allLogos = [
    logo1,
    logo2,
    logo3,
    logo1,
    logo2,
    logo3,
    logo1,
    logo2,
    logo3,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

  // Number of logos to show at once (responsive)
  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 2; // Small mobile
      if (window.innerWidth < 768) return 3; // Mobile
      if (window.innerWidth < 1024) return 4; // Tablet
      return 5; // Desktop
    }
    return 5; // Default for SSR
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Carousel auto-slide functionality
  useEffect(() => {
    const startCarousel = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        if (!isPaused) {
          moveCarousel(1);
        }
      }, 3000); // Change every 3 seconds
    };

    startCarousel();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, visibleCount]);

  // Function to move the carousel
  const moveCarousel = (direction: number) => {
    setCurrentIndex((prevIndex) => {
      // Calculate the new index with wrapping
      const newIndex =
        (prevIndex + direction) % (allLogos.length - visibleCount + 1);
      return newIndex < 0 ? allLogos.length - visibleCount : newIndex;
    });
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="min-h-screen bg-white bg-center">
      <div className="container mx-auto px-4 py-16 text-center">
        {/* Our Clients Section */}
        <div className="mb-12">
          <h2 className="text-3xl text-black mb-4 font-semibold">
            Our Clients
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            We have been working with some Fortune 500+ clients
          </p>

          {/* Carousel Container */}
          <div className="relative overflow-hidden mx-auto max-w-4xl">
            {/* Previous Button */}
            <button
              onClick={() => moveCarousel(-1)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 rounded-full p-2 z-10"
              aria-label="Previous logos"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            {/* Carousel Track */}
            <div
              ref={carouselRef}
              className="flex items-center justify-start transition-all duration-500 ease-in-out py-6"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleCount)
                }%)`,
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {allLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-2 transition-all duration-300 hover:scale-110"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div className="flex justify-center items-center h-16 md:h-20">
                    <img
                      src={logo}
                      alt={`Client Logo ${index + 1}`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => moveCarousel(1)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 rounded-full p-2 z-10"
              aria-label="Next logos"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: allLogos.length - visibleCount + 1 }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentIndex === index ? "bg-blue-500 w-4" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              )
            )}
          </div>
        </div>

        {/* Rest of your component remains the same */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Manage your entire community in a single system
          </h1>
          <p className="text-lg text-gray-600">Who is Nexcent suitable for?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <img
              src={peopleIcon}
              alt="Membership Icon"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Membership Organisations
            </h3>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={buildingIcon}
              alt="National Associations Icon"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              National Associations
            </h3>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={groupIcon}
              alt="Clubs and Groups Icon"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Clubs And Groups
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
