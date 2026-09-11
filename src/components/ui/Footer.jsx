import GhostFibers from "../effects/GhostFibers";
import AppleTyping from "../effects/AppleTyping";
import { motion } from "framer-motion";
import StrokeName from "../effects/StrokeName";

const Footer = () => {
  const links = [
    {
      text: "Tiktok",
      link: "https://www.tiktok.com/@abdu.dev",
    },
    {
      text: "Linkedin",
      link: "https://www.linkedin.com/authwall?trkInfo=AQHg1NOjoN-5xgAAAaA0QHZ4d82OopbZT66C8sQLpbn3yo7nA5GU6gfX84PeNHdlvjtAjWslb-E1dccbZUGNe2GJJ8XYsOB3xSTrPiQ7s_8XI1ZHiyztAdDmzhjW5OT6pJ-n3D0=&original_referer=https://talentflow.ct.ws/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fabduselam-awel-b74083385",
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
          <StrokeName className="text-end" />
        </section>
      </div>
      <div className="mt-8 h-0.5 w-[100%-1rem] -translate-x-4 bg-text/40"></div>
    </footer>
  );
};

export default Footer;
