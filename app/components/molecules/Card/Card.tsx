import cn from "~/utils/cn";

export function Card({
  img,
  alt,
  text,
  title,
  children,
  imgStyle,
}: {
  img: string;
  alt: string;
  text: string;
  title: string;
  children: any;
  imgStyle?: string;
}) {
  return (
    <div className="card bg-white shadow-xl md:w-96">
      <figure className={cn("", imgStyle)}>
        <img src={img} alt={alt} className={cn("rounded-xl")} />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{text}</p>

        {children}
      </div>
    </div>
  );
}
