type VideoEmbedProps = {
  url: string;
  title?: string;
};

/**
 * Acepta URLs de YouTube (watch o youtu.be) o Vimeo y devuelve el iframe embed.
 */
function getEmbedUrl(url: string): string | null {
  try {
    // YouTube: watch?v=ID o youtu.be/ID
    const ytMatch =
      url.match(/(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]+)/) ||
      url.match(/(?:youtu\.be\/)([a-zA-Z0-9_-]+)/);
    if (ytMatch) {
      return `https://www.youtube.com/embed/${ytMatch[1]}`;
    }
    // Vimeo: vimeo.com/ID
    const vimeoMatch = url.match(/(?:vimeo\.com\/)(\d+)/);
    if (vimeoMatch) {
      return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
    }
  } catch {
    return null;
  }
  return null;
}

export function VideoEmbed({ url, title = "Video" }: VideoEmbedProps) {
  const embedUrl = getEmbedUrl(url);
  if (!embedUrl) return null;

  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg bg-neutral-100">
      <iframe
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />
    </div>
  );
}
