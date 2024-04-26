import { Link, Outlet } from "@remix-run/react";
import { Navbar } from "~/components/NavBar/Navbar";

export default function ProgramLayout() {
  return (
    <>
      <header className="px-16 md:mx-auto container  py-4">
        <Navbar />
      </header>

      <Outlet />

      <footer className="flex justify-around items-center h-16 bg-black text-white ">
        <p className="">Radiochilanga © 2024. Todos los derechos reservados.</p>
        <p className="">Aviso de privacidad</p>
      </footer>
    </>
  );
}
