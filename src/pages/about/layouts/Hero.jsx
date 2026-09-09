import React from "react";

const Hero = () => {
  return (
    <>
      <div className="absolute h-screen w-screen bg-text left-0 top-0 -z-1"></div>
      <p className="max-lg:hidden text-back absolute right-[-6vw] top-[-5vw] text-[20vw] xl:right-[-4.8rem] xl:-top-16 xl:text-[16rem] leading-none font-runalto font-bold z-11">
        ABEROS
      </p>
      <section className="min-h-screen overflow-hidden relative bg-text">
        <ul className="absolute w-full max-w-150 aspect-square left-1/2 top-1/2 -translate-1/2">
          {[1, 2].map((item) => (
            <li
              key={item}
              className={`w-full h-full shadow-[0_0_1.2rem] shadow-back/15 absolute ${item === 1 && "scale-80"} rounded-full`}
            ></li>
          ))}
        </ul>
        <div className="absolute w-full h-[calc(100vh-2.75rem)] flex flex-col items-center justify-center">
          <p className="text-back text-sm sm:text-lg">
            Who We Are. What We Stand For.
          </p>
          <h1 className="text-[min(12vw,9rem)] leading-none font-runalto font-bold text-accent px-4">
            WHO WE ARE
          </h1>
          <p className="text-back text-xs sm:text-sm text-center max-w-100">
            Discover the story, values, and vision that shape Aberos and the
            businesses we continue to build.
          </p>
        </div>
        <p className="text-back absolute lg:left-[-6vw] bottom-[-5vw] text-[20vw] xl:left-[-4.8rem] xl:-bottom-16 xl:text-[16rem] leading-none font-runalto font-bold max-lg:left-1/2 max-lg:-translate-x-1/2">
          ABEROS
        </p>
        {/* 
      1. top text
      2. center
        1. circles
            1. the top
            2. the bottom
        2. texts
            1. top text
            2. center tex
            3. last text
      3. bottom text
      */}
      </section>
    </>
  );
};

export default Hero;
