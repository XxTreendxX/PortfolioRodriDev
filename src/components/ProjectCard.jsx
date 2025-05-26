import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ proyecto }) {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-lg border border-white/15 rounded-2xl shadow-lg p-5 flex flex-col gap-4 transition hover:scale-105 hover:shadow-[0_0_25px_0_#3b82f655]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      {/* Imagen */}
      <img
        src={proyecto.imagen}
        alt={proyecto.nombre}
        className="w-full h-40 object-cover rounded-xl border border-white/10 shadow"
      />
      <h3 className="text-xl font-bold text-blue-300">{proyecto.nombre}</h3>
      <p className="text-gray-200">{proyecto.descripcion}</p>
      {/* Tecnologías */}
      <div className="flex flex-wrap gap-2 mb-2">
        {proyecto.tecnologias.map((tech, idx) => (
          <span
            key={idx}
            className="px-2 py-1 bg-blue-800/30 text-blue-200 rounded-lg text-xs font-bold"
          >
            {tech}
          </span>
        ))}
      </div>
      {/* Links */}
      <div className="flex gap-4">
        <a
          href={proyecto.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-blue-400 hover:text-blue-500 font-semibold"
        >
          <FaExternalLinkAlt /> Demo
        </a>
        <a
          href={proyecto.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-gray-300 hover:text-white font-semibold"
        >
          <FaGithub /> Código
        </a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
