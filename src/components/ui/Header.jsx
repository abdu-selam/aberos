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
        <header className="bg-back transition duration-300 backdrop-blur-md p-2 px-6 max-w-max-width mx-auto rounded-lg flex justify-between items-center border border-text/20">
          <Link to="/">
            <Logo />
          </Link>
          <nav className="max-pc:hidden">
            <Navs />
          </nav>
          <div className="flex items-center gap-2">
            <LuMenu
              onClick={(e) => {
                e.stopPropagation();
                setMenu(true);
              }}
              className="pc:hidden text-back text-2xl bg-textp-1 rounded-full"
            />
            <button>
              <a
                className="block bg-text  p-1.5 rounded-full hover:bg-accent group transition duration-300"
                href={"item.link"}
                target="_blank"
              >
                <FaLinkedin className="fill-back group-hover:fill-text transition duration-300" />
              </a>
            </button>
          </div>
        </header>
      </div>
      {menu && (
        <nav
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={`pc:hidden fixed bg-back  backdrop-blur-md p-4 h-dvh right-0 top-0 shadow-[0_0_0.5rem] shadow-text/20 w-7/10 min-w-50 z-1000`}
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
