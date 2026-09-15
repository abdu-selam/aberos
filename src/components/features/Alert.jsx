import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import { BsX } from "react-icons/bs";
import { CgCheck } from "react-icons/cg";

const Alert = ({ status = false, message = "", close, open = false }) => {
  let timeout = null;
  useEffect(() => {
    if (typeof close !== "function") return;
    if (!open) return;

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      close();
      clearTimeout(timeout);
      timeout = null;
    }, 2500);

    return () => {
      clearTimeout(timeout);
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            y: "-100%",
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: "-100%",
          }}
          className="fixed w-9/10 max-w-100 left-1/2 -translate-x-1/2 bg-back z-1000 p-4 rounded-xl border border-back/20 flex flex-col gap-3 top-4"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              {status ? (
                <>
                  <CgCheck className="bg-text-primary fill-bg-primary text-bg-primary rounded-full" />
                  <p className="font-bold font-second text-sm text-accent">
                    Successfully Sent
                  </p>
                </>
              ) : (
                <>
                  <BsX className="bg-red-700 fill-text-primary rounded-full" />
                  <p className="font-bold font-second text-sm text-red-700">
                    {" "}
                    Error Occured
                  </p>
                </>
              )}
            </div>
            <p className="text-sm opacity-70 text-text">now</p>
          </div>
          <p className="text-sm text-text">{message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Alert;
