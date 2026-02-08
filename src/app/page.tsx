import {
  AboutMe,
  HeroSlider,
  MainSection,
  Projects,
  SocialLinks,
  TechStack,
} from "@/components";
export default function Home() {
  return (
    <>
      <MainSection />
      <AboutMe />
      <TechStack />
      <Projects />
      <HeroSlider />
      <SocialLinks />
      <p className="mb-2 text-2xl font-bold">
        Thank you for taking the time to read this. 🖤
      </p>
    </>
  );
}
