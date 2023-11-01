"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XmarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="sticky top-0 left-0 right-0 z-10 bg-pink-200 bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto py-4">
        <Link
          href={"/"}
          className="text-lg md:text-5xl text-blue-600 font-semibold"
        >
          LOGO
        </Link>
        <div className="mobile-block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border-blue-500 text-blue-500 hover:text-blue-500 hover:border-pink-200"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border-blue-500 text-blue-500 hover:text-blue-500 hover:border-blue-500"
            >
              {/* <XmarkIcon className="h-5 w-5" /> */}
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:pace-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path}>{link.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : <></>}
    </nav>
  );
};

export default Navbar;
