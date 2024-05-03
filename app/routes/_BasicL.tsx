import { Outlet, useLocation } from "@remix-run/react";
import { Navbar } from "~/components/NavBar/Navbar";
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
          <Navbar />
        </div>
      </header>
      {/* <WhatsAppButton phoneNumber="52 55 8795 2622" /> */}

      <Outlet />

      <Footer />
    </div>
  );
}
