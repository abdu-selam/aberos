import React from "react";
import { overviews } from "../../../store/about";
import OverviewItem from "../components/OverviewItem";

const Overview = () => {
  return (
    <section className="bg-text pt-12 lg:pt-16 px-4">
      <h2 className="text-back text-center leading-none pb-1.5">
        What Defines Aberos
      </h2>
      <h3 className="text-back text-[min(7.5vw,2.2rem)] font-runalto font-semibold leading-none text-center">
        Closer Look at Aberos
      </h3>
      <ul className="flex flex-col py-12 items-center w-full max-w-210 mx-auto gap-12">
        {overviews.map((item, i) => (
          <OverviewItem key={i} {...item} i={i} />
        ))}
      </ul>
    </section>
  );
};

export default Overview;
