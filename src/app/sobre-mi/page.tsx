import Container from "@/components/Container";
import Header from "@/components/Header";
import { MainNav } from "@/components/main-nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Mi",
  description: "Información sobre mi",
};

export default async function AboutPage() {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800">
        <Container>
          <MainNav />
          <Header>
            <h1 className="title font-semibold text-2xl tracking-tighter mt-4 capitalize">
              Sobre Mi
            </h1>
          </Header>
        </Container>
      </div>
      <div className="container max-w-6xl py-6 lg:py-10">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="min-w-48 max-w-48 flex flex-col gap-2">
            <p className="text-muted-foreground text-center break-words">
              Ingeniero en Software
            </p>
          </div>
          <p className="text-muted-foreground text-lg py-4">
            I am a creative, ambitious, and motivated person,
            with skills and experience in software development,
            adapting to different methodologies, technologies, and development environments.
            In addition, I manage multiple activities appropriately and competently,
            focusing on achieving established goals.
          </p>
        </div>
      </div>
    </>
  );
}