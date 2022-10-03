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

async function findProductByUser(userId: number) {
  const dbProducts = await prisma.product.findMany({ where: { userId } });

  return dbProducts;
}

async function updateProduct(
  id: number,
  productData: Omit<IProductData, "userId">
) {
  const product = await prisma.product.update({
    where: { id },
    data: productData,
  });

  return product;
}

async function deleteProduct(id: number) {
  await prisma.product.delete({ where: { id } });
}

export const productRepository = {
  createProduct,
  findProductById,
  findProductByUser,
  updateProduct,
  deleteProduct,
};
