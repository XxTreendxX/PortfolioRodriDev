import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-950 text-white">
      <div className="text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 tracking-tight">
          Hello, I’m <span className="text-blue-500">Rodrigo Otreras</span>
        </h1>
        <p className="text-x1 sm:text-2x1 text-gray-300 mb-8">
          Full-Stack Web Developer — Creating modern and secure solutions.
        </p>
        <Link
          to="/projects"
          className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition duration-300"
        >
          View my projects
        </Link>
      </div>

      <div className="mt-12 opacity-60 animate-bounce">
        <svg
          width="28"
          height="28"
          fill="none"
          viewBox="0 0 24 24"
          className="mx-auto"
        >
          <path
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 5v14m0 0-7-7m7 7 7-7"
          />
        </svg>
        <p className="text-sm mt-2 text-blue-400">Swipe to see more</p>
      </div>
    </section>
  );
}

export default Home;
