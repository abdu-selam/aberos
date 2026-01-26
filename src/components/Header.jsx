import React, { useState, useRef } from "react";
import heroImg from "../assets/img.jpg";
import Button from "./Button";
import Nav from "./Nav";
import { motion } from "framer-motion";

export default function Header({ active }) {
  const [open, setOpen] = useState("close");
  const [cross, setCross] = useState("not");
  const [lang, setLang] = useState('en')
  const langRef = useRef()

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
      className="h-max min-w-full bg-back sticky top-0 z-24"
    >
      <div className="flex justify-between items-center px-6 py-1 w-vw max-w-7xl mx-auto">
        <motion.figure
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-1.5 w-max"
        >
          <img
            src={heroImg}
            width={200}
            alt="Hero image"
            className="w-12 h-12 rounded-full border-2 border-border"
          />
          <figcaption className="flex flex-col items-start">
            <h2 className="text-[1.4rem] text-txt">Aberos</h2>
          </figcaption>
        </motion.figure>

        <div
          onClick={menuBar}
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
        </div>

        <Nav active={active} state={open} />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.25 }}
          className="flex"
        >
          <p onClick={()=>setLang('am')} className={`${lang == 'am' ? 'hidden':''} bg-primary px-2 rounded-sm mx-1 text-back`}>አ</p>
          <p onClick={()=>setLang('ar')} className={`${lang == 'ar' ? 'hidden':''} bg-primary px-2 rounded-sm mx-1 text-back`}>ع</p>
          <p onClick={()=>setLang('en')} className={`${lang == 'en' ? 'hidden':''} bg-primary px-2 rounded-sm mx-1 text-back`}>E</p>
        </motion.div>
      </div>
    </motion.header>
  );
}
