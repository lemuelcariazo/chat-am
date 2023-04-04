import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// types
import { AUTH, AUTHFORMPROPS } from "@/types/types";

// components
import X from "./X";

const LoginForm: React.FC<AUTHFORMPROPS> = ({
  animate,
  setAnimate,
  setIsRemoveTag,
}) => {
  const router = useRouter();
  const [auth, setAuth] = useState<AUTH>({
    username: "",
    password: "",
  });

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    const requestBody = JSON.stringify({
      email: auth.username,
      password: auth.password,
    });

    e.preventDefault();
    1;
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: requestBody,
      });
      if (response.status === 200) {
        localStorage.setItem("auth", String(true));
        setAnimate((animate: string) => !animate);
      }
    } catch (e) {
      console.log(e);
    }
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
