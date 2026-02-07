import { Link } from "react-router";
import { motion } from "framer-motion";
import useStore from "../store/useStore";

export default function Nav({ active, state, data, comp }) {
  const lang = useStore((state)=> state.lang)
  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className={`md:w-full fixed md:static border md:border-none bg-back md:bg-transparent w-60 top-18 rounded-2xl p-4 ${
        lang != 'ar' ?
          state == "close" ? "-right-full opacity-0" : "right-5 opacity-100 "
          : state == "close" ? "-left-full opacity-0" : "left-5 opacity-100 "
      } transition-all duration-500 md:opacity-100`}
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
        className="flex md:gap-4 justify-center items-center font-medium flex-col md:flex-row gap-3"
      >
        {data.map((item, i) => (
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
              i != 3  ? "border-b" : ""
            } w-1/2 md:w-max md:border-none`}
          >
            {i == 3 ? (
              <a
                href="#contact"
                className="bg-primary text-back px-2 pb-1 rounded-sm"
              >
                {item.name}
              </a>
            ) : comp && active == item.link ? (
              <ul className="flex justify-center flex-col md:flex-row md:gap-4 gap-6">
                {comp.map((com, i) => (
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
                    className={`text-[1rem]
                      ${i != 2 ? 'border-b-[1.5px]': ''}
                      border-primary
                      w-full md:w-max md:border-none 
                    transition-all duration-300 ease-out 
                    hover:-translate-y-1.5 hover:text-primary
                    text-text/70`} 
                  >
                    <a href={`#${com.link}`}>{com.name}</a>
                  </motion.li>
                ))}
              </ul>
            ) : (
              <Link
                to={`/${item.link}`}
                className={`
                relative inline-block pb-1
                transition-all duration-300 ease-out hover:-translate-y-1.5
                hover:text-primary
                ${active == item.link ? "text-text text-lg" : "text-text/70"}
              `}
              >
                {item.name}
              </Link>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
}
