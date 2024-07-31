import { notFound } from "next/navigation";
import { getBlogPosts } from "../utils";
import Link from "next/link";
import Container from "@/components/Container";
import CardCategory from "@/components/CardCategory";
import Header from "@/components/Header";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    category: post.metadata.category,
  }));
}

export function generateMetadata({ params }: { params: { category: string } }) {
  let { category } = params;
  return {
    title: category.toLocaleUpperCase(),
    description: `Publicaciones en la categoría ${category}.`,
  };
}

export default function Page({ params }: { params: { category: string } }) {
  let posts = getBlogPosts().filter(
    (post) => post.metadata.category === params.category
  );

  if (!posts.length) {
    notFound();
  }

  return (
    <>
    <Header>
      <Container>
        <h1 className="title font-semibold text-2xl tracking-wider mt-4 uppercase">{posts[0]?.metadata.category}</h1>
      </Container>
    </Header>
      <Container>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] grid-rows-[repeat(auto-fill,minmax(260px,1fr))] gap-4 mt-10 px-2 md:px-0">
          {posts
            .sort((a, b) => {
              if (
                new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
              ) {
                return -1;
              }
              return 1;
            })
            .map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.metadata.category}/${post.slug}`}
              >
                <CardCategory
                  title={post.metadata.title}
                  summary={post.metadata.summary}
                  date={post.metadata.publishedAt}
                />
              </Link>
            ))}
        </div>
      </Container>
    </>
  );
}
