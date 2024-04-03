import cn from "~/utils/cn";

export function ServiceCard({
  price,
  name,
  black,
}: {
  price?: number;
  name: string;
  black?: boolean;
}) {
  return (
    <div
      className={cn(
        " bg-white border-solid border-1 border-gray-400 p-8 rounded-xl flex-1 flex flex-col gap-4",
        {
          "bg-blue-950 text-white": black,
        }
      )}
    >
      <p className="m-0 p-0 flex-1 text-2xl font-bold">{name}</p>
      <hr />
      <div>
        <p className="p-0 m-0 text-xl font-semibold">Servicios</p>

        <ul
          className={cn(
            "list-disc px-4 flex flex-col gap-4 py-4 text-gray-500",
            {
              "text-white": black,
            }
          )}
        >
          <li>
            Una pagina de internet para poder trasmitir ahí tus programas de
            radio, musica y anuncios.
          </li>

          <li>Servicio de Auto DJ</li>

          <li>Espacio para musica de 12gb</li>

          <li>Una guía detallada para ayudarte a comenzar a transmitir</li>
        </ul>

        <div>
          <p className="m-0 p-0 text-xl font-bold">Precio</p>
          <p className="m-0 p-0">
            {price ? (
              <>
                <span className="text-5xl font-bold">${price}</span>{" "}
                <span>/ al mes</span>
              </>
            ) : (
              <span className="text-2xl font-bold">$ Personalizado</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
