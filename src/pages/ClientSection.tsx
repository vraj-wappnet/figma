import { useState, useEffect, useRef } from "react";
import peopleIcon from "../assets/i1.png";
import buildingIcon from "../assets/i2.png";
import groupIcon from "../assets/i3.png";
import logo1 from "../assets/l1.png";
import logo2 from "../assets/l2.png";
import logo3 from "../assets/l3.png";

const ClientSection = () => {
  const logoGroups = [
    [logo1, logo2, logo3, logo1, logo3],
    [logo2, logo3, logo1, logo2, logo1],
    [logo3, logo1, logo2, logo3, logo2],
  ];

  const [currentLogoSet, setCurrentLogoSet] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const startAnimation = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        setTransitioning(true);
        setTimeout(() => {
          setCurrentLogoSet((prev) => (prev + 1) % logoGroups.length);
          setTransitioning(false);
        }, 1000); // Transition duration
      }
    }, 3000); // Change every 3 seconds
  };

  useEffect(() => {
    startAnimation();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

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

          <div
            className="flex justify-center items-center h-24"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {logoGroups[currentLogoSet].map((logo, index) => (
              <div
                key={index}
                className={`mx-4 md:mx-8 transition-all duration-1000 ease-in-out ${
                  transitioning
                    ? "opacity-0 scale-90 translate-y-2"
                    : "opacity-100 scale-100 translate-y-0"
                } hover:scale-110`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  width: "80px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
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
