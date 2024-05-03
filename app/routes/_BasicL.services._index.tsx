import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { LinkButton } from "~/components/atom/LinkButton/LinkButton";
// import { Card } from "~/components/molecules/Card/Card";

export default function Services() {
  return (
    <div className="bg-primary-super-dark">
      <section className="flex flex-col gap-10 justify-center items-center h-[85vh]">
        <h1 className="text-5xl font-semibold text-white text-center">
          NUESTROS SERVICIOS DISPONIBLES
        </h1>

        <Link to="#radio" className="text-secondary underline">
          VER MÁS
        </Link>
      </section>

      {/**============================================
       *               RADIO ONLINE
       *=============================================**/}

      <Link
        to="/services/radio"
        className="h-96 flex flex-wrap bg-white overflow-hidden"
        id="radio"
      >
        <div className="flex-1 flex flex-col gap-4 justify-center items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold text-black text-center">
              Servicio Radio Online
            </h2>
            <ul className="px-8 md:p-0 self-start mt-4 text-black text-sm">
              <li className="list-disc">
                Expresión Creativa y Libertad Editorial
              </li>
              <li className="list-disc">Alcance Global</li>
              <li className="list-disc">
                Interacción en Tiempo Real con la Audiencia
              </li>
              <li className="list-disc">Flexibilidad de Horarios</li>
              <li className="list-disc">Bajo Costo de Inicio</li>
              <li className="list-disc">Oportunidades de Generar dinero</li>
            </ul>
          </div>
          <LinkButton to="/services/radio" variant="secondary">
            ¡Quiero saber más!
          </LinkButton>
        </div>
        <div className="hidden  flex-1 md:flex justify-center items-center h-full custom-before">
          <img
            src="/img/services/radio2.avif"
            alt="Spots publicitarios"
            className="w-full h-full"
          />
        </div>
      </Link>

      {/* <Link
        to="/"
        className=" bg-slate-50 text-black h-96 flex flex-wrap box-border"
      >
        <div className="flex-1 flex justify-center items-center h-full -skew-x-12">
          <img
            src="/img/services/anuncios.jpg"
            alt="Spots publicitarios"
            className="w-full h-full"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-semibold">Spots publicitarios</h2>
        </div>
      </Link> */}

      {/* <div className="flex flex-wrap gap-4">
        <Link to="/services/radio">
          <Card
            imgStyle="mx-auto h-32  bg-red-500"
            img="/img/services/anuncios.jpg"
            alt="Servicio Radio Online"
            title="Spots publicitarios"
            text="Agregamos tus spots a nuestra trasmisión en vivo 24/7"
          >
            <Link to="/services/radio" className="underline text-secondary">
              Ver más
            </Link>
          </Card>
        </Link> */}

      {/* <Link to="/services/radio">
          <Card
            imgStyle="mx-auto h-32  bg-red-500"
            img="/img/services/anuncios.jpg"
            alt="Servicio Radio Online"
            title="Anunció web"
            text="Agregamos tu negocio en nuestra pagina web."
          >
            <Link to="/services/radio" className="underline text-secondary">
              Ver más
            </Link>
          </Card>
        </Link>

        <Link to="/services/radio">
          <Card
            imgStyle="mx-auto h-32"
            img="/img/services/radio2.jpg"
            alt="Servicio Radio Online"
            title="Radio online"
            text="Te ayudamos a crear tu propia estación de radio."
          >
            <Link to="/services/radio" className="underline text-secondary">
              Ver más
            </Link>
          </Card>
        </Link>
      </div> */}
    </div>
  );
}

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Servicios de Radio Chilanga" },
    {
      name: "description",
      content:
        "Tenemos diferentes servicios que te pueden ayudar a impulsar tu negocio.",
    },
  ];
};
