import { VIDEOS } from "../constans";
import React from "react";
import { motion } from "framer-motion";

const Rodadas = () => {
  return (
    <section className="container mx-auto px-4 py-10" id="rodadas">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-center mb-12 text-neutral-800 uppercase"
        >
          Rodadas
        </motion.h1>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
                ease: "easeInOut",
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {VIDEOS.map((video) => (
            <motion.div
              key={video.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: "easeOut" },
                },
              }}
              className="flex justify-center"
            >
              <video
                src={video.url}
                className="w-full sm:w-56 md:w-64 rounded-lg shadow-xl transition-transform duration-500 hover:scale-110"
                autoPlay
                muted
                loop
                playsInline
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Rodadas;
