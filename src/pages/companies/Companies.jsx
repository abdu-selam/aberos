import React from "react";
import Hero from "./layouts/Hero";
import { companies } from "../../store/companies";
import Company from "./layouts/Company";

const Companies = () => {
  return (
    <main>
      <Hero />

      {companies.map((item, i) => (
        <Company {...item} key={i} i={i} />
      ))}
      {/* 
      1. hero *
      2. companies
            1. first
            2. second
            3. third
      */}
    </main>
  );
};

export default Companies;
