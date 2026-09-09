import image from "../../../assets/about/overview-1lg.webp";
import StrokeName from "../../../components/effects/StrokeName";
import { history } from "../../../store/about";

const Story = () => {
  return (
    <section className="bg-back pt-12 flex flex-col min-h-screen md:justify-between max-w-360 mx-auto overflow-hidden">
      <div className="px-4 pb-6">
        <h2 className="text-center leading-none pb-1.5">Our Journey</h2>
        <h3 className="text-[min(7.5vw,2.2rem)] font-runalto font-semibold leading-none text-center">
          Journey of Growth,
        </h3>
      </div>
      <p className="text-center text-sm max-w-150 mx-auto px-4 pb-12 md:hidden">
        Every organization has a beginning, but what defines its story is
        everything built along the way. Aberos has grown through a continuous
        journey of ambition, dedication, learning, and opportunity.
      </p>
      <div className="flex md:flex-col gap-4 px-4 h-max justify-center pb-12">
        <div className="w-0.5 md:w-full min-h-full md:h-0.5 bg-text"></div>
        <ul className="flex max-md:flex-col gap-10 md:-translate-y-6">
          {history.map((item, i) => (
            <li className="max-w-80 max-md:w-80 shrink-0" key={i}>
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
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-runalto md:order-1 font-semibold leading-none text-center pb-4">
          From Our First Steps We Continue to Build Together
        </h3>
        <div className="relative w-full aspect-8/5 max-w-200 mx-auto overflow-hidden md:order-3">
          <p className="text-center text-sm w-150 absolute max-md:hidden left-1/2 -translate-x-1/2 z-2">
            Every organization has a beginning, but what defines its story is
            everything built along the way. Aberos has grown through a
            continuous journey of ambition, dedication, learning, and
            opportunity.
          </p>
          <img
            className="w-full aspect-8/5 bottom-0 absolute z-0"
            src={image}
            alt=""
          />
          <div className="absolute w-full h-full left-0 top-0 bg-back/50"></div>
          <StrokeName className="text-center left-1/2 -translate-x-1/2 z-15 absolute bottom-[-7.57vw] md:-bottom-15" />
        </div>
      </div>
    </section>
  );
};

export default Story;
