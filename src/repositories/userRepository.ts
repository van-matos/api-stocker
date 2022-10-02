import { prisma } from "../dbStrategy/database";
import { IUserData } from "../types/userTypes";

async function addNewUser(userData: IUserData) {
  const user: IUserData = await prisma.user.create({ data: userData });

  return user;
}

async function findUserByEmail(email: string) {
  const dbUser = await prisma.user.findUnique({ where: { email } });

  return dbUser;
}

async function findUserById(id: number) {
  const dbUser = await prisma.user.findUnique({ where: { id } });

  return dbUser;
}

export const userRepository = {
  addNewUser,
  findUserByEmail,
  findUserById,
};
