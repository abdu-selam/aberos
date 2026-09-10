import React from "react";
import Hero from "./layouts/Hero";
import Overview from "./layouts/Overview";
import Story from "./layouts/Story";
import MissionAndVission from "./layouts/MissionAndVission";

const About = () => {
  return (
    <>
      <main>
        <Hero />
        <Overview />
        <Story />
        <MissionAndVission />
        {/* 
        1. Hero section * 
        2. overview *
        3. history section *
        4. vission section
        */}
      </main>
    </>
  );
};

export default About;
