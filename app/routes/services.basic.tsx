import { Link } from "@remix-run/react";
import { Footer } from "~/components/organisms/Footer/Footer";

export default function BasicPage() {
  return (
    <div className="flex flex-col gap-20">
      <main className="container mx-auto px-4 pt-20">
        <Link to="/services/plans" className="absolute left-4 top-6 underline">
          Regresar
        </Link>

        <h1 className="text-4xl md:text-5xl text-center pb-8 font-semibold  border-solid px-4">
          Plan Basico
        </h1>

        <div className="flex justify-center">
          <form action="" className="w-96 flex flex-col items-center">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">
                  Nombre de tu futura estación de radio
                </span>
              </div>
              <input
                type="text"
                placeholder="Escribe aquí"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">¿Tienes algun lema?</span>
              </div>
              <input
                type="text"
                placeholder="Escribe aquí"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Genero musical</span>
              </div>
              <input
                type="text"
                placeholder="Escribe aquí"
                className="input input-bordered w-full"
              />
            </label>

            <button className="btn btn-secondary mt-4" type="submit">
              Siguiente paso
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
