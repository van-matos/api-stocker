import { Router } from "express";

import authRouter from "./authRouter";
import productRouter from "./productRouter";

const router = Router();

router.use(authRouter);
router.use(productRouter);

export default router;
