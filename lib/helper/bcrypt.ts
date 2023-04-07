import bcrypt from "bcrypt";

export const comparePassword = async (plainPwd: string, hashedPwd: string) => {
  return await bcrypt.compare(plainPwd, hashedPwd);
};

export const hashPassword = async (password: string, salt: number) => {
  return await bcrypt.hash(password, salt);
};
