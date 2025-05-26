import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaUser,
  FaEnvelope,
  FaRegCommentDots,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";

function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 2500);
  };

  return (
    <section className="py-24 min-h-screen bg-gray-950 via-gray-900 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="relative bg-white/10 backdrop-blur-lg rounded-3xl border-2 border-blue-600/40 p-10 max-w-md w-full shadow-[0_8px_32px_0_#3b82f644] flex flex-col items-center"
        style={{
          boxShadow: "0 8px 32px 0 #3b82f633",
          border: "2px solid rgba(59, 130, 246, 0.3)",
        }}
      >
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-500 rounded-full p-3 shadow-lg">
          <FaRegCommentDots className="text-white text-3xl" />
        </div>
        <h2 className="text-2xl font-bold text-blue-200 mb-7 mt-6 text-center drop-shadow">
          ¿Listo para hablar?
          <br />
          <span className="text-blue-500">¡Contactame!</span>
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400" />
            <input
              className="bg-white/20 pl-10 pr-4 py-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full placeholder:text-blue-200 transition"
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400" />
            <input
              className="bg-white/20 pl-10 pr-4 py-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full placeholder:text-blue-200 transition"
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div className="relative">
            <textarea
              className="bg-white/20 pl-10 pr-4 py-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full placeholder:text-blue-200 resize-none min-h-[90px] transition"
              name="mensaje"
              placeholder="Tu mensaje"
              value={form.mensaje}
              onChange={handleChange}
              required
            />
            <FaRegCommentDots className="absolute left-3 top-3 text-blue-400" />
          </div>
          <motion.button
            type="submit"
            whileTap={{ scale: 0.96 }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 16px 4px #3b82f6aa",
              backgroundColor: "#3b82f6",
              color: "#fff",
            }}
            className="mt-4 bg-blue-500 hover:bg-blue-600 transition font-bold py-2 rounded-xl shadow-xl text-lg text-white active:scale-95"
          >
            {enviado ? "¡Enviado!" : "Enviar"}
          </motion.button>
        </form>
        {/* REDES */}
        <div className="flex items-center justify-center gap-8 mt-7">
          <a
            href="https://wa.me/+5491121546008"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-500 text-3xl transition"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.linkedin.com/in/rodrigo-nahuel-otreras-703a741a1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 text-3xl transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/XxTreendxX"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 text-3xl transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          {/* Telegram: completá tu link cuando lo tengas */}
          <a
            href="" // <-- completá tu link aquí
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:text-sky-500 text-3xl transition"
            aria-label="Telegram"
          >
            <FaTelegramPlane />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contacto;
