import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Link } from "@/lib/navigation";
import { getProjectMeta, getAllProjectSlugs } from "@/data/projectMeta";
import { VideoEmbed } from "@/components/project/VideoEmbed";
import { Title } from "@/components/ui/Title";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  const locales = ["en", "es"] as const;
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const t = await getTranslations("projects");
  const items = t.raw("items") as Array<{ slug: string; name: string; description: string }>;
  const project = items.find((p) => p.slug === slug);
  if (!project) return { title: "Project" };
  return {
    title: `${project.name} | Gianluca Donato`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const meta = getProjectMeta(slug);
  if (!meta) notFound();

  const t = await getTranslations("projects");
  const items = t.raw("items") as Array<{
    slug: string;
    name: string;
    description: string;
    story: string;
  }>;
  const project = items.find((p) => p.slug === slug);
  if (!project) notFound();

  const paragraphs = project.story.split("\n\n").filter(Boolean);

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
              viewTransitionName: `project-title-${project.slug}`,
            } as React.CSSProperties
          }
        >
          {project.name}
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

      <p className="mb-8 text-stone-600">{project.description}</p>

      <Title title={t("howDeveloped")} />
      <div className="space-y-4 text-stone-700">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {meta.video && (
        <div className="mt-10">
          <Title title={t("video")} />
          <div className="mt-4">
            <VideoEmbed src={`/videos/${meta.video}`} title={project.name} />
          </div>
        </div>
      )}

      {meta.liveUrl && (
        <p className="mt-8">
          <a
            href={meta.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-stone-500 underline-offset-2 hover:underline"
          >
            {t("seeLive")}
          </a>
        </p>
      )}
    </div>
  );
}
