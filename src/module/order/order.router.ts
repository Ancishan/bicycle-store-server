import { Router } from "express";
import { orderController } from "./order.controller";

const orderRouter = Router();

// Route to place an order
orderRouter.post("/create", orderController.createOrder);

// Route to calculate total revenue from orders
orderRouter.get("/revenue", orderController.getRevenue);

export default orderRouter;
