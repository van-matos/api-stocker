import { Request, Response, NextFunction } from "express";

import { tokenGenerator } from "../utils/tokenGenerator";

async function validateToken(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) throw { status: 401, message: "Unauthorized." };

  const token = authorization?.replace("Bearer ", "").trim();

  const userId = tokenGenerator.verifyToken(token);

  res.locals.user = userId;

  next();
}

export const authMiddleware = {
  validateToken,
};
