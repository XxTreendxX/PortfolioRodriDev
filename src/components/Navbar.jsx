import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaFolderOpen,
  FaLightbulb,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

const menuLinks = [
  { path: "/", label: "Inicio", icon: <FaHome /> },
  { path: "/about", label: "Sobre mí", icon: <FaUser /> },
  { path: "/projects", label: "Proyectos", icon: <FaFolderOpen /> },
  { path: "/skills", label: "Skills", icon: <FaLightbulb /> },
  { path: "/contact", label: "Contacto", icon: <FaEnvelope /> },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleClose = () => setOpen(false);

  // Helper para saber si un link está activo
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gray-900 text-white py-2 border-b border-gray-800 shadow-[0_2px_15px_rgba(59,130,246,0.08)] sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-blue-500 hover:text-blue-400 transition"
        >
          RodriDev
        </Link>
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6">
          {menuLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`flex items-center gap-2 px-2 py-1 rounded transition font-semibold
                  ${
                    isActive(link.path)
                      ? "bg-blue-500 text-white shadow-md"
                      : "hover:text-blue-400"
                  }
                `}
              >
                <span className="text-lg">{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        {/* Hamburguesa en mobile */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <FaBars />
        </button>
      </div>

      {/* Overlay oscuro */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-all duration-300 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={handleClose}
        aria-hidden={!open}
      />

      {/* Drawer lateral derecho */}
      <div
        className={`fixed top-0 right-0 w-60 h-full bg-gray-900 shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-800">
          <span className="text-xl font-bold text-blue-500">Menú</span>
          <button
            className="text-2xl focus:outline-none"
            onClick={handleClose}
            aria-label="Cerrar menú"
          >
            <FaTimes />
          </button>
        </div>
        <ul className="flex flex-col mt-4 space-y-2 px-4">
          {menuLinks.map((link) => (
            <motion.li
              key={link.path}
              whileTap={{ scale: 1.07, backgroundColor: "#3b82f6" }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                to={link.path}
                onClick={handleClose}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-lg font-semibold transition
                  ${
                    isActive(link.path)
                      ? "bg-blue-500 text-white shadow-md"
                      : "hover:bg-blue-500/20 hover:text-blue-300"
                  }
                `}
              >
                <span className="text-xl">{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="bg-gray-900 text-white py-2 border-b border-gray-800 shadow-[0_2px_15px_rgba(59,130,246,0.08)] sticky top-0 z-50">
//       <div className="container mx-auto flex justify-between items-center px-4">
//         {/* Logo o nombre */}
//         <Link
//           to="/"
//           className="text-2xl font-bold tracking-tight text-blue-500 hover:text-blue-400 transition"
//         >
//           RodriDev
//         </Link>
//         <ul className="flex space-x-6">
//           <li>
//             <Link to="/" className="hover:text-blue-400 transition">
//               Inicio
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className="hover:text-blue-400 transition">
//               Sobre mí
//             </Link>
//           </li>
//           <li>
//             <Link to="/projects" className="hover:text-blue-400 transition">
//               Proyectos
//             </Link>
//           </li>
//           <li>
//             <Link to="/skills" className="hover:text-blue-400 transition">
//               Skills
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" className="hover:text-blue-400 transition">
//               Contacto
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }
// export default Navbar;
