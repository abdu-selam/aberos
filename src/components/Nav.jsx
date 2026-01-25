import React from "react";
import { Link } from "react-router";

export default function Nav({active, state}) {



  return (
    <nav className={`sm:w-auto fixed sm:static bg-accent sm:bg-transparent w-60 top-18 rounded-2xl p-4 ${state == 'close' ? '-right-full opacity-0' : 'right-5 opacity-100'} transition-opacity duration-500 sm:opacity-100`}>
      <ul className="flex sm:gap-6 flex-col sm:flex-row gap-3">
        {["Home", "About", "companies"].map((item, i) => (
          <li key={i} className={`text-[1rem] text-txt`}>
            <Link className={`${active == item.toLowerCase() ? 'text-txt sm:border-b-2 opacity-100' : 'opacity-50'} hover:border-b-2 pb-1 transition-[0.5s]`} to={`/${item.toLowerCase()}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
