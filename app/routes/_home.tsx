import { Outlet } from "@remix-run/react";
import { NavBar } from "~/components/NavBar";

export default function HomeLayout() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <div className="grid grid-cols-12">
        <Outlet />
      </div>
      <footer className="bg-white h-12 text-black flex justify-center items-center">
        Terminos y Condiciones.
      </footer>
    </>
  );
}
