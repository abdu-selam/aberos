import React, { useState } from "react";
import heroImg from "../assets/img.jpg";
import Button from "./Button";
import Nav from "./Nav";

export default function Header({ active }) {

  const [open, setOpen] = useState('close')
  const [cross, setCross] = useState('not')
  const menuBar = ()=>{
    if (open == 'close'){
      setOpen('open')
      setCross('cross')
    } else {
      setOpen('close')
      setCross('not')
    }
  }

  return (
    <header className="flex justify-between items-center bg-back px-6 py-2 sticky top-0 z-24 w-vw max-w-7xl mx-auto">
      <figure className="flex items-center gap-1.5 w-max">
        <img
          src={heroImg}
          width={200}
          alt="Hero image"
          className="w-12 h-12 rounded-full border-2 border-border "
        />
        <figcaption className="flex flex-col items-start">
          <h2 className="text-[1.4rem] text-txt">Aberos</h2>
        </figcaption>
      </figure>
      <div onClick={menuBar} className={`flex ${cross == 'not' ? 'gap-1':''} flex-col order-1 sm:hidden`}>
        <div className={`w-7 h-1 transition-all origin-left duration-500 bg-primary ${cross == 'not' ? '' : '-rotate-45 translate-y-3'}`}></div>
        <div className={`w-7 h-1 transition-all origin-left duration-500 bg-primary ${cross == 'not' ? '' : 'rotate-45 -translate-y-3'}`}></div>
      </div>
        <Nav active={active} state={open}/>
        <a href="#contact">
          <Button data="Contact Us" />
        </a>
    </header>
  );
}
