import React from "react";
import Hero from "./layouts/Hero";
import Overview from "./layouts/Overview";
import Story from "./layouts/Story";
import MissionAndVission from "./layouts/MissionAndVission";
import Footer from "../../components/ui/Footer";
import Header from "../../components/ui/Header";

const About = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Overview />
        <Story />
        <MissionAndVission />
      </main>
      <Footer />
    </>
  );
};

export default About;
