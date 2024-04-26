import { Link, Outlet, useLocation } from "@remix-run/react";
import { Navbar } from "~/components/NavBar/Navbar";
import cn from "~/utils/cn";
// import { WhatsAppButton } from "~/components/WhatsAppButton/WhatAppButton";

export default function HomeLayout() {
  const { pathname } = useLocation();

  return (
    <div
      className={cn("relative flex flex-col gap-4", {
        "bg-patron": pathname === "/",
      })}
    >
      <div className="px-16 md:mx-auto container">
        <header className="py-4">
          <Navbar />
        </header>
        {/* <WhatsAppButton phoneNumber="52 55 8795 2622" /> */}

        <Outlet />
      </div>

      <footer className="flex justify-around h-16">
        <p className="bg-black w-full text-sm md:text-base xl:w-1/4 text-white flex justify-end  items-center p-4">
          Radiochilanga © 2023. Todos los derechos reservados.
        </p>
        <Link
          to="/nani"
          className="bg-gray-special w-full  xl:w-3/4 flex items-center p-4"
        >
          <p>Aviso de privacidad</p>
        </Link>
      </footer>
    </div>
  );
}
