import { sign } from "jsonwebtoken";

export const createJwt = (user: any) => {
  const { id } = user;
  const token = sign({ id }, "?xbGWvux9T69gGV!V^_dZn", {
    expiresIn: "5h",
  });
  return token;
};
