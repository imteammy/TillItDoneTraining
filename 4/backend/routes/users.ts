import express, { IRouter } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUserId,
  updateUser,
} from "../controllers/users";
const app: IRouter = express.Router();
app.get("/", getUser);
app.get("/:id", getUserId);
app.post("/id", getUserId);
app.post("/", createUser);
app.put("/", updateUser);
app.delete("/", deleteUser);
export default app;
