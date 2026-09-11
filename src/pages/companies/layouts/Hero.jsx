import mall from "../../../assets/mall.webp";
import restaurant from "../../../assets/restaurant.webp";
import factory from "../../../assets/factory.webp";
import { useRef } from "react";
import { motion } from "framer-motion";
import AppleTyping from "../../../components/effects/AppleTyping";

const Hero = () => {
  const links = [
    {
      name: "Mall",
      link: "#mall",
    },
    {
      name: "Restaurant",
      link: "#restaurant",
    },
    {
      name: "Factory",
      link: "#factory",
    },
  ];
  const linksRef = useRef([]);

  return (
    <section className="sticky top-[2.8rem]">
      <div className="h-[calc(100dvh-2.8rem)] flex flex-col items-center justify-center bg-text relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-screen -z-1 bg-text w-screen"></div>
        <div className="flex flex-col items-center justify-center -translate-y-12">
          <h1 className="text-[min(8vw,6rem)] leading-none px-4 *:font-runalto font-bold *:text-accent pb-3">
            <AppleTyping text="Built for Lasting Value" animate delay={0.3} />
          </h1>
          <p className="*:text-back text-center text-xs px-4 pb-3 max-w-150">
            <AppleTyping
              text="Aberos PLC brings together businesses across retail, hospitality and manufacturing, creating opportunities that connect people, strengthen communities, and contribute to sustainable economic growth."
              animate
            />
          </p>
          <ul className="flex gap-3 w-max">
            {links.map((item, i) => (
              <motion.li
                initial={{
                  y: 10,
                  opacity: 0,
                }}
                animate={{
                  y: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 * (i + 1),
                }}
                className={`w-max`}
                key={i}
              >
                <a
                  ref={(el) => (linksRef.current[i] = el)}
                  className="text-accent hover:text-back transition font-runalto font-semibold text-sm"
                  href={item.link}
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
          <ul className="flex max-w-120 pt-16">
            {[mall, restaurant, factory].map((item, i) => (
              <motion.li
                initial={{
                  y: 30,
                  x: 30,
                  opacity: 0,
                  rotate: -45,
                  scale: 0.9,
                }}
                animate={{
                  y: 0,
                  x: 0,
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.2 * i,
                  scale: {
                    duration: 0.5,
                    delay: 0.6 + 0.2 * i,
                    type: "spring",
                  },
                  rotate: {
                    duration: 0.5,
                    delay: 0.6 + 0.2 * i,
                    type: "spring",
                  },
                }}
                className={`w-full aspect-square overflow-hidden rounded-xl rotate-45  ${i === 1 ? "translate-y-1/3" : "-translate-y-1/3"}`}
                key={i}
              >
                <img
                  onClick={() => {
                    linksRef.current[i].click();
                  }}
                  className={`w-full h-full object-cover -rotate-45 scale-140 hover:scale-150 transition`}
                  width={100}
                  src={item}
                  alt={`image of aberos subfactory ${i} in the hero div of companies page`}
                />
              </motion.li>
            ))}
          </ul>
        </div>
        <motion.ul className="">
          {[0, 1].map((item, i) => (
            <motion.li
              initial={{
                scale: 0.4,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3 * item,
              }}
              className={`w-screen max-w-150 aspect-square absolute bottom-0 right-0 translate-1/2 rounded-full shadow-[0_0_0.8rem] shadow-back/15 ${i === 1 && "scale-75"}`}
              key={i}
            ></motion.li>
          ))}
        </motion.ul>
        <motion.ul className="">
          {[1, 2].map((item, i) => (
            <motion.li
              initial={{
                scale: 0.4,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3 * item,
                type: "spring",
              }}
              className={`w-[85vw] max-w-127.5 lg:max-w-100 aspect-square absolute top-[-2.8rem] lg:top-full left-0 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_0.8rem] shadow-back/15 ${i === 1 && "scale-75"}`}
              key={i}
            ></motion.li>
          ))}
        </motion.ul>
        {/* 
      1. title
      2. description
      3. link to each company
      4. 3 images
      5. 2 side circles
            - each two
      */}
      </div>
    </section>
  );
};

export default Hero;
