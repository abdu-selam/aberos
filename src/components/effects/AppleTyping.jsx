import { motion } from "framer-motion";

const AppleTyping = ({
  text = "",
  toBottom = false,
  once = true,
  amount = 0,
  className = "",
  duration = 0.3,
  y = 10,
  delay = 0,
  margin = "0px 0px 0px 0px",
  animate = false,
  animation = { y: 0, opacity: 1 },
  initiate = true,
}) => {
  return (
    <>
      {text.split(" ").map((item, i) => (
        <motion.span
          key={i}
          initial={
            initiate && {
              y: toBottom ? -y : y,
              opacity: 0,
            }
          }
          whileInView={!animate && animation}
          animate={animate && animation}
          transition={{
            delay: (duration / 3) * i + delay,
            duration,
          }}
          viewport={{
            once,
            amount,
            margin,
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
