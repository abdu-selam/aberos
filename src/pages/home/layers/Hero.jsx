import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import heroBg from "../../../assets/hero-bg.webp";
import Button from "../../../components/ui/Button";
import { motion } from "framer-motion";
import AppleTyping from "../../../components/effects/AppleTyping";

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
    <div className="relative h-[calc(100dvh-2.8rem)] text-text-dark">
      <motion.img
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
        }}
        src={heroBg}
        className="absolute -z-1 w-full h-dvh bottom-0 object-cover object-center"
        alt=""
      />
      <div className="absolute -z-1 w-full h-dvh bottom-0 left-0 bg-linear-135 from-black/80 to-black/50"></div>
      <section className="p-4 flex flex-col h-full justify-between max-w-max-width mx-auto">
        <p className="max-w-60 text-sm">
          <AppleTyping text="Aberos is committed to delivering innovative solutions, creating lasting value, and building a future." />
        </p>
        <section className="flex flex-col gap-4 items-center">
          <div>
            <h1 className="text-[clamp(1.25rem,6vw,4rem)] font-bold flex flex-col leading-5 min-[21rem]:leading-[6vw] lg:leading-17 *:font-runalto">
              <div className="text-center inline-block">
                <AppleTyping
                  duration={0.5}
                  text="Building Tomorrow, Today"
                  className="font-runalto"
                  y={20}
                />
              </div>
              <div className="text-center inline-block text-accent">
                <AppleTyping
                  text="Excellence in Every Endeavor"
                  className="font-runalto text-accent"
                  y={30}
                />
              </div>
            </h1>
          </div>
          <Button
            initial={{
              scale: 0,
              rotateZ: 30,
            }}
            animate={{
              scale: 1,
              rotateZ: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
            }}
          >
            Our Companies
          </Button>
        </section>
        <div className="max-w-55 flex self-end flex-col gap-3">
          <p className="text-sm ">
            <AppleTyping
              text="We bring together diverse businesses and bold ideas to create value."
              toBottom
            />
          </p>
          <ul className="flex gap-2 w-max">
            {links.map((item, i) => (
              <motion.li
                initial={{
                  y: 10,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.1 * i,
                  type: "spring",
                  stiffness: 300,
                }}
                key={i}
              >
                <a
                  className="block bg-back text-text p-1.5 rounded-full hover:bg-accent hover:text-text-dark transition duration-300"
                  href={item.link}
                  target="_blank"
                >
                  <item.icon />
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Hero;
