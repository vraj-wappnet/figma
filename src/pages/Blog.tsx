import img18 from "../assets/image 18.png";
import img19 from "../assets/image 19.png";
import img20 from "../assets/image 20.png";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Caring is the new marketing
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            The Nexcent blog is the best place to read about the latest
            membership insights, trends, and more. See who is joining the
            community, read about how our community are increasing their
            membership income, and lots more.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden relative group hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <img
                src={img18}
                alt="Card 1"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 sm:p-6 absolute h-[19vh] bottom-0 left-0 w-full bg-white">
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">
                  Creating Streamlined Safeguarding Processes with OneRen
                </h3>
              </div>
            </div>
            <div className="p-6 bg-gray-50">
              <a
                href="#"
                className="text-green-600 font-medium hover:text-green-700 hover:underline inline-block transition-colors duration-300"
              >
                Readmore →
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden relative group hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <img
                src={img19}
                alt="Card 2"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 sm:p-6 absolute h-[19vh] bottom-0 left-0 w-full bg-white">
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">
                  What are your safeguarding responsibilities and how can you
                  manage them?
                </h3>
              </div>
            </div>
            <div className="p-6 bg-gray-50">
              <a
                href="#"
                className="text-green-600 font-medium hover:text-green-700 hover:underline inline-block transition-colors duration-300"
              >
                Readmore →
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden relative group hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <img
                src={img20}
                alt="Card 3"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 sm:p-6 absolute h-[19vh] bottom-0 left-0 w-full bg-white">
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">
                  Revamping the Membership Model with Triathlon Australia
                </h3>
              </div>
            </div>
            <div className="p-6 bg-gray-50">
              <a
                href="#"
                className="text-green-600 font-medium hover:text-green-700 hover:underline inline-block transition-colors duration-300"
              >
                Readmore →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
