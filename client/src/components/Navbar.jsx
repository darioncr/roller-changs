import { useState } from "react";
import logo from "../assets/logo-w.png";
import { RiCloseFill, RiMenu3Line } from "@remixicon/react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="fixed top-4 z-50 flex w-full flex-col items-center justify-center">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5 }}
        className="flex w-full items-center justify-between overflow-y-hidden 
        p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg"
      >
        <a href="/" className="scroll-smooth">
          <img src={logo} alt="logo" className="w-10 h-auto items-center" />
        </a>

        <div className="hidden md:flex space-x-10">
          <a href="#rodadas" className="hover:text-neutral-600 font-black">
            Rodadas
          </a>
          <a href="#rollers" className="hover:text-neutral-600 font-black">
            Rollers
          </a>
          <a href="#donaciones" className="hover:text-neutral-600 font-black">
            Donaciones
          </a>
          <a href="#contacto" className="hover:text-neutral-600 font-black">
            Contacto
          </a>
        </div>
        <div className="hidden md:flex space-x-4 items-center"></div>
        {/* Icono */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white 
                focus:outline-none"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <RiCloseFill /> : <RiMenu3Line />}
          </button>
        </div>
      </motion.div>
      {/* Mobile Menu  */}
      {isOpen && (
        <div className=" w-full md:hidden backdrop-blur-lg border border-neutral-200 px-6 py-4 rounded-xl mt-2 shadow-lg">
          <div className="flex flex-col space-y-3">
            <a
              href="#rodadas"
              className="hover:text-neutral-600 transition-all duration-300 ease-in-out hover:scale-105 border-b 
              border-neutral-400 pb-2 font-black"
            >
              Rodadas
            </a>
            <a
              href="#rollers"
              className="hover:text-neutral-600 transition-all duration-300 ease-in-out hover:scale-105 border-b 
              border-neutral-400 pb-2 font-black"
            >
              Rolers
            </a>
            <a
              href="#donaciones"
              className=" hover:text-neutral-600 transition-all duration-300 ease-in-out hover:scale-105 border-b 
              border-neutral-400 pb-2 font-black"
            >
              Donaciones
            </a>
            <a
              href="#contacto"
              className="hover:text-neutral-600 transition-all duration-300 ease-in-out hover:scale-105 font-black"
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
