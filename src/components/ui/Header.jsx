import React, { useEffect, useState } from "react";
import { FaMoon, FaSun, FaLinkedin } from "react-icons/fa";
import { browserTheme } from "../../utils/helpers";
import Logo from "./Logo";
import Navs from "./Navs";
import { LuMenu } from "react-icons/lu";
import { FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const closer = () => setMenu(false);

    document.body.addEventListener("click", closer);
    document.body.addEventListener("scroll", closer);

    return () => {
      document.body.removeEventListener("click", closer);
      document.body.removeEventListener("scroll", closer);
    };
  }, []);

  return (
    <>
      <div className="p-2 sticky top-0 z-10">
        <header className="sm:bg-back/20 transition duration-300 sm:backdrop-blur-md sm:p-2 px-6 max-w-max-width mx-auto rounded-lg flex justify-between items-center sm:border border-text/20 sm:w-max">
          <Link className="sm:hidden p-2 w-max" to="/">
            <Logo />
          </Link>
          <nav className="max-sm:hidden">
            <Navs />
          </nav>
          <div className="flex bg-back20 backdrop-blur-md items-center gap-2 sm:hidden p-2">
            <LuMenu
              onClick={(e) => {
                e.stopPropagation();
                setMenu(true);
              }}
              className="pc:hidden text-back text-2xl bg-textp-1 rounded-full"
            />
          </div>
        </header>
      </div>
      {menu && (
        <nav
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={`sm:hidden fixed bg-back  backdrop-blur-md p-4 h-dvh right-0 top-0 shadow-[0_0_0.5rem] shadow-text/20 w-7/10 min-w-50 max-w-80 z-1000`}
        >
          <div className="flex items-center justify-between py-4">
            <p className="text-text text-xl font-bold">
              <span className="text-accent">Aberos</span> PLC.
            </p>
            <span className="text-back">
              <FaX
                onClick={() => {
                  setMenu(false);
                }}
                className="text-2xl fill-back bg-text p-1.5 rounded-full"
              />
            </span>
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
