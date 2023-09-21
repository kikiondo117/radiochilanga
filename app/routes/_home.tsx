import { Link, Outlet } from "@remix-run/react";
import { Navbar } from "~/components/NavBar/Navbar";

export default function HomeLayout() {
  return (
    <>
      <div className="px-16 md:mx-auto container">
        <header className="py-4">
          <Navbar />
        </header>

        <Outlet />
      </div>

      <footer className="bg-red-500">
        <p>Radiochilanga © 2023. Todos los derechos reservados.</p>
        <Link to="/nani">
          <p>Aviso de privasidad</p>
        </Link>
      </footer>
    </>
  );
}
