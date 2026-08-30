import { motion, useInView } from "framer-motion";
import bgOne from "../../../assets/bg-4.webp";
import bgTwo from "../../../assets/bg-5.webp";
import AppleTyping from "../../../components/effects/AppleTyping";
import { useRef } from "react";

const MissionAndVission = () => {
  const data = [
    {
      title: "Lorem ipsum dolor sit amet.",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing",
      image: bgOne,
    },
    {
      title: "Lorem ipsum dolor sit amet.",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: bgTwo,
    },
  ];

  const refOne = useRef();
  const isInView1 = useInView(refOne, { amount: 0.3 });

  const refTwo = useRef();
  const isInView2 = useInView(refTwo, { amount: 0.3 });

  return (
    <section>
      <ul className="md:max-w-6xl mx-auto">
        {data.map((item, i) => (
          <li className="h-screen" key={i}>
            <figure className="h-8/10 relative md:grid grid-cols-2 md:px-4 md:gap-4">
              <motion.img
                ref={i === 0 ? refOne : refTwo}
                animate={{
                  opacity: Number(i === 0 ? isInView1 : isInView2),
                }}
                className={`h-full md:w-full object-cover ${i === 1 && "md:col-start-2 md:col-end-3 row-span-2"}`}
                src={item.image}
                alt=""
              />
              <figcaption
                className={`max-md:absolute bottom-0 md:w-full bg-linear-0 from-back/70 from-60% to-transparent max-md:px-4 md:self-end md:p-4 md:-translate-y-20 shrink-0 ${i === 1 ? "md:col-start-1 md:col-end-1 md:translate-x-20 text-end" : "md:-translate-x-20"}`}
              >
                <h2 className="">
                  <AppleTyping
                    text={item.title}
                    once={false}
                    className="text-3xl font-runalto font-semibold"
                    animate
                    animation={{
                      y: (i === 0 ? isInView1 : isInView2) ? 0 : 10,
                      opacity: Number(i === 0 ? isInView1 : isInView2),
                    }}
                  />
                </h2>
                <motion.p
                  animate={{
                    opacity: Number(i === 0 ? isInView1 : isInView2),
                  }}
                  className="text-sm"
                >
                  {item.text}
                </motion.p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MissionAndVission;
