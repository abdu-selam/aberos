import { motion } from "framer-motion";
import AppleTyping from "../../../components/effects/AppleTyping";

const OverviewItem = ({ title, description, image, i }) => {
  return (
    <li className="max-sm:max-w-100 w-full">
      <figure
        className={`flex max-sm:flex-col w-full gap-4 items-center sm:items-end ${i % 2 === 1 && "sm:flex-row-reverse"}`}
      >
        <motion.div
          initial={{
            x: i % 2 === 1 ? 25 : -25,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{
            amount: 0.6,
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="w-full aspect-451/318 shadow-[0_0_0.3rem] shadow-back/20 object-cover object-center overflow-hidden"
        >
          <img
            className="w-full h-full hover:scale-105 object-cover object-center transition"
            src={image}
            alt={`image of overview ${title} for the aberos about page`}
          />
        </motion.div>
        <figcaption className="flex w-full max-w-85 flex-col gap-2 sm:pb-10">
          <h4
            className={`*:text-back sm:text-xl md:text-2xl *:font-runalto font-semibold max-sm:text-center ${i % 2 === 1 && "sm:text-end"}`}
          >
            <AppleTyping text={title} />
          </h4>
          <p
            className={`*:text-back text-sm max-sm:text-center ${i % 2 === 1 && "sm:text-end"}`}
          >
            <AppleTyping text={description} />
          </p>
        </figcaption>
      </figure>
    </li>
  );
};

export default OverviewItem;
