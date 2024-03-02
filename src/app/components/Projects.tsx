import projects from "../../../data/projects.json";
import { LuExternalLink } from "react-icons/lu";
import Image from "next/image";

// import { FiGithub } from "react-icons/fi";

export default function Projects() {
  return (
    <section className="sm:w-full md:w-3/5 xl:w-2/5 mx-auto px-5">
      <h3 className="text-center text-2xl font-bold mb-10">PROYECTOS</h3>
      <div>
        {projects.map((project) => (
          <div
            className="border-2 border-black dark:border-white rounded-md m-auto mb-5 px-3 py-5 flex"
            key={project.id}
          >
            <div className="block w-full">
              <div className="my-auto">
                <a
                  className="text-md my-auto flex justify-between"
                  href={project.demo}
                  target="_blank"
                >
                  <p className="font-bold flex hover:underline">
                    {project.title}
                  </p>
                  <span className="my-auto transition duration-700 ease-in-out hover:-translate-y-1">
                    <LuExternalLink />
                  </span>
                </a>
              </div>
              <div>
                <p className="text-stone-500 italic mt-2">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
