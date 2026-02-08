export type Project = {
  slug: string;
  name: string;
  description: string;
  tech: string[];
  /** Texto sobre el proyecto y cómo fue desarrollado (puede usar \n\n para párrafos) */
  story: string;
  /** URL de YouTube o Vimeo para mostrar un video del proyecto */
  videoUrl?: string;
  /** URL opcional del sitio en vivo */
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "stock-manager",
    name: "Stock Manager 📦",
    description: "Admin panel for inventory and analytics.",
    tech: ["Next", "Supabase", "Tailwind"],
    story: `I work in an e-commerce business that operates through MercadoLibre, actively involved in the day-to-day operations and in optimizing internal processes through digital solutions. I collaborate in key areas such as inventory control, product analysis, and operational organization to support better decision-making.

I also developed an internal web application for product and stock management that centralizes critical business information. The tool allows managing MercadoLibre listings, accessing distributor links, handling stock from a proprietary database, and registering products via scanning, significantly reducing manual tasks and improving inventory control.`,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
