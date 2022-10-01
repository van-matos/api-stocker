import joi from "joi";

const signUpSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
  confirmPassword: joi.string().required().valid(joi.ref("password")),
});

export const authSchema = {
  signUpSchema,
};
