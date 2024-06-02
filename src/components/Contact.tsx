import Link from "next/link";

export const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <h3 className="text-xl font-bold">Contact me 📩</h3>
      <div className="py-5">
        <p className="font-light text-white/50">
          You can discover more about my professional endeavors on{" "}
          <Link
            className="underline text-white"
            href="https://www.linkedin.com/in/gianidonato/"
            target="_blank"
          >
            Linkedin
          </Link>{" "}
          and{" "}
          <Link
            className="underline text-white"
            href="https://x.com/giannidona_dev"
            target="_blank"
          >
            X/Twitter
          </Link>
          , and explore my coding projects on{" "}
          <Link
            className="underline text-white"
            href="https://github.com/giannidona"
            target="_blank"
          >
            Github
          </Link>
          . Feel free to reach out to me via{" "}
          <Link
            className="underline text-white"
            href="mailto:gianlucadonato2005@gmail.com"
            target="_blank"
          >
            Email
          </Link>{" "}
          for any inquiries or collaborations.
        </p>
      </div>
    </section>
  );
};
