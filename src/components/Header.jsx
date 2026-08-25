import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import { browserTheme } from "../utils/helpers";

const Header = () => {
  const navs = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "About",
      link: "/about",
    },
    {
      text: "Companies",
      link: "/companies",
    },
    {
      text: "Contact Us",
      link: "/contact",
    },
  ];

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = browserTheme();

    setIsDark(theme === "dark");
  }, []);

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("class", theme);
  }, [isDark]);

  return (
    <div>
      <header className="bg-primary/10 p-4 flex justify-between items-center">
        <div className="text-text dark:text-text-dark">Aberos</div>
        <nav>
          <ul className="flex gap-8">
            {navs.map((item, i) => (
              <li className="text-text dark:text-text-dark" key={i}>
                <Link to={item.link}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div
          onClick={() => setIsDark(!isDark)}
          className="flex  py-1 px-1 gap-2 rounded-full overflow-hidden relative"
        >
          <FaSun className="p-0.5 text-xl text-text dark:text-text-dark " />
          <FaMoon className="p-0.5 text-xl text-text dark:text-text-dark" />
          <div
            className={`absolute aspect-square h-[calc(100%-0.25rem)] rounded-full top-1/2 left-0 ${isDark ? "translate-x-0.75" : "translate-x-[calc(100%+0.3rem)]"} -translate-y-1/2 transition duration-300 bg-back dark:bg-back-dark -z-1`}
          ></div>
          <div
            className={`absolute w-full h-full top-0 left-0 bg-text dark:bg-text-dark -z-2`}
          ></div>
        </div>
      </header>
    </div>
  );
};

export default Header;
