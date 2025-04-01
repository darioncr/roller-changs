import { RiFacebookBoxFill, RiInstagramFill, RiTiktokFill } from "@remixicon/react"

const Footer = () => {
  return (
    <footer className="container mx-auto px-6 py-8 flex flex-col items-center text-center bg-gradient-to-b 
    from-orange-500 to-orange-400 shadow-md mt-12 md:mt-16" id="contacto">
      <h1 className=" px-5 py-5 font-extrabold text-3xl uppercase text-white">Contacto</h1>
      <p className=" text-white text-xl tezxt-white">
        Para más contenido no dudes en visitar nuestras redes sociales
      </p>
      <hr className="border-t border-gray-600 my-2 w-full max-w-lg" />
      <div className="flex flex-col items-center gap-2">
        <div className="text-3xl flex items-center gap-2 font-bold uppercase">
          <p className=" font-extrabold text-white">Rollers Changs</p>
        </div>
        {/* Redes sociales */}
        <div className="text-3xl flex items-center gap-4 text-white">
          <a href="https://www.instagram.com/rollers_changs/" target="_blank" rel="noopener noreferrer">
            <RiInstagramFill className="hover:text-primary transition duration-300 cursor-pointer text-white" />
          </a>
          <a href="https://www.facebook.com/share/1ACKFboTnp/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
            <RiFacebookBoxFill className="hover:text-primary transition duration-300 cursor-pointer text-white" />
          </a>
          <a href="https://www.tiktok.com/@rollerschangs?_t=ZM-8uUev4Sapvz&_r=1" target="_blank" rel="noopener noreferrer">
            <RiTiktokFill className="hover:text-primary transition duration-300 cursor-pointer text-white" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
