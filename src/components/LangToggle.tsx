"use client";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/lib/navigation";

export default function LangToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale() {
    const next = locale === "en" ? "es" : "en";
    router.replace(pathname, { locale: next });
  }

  return (
    <button
      onClick={switchLocale}
      className="rounded-full border border-stone-200 px-3 py-1 text-sm font-medium text-stone-400 transition-colors hover:text-stone-700"
    >
      {locale === "en" ? "ES" : "EN"}
    </button>
  );
}
