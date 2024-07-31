import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid place-items-center h-[60dvh]">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">404 - Página No Encontrada</h1>
      <p className="mb-4">La página que buscas no existe o ha sido movida.</p>
      <Link href="/"><span className="text-blue-400 hover:underline">Volver al Inicio</span></Link>
    </section>
  );
}