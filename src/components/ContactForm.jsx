import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "../components/Button";
import { motion } from "framer-motion";
import EmailStatusMessage from "./EmailStatusMessage";
import { contact } from "../data/translation";
import useStore from "../store/useStore";

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const lang = useStore((state) => state.lang);
  const formRef = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    try {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!re.test(formRef.current.email.value)) {
        alert("Email is not valid email");
        setLoading(false);
        return;
      }

      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_KEY,
        import.meta.env.VITE_TEMPLATE_KEY,
        formRef.current,
        import.meta.env.VITE_EMAIL_KEY,
      );

      setStatus({ type: "success", message: "Email sent successfully!" });
      formRef.current.reset();
    } catch (error) {
      setStatus({ type: "error", message: "Failed to send email." });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="contact"
      className="py-24 bg-primary text-back"
    >
      <div className="max-w-5xl mx-auto px-8 text-center mb-12">
        <h2 className="text-4xl pb-4 font-bold">{contact[lang]["title"]}</h2>
        <p className="text-back/70">{contact[lang]["desc"]}</p>
      </div>
      <motion.form
        ref={formRef}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className={`w-[90vw] max-w-175 h-max relative mx-auto rounded-xl z-10`}
      >
        <motion.div
          className="absolute bg-[conic-gradient(from_var(--angle),rgba(0,0,0,0),rgba(255,255,255,1),rgba(255,255,255,0.7),rgba(255,255,255,0.2))] w-[101%] h-[101%] top-[-0.5%] left-[-0.5%] shadow-[0_0_1rem_rgba(255,255,255,0.5)] rounded-xl -z-1"
          style={{
            "--angle": "0deg",
          }}
          animate={{
            "--angle": "360deg",
          }}
          transition={{
            duration: 6,
            ease: "linear",
            repeat: Infinity,
          }}
        ></motion.div>
        <div className="bg-[#0a061c] text-text  p-6 sm:p-8  w-full rounded-xl grid md:grid-cols-2 gap-6 ">
          <input
            className="border w-full rounded-xl px-4 py-3 focus:outline-none focus:bg-back/10 text-back"
            placeholder={contact[lang]["name"]}
            name="name"
            required
            type="text"
          />
          <input
            className="border rounded-xl px-4 py-3 focus:outline-none focus:bg-back/10 text-back"
            name="email"
            type="email"
            placeholder={contact[lang]["email"]}
            required
          />
          <input hidden name="year" value={new Date().getFullYear()} readOnly />
          <textarea
            className="border rounded-xl px-4 py-3 md:col-span-2 h-40 focus:outline-none focus:bg-back/10 text-back"
            name="message"
            placeholder={contact[lang]["comment"]}
            required
          />
          <div className="md:col-span-2 w-full border border-back/20 rounded-lg">
            <Button data={contact[lang]["btn"]} full={true} />
          </div>
        </div>
      </motion.form>
      {status && (
        <EmailStatusMessage
          type={status.type}
          message={status.message}
          onClose={() => setStatus(null)}
        />
      )}
    </motion.section>
  );
}

export default ContactForm;
