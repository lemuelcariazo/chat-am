import React, { ComponentProps, useState } from "react";
import { AUTH, AUTHFORMPROPS } from "@/types/types";

// components
import X from "./X";

const LoginForm: React.FC<AUTHFORMPROPS> = ({
  animate,
  setAnimate,
  setIsRemoveTag,
}) => {
  const [auth, setAuth] = useState<AUTH>({
    username: "",
    password: "",
  });

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("It is working");
  };

  return (
    <>
      <section
        className={`${
          !animate && "animate-fade"
        } bg-slate-700 text-slate-100 flex justify-center items-center flex-col rounded-md select-none`}
        onAnimationEnd={() => {
          setIsRemoveTag((remove: boolean) => !remove);
        }}
      >
        <X setAnimate={setAnimate} />
        <h1 className="m-4">Login Account</h1>
        <form
          onSubmit={handleLogin}
          className="flex justify-center items-center flex-col gap-5 m-2 p-2"
        >
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
          <button
            type="submit"
            className="p-2 rounded-3xl flex justify-center items-center hover:border-green-500 border"
          >
            <h1 className="text-center">Login</h1>
          </button>
          <p className="text-xs w-full text-end  hover:text-blue-200">
            create account ?
          </p>
        </form>
      </section>
    </>
  );
};
export default LoginForm;
