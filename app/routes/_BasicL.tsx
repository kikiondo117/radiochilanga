import { Link, Outlet, useLocation } from "@remix-run/react";
import { Navbar } from "~/components/NavBar/Navbar";
import cn from "~/utils/cn";
// import { WhatsAppButton } from "~/components/WhatsAppButton/WhatAppButton";

export default function HomeLayout() {
  const { pathname } = useLocation();

  return (
    <div
      className={cn("relative flex flex-col", {
        "bg-patron": pathname === "/",
      })}
    >
      <header className="py-4 absolute left-0 right-0 m-auto container">
        <div className="px-6 md:px-0">
          <Navbar />
        </div>
      </header>
      {/* <WhatsAppButton phoneNumber="52 55 8795 2622" /> */}

      <Outlet />

      <footer className="text-xs  md:text-base flex justify-around items-center h-16 bg-black text-white ">
        <p>Radiochilanga © 2024. Todos los derechos reservados.</p>
        <p>Aviso de privacidad</p>
      </footer>
    </div>
  );
}
