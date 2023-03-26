import React, { MouseEventHandler } from "react";
import Icons from "./Icons";
import { HeaderProps } from "../types/types";

function Header({ navLinks, setNavLinks }: HeaderProps) {
  return (
    <header className="absolute flex h-[5rem] w-full items-center justify-between bg-sky-100 shadow-inner drop-shadow-md dark:bg-gray-800 dark:text-slate-100 p-2 font-black">
      <div className="flex justify-center items-center">
        <Icons />
        <h1 className="font-black">Chat-Am</h1>
      </div>
    </header>
  );
}

export default Header;
