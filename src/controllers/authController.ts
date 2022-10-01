import { IUserData } from "../types/userTypes";
import { Request, Response } from "express";
import { authService } from "../services/authService";

interface signUpBody {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

async function signUp(req: Request, res: Response) {
  const newUserData: signUpBody = req.body;

  const userData: IUserData = await authService.createUser({
    name: newUserData.name,
    email: newUserData.email,
    password: newUserData.password,
  });

  res.status(201).send({ message: "Registration complete." });
}

export const authController = {
  signUp,
};
