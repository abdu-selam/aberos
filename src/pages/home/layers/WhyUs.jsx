import { motion, useInView } from "framer-motion";
import bgOne from "../../../assets/bg-2.webp";
import bgTwo from "../../../assets/bg-2.webp";
import { useRef } from "react";
import AppleTyping from "../../../components/effects/AppleTyping";
import WhyUsItem from "../../../components/ui/WhyUsItem";

const WhyUs = () => {
  const items = [
    {
      title: "lorem ipsom amet selor dor korem",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dignissimos rem ipsum Lorem ipsum dolor sit amet consectetur ?",
    },
    {
      title: "lorem ipsom amet selor dor korem",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dignissimos rem ipsum Lorem ipsum dolor sit amet consectetur ?",
    },
    {
      title: "lorem ipsom amet selor dor korem",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dignissimos rem ipsum Lorem ipsum dolor sit amet consectetur ?",
    },
    {
      title: "lorem ipsom amet selor dor korem",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dignissimos rem ipsum Lorem ipsum dolor sit amet consectetur ?",
    },
    {
      title: "lorem ipsom amet selor dor korem",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dignissimos rem ipsum Lorem ipsum dolor sit amet consectetur ?",
    },
    {
      title: "lorem ipsom amet selor dor korem",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dignissimos rem ipsum Lorem ipsum dolor sit amet consectetur ?",
    },
  ];
  const ref = useRef();
  const isInView = useInView(ref, { amount: 0, margin: "30px 0px 0px 0px" });

  return (
    <section>
      <div className="bg-text">
        <div className="h-screen relative flex justify-center items-center w-full max-w-7xl mx-auto">
          <motion.img
            animate={{
              rotate: isInView ? 30 : 0,
              scale: isInView ? 1 : 0,
              opacity: isInView ? 1 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
            className="absolute top-15 left-15 w-40 aspect-square object-cover object-center rounded-lg"
            src={bgOne}
            alt=""
          />
          <h2 className="text-[7vw] max-sm:leading-none sm:text-5xl text-center">
            <div>
              <AppleTyping
                once={false}
                text="Lorem ipsum amet."
                className="font-runalto font-bold text-back"
              />
            </div>
            <div>
              <AppleTyping
                once={false}
                text="Lorem ipsum dolor amet."
                className="whitespace-nowrap font-bold text-accent"
              />
            </div>
          </h2>
          <motion.img
            ref={ref}
            initial={{
              rotate: 0,
              scale: 0,
              opacity: 0,
            }}
            whileInView={{
              rotate: -30,
              scale: 1,
              opacity: 1,
            }}
            transition={{
              amount: 1,
              type: "spring",
              stiffness: 300,
            }}
            className="absolute bottom-15 right-15 w-40 aspect-square object-cover object-center rounded-lg"
            src={bgTwo}
            alt=""
          />
        </div>
      </div>
      <div className="px-4 max-w-7xl mx-auto">
        <ul>
          {items.map((item, i) => (
            <li key={i}>
              <WhyUsItem item={item} i={i} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyUs;
