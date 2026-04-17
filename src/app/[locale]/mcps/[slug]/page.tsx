import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Link } from "@/lib/navigation";
import { getMCPMeta, getAllMCPSlugs } from "@/data/mcpMeta";
import { Title } from "@/components/ui/Title";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  const slugs = getAllMCPSlugs();
  const locales = ["en", "es"] as const;
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const t = await getTranslations("mcps");
  const items = t.raw("items") as Array<{ slug: string; name: string; description: string }>;
  const mcp = items.find((item) => item.slug === slug);
  if (!mcp) return { title: "MCP" };
  return {
    title: `${mcp.name} | Gianluca Donato`,
    description: mcp.description,
  };
}

export default async function MCPPage({ params }: Props) {
  const { slug } = await params;
  const meta = getMCPMeta(slug);
  if (!meta) notFound();

  const t = await getTranslations("mcps");
  const items = t.raw("items") as Array<{
    slug: string;
    name: string;
    description: string;
    story: string;
  }>;
  const mcp = items.find((item) => item.slug === slug);
  if (!mcp) notFound();

  const paragraphs = mcp.story.split("\n\n").filter(Boolean);

  return (
    <div className="my-10">
      <Link
        href="/"
        className="mb-6 inline-block text-sm text-stone-500 underline-offset-2 hover:underline"
      >
        {t("back")}
      </Link>

      <div className="mb-4">
        <h1
          className="text-2xl font-bold text-stone-900"
          style={
            {
              viewTransitionName: `mcp-title-${mcp.slug}`,
            } as React.CSSProperties
          }
        >
          {mcp.name}
        </h1>
        {meta.tech.map((tech) => (
          <span
            key={tech}
            className="mr-2 rounded bg-stone-400/20 px-1.5 text-xs font-light text-stone-600"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="mb-8 text-stone-600">{mcp.description}</p>

      <Title title={t("howDeveloped")} />
      <div className="space-y-4 text-stone-700">
        {paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {meta.repoUrl && (
        <p className="mt-8">
          <a
            href={meta.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-stone-500 underline-offset-2 hover:underline"
          >
            {t("seeRepo")}
          </a>
        </p>
      )}
    </div>
  );
}
