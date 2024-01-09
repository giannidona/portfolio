import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";

export default function Technologies() {
  return (
    <section className="text-center py-5 ">
      <h3 className="text-center text-2xl font-bold mb-10">TECHNOLOGIES</h3>
      <div className="flex justify-center gap-4">
        <div>
          <FaHtml5 className="text-5xl mx-auto" />
          <p>HTML</p>
        </div>

        <div>
          <FaCss3Alt className="text-5xl mx-auto" />
          <p>CSS</p>
        </div>

        <div>
          <IoLogoJavascript className="text-5xl mx-auto" />
          <p>JAVASCRIPT</p>
        </div>

        <div>
          <FaReact className="text-5xl mx-auto" />
          <p>REACT</p>
        </div>

        <div>
          <TbBrandNextjs className="text-5xl mx-auto" />
          <p>NEXT.JS</p>
        </div>

        <div>
          <FaBootstrap className="text-5xl mx-auto" />
          <p>BOOTSTRAP</p>
        </div>
        <div>
          <SiTailwindcss className="text-5xl mx-auto" />
          <p>TAILWIND</p>
        </div>
      </div>
    </section>
  );
}
