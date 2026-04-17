"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";
import { Title } from "../ui/Title";

export const MCPs = () => {
  const t = useTranslations("mcps");
  const items = t.raw("items") as Array<{
    slug: string;
    name: string;
    description: string;
    tech?: string[];
  }>;

  return (
    <div className="my-10">
      <Title title={t("title")} />
      <ul className="space-y-6">
        {items.map((mcp) => (
          <li
            key={mcp.slug}
            className="border-b border-stone-200 pb-5 last:border-0 last:pb-0"
          >
            <div>
              <Link
                href={`/mcps/${mcp.slug}`}
                className="font-medium text-stone-800 underline-offset-2 hover:underline"
              >
                <span
                  style={
                    {
                      viewTransitionName: `mcp-title-${mcp.slug}`,
                    } as React.CSSProperties
                  }
                >
                  {mcp.name}
                </span>
              </Link>
              <span className="mt-1 flex flex-wrap gap-1.5">
                {(mcp.tech || []).map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-stone-400/20 px-1.5 text-xs font-light text-stone-600"
                  >
                    {tech}
                  </span>
                ))}
              </span>
            </div>
            <p className="mt-1 text-sm text-stone-600">{mcp.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
