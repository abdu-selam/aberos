import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import useStore from "../store/useStore";

import heroImg from "../assets/mall.png";
import mallImg from "../assets/img.jpg";
import restaurantImg from "../assets/img.jpg";
import factoryImg from "../assets/img.jpg";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
const Video = React.lazy(() => import("../components/Video"));
import { home } from "../data/translation";
import useLang from "../hooks/useLang";


const ContactForm = React.lazy(() => import("../components/ContactForm"));


export default function Home() {
  const lang = useStore((state) => state.lang);
  useLang(lang)
  const page = "home";

  const compImgs = [factoryImg, mallImg, restaurantImg]

  const subCompany = home[lang]["companies"]["each"];

  const whyUs = home[lang]["whyUs"]["items"];

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
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6 justify-center items-center md:items-start"
            >
              <h1 className="text-5xl font-extrabold text-center leading-tight">
                Aberos <span className="text-secondary">PLC</span>
              </h1>

              <p className="text-sm text-back/80 w-full max-w-xl text-center md:text-start">
                {home[lang]["hero"]["desc"]}
              </p>

              <div className="flex gap-4">
                <Link to="/about" aria-label="Learn more about Aberos PLC company overview">
                  <Button data={home[lang]["hero"]["btns"][0]} seo={"About Aberos PLC"}/>
                </Link>
                <a href="#video">
                  <Button data={home[lang]["hero"]["btns"][1]} border />
                </a>
              </div>
            </motion.article>

            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              src={heroImg}
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
              {home[lang]["video"]["title"]}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-card mb-10"
            >
              {home[lang]["video"]["desc"]}
            </motion.p>

            <Video src={home[lang]["video"]["link"]} title={"Introduction to aberos plc"}/>
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
              {home[lang]["about"]["title"]}
            </h2>
            <p className="text-text/80 max-w-3xl leading-relaxed mb-6 text-center md:text-start">
              {home[lang]["about"]["desc"]}
            </p>

            <Link to="/about" className="block w-max mx-auto md:mx-0" aria-label="Learn more about Aberos PLC company overview">
              <Button data={home[lang]["about"]["btn"]} seo={"About Aberos PLC"}/>
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
              {home[lang]["companies"]["title"]}
            </h2>
            <p className="text-center text-text/70 max-w-3xl mx-auto mb-16">
              {home[lang]["companies"]["desc"]}
            </p>

            <motion.article
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
                <motion.section
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="bg-card rounded-3xl w-80 shadow-lg border border-[rgba(0,0,0,0.2)] overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={compImgs[i]}
                    alt={com.title}
                    className="h-48 w-full object-cover"
                  />

                  <div className="p-6 flex flex-col gap-4">
                    <h3 className="text-2xl font-semibold text-primary">
                      {com.title}
                    </h3>
                    <p className="text-text/70">{com.desc}</p>
                    <Link to={`/companies#${com.link}`}>
                      <Button data={com.btn} />
                    </Link>
                  </div>
                </motion.section>
              ))}
            </motion.article>
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
              {home[lang]["whyUs"]["title"]}
            </h2>

            <motion.article
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
                <motion.section
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                  className="p-8 rounded-3xl border shadow-sm hover:shadow-md transition"
                >
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {obj.title}
                  </h3>
                  <p className="text-text/70">{obj.desc}</p>
                </motion.section>
              ))}
            </motion.article>
          </div>
        </motion.section>
        <ContactForm />
      </main>
      <Footer page={page} />
    </>
  );
}
