import React from "react";
import heroImg from "../assets/img.jpg";
import Button from "./Button";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-back px-6 py-3 sticky top-0 z-24 w-vw">
      <figure className="flex items-center gap-1.5">
        <img
          src={heroImg}
          width={200}
          alt="Hero image"
          className="w-8 h-8 rounded-full border-2 border-border "
        />
        <figcaption className="flex flex-col items-start">
          <h2 className="text-[1.4rem] text-txt">Aberos</h2>
        </figcaption>
      </figure>
      <Nav />
      <a href="#contact">
        <Button data="Contact Us" />
      </a>
    </header>
  );
}
