import jwt from "jsonwebtoken";

function generateToken(userId: number) {
  return jwt.sign({ userId }, String(process.env.JWT_SECRET), {
    expiresIn: "24h",
  });
}

export const tokenGenerator = {
  generateToken,
};
