import React from "react";
import Hero from "./layouts/Hero";
import { companies } from "../../store/companies";
import Company from "./layouts/Company";
import Footer from "../../components/ui/Footer";
import Header from "../../components/ui/Header";

const Companies = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />

        {companies.map((item, i) => (
          <Company {...item} key={i} i={i} />
        ))}
      </main>
      <Footer />
    </>
  );
};

export default Companies;
