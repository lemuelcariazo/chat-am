import React from "react";

function AnimateButton(linkName: any) {
  console.log(linkName);
  return (
    <button
      type="button"
      className={`border p-6 w-fit h-fit rounded-full hover:bg-slate-400 hover:text-slate-900 hover:border-slate-900 active:bg-slate-500`}
    >
      {linkName}
    </button>
  );
}

export default AnimateButton;
