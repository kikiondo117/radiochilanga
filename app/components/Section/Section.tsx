interface Props {
  title: string;
  subtitle?: string;
}

export function Section(props: Props) {
  return (
    <div>
      <div className="relative">
        <h3 className="text-4xl bg-secondary p-8 text-white w-fit">
          {props.title}
        </h3>

        <p className="absolute left-0 bottom-0 transform -translate-x-4 translate-y-9 bg-blue-500 text-white p-2 capitalize">
          {props.subtitle}
        </p>
      </div>
    </div>
  );
}
