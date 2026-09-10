import { Link } from "react-router-dom";
import { missionAndVission } from "../../../store/about";

const MissionAndVission = () => {
  return (
    <section className="bg-text pt-12">
      <div className="px-4 pb-6">
        <h2 className="text-center text-back leading-none pb-1.5">
          Purpose and Direction
        </h2>
        <h3 className="text-[min(7.5vw,2.2rem)] font-runalto font-semibold leading-none text-center text-back">
          What Drives Us Forward
        </h3>
      </div>
      <ul>
        {missionAndVission.map((item, i) => (
          <li key={i}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <img
              src={item.image}
              alt={`Image of ${item.title} in the mission and vission section`}
            />
          </li>
        ))}
      </ul>
      <div>
        <p>Discover the companies that make up Aberos, explore what they do.</p>
        <Link>Our companies</Link>
      </div>
    </section>
  );
};

export default MissionAndVission;
