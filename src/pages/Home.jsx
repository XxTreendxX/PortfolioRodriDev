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
          <div className="flex flex-col items-center text-center gap-6 z-10">
            {/* FOTO */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-2"
            >
              <img
                src="./src/assets/rno.jpg"
                alt=""
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-xl
              hover:scale-105 transition duration-300
              hover:shadow-[0_0_32px_0_#3b82f6cc]"
                style={{
                  boxShadow: "0 0 32px 0 #3b82f680",
                }}
              />
            </motion.div>
          </div>
          <h1 className="pt-10">
            Hola, soy{" "}
            <span className="text-blue-500 drop-shadow-md">
              Rodrigo Otreras
            </span>
          </h1>
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
