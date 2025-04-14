import { Icon } from "@iconify/react";
import usersIcon from "@iconify-icons/mdi/account-group"; // Icon for Members
import storeIcon from "@iconify-icons/mdi/store"; // Icon for Clubs
import calendarIcon from "@iconify-icons/mdi/calendar"; // Icon for Event Bookings
import creditCardIcon from "@iconify-icons/mdi/credit-card"; // Icon for Payments

const Business = () => {
  return (
    <div className="bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between w-full">
        {/* Left Section - Main Heading and Subheading */}
        <div className="text-left mb-8 lg:mb-0 lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            Helping a local
            <span className="text-green-600 block">
              business reinvent itself
            </span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            We reached here with our hard work and dedication
          </p>
        </div>

        {/* Right Section - Statistics */}
        <div className="lg:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Members */}
            <div className="bg-white rounded-lg p-6 flex items-center justify-between">
              <Icon
                icon={usersIcon}
                className="text-green-600 text-4xl sm:text-5xl"
                width="48"
                height="48"
              />
              <div className="text-center">
                <span className="text-2xl font-semibold text-gray-800">
                  2,245,341
                </span>
                <p className="text-gray text-sm mt-1">Members</p>
              </div>
            </div>

            {/* Clubs */}
            <div className="bg-white rounded-lg p-6 flex items-center justify-between">
              <Icon
                icon={storeIcon}
                className="text-green-600 text-4xl sm:text-5xl"
                width="48"
                height="48"
              />
              <div className="text-center">
                <span className="text-2xl font-semibold text-black">
                  2,245,341
                </span>
                <p className="text-gray text-sm mt-1">Clubs</p>
              </div>
            </div>

            {/* Event Bookings */}
            <div className="bg-white rounded-lg p-6 flex items-center justify-between">
              <Icon
                icon={calendarIcon}
                className="text-green-600 text-4xl sm:text-5xl"
                width="48"
                height="48"
              />
              <div className="text-center">
                <span className="text-2xl font-semibold text-gray-800">
                  2,245,341
                </span>
                <p className="text-gray text-sm mt-1">Event Bookings</p>
              </div>
            </div>

            {/* Payments */}
            <div className="bg-white rounded-lg p-6 flex items-center justify-between">
              <Icon
                icon={creditCardIcon}
                className="text-green-600 text-4xl sm:text-5xl"
                width="48"
                height="48"
              />
              <div className="text-center">
                <span className="text-2xl font-semibold text-gray-800">
                  2,245,436
                </span>
                <p className="text-gray text-sm mt-1">Payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
