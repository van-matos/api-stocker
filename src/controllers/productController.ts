import { Request, Response } from "express";
import { productService } from "../services/productService";
import { IProductData } from "../types/productTypes";

async function newProduct(req: Request, res: Response) {
  const userId: number = res.locals.userId;
  const productData: Omit<IProductData, "userId"> = req.body;

  const product = await productService.addProduct(userId, productData);

  res.status(201).send(product);
}

async function findProductsByUser(req: Request, res: Response) {
  const userId: number = res.locals.userId;

  const products = await productService.findProductsByUser(userId);

  res.status(200).send(products);
}

async function findProductByCode(req: Request, res: Response) {
  const userId: number = res.locals.userId;
  const barcode: string = req.params.barcode;

  const product = await productService.findProductByCode(userId, barcode);

  res.status(200).send(product);
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

async function deleteProduct(req: Request, res: Response) {
  const userId: number = res.locals.userId;
  const productId: number = Number(req.params.productId);

  await productService.deleteProduct(userId, productId);

  res.sendStatus(200);
}

export const productController = {
  newProduct,
  findProductsByUser,
  findProductByCode,
  updateProduct,
  deleteProduct,
};
