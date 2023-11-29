import Link from "next/link";

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, summary, date } = post;
  return (
    <div>
      <Link
        className="hover:text-black/70 dark:hover:text-white"
        href={`/posts/${id}`}
      >
        <div
          id="card"
          className="border-b-4 border-white mb-5 flex hover:bg-neutral-700 ease-out duration-300 "
        >
          <div className="p-2">
            <p className="font-bold mb-1">{title}</p>
            <p className="text-stone-500 italic mb-1">{summary}</p>
            <p className="">{date}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
