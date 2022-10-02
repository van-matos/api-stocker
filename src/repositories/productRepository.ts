import { prisma } from "../dbStrategy/database";
import { IProductData } from "../types/productTypes";

async function createProduct(productData: IProductData) {
  const product = await prisma.product.create({ data: productData });

  return product;
}

async function findProductById(id: number) {
  const dbProduct = await prisma.product.findUnique({ where: { id } });

  return dbProduct;
}

export const productRepository = {
  createProduct,
};
