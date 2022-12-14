import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import "express-async-errors";

import router from "./routes/index";
import errorHandler from "./middlewares/errorHandler";

dotenv.config;

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);
app.use(errorHandler);

export default app;
