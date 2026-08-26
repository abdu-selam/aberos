import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import heroBg from "../../../assets/hero-bg.webp";
import Button from "../../../components/Button";

const Hero = () => {
  const links = [
    {
      icon: FaTiktok,
      link: "#",
    },
    {
      icon: FaLinkedin,
      link: "#",
    },
    {
      icon: FaInstagram,
      link: "#",
    },
  ];

  return (
    <div className="relative h-[calc(100dvh-4.2rem)] text-text-dark">
      <img
        src={heroBg}
        className="absolute -z-1 w-full h-dvh bottom-0 object-cover object-center"
        alt=""
      />
      <div className="absolute -z-1 w-full h-dvh bottom-0 left-0 bg-linear-135 from-black/80 to-black/50"></div>
      <section className="p-4 flex flex-col h-full justify-between max-w-max-width mx-auto">
        <p className="max-w-60 text-sm">
          Aberos is committed to delivering innovative solutions, creating
          lasting value, and building a future.
        </p>
        <section className="flex flex-col gap-4 items-center">
          <div>
            <h1 className="text-[clamp(1.25rem,6vw,4rem)] font-bold text-center">
              Building Tomorrow, Today
            </h1>
            <h2 className="text-[clamp(1.25rem,6vw,4rem)] font-bold text-center text-accent">
              Excellence in Every Endeavor
            </h2>
          </div>
          <Button className="">Our Companies</Button>
        </section>
        <div className="max-w-55 flex self-end flex-col gap-3">
          <p className="text-sm ">
            We bring together diverse businesses and bold ideas to create value.
          </p>
          <ul className="flex gap-2 w-max">
            {links.map((item, i) => (
              <li key={i}>
                <a
                  className="block bg-back text-text p-1.5 rounded-full hover:bg-accent hover:text-text-dark transition duration-300"
                  href={item.link}
                  target="_blank"
                >
                  <item.icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Hero;
