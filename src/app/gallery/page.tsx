import fs from "fs";
import path from "path";
import Image from "next/image";

const IMAGES_DIR = path.join(process.cwd(), "public", "heros-jan");
const IMAGE_EXT = /\.(png|jpg|jpeg|webp|gif)$/i;

function getHeroImages(): string[] {
  if (!fs.existsSync(IMAGES_DIR)) return [];
  return fs
    .readdirSync(IMAGES_DIR)
    .filter((f) => IMAGE_EXT.test(f))
    .sort();
}

export const metadata = {
  title: "Gallery | Gianluca Donato",
  description: "Hero & landing designs gallery",
};

export default function GalleryPage() {
  const images = getHeroImages();

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h1 className="mb-2 text-sm font-semibold">~/ gallery</h1>
      </div>

      {images.length === 0 ? (
        <p className="text-neutral-500">No images in heros-jan.</p>
      ) : (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((filename) => {
            const name = filename.replace(IMAGE_EXT, "").replace(/-/g, " ");
            return (
              <li key={filename} className="group overflow-hidden rounded-lg">
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <Image
                    src={`/heros-jan/${filename}`}
                    alt={name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
