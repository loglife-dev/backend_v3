import dotenv from "dotenv"
import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import "./shared/infra/database";
import "./shared/container"
import swaggerUi from 'swagger-ui-express';
import swaggerFile from "./swagger.json";
import { router } from "./shared/infra/routes";

import cors from 'cors'
import path from "path";

import { AppError } from "./shared/errors/AppError";

const app = express();
app.use(cors())
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(router);


app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: `Internal Server Error - ${err.message}`,
  });
});

export { app }
