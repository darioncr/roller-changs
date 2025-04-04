import { useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { motion } from "framer-motion";

const FormularioDonaciones = () => {
  const [amount, setAmount] = useState(1);
  const [totalAmount, setTotalAmount] = useState(1);
  const [preferenceId, setPreferenceId] = useState(null);
  const [showWallet, setShowWallet] = useState(false);

  initMercadoPago("APP_USR-34efbc59-b356-4e2c-88c7-819848c6cee2");

  const handleInputChange = (e) => {
    setAmount(e.target.value);
    setTotalAmount(e.target.value * 1);
  };

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/create_preference",
        {
          title: "Gracias por donar",
          price: totalAmount ?? 0,
          quantity: 1,
          productId: "donacion-123",
        }
      );

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
      setShowWallet(true);
    }
  };

  return (
    <section className="container mx-auto px-4 py-10 space-y-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1, ease: "easeInOut" },
          },
        }}
        className="max-w-5xl mx-auto"
        id="donaciones"
      >
        {/* Título */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-center text-black mb-8 uppercase">
            Donaciones
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            Si quieres apoyarnos, estaríamos muy agradecidos con tu aportación.
          </p>
        </motion.div>
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
            className="
            w-full sm:w-2/3 md:w-1/2 lg:w-1/3 
            px-4 py-3 border border-gray-300 bg-white 
            text-gray-900 rounded-lg text-lg text-center 
            focus:ring-2 focus:ring-orange-500 
            focus:border-orange-500 transition-all duration-300 
            shadow-md"
          />
          <p className="text-xl text-gray-700 font-medium">
            Gracias por donar: <span className="font-bold">${totalAmount}</span>
          </p>
        </motion.div>        
        {/* Botón Donar */}
        {!showWallet && (
          <motion.button
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
            w-full mt-5 flex items-center justify-center gap-2 
            py-3 px-4 bg-orange-500 hover:bg-orange-400 
            transition-all duration-300 text-white 
            text-lg font-semibold rounded-xl 
            shadow-lg text-center"
            onClick={handleBuy}
          >
            Donar
          </motion.button>
        )}
        {/* Wallet */}
        {showWallet && preferenceId && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
            className="mt-6"
          >
            <Wallet initialization={{ preferenceId }} />
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default FormularioDonaciones;
