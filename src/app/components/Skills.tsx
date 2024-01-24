import Image from "next/image";

export default function Skills() {
  return (
    <section>
      <h3 className="text-center text-2xl font-bold my-20 mb-10">
        TECNOLOGIAS
      </h3>
      <div className="flex justify-center">
        <Image
          className="m-5"
          alt="html"
          src="/html5.svg"
          width={50}
          height={50}
        />
        <Image
          className="m-5"
          alt="css"
          src="/css.svg"
          width={50}
          height={50}
        />
        <Image
          className="m-5"
          alt="javascript"
          src="/javascript.svg"
          width={50}
          height={50}
        />
      </div>
      <div className="flex justify-center">
        <Image
          className="m-5"
          alt="react"
          src="/react.svg"
          width={50}
          height={50}
        />
        <Image
          className="m-5"
          alt="nextjs"
          src="/nextjs.svg"
          width={50}
          height={50}
        />
        <Image
          className="m-5"
          alt="astro"
          src="/astro.svg"
          width={50}
          height={50}
        />
      </div>
      <div className="flex justify-center">
        <Image
          className="m-5"
          alt="nodejs"
          src="/nodejs.svg"
          width={50}
          height={50}
        />
        <Image
          className="m-5"
          alt="express"
          src="/express.svg"
          width={50}
          height={50}
        />
      </div>
    </section>
  );
}
