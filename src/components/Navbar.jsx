import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4 border-b border-gray-800 shadow-[0_2px_15px_rgba(59,130,246,0.08)] sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo o nombre */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-blue-500 hover:text-blue-400 transition"
        >
          RodriDev
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-blue-400 transition">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-400 transition">
              Sobre mí
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-blue-400 transition">
              Proyectos
            </Link>
          </li>
          <li>
            <Link to="/skills" className="hover:text-blue-400 transition">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-400 transition">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
