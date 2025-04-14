import Illustration from "../assets/Illustration.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-white bg-stripes bg-center">
      <div className="container mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section - Text Content */}
        <div className="max-w-lg h-auto md:h-[45vh] mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            <span className="text-gray-700">Lessons and insights</span>
            <span className="text-Green block">from 8 years</span>
          </h1>
          <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="bg-Green text-white px-6 py-2 mb-6 rounded hover:bg-Green">
            Register
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="max-w-md w-full">
          <img
            src={Illustration}
            alt="Illustration"
            className="object-contain w-full h-auto md:h-[60vh] rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
