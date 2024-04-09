import cn from "~/utils/cn";

export function ServiceCard({
  price,
  name,
  black,
  children,
}: {
  price?: number;
  name: string;
  black?: boolean;
  children: any;
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
      <div>
        <p className="m-0 p-0 flex-1 text-2xl font-bold mb-4">{name}</p>
        <hr />
      </div>

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
          {children}
        </ul>
      </div>

      <div className="mt-auto">
        <p className="m-0 p-0 text-xl font-bold">Precio</p>

        <p className="m-0 p-0">
          {price ? (
            <>
              <span className="text-5xl font-bold">${price}</span>{" "}
              <span className=" text-xs">MXN </span>
              <span>/ al mes</span>
            </>
          ) : (
            <span className="text-2xl font-bold">$ Personalizado</span>
          )}
        </p>
      </div>
    </div>
  );
}
