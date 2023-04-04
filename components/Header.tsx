import React, { useEffect, useState } from "react";
import Icons from "./Icons";
import { HeaderProps } from "../types/types";
import { useRouter } from "next/router";

// components

function Header({ navLinks, setNavLinks }: HeaderProps) {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState<boolean>(false);

  // useEffect(() => {
  //   const auth = localStorage.getItem("auth");
  //   setIsAuth(Boolean(auth));
  //   console.log(isAuth);
  //   if (isAuth) {
  //     router.push("/user");
  //   }
  // }, [isAuth]);

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
        <h1>{isAuth}</h1>
      </section>
    </header>
  );
}

export default Header;
