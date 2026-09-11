import React from "react";
import Hero from "./layers/Hero";
import Overview from "./layers/Overview";
import Companies from "./layers/Companies";
import WhyUs from "./layers/WhyUs";
import MissionAndVission from "./layers/MissionAndVission";
import Footer from "../../components/ui/Footer";

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
      <Footer />
    </>
  );
};

export default Home;
