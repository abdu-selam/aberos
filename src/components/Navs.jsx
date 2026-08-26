import { Link } from "react-router-dom";

const Navs = () => {
  const navs = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "About",
      link: "/about",
    },
    {
      text: "Companies",
      link: "/companies",
    },
    {
      text: "Contact Us",
      link: "/contact",
    },
  ];

  return (
    <ul className="flex max-sm:flex-col max-sm:w-full gap-2 sm:gap-8">
      {navs.map((item, i) => (
        <li className="max-sm:bg-back max-sm:dark:bg-back-dark rounded-lg max-sm:w-full" key={i}>
          <Link className="nav-less-item hover:text-accent text-text dark:text-text-dark transition duration-300" to={item.link}>{item.text}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navs;
