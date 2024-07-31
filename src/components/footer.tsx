"use client";

import { POSTS } from "@/lib/constants";
import { Icons } from "./icons";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { createSubscriber } from "@/lib/actions";
import { useFormState } from "react-dom";

export default function Footer() {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(createSubscriber, initialState);
  return (
    <footer className="bg-gray-100 py-8 dark:bg-gray-800 mt-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Icons.logo className="size-6" />
              <span className="text-md font-semibold">Obed.vs</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Mantente al día con las últimas noticias e información de mí blog.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://x.com/obedvs_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="twitter"
              >
                <Icons.twitter className="size-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
              </a>
              <a
                href="https://instagram.com/obed.vs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="instagram"
              >
                <Icons.instagram className="size-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
              </a>
              <a
                href="https://github.com/obedvs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github"
              >
                <Icons.github className="size-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
              </a>
              <a
                href="https://linkedin.com/in/swobedvega"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
              >
                <Icons.linkedin className="size-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
              </a>
              <a
                href="https://obedvega.vercel.app"
                target="_blank"
                // rel="noopener noreferrer"
                aria-label="personal portfolio"
              >
                <Icons.portfolio className="size-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-md font-semibold">Blog</h3>
              <ul className="space-y-2 text-sm">
                {POSTS.map((post) => (
                  <li key={post.title}>
                    <Link
                      href={post.href}
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-md font-semibold">Enlaces</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="mailto:is.paulvega.17102@gmail.com"
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    Contacto
                  </a>
                </li>
                <li>
                  <Link
                    href="/terminos-de-servicio"
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    Términos de Servicio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/politica-de-privacidad"
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sitemap.xml"
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-semibold">Newletter</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Suscríbete a el boletín informativo para recibir actualizaciones
              semanales sobre mis publicaciones.
            </p>
            <form action={dispatch}>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Ingresa tu correo electrónico"
                  className="flex-1"
                  defaultValue=""
                  aria-describedby="email-error"
                />
                <Button>Suscribirse</Button>
              </div>
              <div
                id="email-error"
                aria-label="polite"
                aria-atomic="true"
                className="px-1"
              >
                {state?.errors?.email &&
                  state.errors.email.map((error: string) => (
                    <p key={error} className="text-xs text-red-500">
                      {error}
                    </p>
                  ))}
                {!state?.errors?.email && (
                  <p className="text-xs text-green-500">{state?.message}</p>
                )}
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-xs text-gray-500 dark:text-gray-400 dark:border-gray-700">
          &copy; 2024 Obed.vs. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
