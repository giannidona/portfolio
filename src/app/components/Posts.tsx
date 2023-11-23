import { getSortedPostsData } from "../../../lib/posts";
import ListItem from "./ListItem";

export default function Posts() {
  const posts = getSortedPostsData();

  return (
    <section id="chapters" className="pb-12 w-3/5 m-auto">
      <h3 className="text-center text-2xl font-bold mb-10">CHAPTERS</h3>
      {posts.map((post) => (
        <ListItem key={post.id} post={post} />
      ))}
    </section>
  );
}
