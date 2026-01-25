import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Our Company
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Building experiences, spaces, and flavors that bring people together.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Our History</h2>
          <p className="text-lg leading-relaxed text-gray-600 max-w-4xl">
            Founded with a passion for quality and innovation, our company began
            as a small operation with a big dream — to create spaces and
            experiences that inspire. Over the years, we have grown into a
            diversified group with expertise in manufacturing, retail, and
            hospitality, always guided by our commitment to excellence and
            customer satisfaction.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="p-8 rounded-2xl shadow-sm border">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To deliver high-quality products and unforgettable experiences
              through innovation, integrity, and a deep understanding of our
              customers’ needs.
            </p>
          </div>
          <div className="p-8 rounded-2xl shadow-sm border">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become a trusted leader across industries, shaping the future
              of living, shopping, and dining through sustainable growth and
              creative excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Sub Companies */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Businesses
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Floor Factory */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">Floor Factory</h3>
              <p className="text-gray-600 leading-relaxed">
                Specializing in premium flooring solutions, Floor Factory
                combines durability, design, and craftsmanship to create
                beautiful foundations for homes and businesses.
              </p>
            </div>

            {/* Mall */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">Shopping Mall</h3>
              <p className="text-gray-600 leading-relaxed">
                Our mall is a vibrant retail destination, bringing together top
                brands, entertainment, and community spaces under one roof.
              </p>
            </div>

            {/* Restaurant */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">Restaurant</h3>
              <p className="text-gray-600 leading-relaxed">
                A place where flavors come alive — our restaurant delivers
                exceptional dining experiences with carefully crafted menus and
                warm hospitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Growing Together, Building the Future
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We believe in long-term partnerships, innovation, and creating value
            for our customers and communities.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
