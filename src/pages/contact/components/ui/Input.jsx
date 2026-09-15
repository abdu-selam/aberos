import React from "react";
import Tooltip from "../../../../components/features/Tooltip";

const Input = ({
  id = "",
  name = "",
  type = "text",
  label = "",
  textarea = false,
  content,
  open,
  ...props
}) => {
  return (
    <div className="flex flex-col w-full">
      <label className="text-back text-sm" htmlFor={id}>
        {label}
      </label>
      <Tooltip content={content} open={open}>
        {textarea ? (
          <textarea
            className="bg-accent/70 focus:outline-none text-back  transition px-3 py-2 h-65 w-full"
            name={name}
            id={id}
            {...props}
          />
        ) : (
          <input
            className="bg-accent/70 w-full focus:outline-none text-back  transition px-3 py-2"
            type={type}
            id={id}
            name={name}
            {...props}
          />
        )}
      </Tooltip>
    </div>
  );
};

export default Input;
