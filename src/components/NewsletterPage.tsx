import React from "react";
import instagramLogo from "../assets/ig.png";
import twitterLogo from "../assets/x.png";
import facebookLogo from "../assets/fb.png";
import spoonImage from "../assets/Frame 17.png";

const NewsletterPage: React.FC = () => {
  return (
    <div className="relative bg-background text-white min-h-screen flex flex-col items-center justify-between py-12 overflow-hidden">
      {/* Newsletter Section */}
      <div className="w-full max-w-4xl text-center px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <h2 className="text-2xl sm:text-3xl font-semibold font-cormorant mb-2">
            Newsletter
          </h2>
          <img
            src={spoonImage}
            alt="Spoon"
            className="w-10 md:w-10 h-auto mx-auto md:mx-auto mb-2"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-primary font-cormorant">
          Subscribe To Our Newsletter
        </h1>
        <p className="text-gray text-sm sm:text-base mb-6">
          And never miss latest updates
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full sm:w-2/3 lg:w-1/2  bg-background p-2 rounded text-white border border-gray focus:outline-none"
          />
          <button className="bg-primary text-gray-900 font-semibold py-2 px-4 rounded-r hover:bg-primary transition duration-300">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 py-12">
          {/* Contact Us */}
          <div className="text-center">
            <h2 className="text-gray text-3xl sm:text-4xl md:text-3xl font-cormorant mb-2">
              Contact Us
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              9 W 53rd St, New York, NY 10019, USA
            </p>
            <p className="text-gray-400 text-sm sm:text-base">
              +1 212-344-1230
              <br />
              +1 212-555-1230
            </p>
          </div>

          {/* Center Logo */}
          <div className="flex flex-col items-center justify-center">
            <div className="text-center">
              <h2 className="text-4xl sm:text-xl font-bold text-primary font-cormorant mb-2">
                GERICHT
              </h2>
              <p className="text-gray-400 text-sm sm:text-base mt-6 mb-4">
                "The best way to find yourself in the world."
              </p>
              <img
                src={spoonImage}
                alt="Spoon"
                className="w-10 md:w-10 h-auto mx-auto mb-4"
              />
              <div className="flex items-center justify-center space-x-6">
                <img
                  src={facebookLogo}
                  alt="Facebook"
                  className="w-3 h-3 sm:w-6 sm:h-6 mr-1"
                />
                <img
                  src={twitterLogo}
                  alt="Twitter"
                  className="w-3 h-3 sm:w-6 sm:h-6 mr-1"
                />
                <img
                  src={instagramLogo}
                  alt="Instagram"
                  className="w-3 h-3 sm:w-6 sm:h-6"
                />
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="text-center">
            <h2 className="text-gray text-2xl sm:text-xl md:text-3xl font-cormorant mb-2">
              Working Hours
            </h2>
            <p className="text-gray text-sm sm:text-base">
              Monday - Friday:
              <br />
              08:00 am - 12:00 am
              <br />
              Saturday - Sunday:
              <br />
              07:00 am - 11:00 pm
            </p>
          </div>
        </div>
        <p className="text-gray text-xs sm:text-sm py-4">
          2021 Gericht. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default NewsletterPage;
