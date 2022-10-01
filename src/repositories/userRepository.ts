import { prisma } from "../dbStrategy/database";
import { IUserData } from "../types/userTypes";

async function addNewUser(userData: IUserData) {
  return prisma.user.create({ data: userData });
}

export const userRepository = {
  addNewUser,
};
