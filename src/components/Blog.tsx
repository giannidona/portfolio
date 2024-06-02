import Link from "next/link";

export const Blog = () => {
  return (
    <section id="blog" className="py-5">
      <h3 className="text-xl font-bold">My Blog 📚</h3>
      <p className="font-thin text-sm">
        I talk about topics related to programming (in spanish).
      </p>
      <div className="py-5">
        <div className="mb-3">
          <Link
            href="https://giannidona-newsletter.netlify.app/posts/post-3/"
            target="_blank"
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold">The perfect does not exist.</p>
              <p className="font-light text-sm">April 4, 2024</p>
            </div>
          </Link>
        </div>
        <div className="mb-3">
          <Link
            href="https://giannidona-newsletter.netlify.app/posts/post-6/"
            target="_blank"
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold">My stack for this year.</p>
              <p className="font-light text-sm">May 10, 2024</p>
            </div>
          </Link>
        </div>
        <div className="mb-3">
          <Link
            href="https://giannidona-newsletter.netlify.app/posts/post-8/"
            target="_blank"
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold">Consistency.</p>
              <p className="font-light text-sm">May 24, 2024</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
