import { Outlet, useLocation } from "@remix-run/react";
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
      <header
        className={cn("py-4  container mx-auto", {
          "absolute left-0 right-0 m-auto": pathname === "/",
        })}
      >
        <div className="px-6 md:px-0">
          <Navbar />
        </div>
      </header>
      {/* <WhatsAppButton phoneNumber="52 55 8795 2622" /> */}

      <Outlet />

      <footer className="footer p-10 bg-black text-neutral-content">
        <div className="container mx-auto flex justify-around">
          <aside>
            <img
              src="/img/logo/logo.png"
              alt="radio chilanga"
              className="w-20 h-20"
            />
            <p>
              RADIO CHILANGA.
              <br />
              Trabajando en el medio digital desde 2022
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Social</h6>
            <div className="grid grid-flow-col gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100076177904911"
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
}
