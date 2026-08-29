import { motion } from "framer-motion";

const AppleTyping = ({
  text = "",
  toBottom = false,
  once = true,
  amount = 0,
  className = "",
  duration = 0.3,
  y = 10,
}) => {
  return (
    <>
      {text.split(" ").map((item, i) => (
        <motion.span
          key={i}
          initial={{
            y: toBottom ? -y : y,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: (duration / 3) * i,
            duration,
          }}
          viewport={{
            once,
            amount,
          }}
          className={`${className} inline-block`}
        >
          {item}&nbsp;
        </motion.span>
      ))}
    </>
  );
};

export default AppleTyping;
