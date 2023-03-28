import React from "react";
import { BTNPROPTYPE } from "@/types/types";

function ThemeToggleButton({ buttonName, setIsToggle }: BTNPROPTYPE) {
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded"
      onClick={() => {
        setIsToggle((toggle: Boolean) => !toggle);
      }}
    >
      {buttonName}
    </button>
  );
}

export default ThemeToggleButton;

// when the person click the button, the button will fire up the action which that action is the argument that is a function controller for the useState "set" functin
