import { Link } from "@remix-run/react";
import { Card } from "~/components/molecules/Card/Card";

export default function Services() {
  return (
    <div className="m-auto container h-screen flex justify-center items-center px-4 md:p-0 my-24 md:mt-0">
      <div className="flex flex-wrap gap-4">
        {/* <Link to="/services/radio">
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

        <Link to="/services/radio">
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
            imgStyle="mx-auto h-32  bg-red-500"
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
      </div>
    </div>
  );
}
