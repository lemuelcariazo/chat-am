import { AUTHFORMPROPS } from "@/types/types";
import React, { useRef, useState } from "react";

const X: React.FC<AUTHFORMPROPS> = ({ setAnimate }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const spanStyle = "h-[8px] w-6 block rounded-lg origin-center";

  return (
    <div
      onClick={() => {
        setAnimate((animate: boolean) => !animate);
      }}
      className="h-[27px] w-full flex justify-end items-center pr-1 pt-1"
      onMouseEnter={() => {
        setIsHovered((hovered) => !hovered);
      }}
      onMouseLeave={() => {
        setIsHovered((hovered) => !hovered);
      }}
    >
      <span
        className={`${
          !isHovered ? "bg-slate-400" : "bg-slate-300"
        } absolute rotate-45 ${spanStyle}`}
      ></span>
      <span
        className={`${
          !isHovered ? "bg-slate-400" : "bg-slate-300"
        }  -rotate-45 ${spanStyle}`}
      ></span>
    </div>
  );
};

export default X;
// h-[8px] w-6 block rounded-lg origin-center
// h-[8px] w-6 block rounded-lg origin-center
