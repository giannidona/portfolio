import { AboutMe, MainSection, TechStack } from "@/components";
export default function Home() {
  return (
    <div className="mx-auto w-[90%] xl:w-[45%]">
      <MainSection />
      <AboutMe />
      <TechStack />
    </div>
  );
}
