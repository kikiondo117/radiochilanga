import { Link } from "@remix-run/react";

export function Navbar() {
  return (
    <nav className="bg-transparent flex justify-between items-center">
      <img src="/img/logo.png" alt="Radio chilanga" className=" w-24 h-12" />

      <ul>
        <li className="bg-secondary text-white hover:bg-red-700 transition-all ease-in-out duration-300">
          <Link className="p-4" to="/">
            Programas
          </Link>
        </li>
      </ul>
    </nav>
  );
}
