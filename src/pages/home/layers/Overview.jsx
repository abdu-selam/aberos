import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AppleTyping from "../../../components/effects/AppleTyping";
import NumberCounter from "../../../components/effects/NumberCounter";
import { overview, overviewStats as stats } from "../../../store/home";
import OverviewItem from "../components/OverviewItem";

const Overview = () => {
  const [curr, setCurr] = useState(0);

  const wrapperRef = useRef();
  const [scrollWidth, setScrollWidth] = useState(0);

  const mainItem = useRef(null);
  const isInView = useInView(mainItem, { amount: 0.2 });
  const [mainVissible, setMainVisible] = useState(false);

  useEffect(() => {
    if (mainVissible || !isInView) return;
    setMainVisible(true);
  }, [isInView]);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.round(latest * 4);
    if (index === 5 || index < 0) return;
    setCurr(index);
  });


  return (
    <section className="pt-8 relative pb-8">
      <div ref={wrapperRef} className="h-[300dvh]">
        <div
          className={`flex flex-col sticky top-12 items-start gap-2 pt-6 px-4 ${curr === 4 ? "h-[95vh]" : "h-max"} max-w-max-width mx-auto`}
        >
          <h2 className="text-[min(5vw,2.5rem)] font-bold text-center *:text-accent *:font-runalto">
            <AppleTyping
              text="Shaping Growth. Creating Impact."
              y={30}
              amount={1}
            />
          </h2>
          <p className="max-w-150">
            <AppleTyping
              text="We are a dynamic group of companies united by a commitment to innovation, quality, and progress."
              y={20}
              amount={1}
            />
          </p>
        </div>
        <ul className="flex items-center justify-center gap-4 min-[60rem]:mx-auto py-4 sticky top-1/4 transform-3d perspective-distant overflow-x-hidden h-max">
          {overview.map((item, i) => (
            <OverviewItem
              key={i}
              item={item}
              i={i}
              curr={curr}
              mainItem={mainItem}
              mainVissible={mainVissible}
            />
          ))}
        </ul>
      </div>
      <h2 className="px-4 sm:text-[1.8rem] min-[30rem]:text-[1.6rem] text-[1.4rem] font-bold text-center *:text-accent *:font-runalto">
        <span className="whitespace-nowrap">
          <AppleTyping
            amount={1}
            text="Our Story,"
            className="text-accent font-runalto"
          />
        </span>{" "}
        <span className="whitespace-nowrap">
          <AppleTyping
            amount={1}
            text="By the Numbers"
            className="text-accent font-runalto"
          />
        </span>
      </h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 mx-auto max-w-5xl">
        {stats.map((item, i) => (
          <li
            className="flex flex-col gap-2 items-center border border-text/20 p-4 rounded-2xl bg-back/10 backdrop-blur-md"
            key={i}
          >
            <p className="text-4xl font-bold">
              <NumberCounter number={item.amount} />+
            </p>
            <p className="text-center">
              <AppleTyping text={item.name} amount={0.5} />
            </p>
          </li>
        ))}
      </ul>
      <p className="text-center mx-auto max-w-120 px-4">
        Every number tells a story of our progress, achievements, and commitment
        to creating lasting value.
      </p>
      <div className="w-9/10 mx-auto relative py-8">
        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: "100%",
          }}
          viewport={{
            once: true,
            amount: 1,
          }}
          className="w-full h-0.5 absolute left-1/2 top-1/2 -translate-1/2 bg-text/50"
        ></motion.div>
        <p className="text-accent bg-back w-max px-4 mx-auto font-bold absolute left-1/2 top-1/2 -translate-1/2 font-runalto">
          <AppleTyping
            className="text-accent font-runalto"
            text="Legacy of Growth"
            amount={1}
          />
        </p>
        <motion.ul
          initial={{
            width: "max-content",
          }}
          whileInView={{
            width: "100%",
          }}
          viewport={{
            once: true,
            amount: 1,
          }}
          className="absolute w-full left-1/2 top-1/2 -translate-1/2 flex justify-between"
        >
          <li className="w-4 h-4 bg-accent  rotate-45 rounded-sm shadow shadow-back"></li>
          <li className="w-4 h-4 bg-accent  rotate-45 rounded-sm shadow shadow-back"></li>
        </motion.ul>
      </div>
    </section>
  );
};

export default Overview;
