import { Link, useLocation } from "@remix-run/react";
import { LinkButton } from "~/components/atom/LinkButton/LinkButton";

export function NavbarServices() {
  const { pathname } = useLocation();

  return (
    <nav className="bg-transparent flex flex-wrap gap-4  justify-between items-center">
      <Link to="/" className="flex gap-2">
        <img
          src="/img/logo/logo.webp"
          alt="Radio chilanga"
          className="w-14 h-14 rounded-full"
        />
        {/* <img src="/img/icons/muerto.png" alt="" className=" w-12 h-12" /> */}
      </Link>

      <ul className="ml-auto md:m-0 flex gap-2">
        <li>
          <LinkButton
            to={pathname === "/services/radio" ? "#planes" : "/services/radio"}
            variant={pathname === "/services" ? "secondary" : "primary"}
          >
            <span>Planes</span>
          </LinkButton>
        </li>
      </ul>
    </nav>
  );
}
