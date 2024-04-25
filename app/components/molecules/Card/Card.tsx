export function Card({
  img,
  alt,
  text,
  title,
}: {
  img: string;
  alt: string;
  text: string;
  title: string;
}) {
  return (
    <div className="card w-96 bg-white shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt={alt} className="rounded-xl h-14 " />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
