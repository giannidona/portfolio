import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import { VideoEmbed } from "@/components/project/VideoEmbed";
import { Title } from "@/components/ui/Title";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };
  return {
    title: `${project.name} | Gianluca Donato`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const paragraphs = project.story.split("\n\n").filter(Boolean);

  return (
    <div className="my-10">
      <Link
        href="/"
        className="mb-6 inline-block text-sm text-stone-500 underline-offset-2 hover:underline"
      >
        ← back
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
        {project.tech.map((t) => (
          <span
            key={t}
            className="mr-2 rounded bg-stone-400/20 px-1.5 text-xs font-light text-stone-600"
          >
            {t}
          </span>
        ))}
      </div>

      <p className="mb-8 text-stone-600">{project.description}</p>

      <Title title="How it was developed" />
      <div className="space-y-4 text-stone-700">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {project.video && (
        <div className="mt-10">
          <Title title="Video" />
          <div className="mt-4">
            <VideoEmbed src={`/videos/${project.video}`} title={project.name} />
          </div>
        </div>
      )}

      {project.liveUrl && (
        <p className="mt-8">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-stone-500 underline-offset-2 hover:underline"
          >
            See live site →
          </a>
        </p>
      )}
    </div>
  );
}
