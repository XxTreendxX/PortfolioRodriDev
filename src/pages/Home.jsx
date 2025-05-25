import { motion } from "framer-motion";

function Home() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center text-center gap-6"
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 tracking-tight">
          Hola, soy <span className="text-blue-500 drop-shadow-md">Rodrigo Otreras</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8">
          Full-Stack Web Developer — Creando soluciones modernas y seguras.
        </p>
        <div className="mt-12 opacity-60 animate-bounce">
          <svg
            width="28"
            height="28"
            fill="none"
            viewBox="0 0 24 24"
            className="mx-auto"
            aria-hidden="true"
          >
            <path
              stroke="#3B82F6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 5v14m0 0-7-7m7 7 7-7"
            />
          </svg>
          <p className="text-sm mt-2 text-blue-400">Ver más</p>
        </div>
      </motion.div>
    </section>
  );
}

export default Home;



// function Home() {
//   return (
//     <section className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 text-white px-4">
//       <div className="flex flex-col items-center text-center gap-6">
//         <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 tracking-tight">
//           Hola, soy{" "}
//           <span className="text-blue-500 drop-shadow-md">Rodrigo Otreras</span>
//         </h1>
//         <p className="text-xl sm:text-2xl text-gray-300 mb-8">
//           Full-Stack Web Developer — Creando soluciones modernas y seguras.
//         </p>
//         <div className="mt-12 opacity-60 animate-bounce">
//           <svg
//             width="28"
//             height="28"
//             fill="none"
//             viewBox="0 0 24 24"
//             className="mx-auto"
//             aria-hidden="true"
//           >
//             <path
//               stroke="#3B82F6"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M12 5v14m0 0-7-7m7 7 7-7"
//             />
//           </svg>
//           <p className="text-sm mt-2 text-blue-400">Ver más</p>
//         </div>
//       </div>
//     </section>
//   );
// }


// import { Link } from "react-router-dom";

// function Home() {
//   return (
//     <section className="min-h-screen flex flex-col justify-center items-center bg-gray-950 text-white">
//       <div className="text-center">
//         <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 tracking-tight">
//           Hola, soy <span className="text-blue-500">Rodrigo Otreras</span>
//         </h1>
//         <p className="text-x1 sm:text-2x1 text-gray-300 mb-8">
//           Full-Stack Web Developer — Creando soluciones modernas y seguras.
//         </p>
//         <Link
//           to="/projects"
//           className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition duration-300"
//         >
//           Ver mis proyectos
//         </Link>
//       </div>

//       <div className="mt-12 opacity-60 animate-bounce">
//         <svg
//           width="28"
//           height="28"
//           fill="none"
//           viewBox="0 0 24 24"
//           className="mx-auto"
//         >
//           <path
//             stroke="#3B82F6"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M12 5v14m0 0-7-7m7 7 7-7"
//           />
//         </svg>
//         <p className="text-sm mt-2 text-blue-400">Ver mas</p>
//       </div>
//     </section>
//   );
// }

// export default Home;
