import type { V2_MetaFunction } from "@remix-run/node";
// * Assets
import * as programming from "~/utils/programacion";

// * Custom Components
import { Player } from "~/components/Player/Player";
import { Section } from "~/components/molecules/Section/Section";
import { Host } from "~/components/molecules/Host/Host";
import { InfoCard } from "~/components/molecules/InfoCard/InfoCard";
import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="flex flex-col gap-20">
      {/* ANCHOR HERO */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/img/patrones/cdmex.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              <span className="text-secondary">Radio</span>{" "}
              <span className="text-primary">Chilanga</span>
            </h1>
            <p className="mb-5">
              Sintoniza y viaja en el tiempo con los clásicos que nunca pasan de
              moda. Descubre los sonidos del México eterno, donde la tradición
              musical vive y resuena.
            </p>
            <div className="my-8 md:m-0">
              <Player />
            </div>
          </div>
        </div>
      </div>

      <div className="md:mx-auto container flex flex-col gap-20">
        {/* ANCHOR PROGRAMAS */}
        <section className="mx-6 md:mx-0">
          <Section title="Nuestros programas" subtitle="de lunes a viernes" />

          <div className="flex flex-wrap justify-center md:justify-between mt-12 gap-6">
            {programming.programas.map((programa) => {
              return (
                <Link
                  to={`/program/${programa.id}`}
                  key={programa.nombre}
                  className={`bg-gray-special rounded-sm h-64 w-72 md:w-96 capitalize 
                 cursor-pointer  bg-cover bg-center ${programa.image}`}
                >
                  <div className="h-full flex flex-col justify-end hover:translate-y-9 transition-all ease-in-out">
                    <p className="text-primary-dark bg-white w-fit px-4 py-2">
                      {programa.hora}
                    </p>

                    <p className="bg-gray-800 w-fit text-white p-4">
                      {programa.nombre}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ANCHOR CHAT */}
        <section className="mx-6 md:mx-0">
          <div className="mb-14 flex flex-col items-center justify-center gap-4">
            <h3 className="text-3xl text-center md:text-5xl font-semibold">
              ¡Chatea con nosotros!
            </h3>
          </div>
          <iframe
            title="chat"
            src="https://www3.cbox.ws/box/?boxid=3537278&boxtag=FNY8Ib"
            width="100%"
            height="450"
            allowtransparency="yes"
            allow="autoplay"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            scrolling="auto"
          ></iframe>
        </section>

        {/* ANCHOR ANUNCIATE */}
        {/* <section>
        <h3 className="text-center text-4xl md:text-5xl font-semibold">
          Anunciate con nosotros
        </h3>
      </section> */}

        {/* ANCHOR TEAM */}
        <section className="flex flex-col gap-14 mx-6 md:mx-0">
          <Section
            className="bg-white text-secondary-dark"
            title="Nuestros equipo"
            subtitle="RADIO CHILANGA"
          />

          <div className="flex flex-wrap justify-center gap-8 ju md:justify-between md:gap-4">
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://www.facebook.com/feliciano.veraromero.58"
            >
              <Host
                className="bg-manuel bg-center bg-cover h-60  md:max-w-80 md:h-80 rounded-md"
                title="Locutor"
                subTitle="Manuel Vera"
              />
            </a>

            <Host
              className="bg-mau bg-center bg-cover  h-60 md:max-w-80 md:h-80 rounded-md"
              title="Locutor"
              subTitle="Mauricio Perez"
            />

            <Host
              className="bg-erik bg-center bg-cover  h-60 md:max-w-80 md:h-80 rounded-md"
              title="Ventas"
              subTitle="Erik Ps"
            />

            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://www.tiktok.com/@kikis_404"
            >
              <Host
                className="bg-kikis bg-center bg-cover  h-60 md:max-w-80 md:h-80 rounded-md"
                title="Técnico"
                subTitle="kikis_404"
              />
            </a>
          </div>
        </section>

        {/* ANCHOR Information */}
        <section className="flex flex-wrap justify-center gap-4 my-12 md:justify-between md:my-40">
          <InfoCard title="Radio Chilanga">
            <p>
              Dándole un respiro a los habitantes de la Ciudad de México con
              programas clasicos desde la perspectiva más chilanga.
            </p>
          </InfoCard>

          <InfoCard title="CEO">
            <p>
              Nuestro objetivo es crear contenido digital de calidad. Planeamos
              ser una de las plataformas top de Latinoamericas.
            </p>
          </InfoCard>

          <InfoCard title="¡Síguenos!">
            <a
              className="flex items-center gap-4"
              target={"blank"}
              href="https://www.facebook.com/profile.php?id=100076177904911"
            >
              <img
                className="w-8 h-8"
                src="https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png"
                alt="facebook"
              />
            </a>
          </InfoCard>
        </section>
      </div>
    </div>
  );
}

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Radio Chilanga" },
    {
      name: "description",
      content: "Radio Mexican, musica variada con los mejores locutores.",
    },
  ];
};
