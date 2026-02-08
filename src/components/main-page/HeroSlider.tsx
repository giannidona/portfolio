"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Title } from "../ui/Title";

// 6 heros elegidos para la home (podés cambiarlos después)
const HERO_IMAGES = [
  "landing-lexa.png",
  "landing-lumen.png",
  "ecom-eight.png",
  "landing-digitalproduct.png",
  "landing-techproduct.png",
  "ecom-tartas.png",
];

export const HeroSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    startX.current = e.clientX;
    scrollLeftStart.current = scrollRef.current.scrollLeft;
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const dx = startX.current - e.clientX;
    scrollRef.current.scrollLeft = scrollLeftStart.current + dx;
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <div className="my-10">
      <Title title="Work" />
      <div
        ref={scrollRef}
        className="relative -mx-0 mt-4 flex cursor-grab gap-3 overflow-x-auto py-2 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        style={{ userSelect: isDragging ? "none" : "auto" }}
      >
        {HERO_IMAGES.map((filename) => (
          <div
            key={filename}
            className="relative h-32 w-48 flex-shrink-0 overflow-hidden rounded-lg bg-neutral-100"
          >
            <Image
              src={`/heros-jan/${filename}`}
              alt=""
              fill
              className="object-cover"
              sizes="192px"
              draggable={false}
            />
          </div>
        ))}
      </div>
      <div className="mt-2 flex justify-end">
        <Link
          href="/gallery"
          className="text-xs text-neutral-500 underline-offset-2 hover:text-neutral-700 hover:underline"
        >
          ver más
        </Link>
      </div>
    </div>
  );
};
