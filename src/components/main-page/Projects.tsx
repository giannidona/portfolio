"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";
import { Title } from "../ui/Title";

export const Projects = () => {
  const t = useTranslations("projects");
  const items = t.raw("items") as Array<{
    slug: string;
    name: string;
    description: string;
    tech?: string[];
  }>;

  const techMap: Record<string, string[]> = {
    "stock-manager": ["Next", "Supabase", "Tailwind"],
    "puffa-ecommerce": ["Next", "Supabase", "Tailwind", "TypeScript", "Mercado Pago"],
  };

  return (
    <div className="my-10">
      <Title title={t("title")} />
      <ul className="space-y-6">
        {items.map((project) => (
          <li
            key={project.slug}
            className="border-b border-stone-200 pb-5 last:border-0 last:pb-0"
          >
            <div>
              <Link
                href={`/projects/${project.slug}`}
                className="font-medium text-stone-800 underline-offset-2 hover:underline"
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
                {(techMap[project.slug] || []).map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-stone-400/20 px-1.5 text-xs font-light text-stone-600"
                  >
                    {tech}
                  </span>
                ))}
              </span>
            </div>
            <p className="mt-1 text-sm text-stone-600">{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
