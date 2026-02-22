import {
  AboutMe,
  HeroSlider,
  MainSection,
  Projects,
  SocialLinks,
  TechStack,
} from "@/components";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("footer");
  return (
    <>
      <MainSection />
      <AboutMe />
      <TechStack />
      <Projects />
      <HeroSlider />
      <SocialLinks />
      <p className="mb-2 text-2xl font-bold">{t("thanks")}</p>
    </>
  );
}
