import projects from "../../../data/projects.json";

export const Projects = () => {
  return (
    <section>
      <h3 className="text-center text-2xl font-bold mb-10">PROJECTS</h3>
      <div>
        {projects.map((project) => (
          <div
            className="border-2 border-white w-3/5 m-auto mb-5 p-2"
            key={project.id}
          >
            <p className="font-bold mb-1">{project.title}</p>
            <p className="text-stone-500 italic mb-1">{project.description}</p>
            <p className="mb-1">{project.technoliges}</p>
            {project.github && (
              <a
                className="mb-1 hover:text-neutral-300 pr-5"
                href={project.github}
                target="_blank"
              >
                code
              </a>
            )}
            {project.link && (
              <a
                className="mb-1 hover:text-neutral-300"
                href={project.link}
                target="_blank"
              >
                demo
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
