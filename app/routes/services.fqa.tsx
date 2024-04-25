import { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Fqa } from "~/components/organisms/Fqa/Fqa";

export default function FqaPage() {
  return (
    <main className="relative bg-white p-20">
      <Link to="/services" className="absolute left-4 top-6 underline">
        Regresar
      </Link>
      <Fqa>
        <div className="collapse collapse-plus border-2 border-solid border-gray-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            ¿Cómo puedo generar dinero?
          </div>
          <ul className="collapse-content">
            <li className="ml-4 list-disc">
              Puedes vender espacios publicitarios en tu radio,
            </li>
            <li className="ml-4 list-disc">
              Puedes rentarle horas a otros locutores para que trasmitan en tu
              radio.
            </li>
            <li className="ml-4 list-disc">
              Puedes promocionar pequeños negocios además de agregar su marca en
              un apartado de publicidad.
            </li>
            <li className="ml-4 list-disc">¡Los limites tu los pones!</li>
          </ul>
        </div>

        <div className="collapse collapse-plus border-2 border-solid border-gray-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Estoy empezando ahora. ¿Podré crear una radio en línea?
          </div>
          <p className="collapse-content">
            Sí. Ofrecemos todo el soporte y apoyo necesario para aclarar tus
            dudas. Simplemente mande un mensaje a nuestro whatsapp. Respondemos
            en menos de 24 horas hábiles (y la mayoría de las veces, en menos de
            2 horas).
          </p>
        </div>
      </Fqa>
    </main>
  );
}

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Preguntas frecuentes" },
    {
      name: "description",
      content: "Preguntas frecuentes de nuestro servicio de radio online",
    },
  ];
};
