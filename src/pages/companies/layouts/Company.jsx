import React from "react";

const Company = ({
  title,
  description,
  address,
  conclusion,
  id,
  images,
  i,
}) => {
  return (
    <section
      id={id}
      className="bg-text sticky md:top-0 py-16 min-h-screen flex flex-col md:justify-between items-center px-4"
    >
      <div>
        <h2 className="text-back text-center font-runalto font-bold text-[min(6vw,1.65rem)] leading-none pb-4">
          {title}
        </h2>
        <p className="text-back text-center max-w-180 text-sm pb-2">
          {description}
        </p>
        <address className="text-accent text-center">{address}</address>
      </div>
      <ul className="flex max-md:flex-col md:items-center md:justify-center gap-4 md:min-h-full md:grow">
        {images.map((item, j) => (
          <li
            className={`w-full overflow-hidden max-w-80 aspect-square ${i === j && [0, 2].includes(i) ? "md:-translate-y-1/2" : Math.abs(i - j) === 2 ? "md:translate-y-1/2" : ""} rounded-4xl`}
            key={i}
          >
            <img
              className="w-full h-full hover:scale-110 transition"
              width={300}
              height={300}
              src={item}
              key={i}
              alt={`image ${i} of ${title}`}
            />
          </li>
        ))}
      </ul>
      <p className="text-back text-center max-w-200 text-sm pt-6">{conclusion}</p>
    </section>
  );
};

export default Company;
