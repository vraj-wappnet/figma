import heroImg from "../assets/Hero img.svg";
import spoonImage from "../assets/Frame 17.png"; // Replace with the path to your spoon image

const HeroSection = () => {
  return (
    <div className="hero-section bg-background text-white min-h-screen flex items-center justify-center overflow-hidden relative pt-16">
      <div className="hero-content max-w-7xl w-full px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Content */}
        <div className="text-content flex-1 text-center md:text-left">
          <p className="subtext text-primary text-sm md:text-base mb-2">
            Chase The New Flavour
          </p>
          <img
            src={spoonImage}
            alt="Spoon"
            className="w-16 h-auto mx-auto md:mx-0 mb-2" // Adjust size and centering
          />
          <h1 className="title font-cormorant text-primary text-3xl md:text-5xl font-bold mb-4">
            The Key To Fine Dining
          </h1>
          <p className="description text-gray text-sm md:text-base mb-6 font-open-sans">
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            voluptat morbi facilisis quam scelerisque sapien. Et penatibus
            aliquam amet tellus.
          </p>
          <button className="explore-button Cormorant Upright bg-primary text-black font-semibold py-2 px-6 rounded hover:bg-yellow-500 transition duration-300">
            Explore Menu
          </button>
        </div>

        {/* Image Content */}
        <div className="image-content flex-1 flex justify-center">
          <img
            src={heroImg}
            alt="Fine dining dish"
            className="hero-image w-[200vw] h-[90vh]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
