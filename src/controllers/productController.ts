import { Request, Response } from "express";
import { productService } from "../services/productService";
import { INewProductData } from "../types/productTypes";

async function newProduct(req: Request, res: Response) {
  const userId: number = res.locals.userId;
  const productData: INewProductData = req.body;

  const product = await productService.addProduct(userId, productData);

  res.status(201).send(product);
}

export const productController = {
  newProduct,
};
