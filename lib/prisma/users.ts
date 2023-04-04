import prisma from "./index";

export const getUsers = async () => {
  try {
    const users = await prisma.users.findMany();
    if (!users) {
      return "no data";
    }
    return { users };
  } catch (error) {
    return { error };
  }
};

export const loginUser = async (username: any, res) => {
  try {
    const user = await prisma.users.findUnique({
      where: {
        email: username,
      },
    });

    if (!user) {
      return res.status(404).json({
        message: "unable to login",
      });
    }

    return user;
  } catch (error) {
    return { error };
  }
};
