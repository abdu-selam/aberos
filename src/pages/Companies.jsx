import React from "react";
import { motion } from "framer-motion";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import heroImg from "../assets/img.jpg";
import usePageMeta from "../hooks/usePageMeta";

function Companies() {
  const page = "companies";
  usePageMeta("Aberos Sub Companies", "About aberos plc");
  const subCompanies = [
    {
      name: "Mall",
      desc1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, dolorum.",
      desc2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quisquam incidunt exercitationem pariatur earum sapiente ratione excepturi impedit animi autem ea vero nisi aliquid maiores cum repellendus sed tenetur nostrum assumenda alias. Earum nihil voluptatibus aliquid rerum illo temporibus commodi eaque neque voluptate recusandae nam, totam cupiditate repudiandae blanditiis rem?",
      desc3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quisquam incidunt exercitationem pariatur",
      imgs: [heroImg, heroImg, heroImg, heroImg],
      video:
        "https://www.youtube.com/embed/bWzN8NuZWF8?controls=0&modestbranding=1",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d988.1115485527807!2d38.18581715226174!3d7.848281200886689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b30903777ac633%3A0xa08a798dca44bc0b!2sAtot%20hotel%20%26%20Restaurant!5e0!3m2!1sen!2set!4v1769427552240!5m2!1sen!2set",
      link: "manufacture",
    },
    {
      name: "Mall",
      desc1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, dolorum.",
      desc2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quisquam incidunt exercitationem pariatur earum sapiente ratione excepturi impedit animi autem ea vero nisi aliquid maiores cum repellendus sed tenetur nostrum assumenda alias. Earum nihil voluptatibus aliquid rerum illo temporibus commodi eaque neque voluptate recusandae nam, totam cupiditate repudiandae blanditiis rem?",
      desc3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quisquam incidunt exercitationem pariatur",
      imgs: [heroImg, heroImg, heroImg, heroImg],
      video:
        "https://www.youtube.com/embed/bWzN8NuZWF8?controls=0&modestbranding=1",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d988.1115485527807!2d38.18581715226174!3d7.848281200886689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b30903777ac633%3A0xa08a798dca44bc0b!2sAtot%20hotel%20%26%20Restaurant!5e0!3m2!1sen!2set!4v1769427552240!5m2!1sen!2set",
      link: "restaurant",
    },
    {
      name: "Mall",
      desc1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, dolorum.",
      desc2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quisquam incidunt exercitationem pariatur earum sapiente ratione excepturi impedit animi autem ea vero nisi aliquid maiores cum repellendus sed tenetur nostrum assumenda alias. Earum nihil voluptatibus aliquid rerum illo temporibus commodi eaque neque voluptate recusandae nam, totam cupiditate repudiandae blanditiis rem?",
      desc3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quisquam incidunt exercitationem pariatur",
      imgs: [heroImg, heroImg, heroImg, heroImg],
      video:
        "https://www.youtube.com/embed/bWzN8NuZWF8?controls=0&modestbranding=1",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d988.1115485527807!2d38.18581715226174!3d7.848281200886689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b30903777ac633%3A0xa08a798dca44bc0b!2sAtot%20hotel%20%26%20Restaurant!5e0!3m2!1sen!2set!4v1769427552240!5m2!1sen!2set",
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
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Our Companies
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              dolorum.
            </p>
          </div>
        </motion.section>

        <main className="bg-text">
          <motion.nav
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-white/50 border mix-blend-difference border-white/20 backdrop-blur-md sticky top-18 w-max px-6 py-2 mx-auto rounded-lg"
          >
            <ul className="flex justify-center gap-6 text-primary font-medium">
              {subCompanies.map((com, i) => (
                <li key={i} className="hover:text-secondary transition">
                  <a href={`#${com.link}`}>{com.name}</a>
                </li>
              ))}
            </ul>
          </motion.nav>

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
                Inside Our Company
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-back/70 mb-10"
              >
                Discover how Aberos PLC operates across multiple industries.
              </motion.p>
              <motion.iframe
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full aspect-video rounded-3xl shadow-xl border"
                src={subCompanies[0].video}
                allowFullScreen
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                title="Video Describing how Aberos plc structured"
              />
            </div>
          </motion.section>
          <section className="bg-card pb-12">
            {subCompanies.map((com, i) => (
              <section
                key={i}
                className={` ${i % 2 == 1 ? "bg-primary/10" : "bg-back"}`}
              >
                <motion.section
                  id={com.link}
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

                  <motion.iframe
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="w-full max-w-4xl mx-auto aspect-video rounded-3xl shadow-xl border mb-6"
                    src={com.video}
                    allowFullScreen
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    title={`Video that describe about ${com.name}`}
                  />

                  <p className="text-text/80 mb-6">{com.desc2}</p>

                  <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
                    {com.imgs.map((img, j) => (
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
                    ></iframe>
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
