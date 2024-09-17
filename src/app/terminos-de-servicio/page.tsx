import Container from "@/components/Container";
import { formatDate, getTermsOfServices } from "../blog/utils";
import { MainNav } from "@/components/main-nav";
import { CustomMDX } from "@/components/mdx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Servicio",
  description: "Esta página explica los términos de uso del sitio.",
};

export default function Page() {
  let post = getTermsOfServices().find(
    (post) => post.slug === "terminos-de-servicio"
  );

  return (
    <Container>
      <MainNav />
      <article className="prose">
        <p>
          Última actualizacion: {formatDate(post?.metadata.publishedAt, false)}
        </p>
        <CustomMDX source={post?.content} />
      </article>
    </Container>
  );
}
