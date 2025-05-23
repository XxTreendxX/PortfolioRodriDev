function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">
          Hola, soy <span className="text-blue-500">Rodrigo Otreras</span>
        </h1>
        <p className="text-xl mb-8 text-gray-300">
          Desarrollador web fullstack — creando soluciones modernas y seguras.
        </p>
        <a
          href="#projects"
          className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold transition duration-300 shadow-lg"
        >
          Ver mis proyectos
        </a>
      </div>
    </section>
  );
}

export default Home;
