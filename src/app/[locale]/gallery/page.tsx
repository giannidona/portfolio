import fs from "fs";
import path from "path";
import { getTranslations } from "next-intl/server";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

const IMAGES_DIR = path.join(process.cwd(), "public", "heros-jan");
const IMAGE_EXT = /\.(png|jpg|jpeg|webp|gif)$/i;

function getHeroImages(): string[] {
  if (!fs.existsSync(IMAGES_DIR)) return [];
  return fs
    .readdirSync(IMAGES_DIR)
    .filter((f) => IMAGE_EXT.test(f))
    .sort();
}

export async function generateMetadata() {
  return {
    title: "Gallery | Gianluca Donato",
    description: "Hero & landing designs gallery",
  };
}

export default async function GalleryPage() {
  const t = await getTranslations("designs");
  const images = getHeroImages();

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h1 className="mb-2 text-sm font-semibold">{t("title")}</h1>
      </div>

      {images.length === 0 ? (
        <p className="text-neutral-500">{t("noImages")}</p>
      ) : (
        <GalleryGrid images={images} />
      )}
    </div>
  );
}
