import { sign, verify, decode } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

export const createJwt = (user: any) => {
  const { id, email } = user;
  const token = sign({ id, email }, String(process.env.JWT_SECRET), {
    expiresIn: "5h",
  });
  return token;
};

export const verifyJwt = async (req: NextApiRequest, res: NextApiResponse) => {
  const token: any = req.cookies.token;
  console.log(token);
  try {
    const verifyToken = verify(token, String(process.env.JWT_SECRET));
    return verifyToken;
  } catch (e) {
    console.log(e);
  }
};
