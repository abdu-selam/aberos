import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navs = ({ animate = false }) => {
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

  return (
    <ul className="flex max-sm:flex-col max-sm:w-full gap-2 sm:gap-8">
      {navs.map((item, i) => (
        <motion.li
          initial={{
            y: animate ? "-100%" : 0,
            opacity: animate ? 0 : 1,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.1 * i + 0.2,
            ease: "backInOut",
          }}
          className="max-sm:bg-text/10 rounded-lg max-sm:w-full"
          key={i}
        >
          <Link
            className="nav-less-item hover:text-accent text-text transition duration-300"
            to={item.link}
          >
            {item.text}
          </Link>
        </motion.li>
      ))}
    </ul>
  );
};

export default Navs;
