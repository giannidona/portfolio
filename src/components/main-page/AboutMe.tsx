"use client";
import { useTranslations } from "next-intl";
import { Title } from "../ui/Title";

export const AboutMe = () => {
  const t = useTranslations("about");
  return (
    <div className="my-10">
      <Title title={t("title")} />
      <p className="text-stone-600">{t("body")}</p>
    </div>
  );
};
