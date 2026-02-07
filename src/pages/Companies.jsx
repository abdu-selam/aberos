import React from "react";
import { motion } from "framer-motion";

import Header from "../components/Header";
import Footer from "../components/Footer";
import heroImg from "../assets/img.avif";
import usePageMeta from "../hooks/usePageMeta";
import { companies } from "../data/translation";
import useStore from "../store/useStore";
import useLang from "../hooks/useLang";
const Video = React.lazy(() => import("../components/Video"));
const ContactForm = React.lazy(() => import("../components/ContactForm"));

function Companies() {
  const lang = useStore((state) => state.lang);
  const setLang = useStore((state) => state.setLang);
  const langFromLocal = localStorage.getItem("lang");
  if (!langFromLocal) {
    localStorage.setItem("lang", lang);
  } else {
    setLang(langFromLocal);
  }
  useLang(lang);
  const page = "companies";
  usePageMeta("Aberos Sub Companies", "About aberos plc");
  const data = companies[lang];
  const images = {
    mall: [heroImg, heroImg, heroImg, heroImg],
    restaurant: [heroImg, heroImg, heroImg, heroImg],
    manufacture: [heroImg, heroImg, heroImg, heroImg],
  };

  return (
    <>
      <Header active={page} comp={data.navs} />

      <main className="pt-17">
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-linear-to-r from-primary to-secondary text-white py-15"
        >
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              {data.hero.title}
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              dolorum.
            </p>
          </div>
        </motion.section>

        <main className="bg-text">
          <motion.section
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="py-8 bg-text"
          >
            <div className="max-w-5xl mx-auto text-center px-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-back mb-4"
              >
                {data.video.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-back/70 mb-10"
              >
                {data.video.desc}
              </motion.p>

              <Video
                src={data.video.link}
                title={"Video Describing how Aberos plc structured"}
              />
            </div>
          </motion.section>
          <section className="bg-card pb-12">
            {data.comp.map((com, i) => (
              <section
                key={i}
                className={` ${i % 2 == 1 ? "bg-primary/10" : "bg-back"}`}
              >
                <motion.section
                  id={com.key}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`max-w-5xl mx-auto px-6 py-16 space-y-6`}
                >
                  <h3 className="text-3xl font-bold text-primary mb-4">
                    {com.name}
                  </h3>
                  <p className="text-text/80 mb-6">{com.desc1}</p>

                  <Video
                    src={com.video}
                    title={`Video that describe about ${com.name}`}
                    style={
                      "w-full max-w-4xl mx-auto aspect-video rounded-3xl shadow-xl border mb-6"
                    }
                  />

                  <p className="text-text/80 mb-6">{com.desc2}</p>

                  <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
                    {images[com.key].map((img, j) => (
                      <img
                        key={j}
                        src={img}
                        alt={`${com.name} image ${j + 1}`}
                        className="rounded-xl shadow-md object-cover w-2/5 max-w-56 h-auto"
                      />
                    ))}
                  </div>

                  <p className="text-text/80 mb-6">{com.desc3}</p>

                  <div className="w-full  max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-md border">
                    <iframe
                      src={com.map}
                      className="w-full h-full"
                      allowFullScreen
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Map of the subcompany called ${com.name}`}
                    />
                  </div>
                </motion.section>
              </section>
            ))}
          </section>
        </main>
        <ContactForm />
      </main>
      <Footer page={page} />
    </>
  );
}

export default Companies;
