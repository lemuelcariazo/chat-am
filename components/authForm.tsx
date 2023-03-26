import React, { ComponentProps, useState } from "react";

const AuthForm: React.FC = () => {
  const [inputValue, setInputValue] = useState<
    string | number | readonly string[] | undefined
  >("");
  return (
    <>
      <section className="bg-slate-700 text-slate-100 flex justify-center items-center flex-col gap-3 rounded-2xl">
        <h1>Login Form</h1>
        <input
          type="text"
          value={inputValue}
          placeholder="ex@mple.com"
          className="p-3 text-left rounded-2xl text-slate-900 m-4"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button>X</button>
      </section>
    </>
  );
};
export default AuthForm;
