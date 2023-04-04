import React, { useState, useEffect } from "react";
import Header from "./Header";

// components
import LoginForm from "@/components/LoginForm";
// import ThemeToggleButton from "@/components/ThemeToggleButton";

export default function Layout() {
  const [isRemoveTag, setIsRemoveTag] = useState<boolean>(false);
  const [navLinks, setNavLinks] = useState<string[]>([]);
  const [animate, setAnimate] = useState<boolean>(false);

  const toggleButton = () => {
    setAnimate((prevAnimate: boolean) => {
      return !prevAnimate;
    });
  };

  useEffect(() => {
    console.log("side effect");
  }, []);

  return (
    <>
      <Header navLinks={navLinks} setNavLinks={setNavLinks} isAuth={false} />

      <main className="h-screen w-full flex justify-center items-center flex-col dark:bg-slate-800 dark:text-slate-100 text-slate-900 font-black">
        {isRemoveTag ? null : (
          <section className="flex justify-center items-center flex-col">
            <div className="p-2 overflow-hidden max-w-md max-h-[17em] text-justify select-none opacity-70 m-6">
              Welcome to Chat-am, the easy-to-use chat app that helps you stay
              connected with friends, family, and colleagues. With Chatam, you
              can chat in real-time, create channels, share files, and more. We
              prioritize your privacy and security, so you can feel confident
              that your conversations and personal information are always safe
              and secure. Thanks for choosing Chatam as your go-to chat app!
            </div>
            <div className="h-20 w-20 flex justify-center items-center">
              <button
                type="button"
                onClick={toggleButton}
                className={`${
                  animate && "animate-fade"
                } p-3 border rounded-3xl border-green-900 text-center hover:border-green-400  active:rounded-full active:p-4`}
                onAnimationEnd={() => {
                  setIsRemoveTag((remove) => !remove);
                }}
              >
                {"Login"}
              </button>
            </div>
          </section>
        )}
        {!isRemoveTag ? null : (
          <LoginForm
            animate={animate}
            setAnimate={setAnimate}
            setIsRemoveTag={setIsRemoveTag}
          />
        )}
      </main>
    </>
  );
}
