"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";
import LangToggle from "./LangToggle";

export const Navbar = () => {
  const t = useTranslations("nav");
  return (
    <nav className="mb-6 flex items-center justify-between gap-4 border-b border-neutral-200 pb-3 text-sm">
      <div className="flex gap-4">
        <Link
          href="/"
          className="text-neutral-600 underline-offset-4 hover:text-neutral-900 hover:underline"
        >
          {t("home")}
        </Link>
        <Link
          href="/gallery"
          className="text-neutral-600 underline-offset-4 hover:text-neutral-900 hover:underline"
        >
          {t("gallery")}
        </Link>
      </div>
      <LangToggle />
    </nav>
  );
};
