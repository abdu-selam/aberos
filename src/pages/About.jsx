import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import ContactForm from "../components/ContactForm";

const About = () => {
  const page = "about";
  const subCompanies = [
    {
      name: "Manufacturing",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum praesentium fugiat corrupti! Perspiciatis quae dolore repudiandae enim sunt quam debitis vitae quia, nobis iure tempora.",
      link: "manufacture",
    },
    {
      name: "Real Estate",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum praesentium fugiat corrupti! Perspiciatis quae dolore repudiandae enim sunt quam debitis vitae quia, nobis iure tempora.",
      link: "restaurant",
    },
    {
      name: "Retail Mall",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum praesentium fugiat corrupti! Perspiciatis quae dolore repudiandae enim sunt quam debitis vitae quia, nobis iure tempora.",
      link: "mall",
    },
  ];

  return (
    <>
      <Header active={page} />

      <main className="pt-17">
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-linear-to-r from-primary to-secondary text-white py-15"
        >
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Aberos PLC
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              dolorum.
            </p>
          </div>
        </motion.section>

        <motion.section
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-16 bg-[#eeeeee]"
        >
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">Our History</h2>
            <p className="text-lg leading-relaxed text-gray-600 max-w-4xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eius
              accusantium iure harum odit. Quidem incidunt repudiandae saepe
              ipsa itaque soluta veniam quibusdam cum ex voluptas? Natus
              similique saepe assumenda architecto asperiores excepturi
              repudiandae eum repellat atque voluptatum aperiam praesentium
              inventore, veniam iure totam esse officiis commodi ipsum. Nobis,
              distinctio.
            </p>
          </div>
        </motion.section>

        <motion.section
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white py-16"
        >
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
            {[1, 2].map((_, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl shadow-sm border"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {i === 0 ? "Our Mission" : "Our Vision"}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum praesentium fugiat corrupti! Perspiciatis quae dolore
                  repudiandae enim sunt quam debitis vitae quia, nobis iure
                  tempora.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Businesses */}
        <motion.section
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-16 bg-[#eeeeee]"
        >
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Businesses
            </h2>

            <motion.div
              whileInView="show"
              initial="hidden"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.15 } },
              }}
              className="grid md:grid-cols-3 gap-8"
            >
              {subCompanies.map((comp, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition border border-[rgba(0,0,0,0.1)] hover:border-[rgba(0,0,0,0.2)]"
                >
                  <h3 className="text-xl font-semibold mb-3">{comp.name}</h3>
                  <p className="text-gray-600 leading-relaxed pb-4">
                    {comp.desc}
                  </p>
                  <Link to={`/companies#${comp.link.toLowerCase()}`}>
                    <Button data="See More" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          id="contact"
          className="py-24 bg-primary text-back"
        >
          <div className="max-w-5xl mx-auto px-8">
            <h2 className="text-center text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-center text-back/70 mb-12">
              Let’s talk about your next big idea.
            </p>
          </div>
          <ContactForm />
        </motion.section>
      </main>
      <Footer page={page} />
    </>
  );
};

export default About;
