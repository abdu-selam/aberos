import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import useStore from "../store/useStore";

import heroImg from "../assets/img.jpg";
import factoryImg from "../assets/mall.png";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Button from "../components/Button";

export default function Home() {
  const lang = useStore((state=>state.lang))
  const page = "home";

  const subCompany = [
    {
      name: "Manufacturing",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, id dolores consequatur voluptatum facilis expedita.",
      img: heroImg,
      link: "manufacture",
    },
    {
      name: "Real Estate",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, id dolores consequatur voluptatum facilis expedita.",
      img: heroImg,
      link: "restaurant",
    },
    {
      name: "Aberos Mall",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, id dolores consequatur voluptatum facilis expedita.",
      img: heroImg,
      link: "mall",
    },
  ];

  const whyUs = [
    {
      title: "Lorem ipsum",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsam facere quibusdam, quidem deleniti veritatis nobis nesciunt voluptatem vero in!",
    },
    {
      title: "Lorem ipsum",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsam facere quibusdam, quidem deleniti veritatis nobis nesciunt voluptatem vero in!",
    },
    {
      title: "Lorem ipsum",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsam facere quibusdam, quidem deleniti veritatis nobis nesciunt voluptatem vero in!",
    },
    {
      title: "Lorem ipsum",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsam facere quibusdam, quidem deleniti veritatis nobis nesciunt voluptatem vero in!",
    },
  ];

  return (
    <>
      <Header active={page} />

      <main className="pt-17">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center w-vw min-h-dvh bg-[url(./assets/hero-back.png)] bg-fixed bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-primary/80" />

          <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center justify-center  text-back">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6 justify-center items-center md:items-start"
            >
              <h1 className="text-5xl font-extrabold leading-tight">
                Aberos <span className="text-secondary">PLC</span>
              </h1>

              <p className="text-sm text-back/80 w-full max-w-xl text-center md:text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, id dolores consequatur voluptatum facilis expedita.
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
              className="max-w-xl w-full mx-auto rounded-3xl shadow-2xl"
            />
          </div>
        </motion.section>

        <motion.section
          id="video"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="py-24 bg-text"
        >
          <div className="max-w-5xl mx-auto text-center px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-back mb-4"
            >
              Inside Our Company
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-card mb-10"
            >
              Discover how Aberos PLC operates across multiple industries.
            </motion.p>

            <motion.iframe
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full aspect-video rounded-3xl shadow-xl border"
              src="https://www.youtube.com/embed/bWzN8NuZWF8?controls=0&modestbranding=1"
              allowFullScreen
            />
          </div>
        </motion.section>

        <motion.section
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="py-24 bg-white"
        >
          <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center md:text-start">
              About Us
            </h2>
            <p className="text-text/80 max-w-3xl leading-relaxed mb-6 text-center md:text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              id dolores consequatur voluptatum facilis expedita.
            </p>

            <Link to="/about" className="block w-max mx-auto md:mx-0">
              <Button data="Read More" />
            </Link>
          </div>
        </motion.section>

        <motion.section
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-24 bg-primary/10"
        >
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-center text-4xl font-bold text-primary mb-4">
              Our Subsidiaries
            </h2>
            <p className="text-center text-text/70 max-w-3xl mx-auto mb-16">
              Each company operates independently while sharing a unified vision
              of excellence.
            </p>

            <motion.div
              whileInView="show"
              initial="hidden"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
              className="flex flex-wrap gap-10 content-center justify-center"
            >
              {subCompany.map((com, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="bg-card rounded-3xl w-80 shadow-lg border border-[rgba(0,0,0,0.2)] overflow-hidden hover:shadow-xl transition-all duration-300"
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
                    <Link to={`/companies#${com.link}`}>
                      <Button data="Explore" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="py-24 bg-white"
        >
          <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-center text-4xl font-bold text-primary mb-16">
              Why Choose Us
            </h2>

            <motion.div
              whileInView="show"
              initial="hidden"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.12 },
                },
              }}
              className="grid mx-auto max-w-121 md:max-w-full md:grid-cols-2 gap-10"
            >
              {whyUs.map((obj, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                  className="p-8 rounded-3xl border shadow-sm hover:shadow-md transition"
                >
                  <h4 className="text-xl font-semibold text-primary mb-3">
                    {obj.title}
                  </h4>
                  <p className="text-text/70">{obj.desc}</p>
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
}
