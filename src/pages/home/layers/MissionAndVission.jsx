import bgOne from "../../../assets/bg-4.webp";
import bgTwo from "../../../assets/bg-5.webp";

const MissionAndVission = () => {
  const data = [
    {
      title: "Lorem ipsum dolor sit amet.",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing",
      image: bgOne,
    },
    {
      title: "Lorem ipsum dolor sit amet.",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: bgTwo,
    },
  ];
  return (
    <section>
      <ul className="md:max-w-6xl mx-auto">
        {data.map((item, i) => (
          <li className="h-screen" key={i}>
            <figure className="h-8/10 relative md:grid grid-cols-2 md:px-4 md:gap-4">
              <img
                className={`h-full md:w-full object-cover ${i === 1 && "md:col-start-2 md:col-end-3 row-span-2"}`}
                src={item.image}
                alt=""
              />
              <figcaption
                className={`max-md:absolute bottom-0 md:w-full bg-linear-0 from-back/70 from-60% to-transparent max-md:px-4 md:self-end md:p-4 md:-translate-y-20 shrink-0 ${i === 1 ? "md:col-start-1 md:col-end-1 md:translate-x-20 text-end": "md:-translate-x-20"}`}
              >
                <h2 className="text-3xl mix-blend-difference">{item.title}</h2>
                <p className="text-sm">{item.text}</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MissionAndVission;
