import React from "react";

const Button = ({ children, className="", ...props }) => {
  return (
    <button
      {...props}
      className={`bg-accent dark:bg-accent-dark p-2 px-4 rounded-lg font-semibold ${className} relative group overflow-hidden hover:scale-102 disabled:hover:scale-100 disabled:opacity-80 transition duration-300`}
    >
      {children}
      <div className="w-full h-full bg-linear-135 from-transparent via-back/30 dark:via-back-dark/30 -translate-x-full -rotate-45 to-transparent absolute top-0 left-0 group-hover:translate-x-full group-disabled:group-hover:-translate-x-full transition duration-1000 overflow-hidden"></div>
    </button>
  );
};

export default Button;
