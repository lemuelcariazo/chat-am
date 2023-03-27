import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Key, useState } from "react";

// components
import AuthForm from "@/components/authForm";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [animate, setAnimate] = useState<Boolean>(false);
  const [isOpenAuthTab, setIsOpenAuthTab] = useState<Boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<Boolean>(false);
  const [navLinks, setNavLinks] = useState<string[]>(["Login"]);

  const handleForm = () => {
    setAnimate((gate) => !gate);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className={`container mx-auto ${isDarkMode ? "dark" : ""}`}>
      <Head>
        <title>CHAT-AM</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fireIcon.svg" />
      </Head>
      <Header navLinks={navLinks} setNavLinks={setNavLinks} />
      <main className="flex justify-center items-center flex-col w-full h-screen dark:bg-slate-800 dark:text-slate-100 text-slate-900 font-black">
        {isOpenAuthTab ? (
          <AuthForm />
        ) : (
          navLinks.map((link: String, index: Key) => {
            return (
              <>
                <h1>Skwakernils</h1>
                <Link
                  href={`/`}
                  key={index}
                  className={`border p-6 w-fit h-fit rounded-full hover:bg-slate-400 hover:text-slate-900 hover:border-slate-900 active:bg-slate-500 active:p-7 ${
                    animate ? "animate-fade" : null
                  }`}
                  onClick={handleForm}
                  onAnimationEnd={() => {
                    setIsOpenAuthTab((tab) => !tab);
                    console.log("animation-ended");
                  }}
                >
                  {link}
                </Link>
              </>
            );
          })
        )}
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={toggleDarkMode}
        >
          Dark Mode
        </button>
      </main>
    </div>
  );
}
