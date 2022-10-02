import { Product } from "@prisma/client";

export type IProductData = Omit<Product, "id">;

export type INewProductData = Omit<Product, "id" | "userId">;
