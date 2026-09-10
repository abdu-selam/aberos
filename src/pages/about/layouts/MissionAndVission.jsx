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
      <ul className="flex flex-col gap-12">
        {missionAndVission.map((item, i) => (
          <li key={i}>
            <div className="pb-6">
              <h4 className="text-back font-runalto font-bold text-lg text-center">
                {item.title}
              </h4>
              <p className="text-back text-sm text-center">
                {item.description}
              </p>
            </div>
            <img
              className="w-full aspect-3/2 rounded-2xl"
              src={item.image}
              alt={`Image of ${item.title} in the mission and vission section`}
            />
          </li>
        ))}
      </ul>
      <div className="flex flex-col items-center pt-12">
        <p className="text-back text-center text-sm">
          Discover the companies that make up Aberos, explore what they do.
        </p>
        <Link className="text-accent text-center font-runalto font-bold text-lg">
          Our companies
        </Link>
      </div>
    </section>
  );
};

export default MissionAndVission;
