"use client";
import { useTranslations } from "next-intl";
import { Title } from "../ui/Title";

const stack = ["next", "typescript", "tailwindcss", "supabase"];

export const TechStack = () => {
  const t = useTranslations("stack");
  return (
    <div className="my-10">
      <Title title={t("title")} />
      <div className="flex flex-wrap gap-2">
        {stack.map((tech, index) => (
          <span
            key={index}
            className="rounded-lg bg-stone-400/20 px-1 font-light text-stone-600"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
