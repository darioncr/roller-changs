import { VIDEOS } from "../constans";
import React from "react";
import { motion } from "framer-motion";

const Rodadas = () => {
  return (
    <section className="container mx-auto px-6 py-12" id="rodadas">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-black mb-8 uppercase"
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
              transition: { staggerChildren: 0.2, ease: "easeInOut" },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Videos de rodadas */}
          {VIDEOS.map((video) => (
            <motion.div
              key={video.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              className="relative group flex justify-center w-full"
            >
              <div className="relative w-full max-w-md md:max-w-lg aspect-video overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow  duration-300">
                <video
                  src={video.url}
                  className="absolute inset-0 w-full h-full object-cover rounded-xl"
                  autoPlay
                  muted
                  loop
                  playsInline
                />

                {/* Información de las rodadas */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center 
              bg-black/30 text-white text-center p-6 transition-opacity duration-500
              opacity-100 md:opacity-0 md:group-hover:opacity-100"
                >
                  <h3 className="text-lg sm:text-xl font-semibold">
                    Rodada: {video.title2}
                  </h3>
                  <p className="text-sm sm:text-base mt-2">
                    {video.descripcion}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Rodadas;
