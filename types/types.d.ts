type HeaderProps = {
  navLinks: string[];
  setNavLinks: any;
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

export { type HeaderProps, type AUTH, type BTNPROPTYPE };
