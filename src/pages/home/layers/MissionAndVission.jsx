import { motion, useInView } from "framer-motion";
import mission from "../../../assets/mission.webp";
import vision from "../../../assets/vission.webp";
import AppleTyping from "../../../components/effects/AppleTyping";
import { useRef } from "react";

const MissionAndVission = () => {
  const data = [
    {
      title: "Our Mission: Creating Everyday Value.",

      text: "Our mission is to create meaningful value through quality products, reliable services, and diverse business solutions. Across our mall, restaurant, and floor factory, we focus on meeting everyday needs, serving our community with care, and building trusted experiences that create lasting satisfaction for everyone.",

      image: mission,
    },

    {
      title: "Our Vision: Growing Beyond Today.",

      text: "Our vision is to become a leading and trusted business group recognized for quality, innovation, and sustainable growth. We aim to continuously strengthen our diverse companies, create new opportunities, and build businesses that positively contribute to our community while creating a stronger future for generations to come.",

      image: vision,
    },
  ];

  const refOne = useRef();
  const isInView1 = useInView(refOne, { amount: 0.3 });

  const refTwo = useRef();
  const isInView2 = useInView(refTwo, { amount: 0.3 });

  return (
    <section>
      <ul className="md:max-w-6xl mx-auto">
        {data.map((item, i) => (
          <li className="h-screen" key={i}>
            <figure className="h-8/10 relative md:grid grid-cols-2 md:px-4 md:gap-4">
              <motion.img
                ref={i === 0 ? refOne : refTwo}
                animate={{
                  opacity: Number(i === 0 ? isInView1 : isInView2),
                }}
                className={`h-full md:w-full object-cover ${i === 1 && "md:col-start-2 md:col-end-3 row-span-2"} grayscale-50`}
                src={item.image}
                alt=""
              />
              <figcaption
                className={`max-md:absolute bottom-0 md:w-full bg-linear-0 from-back/70 from-60% to-transparent max-md:px-4 md:self-end md:p-4 md:-translate-y-20 shrink-0 ${i === 1 ? "md:col-start-1 md:col-end-1 md:translate-x-20 text-end" : "md:-translate-x-20"}`}
              >
                <h2 className="">
                  <AppleTyping
                    text={item.title}
                    once={false}
                    className="text-3xl font-runalto font-semibold"
                    animate
                    animation={{
                      y: (i === 0 ? isInView1 : isInView2) ? 0 : 10,
                      opacity: Number(i === 0 ? isInView1 : isInView2),
                    }}
                  />
                </h2>
                <motion.p
                  animate={{
                    opacity: Number(i === 0 ? isInView1 : isInView2),
                  }}
                  className="text-sm"
                >
                  {item.text}
                </motion.p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MissionAndVission;
