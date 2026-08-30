import { motion } from "framer-motion";
import mobileBack from "../../assets/hero-back.webp";
import pcBack from "../../assets/hero-back-pc.webp";
import tvBack from "../../assets/hero-back-tv.webp";

const HeroBack = () => {
  return (
    <picture className="absolute -z-1 w-full h-dvh bottom-0">
      <source media="(min-width: 1920px)" srcSet={tvBack} />
      <source media="(min-width: 1024px)" srcSet={pcBack} />
      <source media="(max-width: 640px)" srcSet={mobileBack} />

      <motion.img
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
        }}
        src={pcBack}
        className="object-cover w-full h-full object-center"
        alt=""
      />
    </picture>
  );
};

export default HeroBack;
