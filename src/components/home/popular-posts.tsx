'use client'

// import { posts } from "@/lib/placeholder-data";
import { fetcher, fetchUrl } from "@/lib/utils";
import { Icons } from "../icons";
import Link from "next/link";
import useSWR from "swr";
import { PopularPostsSkeleton } from "../skeleton/popular_posts_skeleton";

export default function PopularPosts() {
  const { data, error, isLoading } = useSWR(fetchUrl, fetcher);

  if (error) return <div>Failed to load</div>;

  if (isLoading) return <PopularPostsSkeleton />;

  return (
    <ul className="overflow-auto">
      {data?.map((post: {category: string, title: string, slug: string}) => (
        <Link href={`/blog/${post.category}/${post.slug}`} key={post.title}>
          <li key={post.title} className="flex items-center gap-2 cursor-pointer py-2 group">
            <Icons.arrowRight className="size-6 group-hover:translate-x-1 transition-transform" />
            <p>{post.title}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
}
