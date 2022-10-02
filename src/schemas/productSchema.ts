import joi from "joi";

export const productSchema = joi.object({
  barcode: joi.string().trim().required(),
  name: joi.string().trim().required(),
  description: joi.string().trim().required(),
  quantity: joi.number().integer().min(1).required(),
  price: joi.number().precision(2).min(0).required(),
});
