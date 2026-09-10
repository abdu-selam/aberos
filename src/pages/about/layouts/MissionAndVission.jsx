import { Link } from "react-router-dom";
import { missionAndVission } from "../../../store/about";

const MissionAndVission = () => {
  return (
    <section className="bg-text py-12 px-4">
      <div className="pb-6">
        <h2 className="text-center text-back leading-none pb-1.5">
          Purpose and Direction
        </h2>
        <h3 className="text-[min(7.5vw,2.2rem)] font-runalto font-semibold leading-none text-center text-back">
          What Drives Us Forward
        </h3>
      </div>
      <ul className="flex flex-col gap-12 max-w-240 mx-auto">
        {missionAndVission.map((item, i) => (
          <li className="relative group" key={i}>
            <div className="pb-6 sm:absolute w-full h-full sm:bg-back/50 rounded-2xl sm:p-4 sm:z-1">
              <h4 className="text-back font-runalto sm:text-text font-bold text-lg text-center">
                {item.title}
              </h4>
              <p className="text-back text-sm sm:text-text text-center max-w-180 mx-auto">
                {item.description}
              </p>
            </div>
            <div className="w-full aspect-3/2 rounded-2xl overflow-hidden">
              <img
                className="w-full h-full hover:scale-105 sm:group-hover:scale-105 transition"
                src={item.image}
                alt={`Image of ${item.title} in the mission and vission section`}
              />
            </div>
          </li>
        ))}
      </ul>
      <div className="flex flex-col items-center pt-12">
        <p className="text-back text-center text-sm">
          Discover the companies that make up Aberos, explore what they do.
        </p>
        <Link to="/companies" className="text-accent text-center font-runalto font-bold text-lg hover:scale-105 transition">
          Our companies
        </Link>
      </div>
    </section>
  );
};

export default MissionAndVission;
