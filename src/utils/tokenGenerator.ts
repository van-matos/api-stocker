import jwt from "jsonwebtoken";

function generateToken(userId: number) {
  return jwt.sign({ userId }, String(process.env.JWT_SECRET), {
    expiresIn: "24h",
  });
}

function verifyToken(token: string) {
  try {
    return jwt.verify(token, String(process.env.JWT_SECRET)) as { id: number };
  } catch {
    throw { status: 401, message: "Invalid token" };
  }
}

export const tokenGenerator = {
  generateToken,
  verifyToken,
};
