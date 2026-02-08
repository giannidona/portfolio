"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Title } from "../ui/Title";

const HERO_IMAGES = [
  "landing-lexa.png",
  "landing-lumen.png",
  "ecom-eight.png",
  "landing-digitalproduct.png",
  "landing-techproduct.png",
  "ecom-tartas.png",
];

const FRICTION = 0.92;
const MIN_VELOCITY = 0.3;

export const HeroSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const rafId = useRef<number | null>(null);
  const lastMove = useRef<{ x: number; t: number } | null>(null);
  const inertiaId = useRef<number | null>(null);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    e.preventDefault();
    setIsDragging(true);
    startX.current = e.clientX;
    scrollLeftStart.current = scrollRef.current.scrollLeft;
    lastMove.current = { x: e.clientX, t: performance.now() };
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || !scrollRef.current) return;
      e.preventDefault();
      lastMove.current = { x: e.clientX, t: performance.now() };
      const dx = startX.current - e.clientX;
      const targetScroll = scrollLeftStart.current + dx;
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollLeft = targetScroll;
        }
        rafId.current = null;
      });
    },
    [isDragging],
  );

  const runInertia = useCallback((velocityPxPerMs: number) => {
    if (!scrollRef.current) return;
    let v = velocityPxPerMs;
    const el = scrollRef.current;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) return;

    const tick = () => {
      if (!scrollRef.current) return;
      const el = scrollRef.current;
      el.scrollLeft += v * 16;
      v *= FRICTION;
      if (el.scrollLeft <= 0 || el.scrollLeft >= maxScroll) v *= 0.8;
      el.scrollLeft = Math.max(0, Math.min(maxScroll, el.scrollLeft));
      if (Math.abs(v) > MIN_VELOCITY) {
        inertiaId.current = requestAnimationFrame(tick);
      } else {
        inertiaId.current = null;
      }
    };
    if (inertiaId.current !== null) cancelAnimationFrame(inertiaId.current);
    inertiaId.current = requestAnimationFrame(tick);
  }, []);

  const handleMouseUp = useCallback(() => {
    if (!scrollRef.current || !lastMove.current) {
      setIsDragging(false);
      return;
    }
    const now = performance.now();
    const last = lastMove.current;
    const dt = now - last.t;
    if (dt > 0 && dt < 150) {
      const dx = startX.current - last.x;
      const velocityPxPerMs = dx / dt;
      runInertia(velocityPxPerMs);
    }
    setIsDragging(false);
  }, [runInertia]);

  const handleMouseLeave = useCallback(() => {
    if (isDragging && scrollRef.current && lastMove.current) {
      const now = performance.now();
      const last = lastMove.current;
      const dt = now - last.t;
      if (dt > 0 && dt < 150) {
        const dx = startX.current - last.x;
        runInertia(dx / dt);
      }
    }
    setIsDragging(false);
  }, [isDragging, runInertia]);

  useEffect(() => {
    return () => {
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
      if (inertiaId.current !== null) cancelAnimationFrame(inertiaId.current);
    };
  }, []);

  return (
    <div className="my-10">
      <Title title="Some Designs" />
      <div
        ref={scrollRef}
        className="relative -mx-0 flex cursor-grab gap-3 overflow-x-auto py-2 [scrollbar-width:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        style={{
          userSelect: isDragging ? "none" : "auto",
          scrollBehavior: isDragging ? "auto" : "smooth",
        }}
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
          see more
        </Link>
      </div>
    </div>
  );
};
