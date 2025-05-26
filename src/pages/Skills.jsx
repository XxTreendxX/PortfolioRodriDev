import { motion } from "framer-motion";

function SkillCard({
  icon,
  name,
  desc,
  nivel,
  percent,
  color,
  shadow,
  badgeBg,
  badgeText,
}) {
  const r = 28;
  const circumference = 2 * Math.PI * r;
  const progress = circumference * (1 - percent / 100);

  return (
    <div
      className={`
        backdrop-blur-lg border border-white/15
        rounded-2xl shadow-lg flex flex-col items-center p-6
        transition hover:scale-105
        ${shadow} group
      `}
      style={{
        boxShadow: "0 4px 32px 0 #3b82f620",
        border: "1.5px solid rgba(255,255,255,0.10)",
      }}
    >
      {/* Gráfico circular con icono */}
      <div className="relative mb-3">
        <svg width="72" height="72" viewBox="0 0 72 72">
          {/* Fondo */}
          <circle
            cx="36"
            cy="36"
            r={r}
            stroke="#374151"
            strokeWidth="6"
            fill="none"
          />
          {/* Progreso */}
          <circle
            cx="36"
            cy="36"
            r={r}
            stroke={color}
            strokeWidth="6"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={progress}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 1s" }}
          />
        </svg>
        {/* Icono centrado */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-125">
          {icon}
        </div>
      </div>
      {/* Info */}
      <h3 className="text-lg font-bold text-white mt-2 mb-1">{name}</h3>
      <p className="text-sm text-gray-200 text-center mb-3">{desc}</p>
      <span
        className={`
          inline-block px-3 py-1 text-xs font-bold rounded-full shadow
          ${badgeBg} ${badgeText}
        `}
      >
        {nivel}
      </span>
    </div>
  );
}


function Skills() {
  return (
    <section className="py-16 bg-gray-900 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 mb-10 text-center">
          Mis skills como Developer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* HTML5 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <SkillCard
              icon={
                <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="8" fill="#E44D26" />
                  <path d="M13 33L10 7h20l-3 26-7 2-7-2z" fill="#fff" />
                  <path d="M20 31.2V9h7.5l-2.4 21.5L20 31.2z" fill="#F16529" />
                </svg>
              }
              name="HTML5"
              desc="Estructura semántica, SEO y accesibilidad web."
              nivel="Avanzado"
              percent={90}
              color="#E44D26"
              shadow="hover:shadow-[0_0_25px_0_#E44D2699]"
              badgeBg="bg-[#E44D26]/20"
              badgeText="text-[#E44D26]"
            />
          </motion.div>

          {/* CSS3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <SkillCard
              icon={
                <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="8" fill="#1572B6" />
                  <path d="M13 33L10 7h20l-3 26-7 2-7-2z" fill="#fff" />
                  <path d="M20 31.2V9h7.5l-2.4 21.5L20 31.2z" fill="#1572B6" />
                </svg>
              }
              name="CSS3"
              desc="Layouts responsivos, Flexbox, Grid y animaciones."
              nivel="Avanzado"
              percent={85}
              color="#1572B6"
              shadow="hover:shadow-[0_0_25px_0_#1572B699]"
              badgeBg="bg-[#1572B6]/20"
              badgeText="text-[#1572B6]"
            />
          </motion.div>

          {/* JavaScript */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <SkillCard
              icon={
                <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="8" fill="#F7DF1E" />
                  <text
                    x="50%"
                    y="65%"
                    textAnchor="middle"
                    fill="#222"
                    fontSize="18"
                    fontFamily="Arial"
                    fontWeight="bold"
                  >
                    JS
                  </text>
                </svg>
              }
              name="JavaScript"
              desc="Estructuras, funciones, eventos y consumo de APIs."
              nivel="Intermedio"
              percent={70}
              color="#F7DF1E"
              shadow="hover:shadow-[0_0_25px_0_#F7DF1E99]"
              badgeBg="bg-[#F7DF1E]/20"
              badgeText="text-[#F7DF1E]"
            />
          </motion.div>

          {/* React */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <SkillCard
              icon={
                <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" fill="#20232a" />
                  <g>
                    <ellipse
                      rx="11"
                      ry="4.5"
                      cx="20"
                      cy="20"
                      fill="none"
                      stroke="#61DAFB"
                      strokeWidth="2"
                    />
                    <ellipse
                      rx="11"
                      ry="4.5"
                      cx="20"
                      cy="20"
                      fill="none"
                      stroke="#61DAFB"
                      strokeWidth="2"
                      transform="rotate(60 20 20)"
                    />
                    <ellipse
                      rx="11"
                      ry="4.5"
                      cx="20"
                      cy="20"
                      fill="none"
                      stroke="#61DAFB"
                      strokeWidth="2"
                      transform="rotate(120 20 20)"
                    />
                    <circle cx="20" cy="20" r="2.2" fill="#61DAFB" />
                  </g>
                </svg>
              }
              name="React"
              desc="SPAs, hooks, rutas y animaciones modernas."
              nivel="Avanzado"
              percent={85}
              color="#61DAFB"
              shadow="hover:shadow-[0_0_25px_0_#61DAFB99]"
              badgeBg="bg-[#61DAFB]/20"
              badgeText="text-[#61DAFB]"
            />
          </motion.div>

          {/* Tailwind CSS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <SkillCard
              icon={
                <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="8" fill="#0EA5E9" />
                  <path
                    d="M10 23c2-4 6-6 10-6s8 2 10 6"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <path
                    d="M10 27c2-3 6-5 10-5s8 2 10 5"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                </svg>
              }
              name="Tailwind CSS"
              desc="Diseño responsivo, utilidades y animaciones."
              nivel="Avanzado"
              percent={80}
              color="#0EA5E9"
              shadow="hover:shadow-[0_0_25px_0_#0EA5E999]"
              badgeBg="bg-[#0EA5E9]/20"
              badgeText="text-[#0EA5E9]"
            />
          </motion.div>

          {/* Git & GitHub */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <SkillCard
              icon={
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5C5.373.5 0 5.873 0 12.5c0 5.292 3.438 9.772 8.205 11.387.6.113.82-.26.82-.577v-2.01c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.09-.746.083-.731.083-.731 1.204.085 1.84 1.236 1.84 1.236 1.073 1.84 2.812 1.308 3.495.999.108-.777.42-1.308.763-1.61-2.665-.304-5.466-1.333-5.466-5.931 0-1.31.468-2.381 1.236-3.222-.123-.303-.536-1.524.117-3.177 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.289-1.553 3.295-1.23 3.295-1.23.655 1.653.242 2.874.12 3.177.77.841 1.234 1.912 1.234 3.222 0 4.609-2.803 5.624-5.475 5.921.431.37.815 1.104.815 2.227v3.293c0 .319.217.694.825.576C20.565 22.271 24 17.791 24 12.5 24 5.873 18.627.5 12 .5z" />
                </svg>
              }
              name="Git & GitHub"
              desc="Flujo colaborativo, control de versiones y ramas."
              nivel="Intermedio"
              percent={65}
              color="#fff"
              shadow="hover:shadow-[0_0_25px_0_#fff9]"
              badgeBg="bg-white/20"
              badgeText="text-white"
            />
          </motion.div>

          {/* React Router */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <SkillCard
              icon={
                <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" fill="#fff" />
                  <g>
                    <circle
                      cx="20"
                      cy="20"
                      r="10"
                      stroke="#F44250"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M20 10 v10 h10"
                      stroke="#F44250"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </g>
                </svg>
              }
              name="React Router"
              desc="Rutas protegidas y navegación dinámica en React."
              nivel="Intermedio"
              percent={60}
              color="#F44250"
              shadow="hover:shadow-[0_0_25px_0_#F4425099]"
              badgeBg="bg-[#F44250]/20"
              badgeText="text-[#F44250]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Skills;