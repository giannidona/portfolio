import projects from "../../../data/projects.json";
import { LuExternalLink } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";

export default function Projects() {
  return (
    <section className="sm:w-full md:w-3/5 xl:w-2/5 mx-auto px-5">
      <h3 className="text-center text-2xl font-bold mb-10">PROYECTOS</h3>
      <div>
        {projects.map((project) => (
          <div
            className="border-2 border-black dark:border-white rounded-md m-auto mb-5 p-2"
            key={project.id}
          >
            <div className="flex justify-between">
              <div className="flex my-auto">
                <p className="font-bold">{project.title}</p>
                {project.demo && (
                  <a
                    className="text-md mx-2 my-auto"
                    href={project.demo}
                    target="_blank"
                  >
                    <LuExternalLink />
                  </a>
                )}
                {project.code && (
                  <a
                    className="text-md mx-2 my-auto"
                    href={project.code}
                    target="_blank"
                  >
                    <FiGithub />
                  </a>
                )}
              </div>
            </div>
            <p className="text-stone-500 italic my-2">{project.description}</p>
            <p className="mb-1">
              {project.technoliges.toLocaleString().replaceAll(",", " - ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
