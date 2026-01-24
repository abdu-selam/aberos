import React from "react";

export default function Button({ data, full }) {
  return (
    <button className={`text-[1rem] bg-primary text-back px-2 py-1.5 rounded-lg ${full ? 'col-start-1 col-end-4 w-max px-8 mx-auto' : 'px-4'} `}>
      {data}
    </button>
  );
}
