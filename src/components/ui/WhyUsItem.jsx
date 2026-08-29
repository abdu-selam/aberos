import React, { useRef } from "react";
import AppleTyping from "../effects/AppleTyping";
import { motion, useInView } from "framer-motion";

const WhyUsItem = ({ i, item }) => {
  const ref = useRef();
  const isInView = useInView(ref, { amount: 1 });

  return (
    <div
      ref={ref}
      className={`h-[50vh] flex flex-col justify-center ${i % 2 === 0 ? "items-start" : "items-end text-end"}`}
    >
      <div className="w-8/10 max-w-80">
        <h3>
          <AppleTyping
            className="text-4xl font-runalto font-bold"
            text={item.title}
            once={false}
            amount={1}
          />
        </h3>
        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            delay: item.text.split(" ").length * 0.02,
          }}
          viewport={{ amount: 1 }}
        >
          {item.text}
        </motion.p>
      </div>
    </div>
  );
};

export default WhyUsItem;
