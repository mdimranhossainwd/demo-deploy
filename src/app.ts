import express, { Request, Response } from "express";
import initDB from "./config/db";
import { userRoutes } from "./modules/users/user.route";
const app = express();

app.use(express.json());
initDB();
app.use("/api/v1/users", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
