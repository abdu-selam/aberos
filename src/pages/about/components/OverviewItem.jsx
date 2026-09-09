const OverviewItem = ({ title, description, image, i }) => {
  return (
    <li className="max-sm:max-w-100 w-full">
      <figure
        className={`flex max-sm:flex-col w-full gap-4 items-center sm:items-end ${i % 2 === 1 && "sm:flex-row-reverse"}`}
      >
        <img
          className="w-full aspect-451/318 shadow-[0_0_0.3rem] shadow-back/20 object-cover"
          src={image}
          alt={`image of overview ${title} for the aberos about page`}
        />
        <figcaption className="flex w-full max-w-85 flex-col gap-2 sm:pb-10">
          <h4
            className={`text-back sm:text-xl md:text-2xl font-runalto font-semibold max-sm:text-center ${i % 2 === 1 && "sm:text-end"}`}
          >
            {title}
          </h4>
          <p
            className={`text-back text-sm max-sm:text-center ${i % 2 === 1 && "sm:text-end"}`}
          >
            {description}
          </p>
        </figcaption>
      </figure>
    </li>
  );
};

export default OverviewItem;
