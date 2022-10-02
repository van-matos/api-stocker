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

export default productRouter;
