import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

export const Main = () => {
  return (
    <main id="home" className="py-5 text-center">
      <h1 className="text-3xl md:text-5xl font-semibold antialiased">
        Gianluca Donato
      </h1>
      <h2 className="font-light md:text-xl">Frontend Developer</h2>
      <div className="py-5">
        <p className="mb-2 font-semibold md:text-lg">Main stack:</p>
        <div className="flex gap-x-3 justify-center items-center text-3xl text-white/50">
          <TbBrandNextjs
            title="nextjs"
            className="hover:text-white transition ease-in-out duration-150"
          />
          <BiLogoTypescript
            title="typescript"
            className="hover:text-white transition ease-in-out duration-150"
          />
          <SiMongodb
            title="mongodb"
            className="hover:text-white transition ease-in-out duration-150"
          />
          <SiTailwindcss
            title="tailwindcss"
            className="hover:text-white transition ease-in-out duration-150"
          />
        </div>
      </div>
    </main>
  );
};
