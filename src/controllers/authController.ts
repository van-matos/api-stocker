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

async function login(req: Request, res: Response) {
  const { email, password }: { email: string; password: string } = req.body;

  const token = await authService.getUserByEmail(email, password);

  return res.status(200).send({ token });
}

export const authController = {
  signUp,
  login,
};
