import React from "react";

const StrokeName = ({ className="", text = "ABEROS" }) => {
  return (
    <div
      className={`text-[23vw] md:text-[11.4rem] leading-none text-transparent [-webkit-text-stroke:2px_var(--color-accent)] font-runalto ${className}`}
    >
      {text}
    </div>
  );
};

export default StrokeName;
