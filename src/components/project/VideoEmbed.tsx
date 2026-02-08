type VideoEmbedProps = {
  /** Ruta al video en /public, ej. /videos/stock-manager.mp4 */
  src: string;
  title?: string;
};

export function VideoEmbed({ src, title = "Video" }: VideoEmbedProps) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg bg-neutral-100">
      <video
        src={src}
        title={title}
        controls
        playsInline
        className="h-full w-full object-contain"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
