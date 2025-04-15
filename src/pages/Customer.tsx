import image from "../assets/image 9.png";
import logo1 from "../assets/l1.png";
import logo2 from "../assets/l2.png";
import logo3 from "../assets/l3.png";

const Customer = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left Section - Main Image */}
        <div className="mb-8 md:mb-0">
          <img
            src={image}
            alt="Main Logo"
            className="w-full h-[40vh] md:w-[45vw] md:h-[65vh] rounded-lg object-cover"
          />
        </div>

        {/* Right Section - Text and Client Logos */}
        <div className="w-full md:w-1/2 md:pl-8">
          <div className="text-left">
            <p className="text-gray-600 text-sm sm:text-base mb-4">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultricies, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <p className="text-Green font-semibold mb-4 text-base sm:text-lg">
              Tim Smith
            </p>
            <p className="text-gray-600 text-xs sm:text-sm mb-6">
              British Dragon Boat Racing Association
            </p>
          </div>

          {/* Client Logos and Meet All Customers */}
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="grid grid-cols-3 gap-4 sm:flex sm:items-center sm:space-x-12 mb-4 sm:mb-0">
              <img
                src={logo1}
                alt="Client Logo 1"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <img
                src={logo2}
                alt="Client Logo 2"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <img
                src={logo3}
                alt="Client Logo 3"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <img
                src={logo2}
                alt="Client Logo 4"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <img
                src={logo3}
                alt="Client Logo 5"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <img
                src={logo1}
                alt="Client Logo 6"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
            </div>
            <a
              href="#"
              className="text-Green font-medium text-sm sm:text-base hover:underline"
            >
              Meet all customers →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
