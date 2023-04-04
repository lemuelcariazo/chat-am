import { loginUser } from "@/lib/prisma/users";
import { NextApiRequest, NextApiResponse } from "next";

// test
import { createJwt } from "@/helper/jwt";
import { comparePassword } from "@/helper/bcrypt";
import { createCookie } from "@/helper/cookie";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("allow", ["POST"]);
  switch (req.method) {
    case "POST":
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(401).json({
          message: "Username and Password are not valid",
        });
      }
      try {
        const { user }: any = await loginUser(email, res);

        const verifyPassword = await comparePassword(password, user.password);

        if (!verifyPassword) {
          return res.status(401).json({
            message: "Unauthorized",
          });
        }

        const token = createJwt(user);
        createCookie(token, res);

        return res.status(200).json({
          user: {
            id: user.id,
            email: user.email,
          },
          message: "login succesfully",
        });
      } catch (e) {
        res.status(500).json({
          message: "Internal server error eto yonh",
        });
      }
    default:
      res.status(405).json({ message: `Method '${req.method}' not allowed` });
      break;
  }
}
