import React from "react";
import Header from "../../components/ui/Header";
import Hero from "./layers/Hero";
import Overview from "./layers/Overview";
import Companies from "./layers/Companies";
import WhyUs from "./layers/WhyUs";
import MissionAndVission from "./layers/MissionAndVission";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <Overview />
        <Companies />
        <WhyUs />
        <MissionAndVission />
        {/* cta */}
      </main>
    </>
  );
};

export default Home;
