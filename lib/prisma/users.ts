import prisma from "./index";
import { users } from "@prisma/client";

export const getUsers = async () => {
  try {
    const users: users[] = await prisma.user.findMany();
    if (!users) {
      return "no data";
    }
    return { users };
  } catch (error) {
    return { error };
  }
};

export const loginUser = async (email: string) => {
  try {
    const user: users | null = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    return { user };
  } catch (error) {
    return { error };
  }
};
