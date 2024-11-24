import { Request, Response } from "express";
import { orderService } from "./order.service";

// Create Order
const createOrder = async (req: Request, res: Response) => {
  try {
    const { email, product, quantity, totalPrice } = req.body;

    // Check if the product exists and has enough stock
    const result = await orderService.createOrder({
      email,
      product,
      quantity,
      totalPrice,
    });

    res.json({
      status: true,
      message: "Order created successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "Something went wrong while creating the order.",
      error,
    });
  }
};

// Get Total Revenue
const getRevenue = async (req: Request, res: Response) => {
  try {
    const revenue = await orderService.calculateRevenue();
    res.json({
      status: true,
      message: "Revenue calculated successfully",
      data: { totalRevenue: revenue },
    });
  } catch (error) {
    res.json({
      status: false,
      message: "Error calculating revenue.",
      error,
    });
  }
};

export const orderController = {
  createOrder,
  getRevenue,
};
