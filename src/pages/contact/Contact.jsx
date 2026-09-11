import { motion } from "framer-motion";
import AppleTyping from "../../components/effects/AppleTyping";
import Ring from "./components/Ring";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";

const Contact = () => {
  return (
    <main className="absolute w-screen top-0 left-0 overflow-hidden h-[200vh] lg:h-screen bg-text">
      <p className="max-lg:hidden *:text-back absolute right-[-4.8rem] -top-16 text-[12rem] leading-none *:font-runalto font-bold z-1">
        <AppleTyping toBottom sep={false} text="A B E R O S" />
      </p>
      <section className="h-full max-w-5xl grid lg:gap-4 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 mx-auto">
        <ContactInfo />
        <ContactForm />
      </section>
      <Ring className="w-screen max-w-150 bottom-0 right-0 max-lg:right-full translate-1/2" />
      <Ring className="w-screen max-w-150 bottom-1/2 right-0 lg:hidden translate-1/2" />
      <Ring className="w-screen max-w-120 left-0 top-0 -translate-1/2" />
      <p className="*:text-back absolute max-lg:hidden left-[-4.8rem]  -bottom-20 text-[12rem] leading-none *:font-runalto font-bold max-lg:left-1/2 flex">
        <AppleTyping sep={false} text="A B E R O S" />
      </p>
    </main>
  );
};

export default Contact;
