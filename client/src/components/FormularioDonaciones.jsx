import { useState } from "react";

import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { motion } from "framer-motion"

const FormularioDonaciones = () => {
  const [amount, setAmount] = useState(1);
  const [totalAmount, setTotalAmount] = useState(10);

  const [preferenceId, setPreferenceId] = useState(null);

  initMercadoPago("APP_USR-34efbc59-b356-4e2c-88c7-819848c6cee2");

  const handleButtonClick = (amount) => {
    setAmount(amount);
    setTotalAmount(amount * 10);
  };

  const handleInputChange = (e) => {
    setAmount(e.target.value);
    setTotalAmount(e.target.value * 10);
  };

  //Mercado pago functions
  const createPreference = async () => {
    try {
      const response = await axios.post("http://localhost:3000/create_preference", {
        title: "Gracias por donar",
        price: totalAmount ?? 0,
        quantity: 1,
        productId: "donacion-123"
      });

      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };
  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };
  return (
    <section className="container mx-auto px-4 py-10 space-y-20">
      {/* Sección de Donaciones */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1, ease: "easeInOut" }
          },
        }}
        className="max-w-5xl mx-auto"
        id="donaciones"
      >
        {/* Título y descripción */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold text-neutral-800 uppercase">Donaciones</h2>
          <p className="text-xl text-gray-600">
            Si quieres apoyarnos, estaríamos muy agradecidos con tu aportación.
          </p>
        </motion.div>

        {/* Botones de donación */}
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
          {[3, 5, 10].map((amount) => (
            <motion.button
              key={amount}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center py-4 px-8 
                     bg-orange-400 hover:bg-orange-300 transition-all duration-300 
                     text-white text-lg font-semibold rounded-xl shadow-xl"
              onClick={() => handleButtonClick(amount)}
            >
              ${amount}
            </motion.button>
          ))}
        </motion.div>
        {/* Input para otra cantidad */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
          className="flex flex-col items-center mt-8 space-y-6"
        >
          <input
            type="number"
            placeholder="Otra cantidad"
            min="1"
            value={amount}
            onChange={handleInputChange}
            className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 px-4 py-3 border border-gray-600 
                   bg-orange-400 text-white rounded-lg text-lg text-center 
                   focus:ring-2 focus:ring-orange-100 focus:border-orange-500 
                   transition-all duration-300"
          />
          <p className="text-xl text-gray-800">Gracias por donar: ${totalAmount}</p>
        </motion.div>
        {/* Botón de Donar */}
        <motion.button
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-full mt-6 flex items-center justify-center py-4 px-8 
                 bg-orange-500 hover:bg-orange-400 transition-all duration-300 
                 text-white text-lg font-semibold rounded-xl shadow-xl"
          onClick={handleBuy}
        >
          Donar
        </motion.button>
        {/* Integración con MercadoPago */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1 } },
          }}
          className="mt-8"
        >
          {preferenceId && <Wallet initialization={{ preferenceId }} />}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default FormularioDonaciones
