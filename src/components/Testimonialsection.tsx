"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Jazmin",
    text: "En 3 semanas, todo gestionado por Juli, la instalación de placas por Fernando y Pau, genial, agradecido, profesionales, atentos y responden sin evasivas.",
    stars: 5,
  },
  {
    id: 2,
    name: "Alicia",
    text: "Me realizaron la instalación de las placas solares Oscar y Fernando, y fue de maravilla. Muy profesionales y muy bien trabajando en equipo. No puedo estar más agradecido.",
    stars: 5,
  },
  {
    id: 3,
    name: "Eric",
    text: "Hasta la fecha todo de 10. Muy atentos y comunicativos... Y los precios, espectaculares :-)",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full py-16 px-4 md:px-8" id="reviews">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold mb-3 text-center text-ecoclima-pink">
          ¿Por qué con EcoClima?
        </h3>

        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          Lo que dicen nuestros clientes
        </h2>

        <div className="text-center mb-8">
          <p className="text-xl text-white">Los clientes opinan sobre EcoClima</p>
        </div>

        <div className="mb-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Opiniones en Google</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-ecoclima-purple border-ecoclima-pink rounded-lg overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <blockquote className="text-white text-lg mb-6 flex-grow">
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>
                  <div className="mt-auto">
                    <div className="font-bold text-white mb-3">{testimonial.name}</div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <div key={`${testimonial.id}-star-${i}`} className="w-5 h-5 mr-1">
                          <Image
                            src={i < testimonial.stars
                              ? "https://ext.same-assets.com/979201687/1313525581.svg"
                              : "https://ext.same-assets.com/979201687/3682559272.svg"}
                            alt="Star rating"
                            width={20}
                            height={20}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}