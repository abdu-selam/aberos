import React from "react";
import { Link } from "react-router";
import heroImg from "../assets/img.jpg";
import Button from "./Button";
import Nav from "./Nav";

export default function Header() {
  return (
    <section className="flex justify-between items-center bg-back p-4 sticky top-0 z-24">
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
        /<Button data="Contact Us" />
      </a>
    </section>
  );
}
