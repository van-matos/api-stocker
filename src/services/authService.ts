import { userRepository } from "../repositories/userRepository";
import { passwordEncrypter } from "../utils/passwordEncrypter";
import { IUserData } from "../types/userTypes";

async function createUser(userData: IUserData) {
  const newUser = await userRepository.addNewUser({
    ...userData,
    password: passwordEncrypter.encryptPassword(userData.password),
  });

  return newUser;
}

export const authService = {
  createUser,
};
