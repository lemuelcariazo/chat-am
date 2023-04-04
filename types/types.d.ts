import { SetStateAction } from "react";

type HeaderProps = {
  navLinks: string[];
  setNavLinks: Dispatch<SetStateAction<string>>;
  isAuth: boolean;
  setIsDarkMode?: Dispatch<SetStateAction<boolean>>;
};

type BTNPROPTYPE = {
  buttonName: string;
  isToggle: boolean;
  setIsToggle: Dispatch<SetStateAction<Boolean>>;
};

interface AUTH {
  email?: string;
  confirmEmail?: string;
  username: string;
  password: string;
  confirmPassword?: string;
}

interface AUTHFORMPROPS {
  animate?: boolean;
  setAnimate?: Dispatch<SetStateAction<boolean>>;
  setIsRemoveTag?: Dispatch<SetStateAction<boolean>>;
}

type COMMENTS = {
  id: number;
  comment: string;
};

interface USER {
  id?: string;
  email?: string;
  password?: string;
}

interface NAV {
  navLinks: string[];
  setNavLinks: Dispatch<SetStateAction<string>>;
}

export {
  type HeaderProps,
  type AUTH,
  type BTNPROPTYPE,
  type AUTHFORMPROPS,
  type COMMENTS,
  type USER,
  type NAV,
};
