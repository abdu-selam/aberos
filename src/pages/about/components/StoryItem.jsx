import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const StoryItem = ({ item }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.3,
  });

  return (
    <li ref={ref} className="max-w-80 w-full max-md:w- shrink-0">
      <div className="flex flex-col md:items-center gap-4">
        <div className="flex md:flex-col gap-4 items-center max-md:-translate-x-6">
          <div className="w-3.5 h-3.5 rotate-45 bg-accent"></div>
          <motion.p
            animate={{
              x: isInView ? 0 : -15,
              opacity: isInView ? 1 : 0,
            }}
            className="bg-text text-back w-max text-xs p-1 px-2"
          >
            {item.date}
          </motion.p>
        </div>
        <motion.div
          animate={{
            y: isInView ? 0 : 15,
            opacity: isInView ? 1 : 0,
          }}
          transition={{
            delay: 0.3,
          }}
          className="flex flex-col md:items-center gap-2"
        >
          <h4 className="text-lg font-runalto leading-none font-bold md:text-center">
            {item.title}
          </h4>
          <p className="text-sm md:text-center opacity-90">
            {item.description}
          </p>
        </motion.div>
      </div>
    </li>
  );
};

export default StoryItem;
