"use client";
import { useTranslations } from "next-intl";
import { Title } from "../ui/Title";

export const SocialLinks = () => {
  const t = useTranslations("social");
  const links = t.raw("links") as Array<{ label: string; href: string }>;

  return (
    <div className="my-10">
      <Title title={t("title")} />
      <ul className="flex flex-wrap gap-x-6 gap-y-1">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="text-sm text-stone-500 underline-offset-2 hover:text-stone-700 hover:underline"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
