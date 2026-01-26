import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

export default function Nav({ active, state }) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className={`sm:w-auto fixed sm:static border sm:border-none bg-back sm:bg-transparent w-60 top-18 rounded-2xl p-4 ${
        state == "close" ? "-right-full opacity-0" : "right-5 opacity-100"
      } transition-opacity duration-500 sm:opacity-100`}
    >
      <motion.ul
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="flex sm:gap-6 flex-col sm:flex-row gap-3"
      >
        {["Home", "About", "companies"].map((item, i) => (
          <motion.li
            key={i}
            variants={{
              hidden: { opacity: 0, y: 15 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: "easeOut" },
              },
            }}
            className={`text-[1rem] text-txt ${
              i != 2 ? "border-b" : ""
            } w-1/2 sm:w-full sm:border-none`}
          >
            <Link
              to={`/${item.toLowerCase()}`}
              className={`
                relative inline-block pb-1
                transition-all duration-300 ease-out
                ${
                  active == item.toLowerCase()
                    ? "text-txt opacity-100"
                    : "opacity-50"
                }
                hover:opacity-100
                hover:-translate-y-1.5
                after:content-['']
                after:absolute after:left-0 after:-bottom-0.5
                after:h-0.5 after:w-0 after:bg-txt
                after:transition-all after:duration-300
                hover:after:w-full
              `}
            >
              {item}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
}
