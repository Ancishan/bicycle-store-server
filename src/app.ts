import express, { Request, Response } from "express";
import carRouter from "./module/car/car.router";
import orderRouter from "./module/order/order.router";

const app = express();

// middleware
app.use(express.json());

app.use("/api/products", carRouter);
app.use("/api/orders", orderRouter);

app.get("/", (req: Request, res: Response) => {
  res.send({
    status: true,
    message: "server live",
  });
});

export default app;
