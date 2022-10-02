import { userRepository } from "../repositories/userRepository";
import { passwordEncrypter } from "../utils/passwordEncrypter";
import { IUserData } from "../types/userTypes";

async function createUser(userData: IUserData) {
  if (await userRepository.findByEmail(userData.email)) {
    throw { status: 409, message: "Email already registered." };
  }

  const newUser = await userRepository.addNewUser({
    ...userData,
    password: passwordEncrypter.encryptPassword(userData.password),
  });

  return newUser;
}

export const authService = {
  createUser,
};
