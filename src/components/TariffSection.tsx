"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function TariffSection() {
  return (
    <section className="w-full py-16 px-4 md:px-8" id="tariff">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold mb-3 text-center text-ecoclima-pink">
          ¿Y si instalas placas solares y vendes el excedente de energía?
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          Descubre nuestro sistema de climatización manejo de energía eficiente
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
          {/* Tarifa Energía eficiente */}
          <Card className="bg-ecoclima-purple border-ecoclima-purple-light rounded-lg overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-white">Tarifa eficiente</CardTitle>
              <CardDescription className="text-ecoclima-pink text-lg">
               Ideal si buscan ahorro sin preocuparse por detalles técnicos
              </CardDescription>
            </CardHeader>
            <div className="mt-8 flex justify-center">
                <Image
                  src="tarifa1.png"
                  alt="Imagen ecoclima"
                  width={500}
                  height={500}
                  className="h-64 w-auto rounded-xl object-cover"
                />
              </div>
            <CardContent className="pt-4">
              <ul className="space-y-4">
                <li className="flex items-start text-white">
                  <span className="inline-block w-5 h-5 mr-2 mt-1 rounded-full bg-ecoclima-pink flex-shrink-0" />
                  <span>Instala tu termostato inteligente para el manejo eficiente de la energía del hogar</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="inline-block w-5 h-5 mr-2 mt-1 rounded-full bg-ecoclima-pink flex-shrink-0" />
                  <span>Ahorra en tu factura de luz y olvídate de imprevistos</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="inline-block w-5 h-5 mr-2 mt-1 rounded-full bg-ecoclima-pink flex-shrink-0" />
                  <span>250 kWh/mes de electricidad</span>
                </li>   
              </ul>
              <div className="mt-6 text-center">
                <p className="text-2xl font-bold text-white">Por 49.99€ al mes</p>
              </div>
            </CardContent>
            <CardFooter className="pt-4 flex justify-center">
              <a
                href="https://ecoclima.es/precios/tarifa-solar"
                className="inline-block bg-ecoclima-pink hover:bg-ecoclima-grey-light text-white font-medium px-8 py-3 rounded-full text-lg transition-colors"
              >
                Lo quiero
              </a>
            </CardFooter>
          </Card>

          {/* Tarifa solar */}
          <Card className="bg-ecoclima-purple border-ecoclima-purple-light rounded-lg overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-white">Tarifa solar</CardTitle>
              <CardDescription className="text-ecoclima-pink text-lg">
                Ideal para los que buscan sostenibilidad ahorro y eficiencia
              </CardDescription>
            </CardHeader>
            <div className="mt-8 flex justify-center">
                    <Image
                    src="tarifa2.png"
                    alt="Imagen ecoclima"
                    width={500}
                    height={500}
                    className="h-64 w-auto rounded-xl object-cover"
                    />
            </div>
            <CardContent className="pt-4">
              <ul className="space-y-4">
                <li className="flex items-start text-white">
                  <span className="inline-block w-5 h-5 mr-2 mt-1 rounded-full bg-ecoclima-pink flex-shrink-0" />
                  <span>Instala tu termostato inteligente para el manejo eficiente de la energía del hogar</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="inline-block w-5 h-5 mr-2 mt-1 rounded-full bg-ecoclima-pink flex-shrink-0" />
                  <span>Ahorra en tu factura de luz y olvídate de imprevistos</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="inline-block w-5 h-5 mr-2 mt-1 rounded-full  bg-ecoclima-pink flex-shrink-0" />
                  <span>Instala placas solares y consume energía 100% sostenible</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="inline-block w-5 h-5 mr-2 mt-1 rounded-full bg-ecoclima-pink flex-shrink-0" />
                  <span>Deja que el termostato inteligente venda el excedente de energía por tí</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="inline-block w-5 h-5 mr-2 mt-1 rounded-full bg-ecoclima-pink flex-shrink-0" />
                  <span>Aporta enrgía sostenible a la comunidad y recibe ingresos pasivos</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="inline-block w-5 h-5 mr-2 mt-1 rounded-full bg-ecoclima-pink flex-shrink-0" />
                  <span>500 kWh/mes de electricidad</span>
                </li>
              </ul>
              <div className="mt-6 text-center">
                <p className="text-2xl font-bold text-white">Por 69.99€ al mes</p>
              </div>
            </CardContent>
            <CardFooter className="pt-4 flex justify-center">
              <a
                href="https://ecoclimaenergy.es/ecoclimacare-mantenimiento-placas-solares"
                className="inline-block bg-ecoclima-pink hover:bg-ecoclima-grey-light text-white font-medium px-8 py-3 rounded-full text-lg transition-colors"
              >
                Lo quiero
              </a>
            </CardFooter>
          </Card>

          {/* Tarifa premium */}
          <Card className="bg-ecoclima-purple border-ecoclima-purple-light rounded-lg overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-white">Tarifa premium</CardTitle>
              <CardDescription className="text-ecoclima-pink text-lg">
                Ideal para los que buscan disfrutar de una climatización perfecta
              </CardDescription>
            </CardHeader>
            <div className="mt-8 flex justify-center">
              <Image
              src="tarifa3.png"
              alt="Imagen ecoclima"
              width={500}
              height={500}
              className="h-64 w-auto rounded-xl object-cover"
              />
            </div>
            <CardContent className="pt-4">
              <ul className="space-y-4">
              <li className="flex items-start text-white">
                  <span className="inline-block w-5 h-5 mr-2 mt-1 rounded-full bg-ecoclima-pink flex-shrink-0" />
                  <span>Instala tu termostato inteligente para el manejo eficiente de la energía del hogar</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="inline-block w-5 h-5 mr-2 mt-1 rounded-full bg-ecoclima-pink flex-shrink-0" />
                  <span>Ahorra en tu factura de luz y olvídate de imprevistos</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="inline-block w-5 h-5 mr-2 mt-1 rounded-full  bg-ecoclima-pink flex-shrink-0" />
                  <span>Instala placas solares y consume energía 100% sostenible</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="inline-block w-5 h-5 mr-2 mt-1 rounded-full bg-ecoclima-pink flex-shrink-0" />
                  <span>Deja que el termostato inteligente venda el excedente de energía por tí</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="inline-block w-5 h-5 mr-2 mt-1 rounded-full bg-ecoclima-pink flex-shrink-0" />
                  <span>Aporta enrgía sostenible a la comunidad y recibe ingresos pasivos</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="inline-block w-5 h-5 mr-2 mt-1 rounded-full  bg-ecoclima-pink flex-shrink-0" />
                  <span>No te preocupes por nada y disfruta de un hogar con climatización perfecta durante todo el año</span>
                </li>
                <li className="flex items-start text-white">
                  <span className="inline-block w-5 h-5 mr-2 mt-1 rounded-full  bg-ecoclima-pink flex-shrink-0" />
                  <span>Consumo ilimitado de electricidad</span>
                </li>
              </ul>
              <div className="mt-6 text-center">
                <p className="text-2xl font-bold text-white">Por 129.99€ al mes</p>
              </div>
            </CardContent>
            <CardFooter className="pt-4 flex justify-center">
              <a
                href="https://ecoclimaenergy.es/ecoclimacare-mantenimiento-placas-solares"
                className="inline-block bg-ecoclima-pink hover:bg-ecoclima-grey-light text-white font-medium px-8 py-3 rounded-full text-lg transition-colors"
              >
                Lo quiero
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
                <Image
                  src="eco-clima-slogan.png"
                  alt="Imagen ecoclima"
                  width={500}
                  height={500}
                  className="h-64 w-auto rounded-xl object-cover"
                />
        </div>
    </section>
  );
}
