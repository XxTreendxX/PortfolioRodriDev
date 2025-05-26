import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section className="py-16 min-h-screen bg-gray-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 mb-10 text-center">
          Mis Proyectos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((proyecto, idx) => (
            <ProjectCard proyecto={proyecto} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
