import React, { useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router";

import heroImg from "../assets/img.jpg";
import factoryImg from "../assets/factory.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Button from "../components/Button";

export default function Home() {
  const page = 'home'


  const subCompany = [
    {
      name: "Manufacturing",
      desc: "High-quality industrial production with modern facilities and skilled professionals.",
      img: heroImg,
    },
    {
      name: "Real Estate",
      desc: "Premium commercial and residential spaces designed for modern living.",
      img: heroImg,
    },
    {
      name: "Retail Mall",
      desc: "A vibrant shopping experience bringing global and local brands together.",
      img: heroImg,
    },
  ];

  return (
    <>
      <Header active={page} />

      <section className="relative flex justify-center items-center min-h-dvh bg-[url(./assets/img.jpg)] bg-cover bg-center">
        <div className="absolute inset-0 bg-primary/80" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center  text-back">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 justify-center items-center md:items-start"
          >
            <h1 className="text-5xl font-extrabold leading-tight">
              Aberos <span className="text-secondary">PLC</span>
            </h1>

            <p className="text-lg text-back/80 max-w-xl text-center md:text-start">
              Building sustainable businesses across manufacturing, real estate,
              and retail — shaping the future of industry.
            </p>

            <div className="flex gap-4">
              <Link to="/about">
                <Button data="Learn More" />
              </Link>
              <a href="#video">
                <Button data="Watch Video" border />
              </a>
            </div>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            src={factoryImg}
            alt="Factory"
            className="max-w-lg md:max-w-full rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      <section id="video" className="py-24 bg-back">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Inside Our Company
          </h2>
          <p className="text-lg text-text/70 mb-10">
            Discover how Aberos PLC operates across multiple industries.
          </p>

          <iframe
            className="w-full aspect-video rounded-3xl shadow-xl border"
            src="https://www.youtube.com/embed/bWzN8NuZWF8?controls=0&modestbranding=1"
            allowFullScreen
          />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center md:text-start">About Us</h2>
          <p className="text-text/80 max-w-3xl leading-relaxed mb-6 text-center md:text-start">
            Aberos PLC is a diversified company committed to excellence,
            innovation, and sustainable growth across its subsidiaries.
          </p>

          <Link to="/about" className="block w-max mx-auto md:mx-0">
            <Button data="Read More" />
          </Link>
        </div>
      </section>

      <section className="py-24 bg-back">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-center text-4xl font-bold text-primary mb-4">
            Our Subsidiaries
          </h2>
          <p className="text-center text-text/70 max-w-3xl mx-auto mb-16">
            Each company operates independently while sharing a unified vision
            of excellence.
          </p>

          <div className="flex flex-wrap gap-10 content-center justify-center">
            {subCompany.map((com, i) => (
              <div
                key={i}
                className="bg-card rounded-3xl w-80 shadow-[0_4px_6px_-1px] border overflow-hidden hover:shadow-[0_20px_25px_-5px] transition-all duration-300"
              >
                <img
                  src={com.img}
                  alt={com.name}
                  className="h-48 w-full object-cover"
                />

                <div className="p-6 flex flex-col gap-4">
                  <h3 className="text-2xl font-semibold text-primary">
                    {com.name}
                  </h3>
                  <p className="text-text/70">{com.desc}</p>

                  <Button data="Explore" icon={<ArrowRight />} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-center text-4xl font-bold text-primary mb-16">
            Why Choose Us
          </h2>

          <div className="grid mx-auto max-w-121 md:max-w-full md:grid-cols-2 gap-10">
            {[1, 2, 3, 4].map((_, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl border shadow-sm hover:shadow-md transition"
              >
                <h4 className="text-xl font-semibold text-primary mb-3">
                  Trusted Expertise
                </h4>
                <p className="text-text/70">
                  We combine experience, innovation, and integrity in everything
                  we do.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-primary text-back">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-center text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-center text-back/70 mb-12">
            Let’s talk about your next big idea.
          </p>
        </div>
        <ContactForm />
      </section>
      <Footer page={page} />
    </>
  );
}