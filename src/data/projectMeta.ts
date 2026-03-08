/** Non-translated project metadata: tech badges, video, liveUrl */
export type ProjectMeta = {
  slug: string;
  tech: string[];
  video?: string;
  liveUrl?: string;
};

export const projectMetaList: ProjectMeta[] = [
  {
    slug: "stock-manager",
    tech: ["Next", "Supabase", "Tailwind"],
    video: "stock-manager.mp4",
  },
  {
    slug: "puffa-ecommerce",
    tech: ["Next", "Supabase", "Tailwind", "TypeScript", "Mercado Pago"],
    video: "puffa-ecom.mp4",
  },
];

export function getProjectMeta(slug: string): ProjectMeta | undefined {
  return projectMetaList.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projectMetaList.map((p) => p.slug);
}
