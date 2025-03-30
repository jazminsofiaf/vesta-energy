"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function TariffSection() {
  return (
    <section className="w-full py-16 px-4 md:px-8" id="tariff">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold mb-3 text-center text-vesta-lavender">
          ¿Y instalas placas solares y vendes el excedente de energía?
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          Descubre nuestra tarifa de climatización inteligente y manejo eficiente de la energía
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Tarifa Solar Card */}
          <Card className="bg-vesta-purple border-vesta-purple-light rounded-lg overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-white">Tarifa Energía eficiente</CardTitle>
              <CardDescription className="text-vesta-lavender text-lg">
                Instala tu termostato inteligente para el manejo eficiente de la energía del hogar
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-4">
                <li className="flex items-start text-white">
                  <span className="inline-block w-5 h-5 mr-2 mt-1 rounded-full border-2 border-vesta-pink flex-shrink-0" />
                  <span>Ahorra en tu factura de luz y olvídate de imprevistos</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="inline-block w-5 h-5 mr-2 mt-1 rounded-full border-2 border-vesta-pink flex-shrink-0" />
                  <span>Deja que el termostato inteligente se encargue de la climatización del hogar</span>
                </li>
              </ul>
              <div className="mt-8 flex justify-center">
                <Image
                  src="tarifa1.png"
                  alt="Imagen Vesta Energy"
                  width={500}
                  height={500}
                  className="h-64 w-auto rounded-xl object-cover"
                />
              </div>
              <div className="mt-6 text-center">
                <p className="text-2xl font-bold text-white">Por 50€ al mes</p>
              </div>
            </CardContent>
            <CardFooter className="pt-4 flex justify-center">
              <a
                href="https://vestaenergy.es/precios/tarifa-solar"
                className="inline-block bg-vesta-pink hover:bg-vesta-pink-light text-white font-medium px-8 py-3 rounded-full text-lg transition-colors"
              >
                Lo quiero
              </a>
            </CardFooter>
          </Card>

          {/* OctoCare Card */}
          <Card className="bg-vesta-purple border-vesta-purple-light rounded-lg overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-white">Tarifa solar</CardTitle>
              <CardDescription className="text-vesta-lavender text-lg">
                ¡Conecta tu termostato inteligente a tus placas solaresy vende el excedente!
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-4">
                <li className="flex items-start text-white">
                  <span className="inline-block w-5 h-5 mr-2 mt-1 rounded-full border-2 border-vesta-pink flex-shrink-0" />
                  <span>Ahorra en tu factura de luz y olvídate de imprevistos</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="inline-block w-5 h-5 mr-2 mt-1 rounded-full border-2 border-vesta-pink flex-shrink-0" />
                  <span>Deja que el termostato inteligente venda el excedente de energía</span>
                </li>
              </ul>
                <div className="mt-8 flex justify-center">
                    <Image
                    src="tarifa2.png"
                    alt="Imagen Vesta Energy"
                    width={500}
                    height={500}
                    className="h-64 w-auto rounded-xl object-cover"
                    />
                </div>
              <div className="mt-6 text-center">
                <p className="text-2xl font-bold text-white">Por 70€ al mes</p>
              </div>
            </CardContent>
            <CardFooter className="pt-4 flex justify-center">
              <a
                href="https://vestaenergy.es/vestacare-mantenimiento-placas-solares"
                className="inline-block bg-vesta-pink hover:bg-vesta-pink-light text-white font-medium px-8 py-3 rounded-full text-lg transition-colors"
              >
                Lo quiero
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
