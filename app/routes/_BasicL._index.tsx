import type { V2_MetaFunction } from "@remix-run/node";

// * Assets
import * as programming from "~/utils/programacion";

// * Custom Components
import { Player } from "~/components/Player/Player";
import { Section } from "~/components/Section/Section";
import { Host } from "~/components/Host/Host";
import { InfoCard } from "~/components/molecules/InfoCard/InfoCard";
import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="flex flex-col gap-20 mt-20">
      <section id="play" className="flex flex-col items-center md:gap-8">
        <div className="bg-black rounded-full">
          <img
            src="/img/logo/logo.png"
            alt=""
            className="h-40 md:w-64 md:h-64"
          />
        </div>

        <div className="my-8 md:m-0">
          <Player />
        </div>
      </section>

      {/* ANCHOR Programas */}
      <section>
        <Section title="Nuestros programas" subtitle="de lunes a viernes" />

        <div className="flex flex-wrap justify-center md:justify-between mt-12 gap-6">
          {programming.programas.map((programa) => {
            return (
              <Link
                to={`/program/${programa.id}`}
                key={programa.locutor}
                className={`bg-gray-special rounded-sm flex-1 min-w-[300px] h-64 md:w-[25em] capitalize 
                 cursor-pointer  bg-cover bg-center ${programa.image}`}
              >
                <div className="h-full flex flex-col justify-end hover:translate-y-9 transition-all ease-in-out">
                  <p className="text-red-500 bg-white w-fit px-4 py-2">
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

      {/* ANCHOR Locutores */}
      <section>
        <Section
          className="bg-white text-secondary"
          title="Nuestros Locutores"
          subtitle="EQUIPO DE RADIO CHILANGA"
        />

        <div className="flex flex-wrap justify-center gap-8  md:justify-between md:gap-0  mt-16">
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://www.facebook.com/feliciano.veraromero.58"
          >
            <Host
              className="bg-manuel bg-center bg-cover"
              title="Gracias por el apoyo!"
              subTitle="Manuel Vera"
            />
          </a>

          <Host
            className="bg-mau bg-center bg-cover"
            title=""
            subTitle="Mauricio Perez"
          />

          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://www.tiktok.com/@kikis_404"
          >
            <Host
              className="bg-kikis bg-center bg-cover"
              title="Sin miedo al exito!"
              subTitle="kikis_404"
            />
          </a>
        </div>
      </section>

      <section>
        <div className="mb-14 flex flex-col items-center justify-center gap-4">
          <h3 className=" text-4xl md:text-5xl font-semibold">
            ¡Chatea con nosotros!
          </h3>
          <span className="text-5xl">⬇️</span>
        </div>
        <iframe
          title="chat"
          src="https://www3.cbox.ws/box/?boxid=3537278&boxtag=FNY8Ib"
          width="100%"
          height="450"
          allowtransparency="yes"
          allow="autoplay"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          scrolling="auto"
        ></iframe>
      </section>

      {/* ANCHOR Information */}
      <section className="flex flex-wrap justify-center gap-4 my-12 md:gap-0  md:justify-between md:my-40">
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
