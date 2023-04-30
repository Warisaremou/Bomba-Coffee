import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CoffeeLogo } from "../utils";
import clsx from "clsx";

const menuList = [
  {
    name: "Acceuil",
    path: "/",
  },
  {
    name: "A propos",
    path: "#about",
  },
  {
    name: "Pourquoi nous ?",
    path: "#services",
  },
  {
    name: "Menu",
    path: "/menu",
  },
  {
    name: "Contactez-nous",
    path: "#contact",
  },
];

export default function NavBar() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="nav-bar">
      <h1
        className="flex items-center gap-2 text-xl font-semibold cursor-pointer text-brown-500 dark:text-white"
        onClick={() => router.push("/")}
      >
        <div className="logo">
          <CoffeeLogo />
        </div>
        Boomba-Coffee
      </h1>
      <div className="nav-item">
        <ul className="">
          {menuList.map((menu) => (
            <Link
              key={menu.name}
              href={menu.path}
              className={`nav-link md:pr-3 ${
                router.pathname == menu.path ? "text-brown-500 font-medium" : "text-gray-color"
              }`}
            >
              {menu.name}
            </Link>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <Link
            href="login"
            className={`nav-link ${
              router.pathname == "login" ? "text-brown-500 font-medium" : "text-gray-color"
            }`}
          >
            Compte
          </Link>
        </div>
      </div>
      <div className="block lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <XMarkIcon className="icon-2 icon-gray dark:fill-white" />
        ) : (
          <Bars3Icon className="icon-2 icon-gray dark:fill-white" />
        )}
      </div>

      {/* Responsice menu */}
      <div
        className={clsx(
          "fixed top-0 bottom-0 z-50 flex flex-col h-screen gap-24 py-16 pl-4 bg-white w-60 duration-500",
          isOpen ? "left-0" : "-left-full"
        )}
      >
        <ul className="flex flex-col gap-7">
          {menuList.map((menu) => (
            <Link
              key={menu.name}
              href={menu.path}
              onClick={() => setIsOpen(false)}
              className={`nav-link md:pr-3 ${
                router.pathname == menu.path ? "text-brown-500 font-medium" : "text-gray-color"
              }`}
            >
              {menu.name}
            </Link>
          ))}
        </ul>
        <Link
          href="login"
          className={`nav-link ${
            router.pathname == "login" ? "text-brown-500 font-medium" : "text-gray-color"
          }`}
        >
          Compte
        </Link>
      </div>

      <div
        className={`fixed top-0 h-screen w-full bg-black opacity-40 z-40 ${
          isOpen ? "block overflow-hidden" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
    </nav>
  );
}
