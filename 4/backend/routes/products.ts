import express, { IRouter } from "express";

import {
  CreateProduct,
  DeleteProduct,
  GetProducts,
  GetProductId,
  UpdateProduct,
} from "../controllers/products";

import auth from "../middleware/auth";

const app: IRouter = express.Router();

app.get("/", auth, GetProducts);
app.post("/", auth, CreateProduct);
app.get("/:id", auth, GetProductId);
app.delete("/", auth, DeleteProduct);
app.put("/", auth, UpdateProduct);

export default app;
