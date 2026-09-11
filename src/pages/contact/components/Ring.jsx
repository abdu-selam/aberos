import { motion } from "framer-motion";
import React from "react";

const Ring = ({ className = "" }) => {
  return (
    <ul className={`absolute w-full aspect-square ${className}`}>
      {[0, 1].map((item) => (
        <motion.li
          initial={{
            scale: 0.4,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.3 * item,
          }}
          key={item}
          className={`w-full h-full shadow-[0_0_1.2rem] shadow-back/15 absolute ${item === 1 && "scale-80"} rounded-full`}
        ></motion.li>
      ))}
    </ul>
  );
};

export default Ring;
