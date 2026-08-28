import React from "react";
import Header from "../../components/ui/Header";
import Hero from "./layers/Hero";
import Overview from "./layers/Overview";
import Companies from "./layers/Companies";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <Overview />
        <Companies />
        {/* why us */}
        {/* mission and vission */}
        {/* cta */}
      </main>
    </>
  );
};

export default Home;
