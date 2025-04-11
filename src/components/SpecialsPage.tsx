// src/TodaysSpecial.tsx
import React from "react";
import cocktailShakerImage from "../assets/cocktail.png";
import spoonImage from "../assets/Frame 17.png"; // Replace with the path to your cocktail shaker image

const SpecialsPage: React.FC = () => {
  const wineAndBeerMenu = [
    { name: "Chapel Hill Shiraz", price: "$56", note: "AU | Bottle" },
    { name: "Catena Malbec", price: "$59", note: "AR | Bottle" },
    { name: "La Vieille Rosé", price: "$44", note: "FR | 750 ml" },
    { name: "Rhino Pale Ale", price: "$31", note: "CA | 750 ml" },
    { name: "Irish Guinness", price: "$26", note: "IE | 750 ml" },
  ];

  const cocktailsMenu = [
    {
      name: "Aperol Spritz",
      price: "$20",
      note: "Aperol | Villa Marchesi prosecco | soda | 30ml",
    },
    {
      name: "Dark 'N' Stormy",
      price: "$16",
      note: "Dark rum | Ginger beer | Slice of lime",
    },
    { name: "Daiquiri", price: "$10", note: "Rum | Citrus juice | Sugar" },
    {
      name: "Old Fashioned",
      price: "$31",
      note: "Bourbon | Brown sugar | Angostura Bitters",
    },
    {
      name: "Negroni",
      price: "$26",
      note: "Gin | Sweet Vermouth | Campari | Orange garnish",
    },
  ];

  return (
    <div className="relative bg-black text-white min-h-screen flex items-center justify-center py-16 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl px-4">
        {/* Header Text above the image and columns */}
        <div className="text-center mb-12">
          <p className="text-gray-500 text-sm">Menu That Fits Your Palatte</p>
          <img
            src={spoonImage}
            alt="Spoon"
            className="w-10  mx-auto mb-2 mt-1 mb-0"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-txt mt-0">
            Today’s Special
          </h1>
        </div>

        {/* Flex Container for Image and Columns */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-12">
          {/* Left Column - Wine & Beer */}
          <div className="flex-1 text-center md:text-left max-w-xs">
            <h2 className="text-3xl md:text-4xl font-bold text-txt mb-6">
              Wine & Beer
            </h2>
            <ul className="space-y-6">
              {wineAndBeerMenu.map((item, index) => (
                <li key={index} className="flex flex-col">
                  <div className="flex items-center">
                    <span className="w-1/2 text-left text-gray-300 pr-4 truncate">
                      {item.name}
                    </span>
                    <hr className="w-1/4 border-t border-dashed border-gray-300 mx-2 my-1" />
                    <span className="w-1/4 text-right text-yellow-400 font-semibold pr-4">
                      {item.price}
                    </span>
                  </div>
                  <span className="w-1/2 text-left text-gray pr-4 ">
                    {/* <span className="text-gray text-sm pl-[16.67%] mt-1"> */}
                    {item.note}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Center Image - Cocktail Shaker */}
          <div className="flex justify-center  mt-0">
            <img
              src={cocktailShakerImage}
              alt="Cocktail Shaker"
              className="w-[200px] md:w-[300px] h-auto object-contain"
            />
          </div>

          {/* Right Column - Cocktails */}
          <div className="flex-1 text-center md:text-right max-w-xs">
            <h2 className="text-4xl md:text-left font-bold text-txt mb-6">
              Cocktails
            </h2>
            <ul className="space-y-6">
              {cocktailsMenu.map((item, index) => (
                <li key={index} className="flex flex-col">
                  <div className="flex items-center">
                    <span className="w-1/2 text-left text-gray-300 pr-4 truncate">
                      {item.name}
                    </span>
                    <hr className="w-1/4 border-t border-dashed border-gray-300 mx-2 my-1" />
                    <span className="w-1/4 text-right text-yellow-400 font-semibold pr-4">
                      {item.price}
                    </span>
                  </div>
                  <span className="w-1/2 text-left text-gray pr-4 text-nowrap">
                    {item.note}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* View More Button */}
        <div className="relative z-10 mt-12 text-center">
          <button className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded hover:bg-yellow-500 transition duration-300">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialsPage;
