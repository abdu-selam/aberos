import { useEffect, useState } from "react";
import Logo from "./Logo";
import Navs from "./Navs";
import { LuMenu } from "react-icons/lu";
import { FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const closer = () => setMenu(false);

    document.body.addEventListener("click", closer);
    window.addEventListener("scroll", closer);

    return () => {
      document.body.removeEventListener("click", closer);
      window.removeEventListener("scroll", closer);
    };
  }, []);

  return (
    <>
      <Link className="pl-4 absolute p-2 w-max z-10 mix-blend-difference" to="/">
        <Logo />
      </Link>
      <motion.header
        initial={{
          y: "100%",
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "backInOut"
        }}
        className="sm:bg-back/30 z-10 sticky top-2 sm:backdrop-blur-md w-full px-2 sm:px-6 py-2 mx-auto rounded-lg flex justify-end sm:justify-between items-center sm:border border-text/20 sm:w-max"
      >
        <nav className="max-sm:hidden">
          <Navs animate />
        </nav>
        <div className="flex bg-back items-center gap-2 sm:hidden p-1">
          <LuMenu
            onClick={(e) => {
              e.stopPropagation();
              setMenu(true);
            }}
            className="pc:hidden text-xl rounded-full mix-blend-difference"
          />
        </div>
      </motion.header>
      <AnimatePresence>
        {menu && (
          <motion.nav
            initial={{
              x: "100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
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
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
