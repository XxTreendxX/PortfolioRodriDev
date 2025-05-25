import { motion } from "framer-motion";

function Home() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 text-white px-4">
      <div className="flex flex-col items-center text-center gap-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl font-extrabold mb-4 tracking-tight"
        >
          Hola, soy{" "}
          <span className="text-blue-500 drop-shadow-md">Rodrigo Otreras</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="text-xl sm:text-2xl text-gray-300 mb-8"
        >
          Full-Stack Web Developer — Creando soluciones modernas y seguras.
        </motion.p>
      </div>
    </section>
  );
}

export default Home;

