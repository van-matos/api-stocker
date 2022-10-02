import { authService } from "./authService";
import { productRepository } from "../repositories/productRepository";
import { INewProductData } from "../types/productTypes";

async function addProduct(userId: number, productData: INewProductData) {
  await authService.getUserById(userId);

  const product = await productRepository.createProduct({
    ...productData,
    userId,
  });

  return product;
}

export const productService = {
  addProduct,
};
