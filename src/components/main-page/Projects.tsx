import Link from "next/link";
import { Title } from "../ui/Title";
import { projects } from "@/data/projects";

export const Projects = () => {
  return (
    <div className="my-10">
      <Title title="Projects" />
      <ul className="space-y-6">
        {projects.map((project) => (
          <li
            key={project.slug}
            className="border-b border-neutral-100 pb-5 last:border-0 last:pb-0"
          >
            <div>
              <Link
                href={`/projects/${project.slug}`}
                className="font-medium text-slate-800 underline-offset-2 hover:underline"
              >
                <span
                  style={
                    {
                      viewTransitionName: `project-title-${project.slug}`,
                    } as React.CSSProperties
                  }
                >
                  {project.name}
                </span>
              </Link>
              <span className="mt-1 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded bg-stone-400/20 px-1.5 text-xs font-light text-slate-600"
                  >
                    {t}
                  </span>
                ))}
              </span>
            </div>
            <p className="mt-1 text-sm text-slate-600">{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
