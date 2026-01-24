import React from "react";
import { Link } from "react-router";

export default function Nav() {
  return (
    <nav className="w-auto">
      <ul className="flex gap-4">
        {["Home", "About", "companies"].map((item, i) => (
          <li key={i} className="text-[1rem] text-txt">
            <Link to={`/${item.toLowerCase()}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
