import bcrypt from "bcrypt";

function encryptPassword(password: string) {
  return bcrypt.hashSync(password, 10);
}

export function verifyPassword(
  password: string,
  hashedPassword: string
): boolean {
  return bcrypt.compareSync(password, hashedPassword);
}

export const passwordEncrypter = {
  encryptPassword,
  verifyPassword,
};
