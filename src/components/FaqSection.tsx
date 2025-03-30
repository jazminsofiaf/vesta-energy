"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    id: "item-1",
    question: "¿Cómo puedo contratar Vesta energy y ahorrar en mi factura de luz?",
    answer: (
      <>
        <p className="mb-4">
          Instalamos tus placas solares sin inversión inicial
        </p>
        <p className="mb-4">
          Acepta las condiciones y firma tu contrato para hacer la instalación
        </p>
        <p>
          Tu especialista solar te aplicará el precio especial si te pasas a Vesta
        </p>
        <p className="mt-4">
          Si ya tienes tu instalación y nos contratas puedes vender el excedente de energía automaticamente utilizando nuestro dispositivo IoT.
        </p>
      </>
    ),
  },
  {
    id: "item-2",
    question: "¿Cómo puedo pagar mis placas solares?",
    answer: (
      <>
        <p className="mb-4">
          Las placas solares se arriendan, no se compran, el precio está incluido en tu tarifa mensual de subscripción.
        </p>
        <p className="mb-4">
          <strong>Financiado:</strong> Con Vesta energy conseguimos que tu ahorro mensual sea mayor que la cuota que pagas para que la instalación no te cueste nada.
        </p>
      </>
    ),
  },
  {
    id: "item-3",
    question: "¿Cuánto tardáis en instalar mis placas?",
    answer: (
      <p>
        Depende de tu Ayuntamiento y de tu Comunidad Autónoma. 
        Normalmente tardamos unos 30 días laborables desde que firmas tu contrato hasta que tienes las placas solares en tu tejado, aunque por supuesto podemos amoldarnos a ti. 
        En la Comunidad de Madrid, por ejemplo, tardamos un poco más ya que los trámites con la administración pública se extienden más. 
        Hay algunos municipios en los que hace falta licencia de obra y eso puede hacer que tardemos más. 
        Una vez agendada la instalación, nuestros técnicos solo estarán uno o dos días en tu casa.
      </p>
    ),
  },
  {
    id: "item-4",
    question: "¿Quién instala mis placas?",
    answer: (
      <p>
        En Vesta-energy queremos dar un servicio de 5 estrellas de principio a fin del proceso.
        Por eso formamos a nuestro propio equipo de ingenieros e instaladores.
        De esta manera nos aseguramos de tener profesionales que se esfuercen por darte el servicio y la mejor calidad posible.
      </p>
    ),
  },
  {
    id: "item-6",
    question: "¿Qué garantía tienen mis placas?",
    answer: (
      <>
        <p>Cada material tiene su propia garantía:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Placas solares: 25 años de garantía y 25 años de garantía de producción al 80%.</li>
          <li>Inversor: 10 años de garantía</li>
          <li>Batería: 10 años de garantía</li>
          <li>Garantía de instalación (cualquier problema que pueda surgir en tu casa a causa de la instalación como tal): 3 años</li>
        </ul>
      </>
    ),
  },
  {
    id: "item-7",
    question: "¿Instaláis placas solares en toda España?",
    answer: (
      <p>
        Instalamos placas solares en todo el territorio peninsular. 
        En Canarias, Baleares, Ceuta y Melilla estaremos disponibles en unos meses.
      </p>
    ),
  },
  {
    id: "item-8",
    question: "¿Cuándo empezarán a generar energía mis placas solares?",
    answer: (
      <p>
        Tu instalación de placas solares empieza a generar energía en el momento exacto en el que la terminamos.
         Lo único que requerirá un trámite extra serán los excedentes.
      </p>
    ),
  },
  {
    id: "item-9",
    question: "¿Cómo puedo recomendar a un amigo y recibir mi premio?",
    answer: (
      <p>
        Una vez eres cliente de Vesta-energy(sea porque tienes la luz con nosotros o porque has hecho una instalación solar) recibirás un email con tu enlace de recomendación. 
        Solo tendrás que enviar ese enlace a quien quieras y podrá dejar sus datos para que le atendamos. 
        Una vez hecha su instalación, ambos tendréis vuestro premio. 
        Si no encuentras el enlace, también puedes llamarnos al 900 759 673 y haremos todo esto por ti.
      </p>
    ),
  },
  {
    id: "item-10",
    question: "¿Qué incluye vuestra oferta?",
    answer: (
      <p>
        Nuestra oferta incluye los materiales (arrendamiento de placas solares y aires acondiconados), mano de obra, instalación, transporte, línea de vida provisional y cualquier coste de medio de elevación (grúas) o cableado extra que se necesite. 
        De esta manera, la oferta que te damos al principio es 100% transparente y solo hay que añadirle las tasas de tu ayuntamiento, que no las podemos incluir porque varían mucho en función de donde vivas y otros factores.
      </p>
    ),
  },
];

export default function FaqSection() {
  return (
    <section className="w-full py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          Preguntas frecuentes
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="border-b border-vesta-purple-light">
              <AccordionTrigger className="text-white text-left py-4 hover:text-vesta-lavender">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-200 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
