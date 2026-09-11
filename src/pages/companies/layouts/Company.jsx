import { motion, useInView } from "framer-motion";
import AppleTyping from "../../../components/effects/AppleTyping";
import { useEffect, useRef, useState } from "react";

const Company = ({
  title,
  description,
  address,
  conclusion,
  id,
  images,
  i,
}) => {
  const ref = useRef(null);
  const isInview = useInView(ref, {
    amount: 0.3,
  });
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (entered || !isInview) return;

    setEntered(true);
  }, [isInview]);

  return (
    <section
      id={id}
      ref={ref}
      className="bg-text sticky md:top-0 py-16 min-h-screen flex flex-col md:justify-between items-center px-4 shadow-[0_-0.2rem_0.5rem] shadow-back/15"
    >
      <div>
        <h2 className="text-back text-center font-runalto font-bold text-[min(6vw,1.65rem)] leading-none pb-4">
          {title}
        </h2>
        <p className="*:text-back text-center max-w-180 text-sm pb-2">
          <AppleTyping
            initiate={false}
            animate
            animation={{ y: entered ? 0 : 10, opacity: Number(entered) }}
            text={description}
          />
        </p>
        <motion.address
          initial={{
            y: 10,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          viewport={{
            once: true,
          }}
          className="text-accent text-center"
        >
          {address}
        </motion.address>
      </div>
      <ul className="flex max-md:flex-col md:items-center md:justify-center gap-4 md:min-h-full md:grow">
        {images.map((item, j) => (
          <motion.li
            initial={{
              y: 30,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.3 * j,
              duration: 0.5,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            className={`w-full overflow-hidden max-w-80 aspect-square ${i === j && [0, 2].includes(i) ? "md:-translate-y-1/2" : Math.abs(i - j) === 2 ? "md:translate-y-1/2" : ""} rounded-4xl`}
            key={j}
          >
            <img
              className="w-full h-full hover:scale-110 transition"
              width={300}
              height={300}
              src={item}
              key={i}
              alt={`image ${i} of ${title}`}
            />
          </motion.li>
        ))}
      </ul>
      <p className="text-back text-center max-w-200 text-sm pt-6">
        {conclusion}
      </p>
    </section>
  );
};

export default Company;
