"use client";

import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="w-full bg-ecoclima-grey py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          Pásate al autoconsumo solar
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="space-y-4">
            <ul className="space-y-3">
              <li>
                <Link href="/sobre-nosotros" className="text-white hover:text-ecoclima-pink transition-colors">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white hover:text-ecoclima-pink transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/unete" className="text-white hover:text-ecoclima-pink transition-colors">
                  Cámbiate a ecoclima
                </Link>
              </li>
              <li>
                <Link href="/precio-luz-hoy" className="text-white hover:text-ecoclima-pink transition-colors">
                  Precio de luz hoy
                </Link>
              </li>
              <li>
                <Link href="/ayuda-y-preguntas-frecuentes" className="text-white hover:text-ecoclima-pink transition-colors">
                  Ayuda & FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <ul className="space-y-3">
              <li>
                <Link href="https://jobs.lever.co/ecoclima?department=ecoclima%20Energy%20Spain%20%F0%9F%87%AA%F0%9F%87%B8" className="text-white hover:text-ecoclima-pink transition-colors">
                  Trabaja con nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-white hover:text-ecoclima-pink transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/politicas" className="text-white hover:text-ecoclima-pink transition-colors">
                  Nuestras políticas
                </Link>
              </li>
              <li>
                <Link href="/reclamaciones" className="text-white hover:text-ecoclima-pink transition-colors">
                  Reclamaciones
                </Link>
              </li>
              <li>
                <Link href="/nuestra-energia-verde" className="text-white hover:text-ecoclima-pink transition-colors">
                  Nuestra energía verde
                </Link>
              </li>
              <li>
                <Link href="/solar" className="text-white hover:text-ecoclima-pink transition-colors">
                  Solar
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/ecoclimaES" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white hover:text-ecoclima-pink">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link href="https://twitter.com/ecoclimaES" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white hover:text-ecoclima-pink">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link href="https://www.instagram.com/ecoclimaes/" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white hover:text-ecoclima-pink">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </Link>
            </div>

            <Separator className="bg-ecoclima-grey-light" />

            <div className="space-y-3">
              <h4 className="text-white text-sm font-medium">Sitios internacionales</h4>
              <ul className="space-y-1">
                <li>
                  <Link href="https://eco.clima/" className="text-white hover:text-ecoclima-pink transition-colors text-sm">
                   EcoClima GB
                  </Link>
                </li>
                <li>
                  <Link href="https://ecoclima.de/" className="text-white hover:text-ecoclima-pink transition-colors text-sm">
                    EcoClima DE
                  </Link>
                </li>
                <li>
                  <Link href="https://ecoclima.fr/" className="text-white hover:text-ecoclima-pink transition-colors text-sm">
                   EcoClima FR
                  </Link>
                </li>
                <li>
                  <Link href="https://ecoclima.it/" className="text-white hover:text-ecoclima-pink transition-colors text-sm">
                   EcoClima IT
                  </Link>
                </li>
                <li>
                  <Link href="https://ecoclima.co.jp/" className="text-white hover:text-ecoclima-pink transition-colors text-sm">
                   EcoClima JP
                  </Link>
                </li>
                <li>
                  <Link href="https://ecoclima.nz/" className="text-white hover:text-ecoclima-pink transition-colors text-sm">
                    EcoClima NZ
                  </Link>
                </li>
                <li>
                  <Link href="https://ecoclima.com/" className="text-white hover:text-ecoclima-pink transition-colors text-sm">
                    EcoClima USA
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex space-x-4">
              <Link href="https://apps.apple.com/gb/app/ecoclima/id1439534393" aria-label="App Store">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white hover:text-ecoclima-pink">
                  <path d="M12 19c-2.3 0-6.4-.2-8.1-.6-.7-.2-1.2-.7-1.4-1.4-.3-1.1-.5-3.4-.5-5s.2-3.9.5-5c.2-.7.7-1.2 1.4-1.4C5.6 5.2 9.7 5 12 5s6.4.2 8.1.6c.7.2 1.2.7 1.4 1.4.3 1.1.5 3.4.5 5s-.2 3.9-.5 5c-.2.7-.7 1.2-1.4 1.4-1.7.4-5.8.6-8.1.6 0 0 0 0 0 0z" />
                  <polygon points="10 15 15 12 10 9 10 15" />
                </svg>
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=ecoclima.ecoclima.android&hl=en_GB&gl=US" aria-label="Google Play">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white hover:text-ecoclima-pink">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <Separator className="bg-ecoclima-grey-light mb-8" />

        <div className="text-gray-400 text-sm">
          <p className="mb-4">
            EcoClima España, S.L.U es una compañía inscrita en el Registro Mercantil de Valencia (España) con fecha 14 de
            marzo de 2019, al tomo 10642, folio 25, hoja V-186743, inscripción 1 y número de identificación fiscal B40563082.
          </p>
          <p>
            Oficina: Calle Pintor Sorolla, 5 - puerta 2 (46002 - Valencia)
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link href="/politicas/politica-de-cookies" className="text-ecoclima-pink hover:underline">
            Política de cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}
