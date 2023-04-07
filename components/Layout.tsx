import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import type { ReactNode } from "react";
import { useRouter } from "next/router";

export default function Layout({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [navLinks, setNavLinks] = useState<string[]>([]);
  const router = useRouter();

  return (
    <div className={`${isDarkMode ? "dark" : ""} dark`}>
      <Header
        navLinks={navLinks}
        setNavLinks={setNavLinks}
        setIsDarkMode={setIsDarkMode}
      />
      <main className="h-screen w-full flex justify-center items-center flex-col dark:bg-slate-800 dark:text-slate-100 text-slate-900 font-black">
        {children}
      </main>
      <Footer />;
    </div>
  );
}
