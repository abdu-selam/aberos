import { AnimatePresence, motion } from "framer-motion";

const Tooltip = ({ children, content = "", open }) => {
  return (
    <div className="relative inline-block">
      {children}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.2,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              type: "spring",
              ease: "backInOut",
              duration: 0.3,
            }}
            exit={{
              opacity: 0,
              scale: 0.2,
            }}
            className="
          absolute bottom-full w-max max-w-9/10 left-1/2 -translate-x-1/2 mb-2
          z-50
          px-3 py-2
          rounded-lg
          bg-back text-text text-sm
          pointer-events-none
        "
          >
            {content}

            <div
              className="
            absolute top-full left-1/2 -translate-x-1/2
            w-2 h-2 bg-black
            rotate-45 -translate-y-1/2
          "
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;
