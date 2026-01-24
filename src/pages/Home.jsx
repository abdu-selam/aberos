import React from "react";
import { Facebook, Mail, Send, Twitter, Linkedin } from "lucide-react";
import heroImg from "../assets/img.jpg";

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
      <header className="bg-amber-800 h-lvh flex flex-col">
        <section className="flex justify-between items-center bg-amber-950 p-4">
          <figure className="flex items-center gap-1.5">
            <img
              src={heroImg}
              width={200}
              alt="Hero image"
              className="w-8 h-8 rounded-full border-2 border-amber-300 "
            />
            <figcaption className="flex flex-col items-start">
              <h2 className="text-[1.4rem]">Aberos</h2>
            </figcaption>
          </figure>
          <nav className="w-auto">
            <ul className="flex gap-4">
              {["Home", "About", "companies"].map((item, i) => (
                <li key={i} className="text-[1rem]">
                  {item}
                </li>
              ))}
            </ul>
          </nav>
          <button className="text-[1rem] bg-amber-200 px-2 py-1.5 rounded-lg">
            contact us
          </button>
        </section>
        <section className="w-[70%] h-full m-auto flex flex-col items-center justify-center gap-3">
          <h1 className="font-bold text-4xl">Aberos PLC</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            veniam sapiente sunt inventore nam facere, minus dicta harum
            necessitatibus nesciunt, rem doloremque! Sapiente optio cum
            reiciendis officia obcaecati, nihil neque!
          </p>
        </section>
      </header>
      <section className="w-[70%] my-12 mx-auto">
        <p className="my-8 mx-auto text-center text-2xl w-[70%]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
          nostrum!
        </p>
        <img
          src={heroImg}
          className="w-full rounded-2xl shadow-[0_0_2rem_black]"
        />
      </section>
      <main>
        <section className="flex flex-col items-center p-4 gap-4">
          <h2 className="font-bold text-2xl">About Us</h2>
          <p className="w-[70%] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            illum, maxime consectetur aut modi obcaecati voluptates, doloribus
            porro qui ipsa esse aliquid, blanditiis tempora voluptatibus
            corporis id doloremque cum praesentium!
          </p>
          <section className="flex w-[80%] justify-evenly my-2">
            {[heroImg, heroImg, heroImg].map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="w-50 rounded-lg shadow-[0_0_1rem]"
              />
            ))}
          </section>
          <p className="w-[70%] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laborum
            numquam .
          </p>
          <button className="bg-amber-300 px-3 py-1.5 text-xl rounded-lg">
            See More
          </button>
        </section>
        <section className="p-8 bg-amber-100">
          <h2 className="text-center text-2xl font-bold mb-4">sub companies</h2>
          <section className="flex flex-col gap-12">
            {subCompany.map((com, i) => (
              <section
                key={i}
                className={`flex ${i == 1 ? "flex-row-reverse" : ""} w-[85%] mx-auto items-center gap-4`}
              >
                <img
                  src={com.img}
                  width={200}
                  alt=""
                  className="w-75 rounded-lg shadow-[0_0_1rem]"
                />
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold text-center">{com.name}</h3>
                  <p className="text-center">{com.desc}</p>
                  <button className="bg-amber-300 px-3 py-1.5 rounded-lg mx-auto block">
                    button
                  </button>
                </div>
              </section>
            ))}
          </section>
        </section>
        <section className="p-4 px-8 bg-amber-600">
          <h2 className="text-center text-2xl font-bold mb-4">Why Us</h2>
          <ul className="flex flex-col gap-2 before:content-[''] before:w-2.5 before:h-full before:bg-black relative before:absolute before:left-1/2 before:-translate-x-1/2 before:z-12 before:rounded-2xl before:shadow-[0_0_1rem]">
            {[1, 2, 3, 4, 5, 6].map((item, i) => (
              <li
                key={1}
                className={`bg-amber-200 w-[40%] 
                ${i % 2 == 1 ? "self-end shadow-[-0.2rem_0.2rem_0.2rem] before:-left-[25%]" : "shadow-[0.2rem_0.2rem_0.2rem] before:-right-[25%]"} 
              p-3 rounded-lg relative
              before:content-[''] before:w-[25%] before:h-1 before:bg-amber-950 before:absolute before:top-1/2 before:-translate-y-1/2
              `}
              >
                <h4 className="text-center text-lg font-bold">demo whish</h4>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Odit, corrupti.
                </p>
              </li>
            ))}
          </ul>
        </section>
        <section className="p-8">
          <p className="text-center w-[40%] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            error!
          </p>
          <form className="w-[70%] mx-auto my-4 grid grid-cols-2 bg-amber-500 p-4 rounded-xl gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="fullname">Full Name</label>
              <input type="text" id="fullname" name="fullname" className="bg-amber-400 px-1 py-1 rounded-lgfocus:outline-none" />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" name="email" className="bg-amber-400 px-1 py-1 rounded-lg focus:outline-none"/>
            </div>

            <div className="col-start-1 col-end-3 flex flex-col gap-1">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" className="bg-amber-400 px-1 py-1 rounded-lg w-full h-60 focus:outline-none"></textarea>
            </div>

            <button className="bg-amber-300 px-3 py-1.5 rounded-lg mx-auto block col-start-1 col-end-3">Send</button>
          </form>
        </section>
      </main>
      <footer className="bg-amber-950 grid grid-cols-3 p-8 pb-4 place-items-center gap-4">
        <ul className="flex gap-4">
          <li>Home</li>
          <li>About Us</li>
          <li>companies</li>
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
