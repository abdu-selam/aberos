import React from "react";

const StoryItem = ({ item }) => {
  return (
    <li className="max-w-80 max-md:w-80 shrink-0">
      <div className="flex flex-col md:items-center gap-4">
        <div className="flex md:flex-col gap-4 items-center max-md:-translate-x-6">
          <div className="w-3.5 h-3.5 rotate-45 bg-accent"></div>
          <p className="bg-text text-back w-max text-xs p-1 px-2">
            {item.date}
          </p>
        </div>
        <div className="flex flex-col md:items-center gap-2">
          <h4 className="text-lg font-runalto leading-none font-bold md:text-center">
            {item.title}
          </h4>
          <p className="text-sm md:text-center opacity-90">
            {item.description}
          </p>
        </div>
      </div>
    </li>
  );
};

export default StoryItem;
