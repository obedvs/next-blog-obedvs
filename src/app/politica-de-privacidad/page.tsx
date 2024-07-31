import Container from "@/components/Container";
import { getPrivacyPolicy } from "../blog/utils";
import { MainNav } from "@/components/main-nav";
import { CustomMDX } from "@/components/mdx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Esta página explica la Política de Privacidad del sitio.",
};

export default function Page() {
  let post = getPrivacyPolicy().find((post) => post.slug === "politica-de-privacidad");

  return (
    <Container>
      <MainNav />
      <article className="prose">
        <CustomMDX source={post?.content} />
      </article>
    </Container>
  );
}