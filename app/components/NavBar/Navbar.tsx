import { Link } from "@remix-run/react";

export function Navbar() {
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

      <ul className="ml-auto md:m-0 flex gap-1">
        <li className="bg-primary-dark text-white hover:text-primary-dark hover:bg-primary transition-all ease-in-out duration-300">
          <Link className="p-4" to="/">
            Programas
          </Link>
        </li>
        <li className="bg-primary-dark text-white  hover:text-primary-dark hover:bg-primary transition-all ease-in-out duration-300">
          <Link className="p-4" to="/services">
            Servicios
          </Link>
        </li>
      </ul>
    </nav>
  );
}
