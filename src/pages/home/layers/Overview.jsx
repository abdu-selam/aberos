import image from "../../../assets/hero-bg.webp";

const Overview = () => {
  const images = [image, image, image, image];
  const stats = [
    {
      name: "Years of Experience",
      amount: 12,
    },
    {
      name: "Fulltime Employees",
      amount: 120,
    },
    {
      name: "Sub Companies",
      amount: 3,
    },
    {
      name: "Active Clients",
      amount: 25,
    },
  ];

  return (
    <section className="p-4 pt-16">
      <div className="flex flex-col items-center gap-2 py-6">
        <h2 className="sm:text-[1.8rem] min-[30rem]:text-[1.6rem] text-[1.4rem] font-bold text-center *:text-accent">
          <span className="whitespace-nowrap">Shaping Growth.</span>{" "}
          <span className="whitespace-nowrap">Creating Impact.</span>
        </h2>
        <p className="text-center max-w-150">
          We are a dynamic group of companies united by a commitment to
          innovation, quality, and progress.
        </p>
      </div>
      <ul className="relative min-[60rem]:flex min-[60rem]:items-center min-[60rem]:justify-center min-[60rem]:gap-4 h-107 md:h-97">
        {images.map((item, i) => (
          <li
            key={i}
            className={`
            absolute w-60 aspect-9/13 
            overflow-hidden rounded-xl left-1/2
            shadow shadow-text min-[60rem]:static min-[60rem]:translate-x-0 
            ${
              i === 0
                ? "-translate-x-1/2 -translate-y-5 min-[60rem]:-translate-y-15"
                : i === 1
                  ? "-translate-x-full md:-translate-x-95 translate-y-20 md:translate-y-10 min-[60rem]:translate-y-0"
                  : i === 2
                    ? "translate-x-10 translate-y-10 md:translate-x-35  md:translate-y-10 min-[60rem]:translate-y-0"
                    : "max-[60rem]:hidden min-[60rem]:-translate-y-15"
            }
            `}
          >
            <img className="w-full h-full object-cover" src={item} alt="" />
          </li>
        ))}
      </ul>
      <p className="text-center max-w-150 mx-auto py-4">
        Together, we build strong businesses and create opportunities that move
        industries forward.
      </p>
      <h2 className="sm:text-[1.8rem] min-[30rem]:text-[1.6rem] text-[1.4rem] font-bold text-center *:text-accent">
        <span className="whitespace-nowrap">Our Story,</span>{" "}
        <span className="whitespace-nowrap">By the Numbers</span>
      </h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 mx-auto max-w-5xl">
        {stats.map((item, i) => (
          <li
            className="flex flex-col gap-2 items-center border border-text/20 p-4 rounded-2xl"
            key={i}
          >
            <p className="text-4xl font-bold">{item.amount}+</p>
            <p className="text-center">{item.name}</p>
          </li>
        ))}
      </ul>
      <p className="text-center mx-auto max-w-120">
        Every number tells a story of our progress, achievements, and commitment
        to creating lasting value.
      </p>
      <div className="w-9/10 mx-auto relative py-4">
        <div className="w-full h-0.5 absolute left-1/2 top-1/2 -translate-1/2 bg-text/50"></div>
        <p className="text-accent bg-back w-max px-4 mx-auto font-bold small-caps absolute left-1/2 top-1/2 -translate-1/2">
          Legacy of Growth
        </p>
        <ul className="absolute w-full left-1/2 top-1/2 -translate-1/2 flex justify-between">
          <li className="w-4 h-4 bg-accent  rotate-45 rounded-sm shadow shadow-back"></li>
          <li className="w-4 h-4 bg-accent  rotate-45 rounded-sm shadow shadow-back"></li>
        </ul>
      </div>
    </section>
  );
};

export default Overview;
