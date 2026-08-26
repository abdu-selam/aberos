import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { browserTheme } from "../utils/helpers";
import Logo from "./Logo";
import Navs from "./Navs";
import { LuMenu } from "react-icons/lu";
import { FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [menu, setMenu] = useState(false);

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
    <>
      <div className="p-2 sticky top-0 z-10">
        <header className="bg-back dark:bg-back-dark transition duration-300 backdrop-blur-md p-2 px-4 max-w-max-width mx-auto rounded-lg flex justify-between items-center border border-text/20 dark:border-text-dark/20">
          <Link to="/">
            <Logo />
          </Link>
          <nav className="max-sm:hidden">
            <Navs />
          </nav>
          <div className="flex items-center gap-2">
            <div
              onClick={() => setIsDark(!isDark)}
              className="flex cursor-pointer py-1 px-1 gap-2 rounded-full overflow-hidden relative"
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
            <LuMenu
              onClick={() => {
                setMenu(true);
              }}
              className="text-back text-2xl dark:text-back-dark bg-text dark:bg-text-dark p-1 rounded-full sm:hidden"
            />
          </div>
        </header>
      </div>
      {menu && (
        <nav
          className={`sm:hidden fixed bg-text dark:bg-text-dark backdrop-blur-md p-4 h-dvh right-0 top-0 shadow-[0_0_0.5rem] shadow-text/20 dark:shadow-text-dark/20 w-6/10 min-w-50 z-1000`}
        >
          <div className="flex items-center justify-between py-4">
            <p className="text-back text-xl dark:text-back-dark font-bold">
              Aberos PLC.
            </p>
            <FaX
              onClick={() => {
                setMenu(false);
              }}
              className="text-text text-2xl dark:text-text-dark bg-back dark:bg-back-dark p-1.5 rounded-full"
            />
          </div>
          <div className="w-full">
            <Navs />
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
