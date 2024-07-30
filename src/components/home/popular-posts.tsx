import { posts } from "@/lib/placeholder-data";
import { Icons } from "../icons";

export default function PopularPosts() {
  return (
    <ul className="overflow-auto">
      {posts.map((post) => (
        <li key={post.title} className="flex items-center gap-2 cursor-pointer py-2 group">
          <Icons.arrowRight className="size-6 group-hover:translate-x-1 transition-transform" />
          <p>{post.title}</p>
        </li>
      ))}
    </ul>
  );
}
