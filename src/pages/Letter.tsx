import illustration from "../assets/illustration.png"; // Replace with actual illustration path

const Letter = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 py-6 sm:py-8 md:py-12">
        {/* Left Section - Illustration */}
        <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
          <img
            src={illustration}
            alt="Illustration"
            className="w-3/4 sm:w-2/3 md:w-3/5 lg:w-1/2 max-w-xs"
          />
        </div>

        {/* Right Section - Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left px-4 sm:px-6 lg:px-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6">
            The unseen of spending three years at Pixelgrade
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique lacuis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button className="bg-green-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded hover:bg-green-700 text-sm sm:text-base transition-colors duration-200">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Letter;
