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
      </main>
    </>
  );
};

export default About;
