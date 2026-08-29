import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      initial={{
        y: "-100%",
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="mix-blend-difference text-2xl font-bold italic small-caps"
    >
      Aberos
    </motion.div>
  );
};

export default Logo;
