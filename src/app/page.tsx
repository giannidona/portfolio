import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center h-screen justify-center">
        <h1 className="text-5xl font-semibold">Nos vemos en 2025!</h1>
        <div className="flex mt-10 gap-x-5 text-3xl">
          <Link
            className="hover:underline"
            href={"https://www.linkedin.com/in/gianidonato/"}
            target="_blank"
          >
            Linkedin
          </Link>
          <Link
            className="hover:underline"
            href={"https://x.com/giannidona_dev"}
            target="_blank"
          >
            X
          </Link>
          <Link
            className="hover:underline"
            href={"https://github.com/giannidona"}
            target="_blank"
          >
            Github
          </Link>
        </div>
      </div>
    </>
  );
}
