import cn from "~/utils/cn";

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

export function Section(props: Props) {
  return (
    <>
      <div className="relative">
        <h3
          className={cn(
            "text-4xl bg-secondary p-8 text-white w-fit flex gap-2 xl:text-5xl rounded-md",
            props.className
          )}
        >
          {props.title}
        </h3>

        <p className="absolute left-0 bottom-0 transform -translate-x-4 translate-y-9 bg-primary-dark text-white p-2 capitalize">
          {props.subtitle}
        </p>
      </div>
    </>
  );
}
