import { prisma } from "../dbStrategy/database";
import { IProductData } from "../types/productTypes";

async function createProduct(productData: IProductData) {
  const product = await prisma.product.create({ data: productData });

  return product;
}

export const productRepository = {
  createProduct,
};
