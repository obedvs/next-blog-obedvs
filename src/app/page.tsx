import Container from "@/components/Container";
import LatestPost from "@/components/home/latest-post";
import PopularPosts from "@/components/home/popular-posts";
import TopCategories from "@/components/home/top-categories";
import { MainNav } from "@/components/main-nav";

export default function Home() {
  return (
    <Container>
      <MainNav />
      <main className="flex flex-col items-center md:items-start justify-evenly mt-16 md:flex-row">
        <LatestPost />
        <aside className="md:h-screen min-w-[300px] max-w-[420px] w-full">
          <div>
            <h1 className="font-bold mb-4">TOP CATEGORIES</h1>
            <TopCategories />
          </div>
          <div className="mt-10 sticky top-10">
            <h1 className="font-bold mb-4">POPULAR POSTS</h1>
            <PopularPosts />
          </div>
        </aside>
      </main>
    </Container>
  );
}
