import { motion } from "framer-motion";

const HistoryWrapper = ({ x, children }) => {
  return (
    <>
      <motion.ul
        style={{
          x,
        }}
        className="flex w-max gap-10 -translate-y-6 max-md:hidden"
      >
        {children}
      </motion.ul>
      <ul className="flex flex-col gap-10 md:hidden">{children}</ul>
    </>
  );
};

export default HistoryWrapper;
