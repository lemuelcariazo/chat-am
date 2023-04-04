import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import { NAV } from "@/types/types";

const User: React.FC<NAV> = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    Boolean(auth) && setIsAuth((auth) => Boolean(auth));
    console.log(auth);
  }, []);

  return (
    <div className="dark">
      <Header navLinks={[]} setNavLinks={undefined} isAuth={isAuth} />
      <section className="dark:bg-slate-900 dark:text-black h-screen">
        <h1 className="">USER</h1>
      </section>
    </div>
  );
};
export default User;
