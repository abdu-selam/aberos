import { motion } from "framer-motion";
import AppleTyping from "../../../components/effects/AppleTyping";

const Hero = () => {
  return (
    <>
      <div className="absolute h-screen w-screen bg-text left-0 top-0 -z-1"></div>
      <section className="h-[calc(100vh-2.75rem)] relative bg-text">
        <p className="max-lg:hidden *:text-back absolute right-[-6vw] top-[-5vw] text-[20vw] xl:right-[-4.8rem] xl:-top-16 xl:text-[12rem] leading-none *:font-runalto font-bold z-1">
          <AppleTyping toBottom sep={false} text="A B E R O S" />
        </p>
        <ul className="absolute w-full max-w-150 aspect-square left-1/2 top-1/2 -translate-1/2">
          {[0, 1].map((item) => (
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
              key={item}
              className={`w-full h-full shadow-[0_0_1.2rem] shadow-back/15 absolute ${item === 1 && "scale-80"} rounded-full`}
            ></motion.li>
          ))}
        </ul>
        <div className="absolute w-full h-[calc(100vh-2.75rem)] flex flex-col items-center justify-center">
          <p className="*:text-back text-sm sm:text-lg">
            <AppleTyping
              text="Who We Are. What We Stand For."
              animate
              delay={0.3}
            />
          </p>
          <motion.h1
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            className="text-[min(12vw,9rem)] leading-none font-runalto font-bold text-accent px-4"
          >
            WHO WE ARE
          </motion.h1>
          <p className="*:text-back text-xs sm:text-sm text-center max-w-100">
            <AppleTyping text="Discover the story, values, and vision that shape Aberos and the businesses we continue to build." />
          </p>
        </div>
        <p className="*:text-back absolute lg:left-[-6vw] bottom-[-2vh] text-[20vw] xl:left-[-4.8rem] lg:bottom-[-8vh] xl:-bottom-12 xl:text-[12rem] leading-none *:font-runalto font-bold max-lg:left-1/2 max-lg:-translate-x-1/2 flex">
          <AppleTyping sep={false} text="A B E R O S" />
        </p>
      </section>
    </>
  );
};

export default Hero;
