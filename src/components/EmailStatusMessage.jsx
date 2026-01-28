import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";

export default function EmailStatusMessage({ type = "success", message, onClose }) {
  const boxRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (

<AnimatePresence>
  <motion.div
    className="fixed left-[50%] -translate-x-[50%] z-100 flex items-start justify-center top-10"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      ref={boxRef}
      initial={{ y: -30, opacity: 0, scale: 0.95 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ y: -20, opacity: 0, scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 22,
      }}
      className="
        w-72 max-w-md overflow-hidden rounded-2xl
        border border-primary/20
        shadow-xl shadow-black/10
        backdrop-blur-md
        transition-all
      "
    >
      <div
        className={`flex items-center gap-2 px-4 py-3 text-back
          ${type === "success" ? "bg-success" : "bg-error"}
        `}
      >
        <span className="text-lg">
          {type === "success" ? "\u2713" : "\u2717"}
        </span>
        <h3 className="font-semibold text-base tracking-wide">
          {type === "success" ? "Success" : "Error"}
        </h3>
      </div>

      <p className="px-4 py-3 text-sm leading-relaxed bg-back text-primary">
        {message}
      </p>
    </motion.div>
  </motion.div>
</AnimatePresence>

  );
}
