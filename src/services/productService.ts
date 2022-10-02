import { authService } from "./authService";
import { productRepository } from "../repositories/productRepository";
import { INewProductData, IProductData } from "../types/productTypes";

async function addProduct(userId: number, productData: INewProductData) {
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

export const productService = {
  addProduct,
};
