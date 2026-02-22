"use client";
import { useTranslations, useLocale } from "next-intl";

export const MainSection = () => {
  const t = useTranslations("main");
  const locale = useLocale();

  console.log("CURRENT LOCALE:", locale);

  return (
    <div className="mt-15">
      <h1 className="mb-2 text-2xl font-bold">{t("name")}</h1>
      <h2 className="mb-2 text-stone-700">{t("role")}</h2>
      <span className="inline-flex items-center rounded-full bg-green-300 px-3 text-sm font-semibold text-green-800">
        <div className="mr-2 h-[10] w-[10] rounded-full bg-green-500" />
        {t("available")}
      </span>
    </div>
  );
};
