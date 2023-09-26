import type { ProgramType } from "~/types/program";

import { redirect, type LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "react-router";
import { programas } from "~/utils/programacion";
import { Post } from "~/components/Post/Post";

export default function Programa() {
  const program: ProgramType = useLoaderData() as ProgramType;

  return (
    <div className="">
      <h1 className="flex justify-center p-4 text-4xl font-light my-8 md:my-24  md:text-6xl ">
        {program.nombre}
      </h1>

      <main className="p-8 flex flex-wrap rounded-md bg-white min-h-screen h-fit py-16 justify-center gap-8">
        <div>
          <div
            className={`${program.image} w-full bg-center bg-no-repeat h-96 mx-auto`}
          />

          <p className=" max-w-lg mx-auto mt-4 font-extralight">
            Todos los días, de <strong>{program.hora}</strong> , tienes una cita
            con <strong>{program.locutor}</strong>.{program.bio} . Puedes
            escuchar el programa en <strong>Radio Chilanga</strong>
          </p>
        </div>

        {/* ANCHOR google add */}
        <aside className="h-full md:w-20">
          <ins
            style={{ display: "block" }}
            className="adsbygoogle"
            data-ad-client="ca-pub-1258358039253069"
            data-ad-slot="3055974027"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </aside>
      </main>

      {/* ANCHOR Information */}
      <section className="container mx-auto flex flex-wrap justify-center gap-4 my-12 md:gap-0  md:justify-between md:my-40">
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

      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1258358039253069"
        crossOrigin="anonymous"
      ></script>

      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </div>
  );
}

export const loader: LoaderFunction = ({ params }) => {
  const id = params.id;
  if (id) {
    const program = programas.find((programa) => programa.id === +id);

    return program ? program : redirect("/");
  }

  return redirect("/");
};
