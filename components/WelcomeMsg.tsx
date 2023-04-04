import React, { useState } from "react";
import LoginForm from "@/components/LoginForm";

export default function WelcomeMsg() {
  const [isRemoveTag, setIsRemoveTag] = useState<boolean>(false);
  const [animate, setAnimate] = useState<boolean>(false);

  const toggleButton = () => {
    setAnimate((prevAnimate: boolean) => {
      return !prevAnimate;
    });
  };

  return (
    <>
      {isRemoveTag ? null : (
        <section className="flex justify-center items-center flex-col">
          <div className="p-2 overflow-hidden max-w-md max-h-[17em] text-justify select-none opacity-70 m-6">
            Welcome to Chat-am, the easy-to-use chat app that helps you stay
            connected with friends, family, and colleagues. With Chatam, you can
            chat in real-time, create channels, share files, and more. We
            prioritize your privacy and security, so you can feel confident that
            your conversations and personal information are always safe and
            secure. Thanks for choosing Chatam as your go-to chat app!
          </div>
          <div className="h-20 w-20 flex justify-center items-center">
            <button
              type="button"
              onClick={toggleButton}
              className={`${
                animate && "animate-fade"
              } shadow-blue-400 shadow-2xl p-5 border rounded-3xl active:border-green-900 text-center border-green-900 active:p-4 select-none hover:shadow-none`}
              onAnimationEnd={() => {
                setIsRemoveTag((remove) => !remove);
              }}
            >
              Get Started
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
    </>
  );
}
