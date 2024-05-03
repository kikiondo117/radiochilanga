import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { SmallServiceCard } from "~/components/molecules/ServiceCard/SmallServiceCard";
import { Footer } from "~/components/organisms/Footer/Footer";

export default function PlansPage() {
  const handleClick = (plan?: number) => {
    let url;
    if (plan) {
      url = `https://api.whatsapp.com/send?phone=+523122709176&text=${encodeURIComponent(
        `Me interesa el plan ${plan}!`
      )}`;
    } else {
      url = `https://api.whatsapp.com/send?phone=+523122709176&text=${encodeURIComponent(
        `Me interesa tener más información!`
      )}`;
    }
    window.open(url, "_blank");
  };

  const style = {
    backgroundImage: `radial-gradient(100% 100% at -40% 130%, rgba(220,0,130, 0.6) 0, #fcfdfd 100%), linear-gradient(180deg, rgba(245, 245, 245, 0) 0, #edf6ff 67.19%)`,
  };

  return (
    <div className="relative">
      {/* <Link to="/services/radio" className="absolute left-4 top-6 underline">
        Regresar
      </Link> */}

      <div className="mx-auto flex flex-col gap-20 pb-20" style={style}>
        <main className="flex flex-col items-center gap-4">
          <h1 className="text-4xl md:text-5xl text-center pb-8 font-semibold  border-solid px-4">
            Elija un plan para comenzar
          </h1>

          <p className="flex flex-wrap justify-center md:gap-2 gap-0">
            ¿Necesitas ayuda para elegir?{" "}
            <button
              className="underline text-blue-600"
              onClick={() => handleClick()}
            >
              Solicitar contacto de ventas
            </button>
          </p>
        </main>

        <section className="flex flex-wrap gap-4 justify-center  p-4">
          <SmallServiceCard
            price="249"
            title="Basico"
            content="Ideal para principiantes o profesionales que inician un proyecto de radio en línea"
            onClick={() => handleClick(249)}
          />

          <SmallServiceCard
            price="549"
            title="Intermedio"
            content="Perfecto para emisoras que quieren llegar a su audiencia en cualquier parte del mundo"
            onClick={() => handleClick(549)}
          />

          <SmallServiceCard
            price="859"
            title="Experimentado"
            content="Diseñado para emisoras que necesitan mayor calidad de audio y rendimiento mensual"
            onClick={() => handleClick(859)}
          />
        </section>
      </div>
    </div>
  );
}

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Planes de Radio online" },
    {
      name: "description",
      content:
        "Estos son los planes que manejamos para que puedas crear tu propia radio online",
    },
  ];
};
