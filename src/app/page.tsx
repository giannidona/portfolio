import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav className="flex justify-around py-5 border-b-4 border-white">
        <div>
          <p className="font-bold">GIANLUCA DONATO</p>
        </div>
        <div>
          <input className="rounded-lg" type="text" name="" id="" />
        </div>
        <div className="flex justify-around">
          <p>EN</p>
        </div>
        <div>
          <p>DARK</p>
        </div>
      </nav>
      <section id="main" className="pb-12">
        <div className="text-center pt-48">
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
      </section>
      <section id="chapters" className="pb-12 w-3/5 m-auto ">
        <h3 className="text-center text-2xl font-bold">CHAPTERS</h3>
        <div className="pt-10">
          <div
            id="card"
            className="border-b-4 border-white mb-5 flex hover:bg-neutral-700	ease-out duration-300 "
          >
            <div className="mr-5">
              <p>IMAGE</p>
            </div>
            <div className="p-2">
              <p className="font-bold mb-1">CHAPTER I - TITLE</p>
              <p className="text-stone-500 italic  mb-1">Description</p>
              <p className="">14/02</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
