import type { V2_MetaFunction } from "@remix-run/node";

// * Assets
import * as programming from "~/utils/programacion";

// * Custom Components
import { Player } from "~/components/Player/Player";
import { Section } from "~/components/Section/Section";
import { Host } from "~/components/Host/Host";
import { Post } from "~/components/Post/Post";

export default function Index() {
  return (
    <>
      <section
        id="play"
        className="flex flex-col items-center my-12 md:flex-row md:justify-around md:my-24 "
      >
        <img src="/img/slogan.png" alt="" className="h-52 md:w-1/2" />

        <div className="my-8 md:m-0">
          <Player />
        </div>
      </section>

      {/* ANCHOR Programas */}
      <section className="my-28">
        <Section title="Nuestros programas" subtitle="de lunes a viernes" />

        <div className="flex flex-wrap  justify-center mb-12 md:justify-between mt-12 gap-12">
          {programming.programas.map((programa) => {
            return (
              <div
                key={programa.locutor}
                className={`bg-gray-special rounded-sm w-96 h-64 md:w-[25em] capitalize 
                 cursor-pointer bg-center ${programa.image}`}
              >
                <div className="h-full flex flex-col justify-end hover:translate-y-9 transition-all ease-in-out">
                  <p className="text-red-500 bg-white w-fit px-4 py-2 ">
                    Lunes a viernes {programa.hora}
                  </p>

                  <p className="bg-gray-800 w-fit text-white p-4">
                    {programa.nombre}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ANCHOR Hosts */}
      <section className="mb-12 mt-12">
        <Section title="Nuestros hosts" subtitle="EQUIPO DE RADIO CHILANGA" />

        <div className="flex flex-wrap justify-center gap-8  md:justify-between md:gap-0  mt-16">
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=61550602422734"
          >
            <Host
              className="bg-manuel bg-center bg-cover"
              title="Gracias por el apoyo!"
              subTitle="Manuel Vera"
            />
          </a>

          <Host
            className="bg-secret bg-center bg-cover"
            title="Loading..."
            subTitle="Proximamente"
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

      {/* ANCHOR Information */}
      <section className="flex flex-wrap justify-center gap-4 my-12 md:gap-0  md:justify-between md:my-40">
        <Post title="Radio Chilanga">
          <p>
            Dándole un respiro a los habitantes de la Ciudad de México con
            programas clasicos desde la perspectiva más chilanga.
          </p>
        </Post>

        <Post title="CEO">
          <p>
            Nuestro objetivo es crear contenido digital de calidad. Planeamos
            ser una de las plataformas top de Latinoamericas.
          </p>
        </Post>

        <Post title="¡Síguenos!">
          <p>Facebook - </p>
        </Post>
      </section>
    </>
  );
}

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Radio Chilanga" },
    { name: "description", content: "Radio Mexican" },
  ];
};
