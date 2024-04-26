import { Link } from "@remix-run/react";
import { Card } from "~/components/molecules/Card/Card";

export default function Services() {
  return (
    <div className="max-w-md my-24">
      <Link to="/services/radio">
        <Card
          imgStyle="w-20 h-20 md:w-32 md:h-32"
          img="/img/services/radio.webp"
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
  );
}
