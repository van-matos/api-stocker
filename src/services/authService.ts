import { userRepository } from "../repositories/userRepository";
import { passwordEncrypter } from "../utils/passwordEncrypter";
import { tokenGenerator } from "../utils/tokenGenerator";
import { IUserData } from "../types/userTypes";

async function createUser(userData: IUserData) {
  if (await userRepository.findUserByEmail(userData.email)) {
    throw { status: 409, message: "Email already registered." };
  }

  const newUser = await userRepository.addNewUser({
    ...userData,
    password: passwordEncrypter.encryptPassword(userData.password),
  });

  return newUser;
}

async function getUserByEmail(email: string, password: string) {
  const user = await userRepository.findUserByEmail(email);

  if (!user || !passwordEncrypter.verifyPassword(password, user.password))
    throw { status: 401, message: "Email or password is incorrect." };

  const token: string = await tokenGenerator.generateToken(user.id);

  return token;
}

export const authService = {
  createUser,
  getUserByEmail,
};
