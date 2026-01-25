import React from "react";
import { Facebook, Mail, Send, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router";

import heroImg from "../assets/img.jpg";
import factoryImg from "../assets/factory.png";
import Header from "../components/Header";
import Button from "../components/Button";

export default function Home() {
  const subCompany = [
    {
      name: "Mall",
      desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.Inventore fugit, natus iste rem, velit laborum numquam repellendus corrupti animi cumque repellat vel iure repudiandae, at tempora laudantium quas similique eius.`,
      img: heroImg,
    },
    {
      name: "Mall",
      desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.Inventore fugit, natus iste rem, velit laborum numquam repellendus corrupti animi cumque repellat vel iure repudiandae, at tempora laudantium quas similique eius.`,
      img: heroImg,
    },
    {
      name: "Mall",
      desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.Inventore fugit, natus iste rem, velit laborum numquam repellendus corrupti animi cumque repellat vel iure repudiandae, at tempora laudantium quas similique eius.`,
      img: heroImg,
    },
  ];

  return (
    <>
      <Header />
      <section className="h-dvh flex flex-col">
        <section className="w-full h-full m-auto flex items-center px-8 justify-center bg-cover bg-[url(./assets/img.jpg)] relative before:content-[''] before:w-full before:h-full before:bg-[rgba(0,0,0,0.75)]  before:-z-10 z-0 before:absolute before:bottom-0 before:left-0">
          <section className="flex flex-col gap-4 w-dvw">
            <h1 className="font-bold text-4xl text-back">Aberos PLC</h1>
            <p className="w-[70%] text-back">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              veniam sapiente sunt inventore nam facere, minus dicta harum
            </p>
            <div className="flex gap-1.5">
              <Link to='/about'>
                <Button data={'Learn More'}></Button>
              </Link>
              <a href="#video">
                <Button data={'Watch Video'} border={true}></Button>
              </a>
            </div>
          </section>
          <div className="w-full">
            <img
              src={factoryImg}
              alt=""
              className="w-full rounded-full" />
          </div>
        </section>
      </section>
      <section className="w-[70%] my-12 mx-auto" id="video">
        <h2 className="text-center font-bold text-xl pb-1.5">Watch The Video</h2>
        <p className="mb-8 mx-auto text-center text-xl w-[70%]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
        </p>
        <iframe src="https://www.youtube.com/embed/bWzN8NuZWF8?si=JPcoASEX1nYVAyf6&controls=0&modestbranding=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
          className="w-full aspect-video rounded-2xl shadow-[0_0_2rem_black] border"
        ></iframe>
      </section>
      <main>
        <section className="flex flex-col items-center p-4">
          <h2 className="font-bold text-xl p-1.5">About Us</h2>
          <p className="w-[70%] text-center text-[16px] pb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            illum, maxime consectetur aut modi obcaecati voluptates, doloribus
            porro qui ipsa esse aliquid, blanditiis tempora voluptatibus
            corporis id doloremque cum praesentium!
            dolor sit amet consectetur adipisicing elit. Accusantium
            illum, maxime consectetur aut modi obcaecati voluptates, doloribus
            porro qui ipsa esse aliquid, blanditiis tempora voluptatibus
            corporis id doloremque cum praesentium!
          </p>
          <section className="flex w-[80%] justify-center gap-6 my-2 pb-4">
            {[heroImg, heroImg, heroImg].map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="w-50 rounded-lg shadow-[0.2rem_0.2rem_0.5rem_rgba(0,0,0,0.6)]"
              />
            ))}
          </section>
          <p className="w-[70%] text-center pb-1.5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laborum
            numquam .
          </p>
          <Link to='/about'>
            <Button data="See More" />
          </Link>
        </section>
        <section className="p-8 bg-cover bg-[url(./assets/img.jpg)] relative before:content-[''] before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)]  before:-z-10 z-0 before:absolute before:bottom-0 before:left-0">
          <h2 className="text-center text-2xl font-bold mb-1.5">sub companies</h2>
          <p className="w-3/5 text-center mx-auto mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla beatae nesciunt sit eum minima suscipit veritatis explicabo unde consequatur rerum adipisci odit, distinctio, quo quasi dignissimos velit placeat eius. Eligendi.</p>
          <section className="flex gap-12">
            {subCompany.map((com, i) => (
              <section
                key={i}
                className={`flex flex-col w-full bg-[rgba(255,255,255,0.4)] p-2 rounded-2xl backdrop-blur-sm mx-auto items-center shadow-[0_0_0.4rem_white] gap-4 border-2 border-white`}
              >
                <img
                  src={com.img}
                  width={200}
                  alt=""
                  className="w-full rounded-lg shadow-[0_0_1rem]"
                />
                <div className="flex flex-col gap-1.5 items-center">
                  <h3 className="text-xl font-bold text-center">{com.name}</h3>
                  <p className="text-center">{com.desc}</p>
                  <Button data="button" full={true} />
                </div>
              </section>
            ))}
          </section>
          <section className="py-4">
            <h2 className="text-center text-2xl font-bold mb-4">Why Us</h2>
            <ul className="grid grid-cols-2 gap-4 py-4">
              {[1, 2, 3, 4, 5, 6].map((item, i) => (
                <li
                  key={1}
                  className={`bg-[rgba(255,255,255,0.6)] backdrop-blur-sm w-full shadow-[-0.2rem_0.2rem_0.2rem_rgba(0,0,0,0.3)] 
              p-3 rounded-lg relative flex gap-2
              `}
                >
                  <Facebook className="bg-amber-50 p-2 rounded-lg block w-15 h-auto row-span-2" />
                  <div className="flex flex-col items-start">
                    <h4 className="text-lg font-bold">demo whish</h4>
                    <p className="">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Odit, corrupti.
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </section>
        <section className="p-8" id="contact">
          <h2 className="text-center text-2xl font-bold mb-1.5">Contact Us</h2>
          <p className="text-center w-[40%] mx-auto pb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            error!
          </p>
          <form className="w-[70%] mx-auto my-4 grid grid-cols-2 bg-amber-500 p-4 rounded-xl gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                className="bg-amber-400 px-1 py-1 rounded-lg focus:outline-none"
                placeholder="Your Full Name"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                className="bg-amber-400 px-1 py-1 rounded-lg focus:outline-none"
                placeholder="Your Email Address"
              />
            </div>

            <div className="col-start-1 col-end-3 flex flex-col gap-1">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                className="bg-amber-400 px-1 py-1 rounded-lg w-full h-60 focus:outline-none"
                placeholder="Your message"
              ></textarea>
            </div>

            <Button data="Send" full={true} />
          </form>
        </section>
      </main>
      <footer className="bg-amber-950 grid grid-cols-3 p-8 pb-4 place-items-center gap-4">
        <ul className="flex gap-4">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <a href="">companies</a>
          </li>
        </ul>
        <ul className="flex gap-4">
          <li>
            <Facebook />
          </li>
          <li>
            <Mail />
          </li>
          <li>
            <Send />
          </li>
          <li>
            <Twitter />
          </li>
          <li>
            <Linkedin />
          </li>
        </ul>
        <ul className="flex gap-4">
          <li>Manufacture</li>
          <li>Mall</li>
        </ul>
        <p className="col-start-1 col-end-4">Lorem ipsum dolor sit amet.</p>
      </footer>
    </>
  );
}
