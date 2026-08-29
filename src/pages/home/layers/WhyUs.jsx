import bgOne from "../../../assets/bg-2.webp";
import bgTwo from "../../../assets/bg-2.webp";

const WhyUs = () => {
  const items = [
    {
      title: "lorem ipsom amet selor dor korem",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dignissimos rem ipsum Lorem ipsum dolor sit amet consectetur ?",
    },
    {
      title: "lorem ipsom amet selor dor korem",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dignissimos rem ipsum Lorem ipsum dolor sit amet consectetur ?",
    },
    {
      title: "lorem ipsom amet selor dor korem",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dignissimos rem ipsum Lorem ipsum dolor sit amet consectetur ?",
    },
    {
      title: "lorem ipsom amet selor dor korem",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dignissimos rem ipsum Lorem ipsum dolor sit amet consectetur ?",
    },
    {
      title: "lorem ipsom amet selor dor korem",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dignissimos rem ipsum Lorem ipsum dolor sit amet consectetur ?",
    },
    {
      title: "lorem ipsom amet selor dor korem",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dignissimos rem ipsum Lorem ipsum dolor sit amet consectetur ?",
    },
  ];

  return (
    <section>
      <div className="bg-text">
        <div className="h-screen relative flex justify-center items-center w-full max-w-7xl mx-auto">
          <img
            className="absolute top-15 left-15 rotate-30 w-40 aspect-square object-cover object-center rounded-lg"
            src={bgOne}
            alt=""
          />
          <h2 className="text-[7vw] max-sm:leading-none sm:text-5xl text-center *:text-back">
            <div className="">Lorem ipsum amet.</div>
            <div className="whitespace-nowrap font-bold">
              Lorem ipsum dolor amet.
            </div>
          </h2>
          <img
            className="absolute bottom-15 right-15 -rotate-30 w-40 aspect-square object-cover object-center rounded-lg"
            src={bgTwo}
            alt=""
          />
        </div>
      </div>
      <div className="px-4 max-w-7xl mx-auto">
        <ul>
          {items.map((item, i) => (
            <li
              className={`h-[50vh] flex flex-col justify-center ${i % 2 === 0 ? "items-start" : "items-end text-end"}`}
              key={i}
            >
              <div className="w-8/10 max-w-80">
                <h3 className="text-3xl">{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyUs;
