import image from "../../../assets/hero-bg.webp";

const Companies = () => {
  return (
    <section className="bg-text">
      <h2 className="text-[min(5vw,1.5rem)] w-full lg:text-3xl px-4 pt-4 pb-12 font-bold *:text-accent">
        <span className="whitespace-nowrap">Shaping Growth.</span>{" "}
        <span className="whitespace-nowrap">Creating Impact.</span>
      </h2>
      <div className="w-full max-w-5xl mx-auto relative p-4 ">
        <h3 className="text-lg min-[25rem]:text-xl sm:text-3xl w-7/10 max-w-100 absolute z-1 -top-10 text-back">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </h3>
        <figure className="relative left-10 w-full max-w-lg mx-auto">
          <img
            className="w-[calc(100%-2.5rem)] aspect-9/13 object-cover"
            src={image}
            alt=""
          />
          <fgcaption className="absolute bottom-2 left-5 shadow shadow-back">
            Lorem, ipsum dolor.
          </fgcaption>
        </figure>
        <div className="relative pl-10 flex justify-end text-sm">
          <p className="max-w-120 text-back">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            rerum vel nesciunt sequi deserunt assumenda accusamus voluptas qui?
            Dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            rerum vel nesciunt sequi deserunt assumenda accusamus voluptas qui?
            Dicta.
          </p>
        </div>
      </div>
      <div className="p-4 relative">
        <div className="w-full h-0.5 bg-back"></div>
        <div className="absolute w-5 h-5 bg-accent top-1/2 right-4 -translate-y-1/2 rotate-45"></div>
      </div>
    </section>
  );
};

export default Companies;
