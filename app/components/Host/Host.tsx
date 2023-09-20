import { twMerge } from "tailwind-merge";

export function Host(props: { className: string }) {
  return (
    <div
      className={twMerge(
        "flex flex-col justify-end w-40 h-40  md:w-80 md:h-80 bg-gray-special hover:opacity-90 cursor-pointer",
        props.className
      )}
    >
      <p className="text-red-500 bg-white w-fit px-4 py-2">Saludos a todos</p>
      <p className="bg-gray-800 w-fit text-white p-4">Manuel Vera</p>
    </div>
  );
}
