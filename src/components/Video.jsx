import { motion } from "framer-motion";
import React from "react";

export default function Video({title, src, style}) {
  return (
    <motion.iframe
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`${style ?? 'w-full aspect-video rounded-3xl shadow-xl border'}`}
      src={src}
      allowFullScreen
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      title={title}
    />
  );
}
