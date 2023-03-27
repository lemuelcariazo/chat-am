type HeaderProps = {
  navLinks: string[];
  setNavLinks: any;
};

interface AUTH {
  email?: string;
  confirmEmail?: string;
  username: string;
  password: string;
  confirmPassword?: string;
}

export { type HeaderProps, type AUTH, type UseVaultProps };
