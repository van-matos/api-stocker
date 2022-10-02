import { authService } from "./authService";
import { productRepository } from "../repositories/productRepository";
import { IProductData } from "../types/productTypes";

async function addProduct(
  userId: number,
  productData: Omit<IProductData, "userId">
) {
  await authService.getUserById(userId);

  const product = await productRepository.createProduct({
    ...productData,
    userId,
  });

  return product;
}

async function updateProduct(
  userId: number,
  productId: number,
  productData: Omit<IProductData, "userId">
) {
  await authService.getUserById(userId);

  const dbProduct = await productRepository.findProductById(productId);

  if (!dbProduct) throw { status: 404, message: "Product not found." };

  const product = await productRepository.updateProduct(productId, productData);

  return product;
}

async function deleteProduct(userId: number, productId: number) {
  await authService.getUserById(userId);

  const dbProduct = await productRepository.findProductById(productId);

  if (!dbProduct) throw { status: 404, message: "Product not found." };

  if (dbProduct.userId !== userId)
    throw { status: 403, message: "Permission denied." };

  await productRepository.deleteProduct(productId);
}

export const productService = {
  addProduct,
  updateProduct,
  deleteProduct,
};
