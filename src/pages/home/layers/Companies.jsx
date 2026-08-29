import { useEffect, useRef, useState } from "react";
import image from "../../../assets/hero-bg.webp";
import bgThree from "../../../assets/bg-4.webp";
import bgFour from "../../../assets/bg-5.webp";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import AppleTyping from "../../../components/effects/AppleTyping";

const Companies = () => {
  const companyData = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit rerum vel nesciunt sequi deserunt assumenda accusamus voluptas qui? Dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit rerum vel nesciunt sequi deserunt assumenda accusamus voluptas qui? Dicta.",
      location: "Lorem, ipsum dolor.",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image: bgThree,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit rerum vel nesciunt sequi deserunt assumenda accusamus voluptas qui? Dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit rerum vel nesciunt sequi deserunt assumenda accusamus voluptas qui? Dicta.",
      location: "Lorem, ipsum dolor.",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      image: bgFour,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit rerum vel nesciunt sequi deserunt assumenda accusamus voluptas qui? Dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit rerum vel nesciunt sequi deserunt assumenda accusamus voluptas qui? Dicta.",
      location: "Lorem, ipsum dolor.",
    },
  ];
  const [height, setHeight] = useState("h-max");

  const wrapperRef = useRef();
  const [scrollWidth, setScrollWidth] = useState(0);

  const { scrollYProgress, scrollY } = useScroll({
    target: wrapperRef,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 1) {
      setHeight("h-max");
    } else {
      setHeight("h-screen");
    }
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.99 / 3, 1 / 3, 1.99 / 3, 2 / 3, 1],
    ["0vw", "0vw", `-100vw`, `-100vw`, "-200vw", "-200vw"],
  );
  const xProg = useTransform(scrollYProgress, [0, 1], ["-100%", "-1%"]);

  return (
    <section className="bg-text min-h-dvh">
      <h2
        className={`text-[min(5vw,1.5rem)] sticky top-4 w-full lg:text-3xl p-4 pb-12 font-bold *:text-accent *:font-runalto ${height}`}
      >
        <AppleTyping text="Shaping Growth. Creating Impact." />
      </h2>
      <div ref={wrapperRef} className="relative h-[300vh]">
        <motion.ul
          style={{ x }}
          className="flex w-max transition duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] sticky top-30"
        >
          {companyData.map((item, i) => (
            <li
              className="w-screen flex items-center justify-center shrink-0"
              key={i}
            >
              <div className="w-full max-w-5xl mx-auto relative p-4">
                <h3 className="text-xl min-[25rem]:text-2xl sm:text-4xl w-7/10 max-w-100 absolute z-1 -top-10">
                  <AppleTyping
                    className="text-back font-runalto"
                    text={item.title}
                    toBottom
                    delay={0.3}
                    once={false}
                  />
                </h3>
                <figure className="relative left-10 w-full max-w-lg mx-auto">
                  <motion.img
                    initial={{
                      y: "20%",
                    }}
                    whileInView={{
                      y: 0,
                    }}
                    className="w-[calc(100%-2.5rem)] aspect-9/13 object-cover"
                    src={item.image}
                    alt=""
                  />
                  <motion.figcaption
                    initial={{
                      y: "20%",
                    }}
                    whileInView={{
                      y: 0,
                    }}
                    className="absolute bottom-2 left-5 mix-blend-difference"
                  >
                    {item.location}
                  </motion.figcaption>
                </figure>
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  className="relative pl-10 flex justify-end text-sm"
                >
                  <p className="max-w-120 text-back">{item.description}</p>
                </motion.div>
              </div>
            </li>
          ))}
        </motion.ul>
      </div>
      <motion.div
        style={{
          x: xProg,
        }}
        className="py-4 pr-4 sticky bottom-4 transition duration-100"
      >
        <div className="w-full h-0.5 bg-back"></div>
        <div className="absolute bg-back top-1/2 right-4 -translate-y-1/2 w-5 aspect-square flex items-center justify-center rotate-45"></div>
      </motion.div>
    </section>
  );
};

export default Companies;
