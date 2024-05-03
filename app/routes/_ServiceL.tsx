import { Outlet, useLocation } from "@remix-run/react";
import { NavbarServices } from "~/components/molecules/NavBar/NavbarServices";
import { Footer } from "~/components/organisms/Footer/Footer";
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
      <header
        className={cn("py-4  container mx-auto", {
          "absolute left-0 right-0 m-auto":
            pathname === "/" || pathname === "/services",
        })}
      >
        <div className="px-6 md:px-0">
          <NavbarServices />
        </div>
      </header>

      <Outlet />

      <Footer />
    </div>
  );
}
