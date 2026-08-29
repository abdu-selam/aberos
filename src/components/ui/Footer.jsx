import GhostFibers from "../effects/GhostFibers";
import AppleTyping from "../effects/AppleTyping";
import { motion } from "framer-motion";

const Footer = () => {
  const links = [
    {
      text: "Tiktok",
      link: "#",
    },
    {
      text: "Linkedin",
      link: "#",
    },
    {
      text: "Instagram",
      link: "#",
    },
  ];
  return (
    <footer className="bg-back/60 bg-linear-180 from-back p-4 relative py-4 pb-8">
      <div className="absolute w-full h-full top-0 overflow-hidden left-0 -z-1">
        <GhostFibers className="" />
      </div>
      <div className="max-w-max-width mx-auto">
        <section className="py-8">
          <h2 className="max-w-100 leading-none">
            <AppleTyping
              text="Building Stronger Businesses, Creating Lasting Impact."
              className="text-[11vw] min-[25rem]:text-[2.75rem] max-w-100 leading-none font-runalto font-semibold"
            />
          </h2>
        </section>
        <section>
          <div className="flex flex-col items-end pb-8">
            <p className="text-end">
              &copy;&nbsp;
              <AppleTyping
                text={`${new Date().getFullYear()} Aberos. Crafted with vision. Built to endure. All rights reserved.`}
              />
            </p>
            <ul className="flex gap-6">
              {links.map((item, i) => (
                <motion.li
                  initial={{
                    y: 10,
                    opacity: 0,
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                  }}
                  viewport={{
                    amount: 0.5,
                    once: true,
                  }}
                  transition={{
                    delay: 0.1 * i,
                  }}
                  key={i}
                >
                  <a
                    className="text-lg hover:text-accent transition duration-300"
                    target="_blank"
                    href={item.link}
                  >
                    {item.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="text-[23vw] md:text-[11.4rem] leading-none text-transparent [-webkit-text-stroke:2px_var(--color-accent)] font-runalto text-end">
            ABEROS
          </div>
        </section>
      </div>
      <div className="mt-8 h-0.5 w-[100%-1rem] -translate-x-4 bg-text/40"></div>
    </footer>
  );
};

export default Footer;
