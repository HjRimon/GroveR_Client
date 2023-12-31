import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const AboutBuilding = () => {
  return (
    <div className="mt-24 mb-10">
      <h1 className="text-4xl font-bold text-center">About The Building</h1>
      <div className="divider divider-primary">Details</div>
      {/* Flex */}
      <div className="w-[90%] mx-auto flex flex-col lg:flex-row md:gap-24 mt-16">
        <div
          className="space-y-5 w-[80%] lg:w-[50%] mx-auto mb-4 md:mb-auto"
          data-aos="flip-up"
          data-aos-duration="2000"
        >
          <h1 className="text-5xl font-bold mb-16">
            Welcome to <span className="text-[#4A00FF]">GrooveR</span>
          </h1>
          <h2 className="text-2xl font-bold">1) Discover a World of Elegance and Comfort</h2>
          <p>
            Nestled in the heart of the vibrant Gulshan district in Dhaka, our architectural
            masterpiece stands as a testament to luxury living. GrooveR is not just a structure; it
            is a lifestyle, an embodiment of sophistication and modernity.
          </p>
          {/* ----- */}
          <h2 className="text-2xl font-bold">2) Smart Home Technology</h2>
          <p>
            Experience the future of living with our cutting-edge smart home technology. Control
            lighting, temperature, and security systems with a touch, all from the convenience of
            your smartphone. Your home, your rules.
          </p>
          {/* ----- */}
          <h2 className="text-2xl font-bold">3) Unparalleled Amenities</h2>
          <p>
            Enjoy a life of convenience with our world-class amenities. From a state-of-the-art
            fitness center to a serene rooftop garden, GrooveR caters to your every need. Immerse
            yourself in the luxury of our swimming pool or unwind in the exclusive lounge - every
            moment is designed for your comfort.
          </p>
          {/* ----- */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 cursor-pointer">
          <Link to="/appartment">
            <img
              className="w-96 h-64 rounded-xl inset-0 transform hover:rotate-45 transition duration-300"
              src="https://i.ibb.co/TtK6cyW/0b8eb009-c2c4-43c3-a4cb-8686f4845a80.jpg"
            />
          </Link>
          <img
            className="w-96 h-64 rounded-xl inset-0 transform hover:rotate-45 transition duration-300"
            src="https://i.ibb.co/xhMzGNh/6ced8d40-2969-4144-9811-9ce4f0d7a571.jpg"
          />
          <img
            className="w-96 h-64 rounded-xl inset-0 transform hover:rotate-45 transition duration-300"
            src="https://i.ibb.co/4jgCv0b/8550110a-3c0a-4d64-a69a-064c7e0d3527.jpg"
          />
          <Link to="/dashboard/announcement">
            <img
              className="w-96 h-64 rounded-xl inset-0 transform hover:rotate-45 transition duration-300"
              src="https://i.ibb.co/cb4W1gm/e7817724-dae2-4ff5-937d-a789e8249bff-Header-67.jpg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutBuilding;
