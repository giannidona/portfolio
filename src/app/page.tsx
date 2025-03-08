import { AboutMe, MainSection, TechStack } from "@/components";
export default function Home() {
  return (
    <div className="mx-auto w-[90%] lg:w-[35%]">
      <MainSection />
      <AboutMe />
      <TechStack />
    </div>
  );
}
