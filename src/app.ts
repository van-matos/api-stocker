import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import "express-async-errors";

dotenv.config;

const app = express();

app.use(express.json());
app.use(cors());

export default app;
