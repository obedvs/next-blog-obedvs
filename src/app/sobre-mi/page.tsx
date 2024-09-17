import Container from "@/components/Container";
import Header from "@/components/Header";
import { MainNav } from "@/components/main-nav";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sobre Mi",
  description: "Información sobre mí.",
};

export default async function AboutPage() {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800">
        <Container>
          <MainNav />
          <Header>
            <h1 className="title font-semibold text-2xl tracking-tighter mt-4 capitalize">
              Sobre Mi - Paul Obed Vega Soto
            </h1>
          </Header>
        </Container>
      </div>
      <div className="container max-w-6xl py-6 lg:py-10">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="min-w-48 max-w-48 flex flex-col gap-2">
            <Image
              src="/photo.jpeg"
              alt="Paul Obed Vega Soto"
              width={200}
              height={200}
              className="w-full h-auto aspect-square object-cover rounded-md"
            />
            <p className="text-muted-foreground text-center break-words">
              Desarrollador Full Stack
              <br />
              Ingeniero en Software
            </p>
          </div>
          <div className="text-muted-foreground text-lg space-y-4">
            <p>
              Desarrollador Web Full Stack con más de 3 años de experiencia en
              el desarrollo de aplicaciones web, especializado en
              JavaScript/TypeScript, React, Next.js y Node.js para entregar
              soluciones que optimizan el rendimiento y mejoran la experiencia
              del usuario.
            </p>
            <p>
              Enfocado en el desarrollo frontend con React y Next.js, y en
              gestión de backend con Node.js, MySQL, MongoDB, SQL Server y
              PostgreSQL. Además de habilidades en la optimización de SEO y
              experiencia en la implementación de prácticas de desarrollo ágil
              (Scrum).
            </p>
            <p>
              He trabajado en proyectos en los que se ha mejorado el rendimiento
              y la experiencia del usuario en más de un 30%, aumentando la
              eficiencia operativa de estas empresas.
            </p>
            <p>
              Actualmente, estoy enfocado en el desarrollo de proyectos
              personales, que buscan apoyar a mi comunidad, aplicando mi
              expertise en desarrollo web para crear soluciones tecnológicas que
              abordan problemas local y generan oportunidades de crecimiento.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
