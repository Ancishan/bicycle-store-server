import { Order } from "./order.model"; // Assume you have an Order model for orders
import { Product } from "../bicycle/bicycle.model"; // Product model for checking stock

interface IOrder {
  email: string;
  product: string; // Product ID
  quantity: number;
  totalPrice: number;
}

// Create Order Service
const createOrder = async (orderData: IOrder) => {
  // Check if the product exists and if there is enough stock
  const product = await Product.findById(orderData.product);
  if (!product) {
    throw new Error("Product not found");
  }

  if (product.inStock === false || product.quantity < orderData.quantity) {
    throw new Error("Insufficient stock for the product");
  }

  // Reduce stock quantity
  product.quantity -= orderData.quantity;

  // If stock goes to 0, set inStock to false
  if (product.quantity <= 0) {
    product.inStock = false;
  }

  await product.save();

  // Create the order
  const newOrder = await Order.create(orderData);
  return newOrder;
};

// Calculate Revenue from All Orders
const calculateRevenue = async () => {
  // Use aggregation to calculate total revenue
  const revenue = await Order.aggregate([
    {
      $lookup: {
        from: "products", // Assuming the 'Product' model is stored in the "products" collection
        localField: "product",
        foreignField: "_id",
        as: "productDetails",
      },
    },
    {
      $unwind: "$productDetails",
    },
    {
      $project: {
        totalPrice: 1,
        quantity: 1,
        price: { $multiply: ["$productDetails.price", "$quantity"] }, // Price * Quantity for total revenue
      },
    },
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: "$price" },
      },
    },
  ]);

  return revenue[0] ? revenue[0].totalRevenue : 0; // Return total revenue
};

export const orderService = {
  createOrder,
  calculateRevenue,
};
