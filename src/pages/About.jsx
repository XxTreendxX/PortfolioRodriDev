import { FaUser, FaLightbulb, FaBullseye, FaBriefcase } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="py-16 min-h-screen bg-transparent">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-400 mb-8 text-center tracking-tight drop-shadow-lg">
          Aprendiendo hoy para programar el mañana.
        </h2>
        <div className="grid gap-8">
          <div className="bg-gray-800/80 rounded-2xl shadow-xl p-7 flex flex-col gap-2 border-l-8 border-blue-400">
            <div className="flex items-center gap-3 mb-1">
              <FaUser className="text-blue-300 text-2xl" />
              <h3 className="text-xl text-blue-200 font-bold">¿Quién soy?</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Soy una persona que cree en el poder de la constancia, la
              curiosidad y la tecnología como herramientas para transformar no
              solo productos, sino también personas y sociedades.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Actualmente me encuentro en un camino de formación en desarrollo
              web y ciberseguridad, buscando cada día comprender mejor cómo
              funciona el mundo digital y cómo puedo aportar valor desde mi
              lugar. Me defino como una persona resolutiva, confiable y leal,
              comprometida tanto con las personas que me rodean como con mi
              propio desarrollo personal y profesional. Cuando enfrento un
              desafío, no me detengo hasta encontrar una solución. La
              persistencia, la honestidad y la apertura al cambio son parte de
              mi forma de trabajar y de relacionarme.
            </p>
          </div>
          <div className="bg-gray-800/80 rounded-2xl shadow-xl p-7 flex flex-col gap-2 border-l-8 border-green-400">
            <div className="flex items-center gap-3 mb-1">
              <FaLightbulb className="text-green-300 text-2xl" />
              <h3 className="text-xl text-green-200 font-bold">
                ¿Qué puedo ofrecer?
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              No solo ofrezco conocimientos técnicos en crecimiento, sino
              también una actitud comprometida, una gran capacidad de adaptación
              y una lealtad auténtica a los proyectos y valores en los que creo.
              Siempre estoy dispuesto a aprender nuevas tecnologías y a
              enfrentar lo desconocido con entusiasmo y responsabilidad. Me
              apasiona resolver problemas reales y encontrar formas de hacer las
              cosas de manera más eficiente, simple y humana.
            </p>
          </div>
          <div className="bg-gray-800/80 rounded-2xl shadow-xl p-7 flex flex-col gap-2 border-l-8 border-purple-400">
            <div className="flex items-center gap-3 mb-1">
              <FaBullseye className="text-purple-300 text-2xl" />
              <h3 className="text-xl text-purple-200 font-bold">¿Qué busco?</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Aspiro a formar parte de equipos que generen un impacto real, que
              trabajen con propósito y que compartan el deseo de crecer juntos.
              Estoy convencido de que la tecnología bien utilizada puede ser una
              fuerza positiva, y quiero ser parte activa de ese cambio.
            </p>
          </div>
        </div>

        <div className="mt-14">
          <h4 className="text-lg sm:text-xl font-bold text-cyan-400 tracking-wide mb-4">
            Educación
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/80 rounded-xl shadow-lg p-6 border-l-4 border-cyan-400">
              <h5 className="text-cyan-200 text-base font-semibold mb-2">
                Estudios formales
              </h5>
              <ul className="text-gray-300 space-y-1 list-disc pl-4">
                <li>Escuela Secundaria Ejemplo (2010 – 2015)</li>
                <li>Facultad Ejemplo, Carrera Ejemplo (2016 – Presente)</li>
              </ul>
            </div>
            <div className="bg-gray-800/80 rounded-xl shadow-lg p-6 border-l-4 border-blue-400">
              <h5 className="text-blue-200 text-base font-semibold mb-2">
                Cursos y capacitaciones
              </h5>
              <ul className="text-gray-300 space-y-1 list-disc pl-4">
                <li>
                  Curso de Desarrollo Web Fullstack (Portfolio en React,
                  Tailwind, Git, etc.)
                  <span className="ml-2 text-blue-300 text-xs italic">
                    (En curso)
                  </span>
                </li>
                {/* Agregá más cursos*/}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-14">
          <h4 className="text-lg sm:text-xl font-bold text-amber-400 tracking-wide flex items-center gap-2 mb-4">
            <FaBriefcase className="text-amber-300 text-xl" />
            Experiencia Laboral
          </h4>
          {/* inicio exp laboral */}
          <div className="bg-gray-800/80 rounded-xl shadow-lg p-6 mb-6 border-l-4 border-amber-400">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <span className="font-bold text-amber-300 text-base">
                Nombre de la Empresa
              </span>
              <span className="text-gray-400 text-sm italic">
                Fecha de inicio – Fecha de fin
              </span>
            </div>
            <span className="inline-block bg-amber-900/60 text-amber-200 text-xs font-semibold px-3 py-1 rounded-full mb-3">
              Puesto ocupado
            </span>
            <ul className="list-disc pl-6 text-gray-300 space-y-1">
              <li>Responsabilidad principal #1.</li>
              <li>Responsabilidad principal #2.</li>
              <li>
                Uso de tecnologías:{" "}
                <span className="text-amber-200">React, Node.js</span> (por
                ejemplo)
              </li>
            </ul>
          </div>
        </div>
        {/* Soft Skills */}
        <div className="mt-10 mb-3 flex flex-col items-center">
          <h4 className="text-lg sm:text-xl font-bold text-blue-400 tracking-wide uppercase mb-2">
            Soft Skills
          </h4>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <span className="bg-blue-900/60 border border-blue-400 text-blue-200 font-semibold px-4 py-2 rounded-full">
            Resolutivo
          </span>
          <span className="bg-green-900/60 border border-green-400 text-green-200 font-semibold px-4 py-2 rounded-full">
            Leal
          </span>
          <span className="bg-purple-900/60 border border-purple-400 text-purple-200 font-semibold px-4 py-2 rounded-full">
            Comprometido
          </span>
          <span className="bg-gray-900/80 border border-gray-400 text-gray-200 font-semibold px-4 py-2 rounded-full">
            Aprendizaje continuo
          </span>
        </div>
      </div>
    </section>
  );
}

export default About;
