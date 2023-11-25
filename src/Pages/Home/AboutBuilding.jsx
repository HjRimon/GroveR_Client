import "aos/dist/aos.css";

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
          <img
            className="w-96 h-64 rounded-xl inset-0 transform hover:rotate-45 transition duration-300"
            src="https://i.ibb.co/TbXNSj3/two-teal-and-white-skyscrapers.jpg"
          />
          <img
            className="w-96 h-64 rounded-xl inset-0 transform hover:rotate-45 transition duration-300"
            src="https://i.ibb.co/R49fKkY/glass-panel-high-rise-building-under-blue-sky-with-sun-raise.jpg"
          />
          <img
            className="w-96 h-64 rounded-xl inset-0 transform hover:rotate-45 transition duration-300"
            src="https://i.ibb.co/ZKBrH4Q/aerial-photo-of-buildings-during-dusk.jpg"
          />
          <img
            className="w-96 h-64 rounded-xl inset-0 transform hover:rotate-45 transition duration-300"
            src="https://i.ibb.co/TbXNSj3/two-teal-and-white-skyscrapers.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutBuilding;
