import React from "react";
import Hero from "./layouts/Hero";
import Overview from "./layouts/Overview";
import Story from "./layouts/Story";

const About = () => {
  return (
    <>
      <main>
        <Hero />
        <Overview />
        <Story />
        {/* 
        1. Hero section * 
        2. overview *
        3. history section
        4. vission section
        */}
      </main>
    </>
  );
};

export default About;
