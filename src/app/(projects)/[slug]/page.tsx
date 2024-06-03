import projects from "@/data/projects.json";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default function ProductInfoPage({ params }: Props) {
  const { slug } = params;
  const project = projects.find((product) => product.slug === slug);

  if (!project?.slug) {
    notFound();
  }

  return (
    <section className="h-screen">
      <div>
        <h1 className="text-xl font-bold mb-5">
          {project?.title.toUpperCase()}
        </h1>
      </div>
      <div className="mb-10">
        {/* <video
          autoPlay
          loop
          controls
          className="rounded-lg relative z-30"
          src="/vid-example.mp4"
        >
          <source src="/vid-example.mp4" />
        </video> */}
      </div>
      <div className="pb-5 text-center">
        {project?.github && (
          <Link className="mr-5" href={project.github} target="_blank">
            github
          </Link>
        )}
        {project?.demo && (
          <Link className="mr-5" href={project.demo} target="_blank">
            demo
          </Link>
        )}
      </div>
      <div>
        {project?.description?.map((description, i) => (
          <p key={i} className="font-medium pb-4">
            {description}
          </p>
        ))}
      </div>
    </section>
  );
}
