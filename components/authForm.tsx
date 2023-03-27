import React, { ComponentProps, useState } from "react";
import { AUTH } from "@/types/types";
const AuthForm: React.FC = () => {
  const [auth, setAuth] = useState<AUTH>({
    username: "",
    password: "",
  });
  const [animate, setAnimate] = useState<Boolean>(false);
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const handleAnimate = () => {
    setAnimate((prevAnimate) => {
      return !prevAnimate;
    });
  };

  return (
    <>
      <section
        className={`${
          animate && "animate-fade"
        } bg-slate-700 text-slate-100 flex justify-center items-center flex-col rounded-md select-none`}
      >
        <div className="w-full flex justify-end items-center h-4">
          <div
            className="border mr-1 mt-1 w-10 bg-red-900 h-2 rounded-2xl active:bg-slate-800 hover:h-3"
            onClick={handleAnimate}
          ></div>
        </div>
        <h1 className="m-4">Login Account</h1>
        <div className="flex justify-center items-center flex-col gap-3 m-2">
          <input
            type="text"
            value={auth.username}
            placeholder="ex@mple.com"
            className="px-4 py-2 text-left rounded-2xl text-slate-900"
            onChange={(e) => {
              setAuth((prevAuth) => {
                return {
                  ...prevAuth,
                  username: e.target.value,
                };
              });
            }}
          />
          <input
            type="text"
            value={auth.password}
            placeholder="password"
            className="px-4 py-2 text-left rounded-2xl text-slate-900"
            onChange={(e) => {
              setAuth((prevState) => {
                return {
                  ...prevState,
                  password: e.target.value,
                };
              });
            }}
          />
        </div>
        <button>X</button>
      </section>
    </>
  );
};
export default AuthForm;
