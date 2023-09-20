import { Link } from "@remix-run/react";

export function NavBar() {
  return (
    <nav className="bg-transparent flex justify-between">
      <p>Logo</p>

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
