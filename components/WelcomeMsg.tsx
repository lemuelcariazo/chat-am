import React, { useState } from "react";
import LoginForm from "@/components/LoginForm";
import Typewriter from "typewriter-effect";

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
          <div className="p-2 overflow-hidden max-w-md max-h-[17em] text-justify select-none m-6">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "Chat-am is an easy-to-use and secure chat app for staying connected with friends, family, and colleagues."
                  )

                  .pauseFor(50)
                  .changeDeleteSpeed(50)
                  .deleteAll()
                  .typeString(
                    "Chat in real-time, create channels, and share files with confidence. Thanks for choosing Chat-am!"
                  )

                  .start();
              }}
            />
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
