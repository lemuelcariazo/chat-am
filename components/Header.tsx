import React, { useEffect } from "react";
import Icons from "./Icons";
import { HeaderProps } from "../types/types";

// components

function Header({ navLinks, setNavLinks, isAuth }: HeaderProps) {
  useEffect(() => {
    () => {
      isAuth &&
        setNavLinks({
          ...navLinks,
          navLinks: ["logout", "home", "about us"],
        });
    };
    console.log(navLinks);
  }, [isAuth, navLinks, setNavLinks]);

  return (
    <header className="absolute flex h-[5rem] w-full items-center justify-between bg-sky-100 shadow-inner drop-shadow-md dark:bg-gray-800 dark:text-slate-100 p-2 font-black">
      <section className="flex justify-center items-center">
        <Icons />
        <h1 className="font-black">Chat-Am</h1>
        <nav>
          {navLinks &&
            navLinks.map((list, index) => {
              return <li key={index}>{list}</li>;
            })}
        </nav>
      </section>
    </header>
  );
}

export default Header;
