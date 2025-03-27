import { HERO_CONTENT } from "../constans"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section id="/" className="container mx-auto px-6 py-12 flex flex-col items-center text-center bg-gradient-to-b
     from-orange-500 to-orange-400 rounded-xl shadow-md mt-16 md:mt-20 font-bold">
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight bg-clip-text text-transparent bg-gradient-to-r
         from-white to-gray-200 flex items-center justify-center sedgwick-ave-regular">
        {HERO_CONTENT.title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="mt-2 md:mt-4 font-medium text-white text-2xl md:text-3xl ">
        {HERO_CONTENT.subtitle}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, }}
        whileInView={{ opacity: 1.5, }}
        transition={{ duration: 3, delay: 0.5 }}
        className="mt-4 w-full max-w-3xl overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-500">
        <img
          src={HERO_CONTENT.image}
          alt="Hero"
          className="w-full h-[40vh] md:h-[50vh] object-cover  bg-orange-200 p-4 rounded-xl shadow-xl border-2 border-transparent
           hover:border-orange-100"
        />
      </motion.div>
    </section>
  )
}

export default Hero
