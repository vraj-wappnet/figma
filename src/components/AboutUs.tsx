import knifeImage from "../assets/ss.png"; // Replace with the path to your knife image
import gImage from "../assets/G.png"; // Replace with the path to your "G" image

const AboutUs = () => {
  return (
    <div className="relative bg-background text-white min-h-screen flex items-center justify-center py-16 overflow-hidden">
      {/* Background Overlay (optional for subtle effect) */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl px-4 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Left Column - About Us */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold text-primary mb-4">About Us</h2>
          <p className="text-gray mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultricies vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris.
          </p>
          <button className="bg-primary text-black font-semibold py-2 px-6 rounded hover:bg-yellow-500 transition duration-300">
            Know More
          </button>
        </div>

        {/* Center Image Container with G Background */}
        <div className="flex-1 flex justify-center relative">
          {/* G Image as Background */}
          <div
            className="absolute inset-0 bg-contain bg-no-repeat bg-center z-0"
            style={{ backgroundImage: `url(${gImage})` }}
          ></div>
          {/* Knife Image */}
          <img
            src={knifeImage}
            alt="Knife"
            className="w-[150px] h-[100vh] relative z-10"
          />
        </div>

        {/* Right Column - Our History */}
        <div className="flex-1 text-center md:text-right">
          <h2 className="text-4xl font-bold text-primary mb-4">Our History</h2>
          <p className="text-gray mb-6">
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Tristique placerat morbi vulputate habitasse interdum mi aliquet in
            sed odio nec aliquet.
          </p>
          <button className="bg-primary text-black font-semibold py-2 px-6 rounded hover:bg-yellow-500 transition duration-300">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
