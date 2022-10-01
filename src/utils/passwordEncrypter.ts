import bcrypt from "bcrypt";

function encryptPassword(password: string) {
  return bcrypt.hashSync(password, 10);
}

export const passwordEncrypter = {
  encryptPassword,
};
