import mall from "../../../assets/mall.webp";
import restaurant from "../../../assets/restaurant.webp";
import factory from "../../../assets/factory.webp";

const Hero = () => {
  const links = [
    {
      name: "Mall",
      link: "#mall",
    },
    {
      name: "Restaurant",
      link: "#restaurant",
    },
    {
      name: "Factory",
      link: "#factory",
    },
  ];

  return (
    <section>
      <h1>Built for Lasting Value</h1>
      <p>
        Aberos PLC brings together businesses across retail, hospitality, and
        manufacturing, creating opportunities that connect people, strengthen
        communities, and contribute to sustainable economic growth.
      </p>
      <ul>
        {links.map((item, i) => (
          <li key={i}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
      <ul className="flex">
        {[mall, restaurant, factory].map((item, i) => (
          <li
            className="w-60 aspect-square overflow-hidden rounded-xl [clip-path:polygon(0_50%,50%_0,100%_50%,50%_100%)]"
            key={i}
          >
            <img
              className="w-full h-full object-cover"
              width={100}
              src={item}
              alt={`image of aberos subfactory ${i} in the hero section of companies page`}
            />
          </li>
        ))}
      </ul>
      <ul>
        <li></li>
      </ul>
      <ul>
        <li></li>
      </ul>
      {/* 
      1. title
      2. description
      3. link to each company
      4. 3 images
      5. 2 side circles
            - each two
      */}
    </section>
  );
};

export default Hero;
