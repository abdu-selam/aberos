import { motion } from "framer-motion";
import AppleTyping from "../../../components/effects/AppleTyping";

const OverviewItem = ({ curr, i, mainItem, mainVissible, item }) => {
  const logicFor2 =
    curr + 1 === i ||
    curr - 4 === i ||
    curr - 1 === i ||
    (curr === 0 && i === 4);

  const order =
    curr === i
      ? {
          num: 2,
          class: "order-2",
        }
      : curr + 1 === i || (curr === 4 && i === 0)
        ? {
            num: 3,
            class: "order-3",
          }
        : curr + 2 === i || (curr === 3 && i === 0) || (curr === 4 && i === 1)
          ? {
              num: 4,
              class: "order-4",
            }
          : curr - 1 === i || (curr === 0 && i === 4)
            ? {
                num: 1,
                class: "order-1",
              }
            : {
                num: 0,
                class: "order-0",
              };

  let rotateY = 0;
  switch (order.num) {
    case 1:
      rotateY = -30;
      break;
    case 3:
      rotateY = 30;
      break;
    case 0:
      rotateY = -45;
      break;
    case 4:
      rotateY = 45;
      break;
  }

  return (
    <motion.li
      ref={i === 0 ? mainItem : null}
      initial={{
        rotateX: 90,
      }}
      animate={{
        opacity: order.num == 2 ? 1 : logicFor2 ? 0.6 : 0.4,
        rotateX: mainVissible ? 0 : 90,
      }}
      viewport={{
        amount: 0.3,
        once: true,
        margin: "0% 500% 0% 500%",
        root: "0% 500% 0% 500%",
      }}
      transition={{
        opacity: {
          duration: 0.3,
        },
        rotateX: {
          ease: [0.68, -0.55, 0.265, 1.55],
          duration: 0.9,
        },
      }}
      style={{
        rotateY,
      }}
      key={i}
      className={`${
        curr === i
          ? "w-8/10 max-w-110"
          : logicFor2
            ? "w-6/10 max-w-82.5"
            : "w-4/10 max-w-55"
      } shrink-0 aspect-9/13 
            overflow-hidden flex items-center backface-hidden justify-center
            relative ${order.class}
            `}
    >
      <figure className="h-full w-full relative">
        <img className="w-full h-full object-cover grayscale-100" src={item.image} alt="" />

        {curr === i && (
          <figcaption className="absolute w-full bottom-0 p-4 bg-linear-0 from-back/70 from-60% to-transparent flex flex-col gap-2">
            <h3 className="text-lg font-bold font-runalto">
              <AppleTyping
                text={item.title}
                className="font-runalto"
                duration={0.5}
                animate
              />
            </h3>
            <p className="text-sm opacity-80">
              <AppleTyping text={item.descrition} animate />
            </p>
          </figcaption>
        )}
      </figure>
    </motion.li>
  );
};

export default OverviewItem;
