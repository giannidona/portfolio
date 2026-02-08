"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { Title } from "../ui/Title";

const HERO_IMAGES = [
  "landing-lexa.png",
  "landing-lumen.png",
  "ecom-eight.png",
  "landing-digitalproduct.png",
  "landing-techproduct.png",
  "ecom-tartas.png",
];

export const HeroSlider = () => {
  return (
    <div className="my-10">
      <Title title="Some Designs" />
      <Swiper
        modules={[FreeMode]}
        freeMode={{
          enabled: true,
          momentum: true,
          momentumRatio: 1,
          momentumVelocityRatio: 1,
          momentumBounce: true,
          momentumBounceRatio: 0.5,
          sticky: false,
        }}
        spaceBetween={12}
        slidesPerView="auto"
        grabCursor
        className="!overflow-hidden !pb-2 cursor-grab active:cursor-grabbing"
      >
        {HERO_IMAGES.map((filename) => (
          <SwiperSlide
            key={filename}
            className="!h-32 !w-48 !flex-shrink-0"
          >
            <div className="relative h-32 w-48 overflow-hidden rounded-lg bg-neutral-100">
              <Image
                src={`/heros-jan/${filename}`}
                alt=""
                fill
                className="object-cover"
                sizes="192px"
                draggable={false}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
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
