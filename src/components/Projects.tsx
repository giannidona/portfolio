import Link from "next/link";
import projects from "../data/projects.json";

export const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <h3 className="text-xl font-bold">Selected projects 💯</h3>
      <div className="py-5">
        {projects.map((project) => (
          <div key={project.title} className="mb-2">
            <Link href={project.link} target="_blank">
              <div className="text-sm antialiased border rounded-lg p-2 border-stone-400/50">
                <div className="flex justify-between my-auto items-center mb-1">
                  <p className="font-bold">{project.title}</p>
                  {/* <span className="bg-blue-500/30 px-2 my-auto rounded text-xs border border-blue-500 antialiased">
                  building
                </span> */}
                </div>
                <p className="font-light mb-1">{project.description}</p>
                <p>{project.tecnologies.join(" ")}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
