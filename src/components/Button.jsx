import React from "react";
import { Link } from "react-router-dom";

export default function Button({ data, full, border, style, seo }) {
  return (
    <button className={`relative text-[1rem] transition-all hover:shadow-[0_0_0.5rem_var(--color-primary)] duration-500 ${style ? style : border ? 'border-2 hover:bg-primary hover:border-primary' : 'bg-primary border-2 border-primary'} text-back px-2 py-0.5 rounded-lg ${full ? 'col-start-1 col-end-4 w-full px-8 mx-auto' : 'px-4'} `}>
      {data} <span className="w-px h-px -m-px whitespace-nowrap border-0 p-0 overflow-hidden absolute">{seo}</span>
    </button>
  );
}
