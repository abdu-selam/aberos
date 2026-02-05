import React, { useState, useRef } from "react";
import logo from '../assets/logo.avif'
import Nav from "./Nav";
import { motion } from "framer-motion";
import useStore from "../store/useStore";
import { header } from "../data/translation";

export default function Header({ active }) {
  const lang = useStore((state) => state.lang);
  const setLang = useStore((state) => state.setLang);
  const [open, setOpen] = useState("close");
  const [cross, setCross] = useState("not");
  const headerData = header[lang]

  const menuBar = () => {
    if (open == "close") {
      setOpen("open");
      setCross("cross");
    } else {
      setOpen("close");
      setCross("not");
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="h-max min-w-full bg-back fixed top-0 z-24"
    >
      <section className="flex justify-between items-center px-6 py-1 w-vw max-w-7xl mx-auto">
        <motion.figure
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-1.5 w-max"
        >
          <img
            src={logo}
            width={200}
            alt="Hero image"
            className="w-12 h-12 rounded-full border-2 border-border"
          />
          <figcaption className="flex flex-col items-start">
            <h2 className="text-[1.4rem] text-txt">{headerData['name']}</h2>
          </figcaption>
        </motion.figure>

        <button
          onClick={menuBar}
          aria-label="Open menu"
          className={`flex ${cross == "not" ? "gap-1" : ""} flex-col order-1 sm:hidden`}
        >
          <div
            className={`w-7 h-1 transition-all origin-left duration-500 bg-primary ${
              cross == "not" ? "" : "-rotate-45 translate-y-3"
            }`}
          ></div>
          <div
            className={`w-7 h-1 transition-all origin-left duration-500 bg-primary ${
              cross == "not" ? "" : "rotate-45 -translate-y-3"
            }`}
          ></div>
        </button>

        <Nav active={active} state={open} data={headerData['navs']}/>

        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.25 }}
          className="flex"
        >
          <button
            onClick={() => setLang("am")}
            className={`${lang == "am" ? "hidden" : ""} bg-primary px-2 rounded-sm mx-1 text-back`}
          >
            አማ
          </button>
          <button
            onClick={() => setLang("ar")}
            className={`${lang == "ar" ? "hidden" : ""} bg-primary px-2 rounded-sm mx-1 text-back`}
          >
            عr
          </button>
          <button
            onClick={() => setLang("en")}
            className={`${lang == "en" ? "hidden" : ""} bg-primary px-2 rounded-sm mx-1 text-back`}
          >
            En
          </button>
        </motion.section>
      </section>
    </motion.header>
  );
}
