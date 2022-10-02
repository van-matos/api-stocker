import { Request, Response } from "express";
import { productService } from "../services/productService";
import { INewProductData, IProductData } from "../types/productTypes";

async function newProduct(req: Request, res: Response) {
  const userId: number = res.locals.userId;
  const productData: INewProductData = req.body;

  const product = await productService.addProduct(userId, productData);

  res.status(201).send(product);
}

async function updateProduct(req: Request, res: Response) {
  const userId: number = res.locals.userId;
  const productId: number = Number(req.params.productId);
  const productData: Omit<IProductData, "userId"> = req.body;

  const product = await productService.updateProduct(
    userId,
    productId,
    productData
  );

  res.status(200).send(product);
}

export const productController = {
  newProduct,
};
