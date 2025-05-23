function About() {
  // Puedes usar SVGs o emojis, aquí van ejemplos SVG minimalistas para los bloques:
  const blocks = [
    {
      title: "¿Quién soy?",
      icon: (
        // Person icon
        <svg
          className="w-8 h-8 text-blue-300"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-4 8-4 8-4s8 0 8 4" />
        </svg>
      ),
      content: (
        <>
          <p className="mb-2">
            Soy una persona que cree en el poder de la constancia, la curiosidad
            y la tecnología como motores de transformación social y personal.
          </p>
          <p>
            Actualmente me formo en desarrollo web y ciberseguridad, buscando
            aportar valor con compromiso, lealtad y resolución. No me detengo
            ante los desafíos: la honestidad y la apertura al cambio definen mi
            forma de trabajar y crecer.
          </p>
        </>
      ),
    },
    {
      title: "¿Qué puedo ofrecer?",
      icon: (
        // Star/hand icon
        <svg
          className="w-8 h-8 text-green-300"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M12 17l-5 3 2-5.2L4 10.6l5.2-.4L12 5l2.8 5.2 5.2.4-3.8 4.2L17 20z" />
        </svg>
      ),
      content: (
        <p>
          Aporto conocimientos técnicos en crecimiento, una actitud flexible y
          comprometida, y auténtica lealtad a cada proyecto. Siempre busco
          aprender, asumir retos y proponer soluciones eficientes, simples y
          humanas.
        </p>
      ),
    },
    {
      title: "¿Qué busco?",
      icon: (
        // Target icon
        <svg
          className="w-8 h-8 text-yellow-300"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
      content: (
        <p>
          Quiero formar parte de equipos que creen impacto real, con propósito y
          ganas de crecer juntos. Creo en la tecnología como fuerza positiva y
          quiero ser parte activa de ese cambio.
        </p>
      ),
    },
  ];

  const pills = [
    { label: "Resolutivo", color: "bg-blue-900/40 text-blue-200" },
    { label: "Leal", color: "bg-indigo-900/40 text-indigo-200" },
    { label: "Aprendizaje continuo", color: "bg-green-900/40 text-green-200" },
    { label: "Comprometido", color: "bg-yellow-900/40 text-yellow-200" },
  ];

  return (
    <section className="py-20 bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl px-4 flex flex-col items-center">
        {/* Eslogan */}
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-blue-400 mb-4 tracking-tight drop-shadow-lg">
          Aprendiendo hoy para programar el mañana.
        </h2>

        {/* Card principal */}
        <div className="w-full bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blocks.map(({ title, icon, content }) => (
              <div
                key={title}
                className="flex flex-col items-center text-center gap-2"
              >
                <div className="mb-1">{icon}</div>
                <h3 className="text-lg font-semibold text-blue-200 mb-2">
                  {title}
                </h3>
                <div className="text-gray-300 text-sm leading-relaxed">
                  {content}
                </div>
              </div>
            ))}
          </div>

          {/* Pills */}
          <div className="flex flex-wrap gap-2 justify-center mt-2">
            {pills.map((pill) => (
              <span
                key={pill.label}
                className={`px-3 py-1 text-xs rounded-full font-semibold ${pill.color}`}
              >
                {pill.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
