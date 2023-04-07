import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

// test
import { createJwt, verifyJwt } from "@/lib/helper/jwt";
import { comparePassword } from "@/lib/helper/bcrypt";
import { createCookie } from "@/lib/helper/cookie";
import { loginUser } from "@/lib/prisma/users";

const authenticate =
  (handler: NextApiHandler) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET" || req.method === "POST") {
      const isVerifiedToken = await verifyJwt(req, res);
      try {
        if (isVerifiedToken) {
          return res.status(200).json({
            authenticated: true,
            data: isVerifiedToken,
          });
        }
        // if token is invalid or not provided proceed to handle request
        return handler(req, res);
      } catch (e) {
        res.json({
          message: e,
        });
      }
    } else {
      return res
        .status(405)
        .json({ message: `Method '${req.method}' not allowed` });
    }
  };

async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("allow", ["POST", "DELETE"]);
  switch (req.method) {
    case "POST":
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(401).json({
          message: "Username and Password are not valid",
        });
      }
      try {
        const { user }: any = await loginUser(email);
        const verifyPwd = await comparePassword(password, user.password);
        if (!verifyPwd) {
          return res.status(404).json({
            message: "unable to login",
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
          message: "Internal server error",
        });
      }
    case "DELETE":
      console.log("handle delete");
    // try {
    //   // await deleteCookie(res);
    //   return res.status(200).send("Logout Successfully");
    // } catch (e) {
    //   res.status(500).send("Internal server error", e);
    // }

    default:
      res.status(405).json({ message: `Method '${req.method}' not allowed` });
      break;
  }
}

export default authenticate(handler);
