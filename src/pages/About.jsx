import React from "react";
import Header from '../components/Header'
import ContactForm from "../components/ContactForm";
import Footer from '../components/Footer'

const About = () => {
  const page = 'about'
  const subCompanies = [
    {
      name: "Manufacturing",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum praesentium fugiat corrupti! Perspiciatis quae dolore repudiandae enim sunt quam debitis vitae quia, nobis iure tempora.",
    },
    {
      name: "Real Estate",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum praesentium fugiat corrupti! Perspiciatis quae dolore repudiandae enim sunt quam debitis vitae quia, nobis iure tempora.",
    },
    {
      name: "Retail Mall",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum praesentium fugiat corrupti! Perspiciatis quae dolore repudiandae enim sunt quam debitis vitae quia, nobis iure tempora.",
    },
  ];

  return (
    <>
      <Header active={page} />
      <main>
        <section className="bg-linear-to-r from-primary to-secondary text-white py-15">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Aberos PLC
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, dolorum.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">Our History</h2>
            <p className="text-lg leading-relaxed text-gray-600 max-w-4xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eius accusantium iure harum odit. Quidem incidunt repudiandae saepe ipsa itaque soluta veniam quibusdam cum ex voluptas? Natus similique saepe assumenda architecto asperiores excepturi repudiandae eum repellat atque voluptatum aperiam praesentium inventore, veniam iure totam esse officiis commodi ipsum. Nobis, distinctio.
            </p>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
            <div className="p-8 rounded-2xl shadow-sm border">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum praesentium fugiat corrupti! Perspiciatis quae dolore repudiandae enim sunt quam debitis vitae quia, nobis iure tempora.
              </p>
            </div>
            <div className="p-8 rounded-2xl shadow-sm border">
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum praesentium fugiat corrupti! Perspiciatis quae dolore repudiandae enim sunt quam debitis vitae quia, nobis iure tempora.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Businesses
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {subCompanies.map((comp, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
                  <h3 className="text-xl font-semibold mb-3">{comp.name}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {comp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      section

      <Footer page={page} />
    </>
  );
};

export default About;
