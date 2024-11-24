import express, { Request, Response } from "express";
import bicycleRouter from "./module/bicycle/biCycle.router";
import orderRouter from "./module/order/order.router";

const app = express();

// middleware
app.use(express.json());

app.use("/api/products", bicycleRouter);
app.use("/api/orders", orderRouter);

app.get("/", (req: Request, res: Response) => {
  res.send({
    status: true,
    message: "server live",
  });
});

export default app;
