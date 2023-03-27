import React from "react";
function useVault(
  isAnimate: Boolean,
  setIsAnimate: React.Dispatch<React.SetStateAction<boolean>>
) {
  const handleAnimate = () => {
    setIsAnimate((prevIsAnimate: Boolean) => {
      return !prevIsAnimate;
    });
  };

  return { isAnimate, setIsAnimate, handleAnimate };
}

export default useVault;
