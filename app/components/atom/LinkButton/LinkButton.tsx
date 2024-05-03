import { Link } from "@remix-run/react";
import cn from "~/utils/cn";

type TLinkButton = {
  variant?: "primary" | "secondary";

  to: string;
  children?: any;
};

function LinkButton(props: TLinkButton) {
  return (
    <Link
      className={cn(
        "rounded-md px-4 py-2 bg-primary-dark text-white hover:text-primary-dark hover:bg-primary transition-all ease-in-out duration-300",
        { "bg-secondary": props.variant === "secondary" }
      )}
      to={props.to}
    >
      {props.children}
    </Link>
  );
}

export { LinkButton };
