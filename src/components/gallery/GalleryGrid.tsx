"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

type GalleryGridProps = { images: string[] };

const IMAGE_EXT = /\.(png|jpg|jpeg|webp|gif)$/i;
const CURSOR_OFFSET = 24;
const PREVIEW_SIZE = 320;

export function GalleryGrid({ images }: GalleryGridProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafId = useRef<number | null>(null);
  const pendingPosition = useRef<{ x: number; y: number } | null>(null);

  // Throttle position updates con requestAnimationFrame para movimiento más fluido
  const updatePosition = useCallback((x: number, y: number) => {
    pendingPosition.current = { x, y };
    if (rafId.current !== null) return;
    rafId.current = requestAnimationFrame(() => {
      if (pendingPosition.current) {
        setPosition(pendingPosition.current);
        pendingPosition.current = null;
      }
      rafId.current = null;
    });
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const w = typeof window !== "undefined" ? window.innerWidth : 0;
      const h = typeof window !== "undefined" ? window.innerHeight : 0;
      let x = e.clientX + CURSOR_OFFSET;
      let y = e.clientY + CURSOR_OFFSET;
      if (w) x = Math.min(x, w - PREVIEW_SIZE - 8);
      if (h) y = Math.min(y, h - Math.round(PREVIEW_SIZE * 0.75) - 8);
      x = Math.max(8, x);
      y = Math.max(8, y);
      updatePosition(x, y);
    },
    [updatePosition],
  );

  const handleMouseEnter = useCallback(
    (filename: string, e: React.MouseEvent) => {
      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current);
        closeTimeout.current = null;
      }
      setSelected(filename);
      setIsClosing(false);
      setIsVisible(false);
      handleMouseMove(e);
    },
    [handleMouseMove],
  );

  const handleMouseLeave = useCallback(() => {
    setIsClosing(true);
    closeTimeout.current = setTimeout(() => {
      setSelected(null);
      setIsClosing(false);
      setIsVisible(false);
      closeTimeout.current = null;
    }, 280);
  }, []);

  // Fade in suave al abrir o al cambiar de imagen
  useEffect(() => {
    if (!selected) return;
    const id = requestAnimationFrame(() => {
      setIsVisible(true);
    });
    return () => cancelAnimationFrame(id);
  }, [selected]);

  if (images.length === 0) return null;

  return (
    <>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((filename) => {
          const name = filename.replace(IMAGE_EXT, "").replace(/-/g, " ");
          return (
            <li
              key={filename}
              className="group overflow-hidden rounded-lg"
              onMouseEnter={(e) => handleMouseEnter(filename, e)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
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

      {/* Floating preview: position con transform (GPU), fade in/out suaves */}
      {selected && (
        <div
          className="pointer-events-none fixed left-0 top-0 z-50 will-change-transform"
          style={{
            width: PREVIEW_SIZE,
            height: Math.round(PREVIEW_SIZE * 0.75),
            transform: isClosing
              ? `translate(${position.x}px, ${position.y}px) scale(0.94)`
              : `translate(${position.x}px, ${position.y}px) scale(1)`,
            transition: isClosing
              ? "opacity 0.28s cubic-bezier(0.4, 0, 0.2, 1), transform 0.28s cubic-bezier(0.4, 0, 0.2, 1)"
              : "transform 0.22s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
            opacity: isClosing ? 0 : isVisible ? 1 : 0,
          }}
          aria-hidden
        >
          <div className="h-full w-full overflow-hidden rounded-lg border border-white/10 bg-neutral-900 shadow-2xl">
            <Image
              src={`/heros-jan/${selected}`}
              alt=""
              width={PREVIEW_SIZE}
              height={Math.round(PREVIEW_SIZE * 0.75)}
              className="h-full w-full object-cover"
              sizes={`${PREVIEW_SIZE}px`}
            />
          </div>
        </div>
      )}
    </>
  );
}
