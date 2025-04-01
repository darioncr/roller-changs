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
          transition: { staggerChildren: 0.3, ease: "easeInOut" },
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
          className="relative group flex justify-center w-full"
        >
          {/* Contenedor adaptable */}
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            {/* Video Responsive */}
            <video
              src={video.url}
              className="w-full h-auto rounded-lg shadow-xl transition-transform duration-500 group-hover:scale-110"
              autoPlay
              muted
              loop
              playsInline
            />

            {/* Overlay adaptable al tamaño del video */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center
              opacity-0 backdrop-blur-lg transition-opacity duration-500 
              group-hover:opacity-100 bg-black/50 rounded-lg p-4"
            >
              <h3 className="text-lg sm:text-xl font-medium text-white text-center">
                Rodada {video.id}
              </h3>
              <p className="text-white text-sm sm:text-base text-center">
                {video.descripcion}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>