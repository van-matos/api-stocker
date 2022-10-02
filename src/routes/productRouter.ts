import { Router } from "express";

import { validateSchema } from "../middlewares/validateSchema";
import { productSchema } from "../schemas/productSchema";
import { productController } from "../controllers/productController";
import { authMiddleware } from "../middlewares/authMiddleware";

const productRouter = Router();

productRouter.post(
  "/products",
  validateSchema(productSchema),
  authMiddleware.validateToken,
  productController.newProduct
);

productRouter.put(
  "/products/:productId",
  validateSchema(productSchema),
  authMiddleware.validateToken,
  productController.updateProduct
);

export default productRouter;
