import React from "react";
import { ROLLERS_IMAGE } from "../constans";
import { motion } from "framer-motion";

const Rollers = () => {
  return (
    <section
      id="rollers"
      className="container mx-auto px-6 py-12 flex flex-col items-center text-center bg-gradient-to-b 
    from-orange-500 to-orange-400 shadow-md mt-16 md:mt-20"
    >
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-3xl font-bold text-center text-white mb-8 uppercase"
      >
        Rollers 🐵
      </motion.h1>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* Imagen de los integrantes */}
        {ROLLERS_IMAGE.map((image) => (
          <motion.div
            key={image.id}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "easeOut" },
              },
            }}
            className="relative bg-orange-200 p-4 rounded-xl shadow-xl border-2 border-transparent
             hover:border-orange-100 transition-all duration-300 hover:scale-110"
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-48 h-48 object-cover rounded-lg"
            />
            <p className="mt-3 text-lg font-semibold text-black text-center">
              {image.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Rollers;
