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

const FRICTION = 0.94;
const MIN_VELOCITY = 0.15;
const VELOCITY_MULTIPLIER = 1.4;
const BOUNCE_FACTOR = 0.35;
const SNAP_DURATION_MS = 280;

export const HeroSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const rafId = useRef<number | null>(null);
  const velocityHistory = useRef<{ x: number; t: number }[]>([]);
  const inertiaId = useRef<number | null>(null);
  const snapId = useRef<number | null>(null);

  const cancelAllAnimations = useCallback(() => {
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
    if (inertiaId.current !== null) {
      cancelAnimationFrame(inertiaId.current);
      inertiaId.current = null;
    }
    if (snapId.current !== null) {
      cancelAnimationFrame(snapId.current);
      snapId.current = null;
    }
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    e.preventDefault();
    cancelAllAnimations();
    setIsDragging(true);
    startX.current = e.clientX;
    scrollLeftStart.current = scrollRef.current.scrollLeft;
    velocityHistory.current = [{ x: e.clientX, t: performance.now() }];
  }, [cancelAllAnimations]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || !scrollRef.current) return;
      e.preventDefault();
      const history = velocityHistory.current;
      history.push({ x: e.clientX, t: performance.now() });
      if (history.length > 8) history.shift();
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

  const getVelocity = useCallback((): number => {
    const history = velocityHistory.current;
    if (history.length < 2) return 0;
    const recent = history[history.length - 1];
    const old = history[Math.max(0, history.length - 5)];
    const dt = (recent.t - old.t) / 1000;
    if (dt <= 0) return 0;
    const dx = startX.current - recent.x;
    return (dx / dt) * VELOCITY_MULTIPLIER;
  }, []);

  const runInertia = useCallback((initialVelocityPxPerMs: number) => {
    if (!scrollRef.current) return;
    let v = initialVelocityPxPerMs;
    const el = scrollRef.current;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) return;

    const tick = () => {
      if (!scrollRef.current) return;
      const el = scrollRef.current;
      const maxScroll = el.scrollWidth - el.clientWidth;
      const next = el.scrollLeft + v * 16;
      if (next < 0) {
        el.scrollLeft = 0;
        v = -v * BOUNCE_FACTOR;
      } else if (next > maxScroll) {
        el.scrollLeft = maxScroll;
        v = -v * BOUNCE_FACTOR;
      } else {
        el.scrollLeft = next;
      }
      v *= FRICTION;
      if (Math.abs(v) > MIN_VELOCITY) {
        inertiaId.current = requestAnimationFrame(tick);
      } else {
        inertiaId.current = null;
      }
    };
    cancelAllAnimations();
    inertiaId.current = requestAnimationFrame(tick);
  }, [cancelAllAnimations]);

  const snapTo = useCallback((target: number) => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const start = el.scrollLeft;
    const startTime = performance.now();

    const tick = () => {
      if (!scrollRef.current) return;
      const elapsed = performance.now() - startTime;
      const t = Math.min(elapsed / SNAP_DURATION_MS, 1);
      const eased = 1 - (1 - t) * (1 - t);
      scrollRef.current!.scrollLeft = start + (target - start) * eased;
      if (t < 1) {
        snapId.current = requestAnimationFrame(tick);
      } else {
        snapId.current = null;
      }
    };
    cancelAllAnimations();
    snapId.current = requestAnimationFrame(tick);
  }, [cancelAllAnimations]);

  const handleMouseUp = useCallback(() => {
    if (!scrollRef.current) {
      setIsDragging(false);
      return;
    }
    const v = getVelocity();
    if (Math.abs(v) > 0.05) {
      runInertia(v);
    }
    setIsDragging(false);
  }, [getVelocity, runInertia]);

  const handleMouseLeave = useCallback(() => {
    if (!isDragging || !scrollRef.current) {
      setIsDragging(false);
      return;
    }
    const el = scrollRef.current;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) {
      setIsDragging(false);
      return;
    }
    const dx = startX.current - (velocityHistory.current[velocityHistory.current.length - 1]?.x ?? startX.current);
    if (dx > 20) {
      snapTo(maxScroll);
    } else if (dx < -20) {
      snapTo(0);
    } else {
      const v = getVelocity();
      if (Math.abs(v) > 0.05) runInertia(v);
    }
    setIsDragging(false);
  }, [isDragging, getVelocity, runInertia, snapTo]);

  useEffect(() => {
    return cancelAllAnimations;
  }, [cancelAllAnimations]);

  return (
    <div ref={containerRef} className="my-10">
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
