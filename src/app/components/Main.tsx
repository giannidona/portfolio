import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Main() {
  return (
    <>
      <section id="main" className="pb-12">
        <div className="text-center pt-24">
          <h1 className="font-bold text-4xl">
            WELCOME TO MY <span className="block pt-1">LITTLE CORNER!</span>
          </h1>
          <h2 className="pt-3 text-xl">I HOPE YOU ENJOY IT!</h2>
        </div>
      </section>
      <section id="description" className="pb-12 w-1/2 m-auto">
        <p className="italic leading-7">
          Hello, my name is Gianluca, and I&apos;m 18 years old. On this page, I
          will upload chapters of my life as a developer, sharing both the
          things I am learning and doing, as well as future projects.
        </p>
        <div className="flex justify-evenly pt-5">
          <a href="https://github.com/giannidona" target="_blank">
            <FaGithub className="text-4xl" />
          </a>
          <a href="https://www.linkedin.com/in/gianidonato/" target="_blank">
            <FaLinkedin className="text-4xl" />
          </a>
        </div>
      </section>
    </>
  );
}
