import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import image from "../../../assets/hero-bg.webp";
import MoltenMetal from "../../../components/effects/MoltenMetal";

const Overview = () => {
  const images = [image, image, image, image, image];
  const curr = 2;
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
    <section className="pt-8 relative">
      <div className="flex flex-col items-start gap-2 pt-6 px-4">
        <h2 className="text-[min(5vw,2.5rem)] font-bold text-center *:text-accent">
          <span className="whitespace-nowrap">Shaping Growth.</span>{" "}
          <span className="whitespace-nowrap">Creating Impact.</span>
        </h2>
        <p className="max-w-150">
          We are a dynamic group of companies united by a commitment to
          innovation, quality, and progress.
        </p>
      </div>
      <ul className="flex overflow-x-hidden scroll-hidden items-center justify-center gap-4 min-[60rem]:mx-auto py-4 relative">
        {images.map((item, i) => (
          <li
            key={i}
            className={`${
              i === 2
                ? "w-8/10 max-w-110 opacity-100"
                : Math.abs(2 - i) === 1
                  ? "w-6/10 max-w-82.5 opacity-60"
                  : "w-4/10 max-w-55 opacity-40"
            } shrink-0 aspect-9/13 
            overflow-hidden flex items-center justify-center
            relative
            `}
          >
            <figure className="h-full w-full relative">
              <img className="w-full h-full object-cover" src={item} alt="" />
              {curr === i && (
                <figcaption className="absolute w-full bottom-0 p-4 bg-linear-0 from-back/70 from-60% to-transparent flex flex-col gap-3">
                  <h3 className="text-lg font-bold">
                    Lorem ipsum dolor sit amet consectetur.
                  </h3>
                  <p className="text-sm opacity-80">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Cupiditate officia ipsum unde illo consequatur debitis.
                  </p>
                </figcaption>
              )}
            </figure>
          </li>
        ))}
      </ul>
      <div className="flex justify-end px-4">
        <p className="max-w-150 w-9/10 pb-4">
          Together, we build strong businesses and create opportunities that
          move industries forward.
        </p>
      </div>
      <h2 className="px-4 sm:text-[1.8rem] min-[30rem]:text-[1.6rem] text-[1.4rem] font-bold text-center *:text-accent">
        <span className="whitespace-nowrap">Our Story,</span>{" "}
        <span className="whitespace-nowrap">By the Numbers</span>
      </h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 mx-auto max-w-5xl">
        {stats.map((item, i) => (
          <li
            className="flex flex-col gap-2 items-center border border-text/20 p-4 rounded-2xl bg-back/10 backdrop-blur-md"
            key={i}
          >
            <p className="text-4xl font-bold">{item.amount}+</p>
            <p className="text-center">{item.name}</p>
          </li>
        ))}
      </ul>
      <p className="text-center mx-auto max-w-120 px-4">
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
