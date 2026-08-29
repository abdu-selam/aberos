import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import image from "../../../assets/hero-bg.webp";
import bgOne from "../../../assets/bg-2.webp";
import bgTwo from "../../../assets/bg-3.webp";
import bgThree from "../../../assets/bg-4.webp";
import bgFour from "../../../assets/bg-5.webp";
import MoltenMetal from "../../../components/effects/MoltenMetal";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

const Overview = () => {
  const images = [image, bgOne, bgTwo, bgThree, bgFour];
  const [curr, setCurr] = useState(0);
  const stats = [
    {
      name: "Years of Experience",
      amount: 12,
    },
    {
      name: "Fulltime Employees",
      amount: 120,
    },
    {
      name: "Sub Companies",
      amount: 3,
    },
    {
      name: "Active Clients",
      amount: 25,
    },
  ];
  const wrapperRef = useRef();
  const [scrollWidth, setScrollWidth] = useState(0);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.round(latest * 4);
    if (index === 5 || index < 0) return;
    setCurr(index);
  });

  const y = useTransform(scrollYProgress, [0, 1], ["1vh", "95vh"]);

  return (
    <section className="pt-8 relative pb-8">
      <div ref={wrapperRef} className="h-[300dvh]">
        <div
          className={`flex flex-col sticky top-12 items-start gap-2 pt-6 px-4 ${curr === 4 ? "h-[95vh]" : "h-max"}`}
        >
          <h2 className="text-[min(5vw,2.5rem)] font-bold text-center *:text-accent">
            <span className="whitespace-nowrap">Shaping Growth.</span>{" "}
            <span className="whitespace-nowrap">Creating Impact.</span>
          </h2>
          <p className="max-w-150">
            We are a dynamic group of companies united by a commitment to
            innovation, quality, and progress.
          </p>
        </div>
        <ul className="flex items-center justify-center gap-4 min-[60rem]:mx-auto py-4 sticky top-1/4 transform-3d perspective-distant">
          {images.map((item, i) => {
            const logicFor2 =
              curr + 1 === i ||
              curr - 4 === i ||
              curr - 1 === i ||
              (curr === 0 && i === 4);

            const order =
              curr === i
                ? {
                    num: 2,
                    class: "order-2",
                  }
                : curr + 1 === i || (curr === 4 && i === 0)
                  ? {
                      num: 3,
                      class: "order-3",
                    }
                  : curr + 2 === i ||
                      (curr === 3 && i === 0) ||
                      (curr === 4 && i === 1)
                    ? {
                        num: 4,
                        class: "order-4",
                      }
                    : curr - 1 === i || (curr === 0 && i === 4)
                      ? {
                          num: 1,
                          class: "order-1",
                        }
                      : {
                          num: 0,
                          class: "order-0",
                        };

            let rotateY = 0;
            switch (order.num) {
              case 1:
                rotateY = -30;
                break;
              case 3:
                rotateY = 30;
                break;
              case 0:
                rotateY = -45;
                break;
              case 4:
                rotateY = 45;
                break;
            }

            return (
              <motion.li
                animate={{
                  opacity: order.num == 2 ? 1 : logicFor2 ? 0.6 : 0.4,
                  rotateY,
                }}
                transition={{
                  opacity: {
                    duration: 0.3,
                  },
                  rotateY: {
                    duration: 0.4,
                    delay: 0.1,
                  },
                }}
                key={i}
                className={`${
                  curr === i
                    ? "w-8/10 max-w-110"
                    : logicFor2
                      ? "w-6/10 max-w-82.5"
                      : "w-4/10 max-w-55"
                } shrink-0 aspect-9/13 
            overflow-hidden flex items-center justify-center transition duration-300
            relative ${order.class}
            `}
              >
                <figure className="h-full w-full relative">
                  <img
                    className="w-full h-full object-cover"
                    src={item}
                    alt=""
                  />
                  {curr === i && (
                    <figcaption className="absolute w-full bottom-0 p-4 bg-linear-0 from-back/70 from-60% to-transparent flex flex-col gap-3">
                      <h3 className="text-lg font-bold">
                        Lorem ipsum dolor sit amet consectetur.
                      </h3>
                      <p className="text-sm opacity-80">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Cupiditate officia ipsum unde illo consequatur
                        debitis.
                      </p>
                    </figcaption>
                  )}
                </figure>
              </motion.li>
            );
          })}
        </ul>
      </div>
      <h2 className="px-4 sm:text-[1.8rem] min-[30rem]:text-[1.6rem] text-[1.4rem] font-bold text-center *:text-accent">
        <span className="whitespace-nowrap">Our Story,</span>{" "}
        <span className="whitespace-nowrap">By the Numbers</span>
      </h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 mx-auto max-w-5xl">
        {stats.map((item, i) => (
          <li
            className="flex flex-col gap-2 items-center border border-text/20 p-4 rounded-2xl bg-back/10 backdrop-blur-md"
            key={i}
          >
            <p className="text-4xl font-bold">{item.amount}+</p>
            <p className="text-center">{item.name}</p>
          </li>
        ))}
      </ul>
      <p className="text-center mx-auto max-w-120 px-4">
        Every number tells a story of our progress, achievements, and commitment
        to creating lasting value.
      </p>
      <div className="w-9/10 mx-auto relative py-8">
        <div className="w-full h-0.5 absolute left-1/2 top-1/2 -translate-1/2 bg-text/50"></div>
        <p className="text-accent bg-back w-max px-4 mx-auto font-bold small-caps absolute left-1/2 top-1/2 -translate-1/2">
          Legacy of Growth
        </p>
        <ul className="absolute w-full left-1/2 top-1/2 -translate-1/2 flex justify-between">
          <li className="w-4 h-4 bg-accent  rotate-45 rounded-sm shadow shadow-back"></li>
          <li className="w-4 h-4 bg-accent  rotate-45 rounded-sm shadow shadow-back"></li>
        </ul>
      </div>
    </section>
  );
};

export default Overview;
