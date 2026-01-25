import React from "react";
import { Link } from "react-router-dom";

export default function Button({ data, full, border }) {
  return (
    <button className={`text-[1rem] ${border ? 'border-2 text-back' : 'bg-primary text-back'} px-2 py-1.5 rounded-lg ${full ? 'col-start-1 col-end-4 w-max px-8 mx-auto' : 'px-4'} `}>
      {data}
    </button>
  );
}
