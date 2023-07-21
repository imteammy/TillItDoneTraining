import express, { Express } from "express";
import product from "./routes/products";
import cors from "cors";
import users from "./routes/users";
import example from "./routes/example";
const app: Express = express();
const PORT = 4000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/products", product);
app.use("/api/users", users);
app.use("/api/example", example);
app.use((req, res, next) => {
  res.status(404).send("Not Found");
});
app.listen(PORT, () => {
  console.log(
    "\n >>> [ Server ] is running on port http://localhost:" + PORT + "\n"
  );
});
